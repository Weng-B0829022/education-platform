import { GeneratedContent, StoryboardJson, StoryboardJsonScene, Scene } from '../types/storyboard';

export const StoryboardProcessor = {
    convertStoryboardToJson(storyboardText: string): StoryboardJsonScene[] {
        const cleanedText = "\n\n" + storyboardText;
        const scenes = cleanedText.split("\n\n").filter(Boolean);
        
        return scenes.map((scene, index) => {
            const lines = scene.trim().split('\n');
            const timeCode = lines[1];
            let visualElement = '';
            let voiceoverText = '';
            
            for (let i = 1; i < lines.length; i++) {
                if (lines[i].startsWith('Image:') || lines[i].startsWith('Video:')) {
                    visualElement = lines[i];
                } else if (lines[i].startsWith('Voiceover Text:')) {
                    voiceoverText = lines[i].split('Voiceover Text:')[1].trim();
                }
            }
            
            return {
                sceneNumber: index + 1,
                timeCode: timeCode,
                visualElements: visualElement ? [{
                    type: visualElement.toLowerCase().startsWith('image:') ? 'image' : 'video',
                    content: visualElement.split(':')[1].trim()
                }] : [],
                voiceoverText: voiceoverText.replace(/^"|"$/g, '')
            };
        });
    },

    convertArticlesToJson(data: GeneratedContent): StoryboardJson[] {
        const articles = data.articles;
        return articles.map(article => ({
            title: article.title,
            content: article.content,
            storyboard: this.convertStoryboardToJson(article.storyboard)
        }));
    },

    convertToStoryboardData(input: StoryboardJson): { title: string; content: string; storyboard: Scene[] } {
        if (!input || typeof input !== 'object') {
            console.error('Invalid input: expected an object');
            return { title: '', content: '', storyboard: [] };
        }

        const defaultScene: StoryboardJsonScene = {
            sceneNumber: 0,
            timeCode: '0',
            visualElements: [{ type: 'image', content: 'No description available' }],
            voiceoverText: ''
        };

        return {
            title: input.title || 'Untitled',
            content: input.content || '',
            storyboard: Array.isArray(input.storyboard) ? input.storyboard.map((scene, index) => {
                const safeScene = { ...defaultScene, ...scene };
                return {
                    段落: (index).toString().padStart(2, '0'),
                    秒數: safeScene.timeCode,
                    畫面: `https://picsum.photos/300/200?random=${index + 1}`,
                    畫面描述: safeScene.visualElements[0]?.content || 'No description available',
                    旁白: (safeScene.voiceoverText || '').replace(/^「|」$/g, ''),
                    字數: `${(safeScene.voiceoverText || '').replace(/^「|」$/g, '').length}字`
                };
            }) : []
        };
    }
}; 