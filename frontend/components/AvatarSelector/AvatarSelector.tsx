import React from 'react';

interface AvatarSelectorProps {
    selectedAvatar: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const AvatarSelector: React.FC<AvatarSelectorProps> = ({ selectedAvatar, onChange }) => (
    <div>
        <h1 className="text-lg font-bold mb-2">主播</h1>
        <select 
            value={selectedAvatar}
            onChange={onChange}
            className="border rounded p-1 mb-2"
        >
            <option value="man1-half">林知曦(男性主播 1)</option>
            <option value="man2-half">李澄風(男性主播 2)</option>
            <option value="woman1-full">陳予恩(女性主播 1)</option>
            <option value="woman2-full">張安晴(女性主播 2)</option>
        </select>
        <img className='rounded' src="https://picsum.photos/300/200?random=7" alt="主播"/>
    </div>
); 