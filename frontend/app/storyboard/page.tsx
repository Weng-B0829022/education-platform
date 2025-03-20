'use client'
import React, { useState, useEffect } from 'react';
import { Article, GeneratedContent, GenerationResult, Scene } from '@/types/storyboard';
import { calculateDuration } from '@/lib/calculateDuration';
import { Loader2 } from 'lucide-react';
import { StoryboardTable } from '@/components/StoryboardTable/StoryboardTable';
import { useContentStore } from '@/stores/contentStore';
import { StoryboardProcessor } from '@/lib/StoryboardProcessor';
import { StoryboardHeader } from '@/components/StoryboardHeader/StoryboardHeader';
import { ENDPOINTS } from '@/services/endpoint';
const Generate = () => {
    const { content } = useContentStore();
    const [storyboardData, setStoryboardData] = useState<Scene[]>([]);
    const [storyboardTitle, setStoryboardTitle] = useState('');
    const [selectedDataIndex, setSelectedDataIndex] = useState(0);
    const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);
    
    useEffect(() => {
        if (content) {
            setGeneratedContent(JSON.parse(content));
        }
    }, [content, selectedDataIndex]);
    
    useEffect(() => {
        if (generatedContent) {
            const jsonResult = StoryboardProcessor.convertArticlesToJson(generatedContent);
            setStoryboardTitle(generatedContent.articles[selectedDataIndex].title);
            setStoryboardData(StoryboardProcessor.convertToStoryboardData(jsonResult[selectedDataIndex]).storyboard.slice(0));
        }
    }, [generatedContent, selectedDataIndex]); // 添加 selectedDataIndex 作為依賴

    return (
        <div className="p-6">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mb-0 ml-4">Express Mode 生成結果</h1>
                </div>
                <p className="mt-2 text-m">播放日 2024-12-17</p>
            </div>
            <div className="mb-4 mt-4">
                <label htmlFor="storyboardSelect" className="mr-2">選擇分鏡稿：</label>
                <select 
                    id="storyboardSelect" 
                    value={selectedDataIndex} 
                    onChange={(e) => setSelectedDataIndex(parseInt(e.target.value))}
                    className="border rounded p-1"
                >
                    {generatedContent && generatedContent.articles.map((article: Article, index: number) => (
                        <option key={index} value={index}>
                            {article.title}
                        </option>
                    ))}
                </select>
            </div>
            {/* <TimeLine createdContent={generatedContent}/> */}
            <Storyboard 
                storyboardData={storyboardData}
                storyboardTitle={storyboardTitle}
                selectedIndex={selectedDataIndex}
            />
        </div>
    );
};


