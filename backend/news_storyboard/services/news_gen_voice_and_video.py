import os
import logging
from django.conf import settings
from voice_api import VoiceAPI
import concurrent.futures
import re
import io
from avatar_sync_lip import FullBodyAvatarGenerator
import time 
from datetime import datetime
from django.conf import settings

API_BASE_IP = "8.17.147.160"
VOICE_API_PORT = "10046"
AVATAR_API_PORT = "10065"

# Configure logger
logger = logging.getLogger(__name__)

def log_and_print(message):
    timestamp = datetime.now().strftime("[%Y-%m-%d %H:%M:%S]")
    formatted_message = f"{timestamp} - {message}"
    try:
        logger.info(formatted_message)
    except Exception as e:
        print(f"日志記錄失敗: {str(e)}")

def generate_voice(text, filename, save_directory, avatar):
    filtered_text = ''
    try:


        api = VoiceAPI(api_base_ip=API_BASE_IP, api_port=VOICE_API_PORT)

        # Set voice model
        api.set_model(avatar)

        # Introduce a delay of 2 seconds
        time.sleep(2)

        # 過濾掉包含英文字母的單詞
        filtered_text = ''.join(c for c in text if not (c.isalpha() and ord(c) < 128))
        print("filtered_text", filtered_text)
        #print(filtered_text)
        # Generate voice
        #print(f"Attempting to generate voice for text: {filtered_text[:100]}...")
        audio = api.tts_generate(filtered_text)
        #print("Voice generation successful")

        # Save the audio to a BytesIO object
        audio_buffer = io.BytesIO()
        audio.export(audio_buffer, format="mp3")

        # Save the audio file to the specified directory
        if not os.path.exists(save_directory):
            os.makedirs(save_directory)

        file_path = os.path.join(save_directory, filename)
        with open(file_path, 'wb') as f:
            f.write(audio_buffer.getvalue())

        log_and_print(f"成功獲取音檔: {filename}")

        # Return only the filename instead of the full path
        return filename
    except Exception as e:
        error_message = f"Voice generation failed: {str(e)}"
        log_and_print(error_message)
        log_and_print(f"Failed request details - Text: {filtered_text}...,")
        return None

def generate_video(idx, manager, audio_file_name, avatar):
    try:
        # 從 manager 中取得 random_id
        random_id = manager.storyboard.get('random_id', '')
        audio_file_path = os.path.join(settings.MEDIA_ROOT, 'generated', random_id, audio_file_name)
        save_directory = os.path.dirname(audio_file_path)
        audio_filename = os.path.basename(audio_file_path)
        video_filename = os.path.splitext(audio_filename)[0] + '.mp4'
        save_path = os.path.join(save_directory, video_filename)

        # 檢查是否需要生成人偶視頻
        print("正在生成第", idx, "個人像影片")
        need_avatar = manager.storyboard['storyboard'][idx].get('needAvatar', False)
        if need_avatar:
            generator = FullBodyAvatarGenerator(
                api_base_ip=API_BASE_IP,
                api_port=AVATAR_API_PORT,
            )
            
            video_url = generator.generate_full_body_avatar(character=avatar,
                                                            audio_file_path=audio_file_path,
                                                            save_path=save_path)
            log_and_print(f"成功生成影片: {video_filename}")
        else:
            # 如果不需要人偶，只返回音頻文件名
            video_url = audio_filename

        # 返回只包含影片檔案名稱或音頻檔案名稱
        return video_filename if need_avatar else audio_filename

    except Exception as e:
        error_message = f"Video generation failed for {audio_file_name}: {str(e)}"
        log_and_print(error_message)
        return None

def run_news_gen_voice_and_video(manager, storyboard_object, random_id, avatar_coordinates):
    title = storyboard_object.get('title', '')
    avatar = storyboard_object.get('avatar', 'woman1')
    safetitle = re.sub(r'[^\w\-\. ]', '_', title)

    
    voice_texts = []
    for idx, item in enumerate(storyboard_object.get('storyboard', [])):
        text = item.get('voiceover', '')
        if text:
            voice_texts.append((idx, text))

    results = [None] * len(voice_texts)
    save_directory = os.path.join(settings.MEDIA_ROOT, 'generated', random_id)

    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        # 使用字典來存儲結果，避免列表索引問題
        results_dict = {}
        future_to_idx = {executor.submit(generate_voice, text, f'{safetitle}_{idx+1}.mp3', save_directory, avatar): idx
                        for idx, (_, text) in enumerate(voice_texts)}

        try:
            for future in concurrent.futures.as_completed(future_to_idx):
                idx = future_to_idx[future]
                try:
                    result = future.result()
                    time.sleep(0.5)
                    if result:
                        results_dict[idx] = result
                    else:
                        logger.error(f"Voice generation failed for index {idx}")
                        raise Exception(f"Voice generation failed for index {idx}")
                except Exception as e:
                    logger.error(f"Error processing voice generation for index {idx}: {str(e)}")
                    raise

        except Exception as e:
            logger.error(f"Error in voice generation process: {str(e)}")
            return None

        # 將字典轉換回列表
        results = [results_dict.get(i) for i in range(len(voice_texts))]

    # Remove any None values (failed generations)
    audio_file_paths = [r for r in results if r is not None]

    if not audio_file_paths:
        logger.error("No audio files were generated successfully.")
        return None

    # Generate video for each audio file and store both paths
    voice_and_video_paths = []
    
    for idx, audio_file_path in enumerate(audio_file_paths):
        video_path = generate_video(idx, manager, audio_file_path, avatar)
        if video_path:
            voice_and_video_paths.append({
                'audios_path': audio_file_path,  # Only file name is stored
                'avatar_path': video_path  # Only file name is stored
            })
            # 更新 storyboard
            manager.add_audio_path(voice_texts[idx][0], audio_file_path)
            
            # 檢查是否需要添加視頻
            need_avatar = manager.storyboard['storyboard'][voice_texts[idx][0]].get('needAvatar', False)
            if need_avatar:
                manager.add_video(voice_texts[idx][0], {
                    'avatar_path': video_path,
                    "top_left": avatar_coordinates["top_left"],
                    "top_right": avatar_coordinates["top_right"],
                    "bottom_right": avatar_coordinates["bottom_right"],
                    "bottom_left": avatar_coordinates["bottom_left"],
                    'z_index': 1,
                })

    # 等待所有更新完成
    manager.wait_for_queue()

    if voice_and_video_paths:
        return voice_and_video_paths
    else:
        logger.error("No videos were generated successfully.")
        return None

def execute_news_gen_voice(manager, storyboard_object, random_id, avatar='woman1'):
    try:
        return run_news_gen_voice_and_video(manager, storyboard_object, random_id, avatar)
    except Exception as e:
        log_and_print(f"An unexpected error occurred: {str(e)}")
        return None

if __name__ == '__main__':
    execute_news_gen_voice()
