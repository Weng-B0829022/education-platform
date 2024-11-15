import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const getInitialState = () => {
    if (typeof window !== 'undefined') {
        try {
            const savedContent = localStorage.getItem('createdContent');
            return {
                content: savedContent || '',
            };
        } catch (error) {
            console.error('Error getting initial state:', error);
        }
    }
    return {
        content: '',
    };
};

interface ContentState {
    content: string;
    setContent: (content: string) => void;
}

export const useContentStore = create<ContentState>()(
    devtools(
        (set) => ({
            ...getInitialState(),
            setContent: (content) => {
                console.log(typeof window !== 'undefined');
                if (typeof window !== 'undefined') {
                    localStorage.setItem('createdContent', content);
                }
                set({ content });
            },
        })
    )
);