const Storyboard = ({ storyboardData, storyboardTitle }: { storyboardData: Scene[], storyboardTitle: string, selectedIndex: number } ) => {
    const [isStoryboardOpen, setIsStoryboardOpen] = useState(false);
    const [generatingVideo, setGeneratingVideo] = useState(false);
    const [generationResult, setGenerationResult] = useState<GenerationResult | null>(null);
    const [generationTime, setGenerationTime] = useState(0);
    const [selectedAvatar, setSelectedAvatar] = useState('woman1-full');
    const [uploadingVideo, setUploadingVideo] = useState(false);
    const [uploadedImages, setUploadedImages] = useState<File[]>([]);
    
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (generatingVideo) {
            timer = setInterval(() => {
                setGenerationTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            setGenerationTime(0);
        }

        return () => {
            if (timer) clearInterval(timer);
        };
    }, [generatingVideo]);

    const handleGenerateVideo = async () => {
        setGeneratingVideo(true);
        setGenerationResult(null);
        setGenerationTime(0);

        try {
            // 創建 FormData 對象來傳送檔案和數據
            const formData = new FormData();
            
            const dataToSend = {
                title: storyboardTitle,
                avatar: selectedAvatar.split('-')[0],
                avatarType: selectedAvatar.split('-')[1],
                storyboard: storyboardData.map((scene) => {
                    return {
                        paragraph: scene.段落,
                        duration: scene.秒數,
                        calculatedDuration: calculateDuration(scene.秒數),
                        imageDescription: scene.畫面描述,
                        voiceover: scene.旁白,
                        avatarCount: parseInt(scene.字數.replace(/[^0-9]/g, ''))
                        // 移除 imageUrl
                    };
                })
            };

            // 將主要數據添加到 FormData
            formData.append('story_object', JSON.stringify(dataToSend));

            // 直接添加圖片檔案到 FormData
            uploadedImages.forEach((file, index) => {
                formData.append(`image_${index}`, file);
            });

            const response = await fetch(`${ENDPOINTS.gen_video}`, {
                method: 'POST',
                body: formData
            });
            
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Failed to generate video');
            }

            console.log('Video generation response:', result);
            setGenerationResult(result);
        } catch (error) {
            console.error('Error generating video:', error);
            setGenerationResult({ 
                message: 'Failed to generate video',
                image_urls: [],
                random_id: ''
            });
        } finally {
            setGeneratingVideo(false);
        }
    };
    const handleUploadVideo = async () => {
        try {
            setUploadingVideo(true);
            const response = await fetch(`${ENDPOINTS.upload_video}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ random_id: generationResult?.random_id })
            });
            
            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.message || 'Failed to generate video');
            }
            // Add redirect after successful upload
            window.location.href = `/edit/${generationResult?.random_id}`;
        } catch (error) {
            console.error('Error uploading video:', error);
        } finally {
            setUploadingVideo(false);
        }
    };
    const renderGenerationResult = () => {
        if (!generationResult) return null;

        return (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
                <h2 className="text-xl font-bold mb-2">生成結果：</h2>
                <div>{generationResult.message
                ?   <div className="mt-4">
                        <video 
                            controls 
                            className="w-full max-w-2xl mt-2"
                            src={`${ENDPOINTS.get_generated_video}?id=${generationResult.random_id}`} // 使用 state 中的 randomId
                        >
                            Your browser does not support the video tag.
                        </video>
                        <button 
                            onClick={handleUploadVideo} 
                            className='mb-2 mt-2 w-full p-2 border border-gray-300 rounded-md bg-blue-500 shadow-sm  focus:outline-none text-white disabled:bg-blue-400'
                            disabled={uploadingVideo}
                        >{uploadingVideo ? 
                            <div className="flex items-center justify-center">
                                <Loader2 className="h-4 w-4 animate-spin" />
                                <span>影片上傳中</span>
                            </div>
                            : '上傳影片至資料庫'}
                        </button>
                    </div> 
                : <p>發生未知的錯誤 請重新生成</p>
                }</div>
                
            </div>
        );
    };

    const headers = ['段落', '秒數', '畫面', '畫面描述', '旁白', '字數'];

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setUploadedImages(prev => [...prev, ...Array.from(files)]);
        }
    };

    const handleRemoveImage = (index: number) => {
        const newImages = [...uploadedImages];
        newImages[index] = undefined as any;  // 將該位置設為 undefined 而不是移除
        setUploadedImages(newImages);
    };

    const handleUpdateImages = (newImages: File[]) => {
        setUploadedImages(newImages);
    };

    return (
        <div>
            
            <div className={`overflow-x-auto p-3 sm:p-4 group mt-4 ${
                    isStoryboardOpen
                    ? '' 
                    : 'border-gray-100 text-textLight hover:shadow-sm hover:border-neutral-100 hover:bg-blue-50 hover:text-blue-500'
                } font-bold border-2 rounded-md `}
            >
                <div onClick={() => setIsStoryboardOpen(prevState => !prevState)} className='cursor-pointer'>
                    <h1 className="text-3xl font-bold ml-2 mt-2">分鏡稿</h1>
                    <p className="mt-2 text-m ml-2 mb-2">為單則影片之分鏡稿，依選擇模式可進行不同程度的調整</p>
                </div>
                <div className='flex flex-row gap-4 w-full'>
                    <div className='w-48 flex-shrink-0'>
                        {isStoryboardOpen && 
                            <>
                                <StoryboardHeader storyboardTitle={storyboardTitle} />
                                <p className='mt-2 text-m ml-2 mb-2'>選擇主播</p>
                                <select onChange={(e) => setSelectedAvatar(e.target.value)} 
                                    className='w-full p-2 border border-gray-300 rounded-md bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none text-gray-700'>
                                        <option value="woman1-full">woman1-full</option>
                                        <option value="woman1-half">woman1-half</option>
                                        <option value="man1-full">man1-full</option>
                                        <option value="man1-half">man1-half</option>
                                </select>
                                <button 
                                    onClick={handleGenerateVideo} 
                                    className='mb-2 mt-2 w-full p-2 border border-gray-300 rounded-md bg-blue-500 shadow-sm focus:outline-none text-white disabled:bg-blue-400'
                                    disabled={generatingVideo || uploadedImages.length < storyboardData.length}
                                >
                                    {generatingVideo ? 
                                        <div className="flex items-center justify-center">
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            <span>影片生成中 已過{generationTime}秒</span>
                                        </div>
                                        : '生成影片'}
                                </button>
                                
                                <div className="mt-4">
                                    <p className="text-sm text-gray-600 mb-2">
                                        需上傳 {storyboardData.length} 張圖片 (已上傳: {uploadedImages.length})
                                    </p>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        id="image-upload"
                                    />
                                    <label
                                        htmlFor="image-upload"
                                        className="w-full p-2 border border-gray-300 rounded-md bg-white text-center cursor-pointer block hover:bg-gray-50"
                                    >
                                        上傳圖片
                                    </label>
                                
                                </div>
                            </>
                        }
                    </div>
                    <div className='flex-1'>
                        {isStoryboardOpen && 
                            <StoryboardTable 
                                headers={headers} 
                                storyboardData={storyboardData} 
                                uploadedImages={uploadedImages}
                                onRemoveImage={handleRemoveImage}
                                onUpdateImages={handleUpdateImages}
                            />
                        }
                    </div>
                </div>
            </div>
            {renderGenerationResult()}
        </div>
    );
};

export default Generate;
