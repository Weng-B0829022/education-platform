import React from 'react';

interface StoryboardHeaderProps {
    storyboardTitle: string;
}

export const StoryboardHeader: React.FC<StoryboardHeaderProps> = ({ storyboardTitle }) => (
    <div className='w-full h-1/3 border border-gray-200 rounded'>
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold p-4 w-30">主標題</h1>
            {storyboardTitle && 
            <p className="text-lg p-2 flex-1">
                {storyboardTitle}
            </p>}
        </div>
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold p-4 w-30">副標題</h1>
            <p className="text-lg p-2 flex-1">這是副標</p>
        </div>
    </div>
); 