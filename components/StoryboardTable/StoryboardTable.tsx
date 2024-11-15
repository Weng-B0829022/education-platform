import React from 'react';
import { Scene } from '../../types/storyboard';

interface StoryboardTableProps {
    headers: string[];
    storyboardData: Scene[];
}

export const StoryboardTable: React.FC<StoryboardTableProps> = ({ headers, storyboardData }) => (
    <div className="pr-2 pb-2">
        <table className="min-w-full border-collapse text-black">
            <tbody>
                {headers.map((header) => (
                <tr key={header}>
                    <th className="text-center border px-2 py-2">{header}</th>
                    {storyboardData.map((scene, sceneIndex) => (
                    <td key={sceneIndex} className="text-center border px-2 py-2">
                        {header === '畫面' ? (
                            <img src={scene.畫面} alt={scene.畫面描述} className="w-44 h-auto mx-auto" />
                        ) : (
                            scene[header as keyof Scene]
                        )}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>
    </div>
); 