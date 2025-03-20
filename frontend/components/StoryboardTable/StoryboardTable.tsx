import React, { useEffect } from 'react';
import { Scene } from '../../types/storyboard';

interface StoryboardTableProps {
    headers: string[];
    storyboardData: Scene[];
    uploadedImages: File[];
    onRemoveImage: (index: number) => void;
    onUpdateImages: (newImages: File[]) => void;
}

export const StoryboardTable: React.FC<StoryboardTableProps> = ({ headers, storyboardData, uploadedImages, onRemoveImage, onUpdateImages }) => {
    // 只為實際存在的檔案創建預覽 URL
    const imageUrls = uploadedImages.map(file => file ? URL.createObjectURL(file) : null);

    // 在組件卸載時清理 URLs
    useEffect(() => {
        return () => {
            imageUrls.forEach(url => {
                if (url) {  // 只清理實際存在的 URL
                    URL.revokeObjectURL(url);
                }
            });
        };
    }, [imageUrls]);

    return (
        <div className="pr-2 pb-2">
            <table className="min-w-full border-collapse text-black">
                <tbody>
                    {headers.map((header) => (
                    <tr key={header}>
                        <th className="text-center border px-2 py-2">{header}</th>
                        {storyboardData.map((scene, sceneIndex) => (
                        <td key={sceneIndex} className="text-center border px-2 py-2">
                            {header === '畫面' ? (
                                <div className="relative">
                                    {imageUrls[sceneIndex] ? (
                                        <>
                                            <button 
                                                onClick={() => onRemoveImage(sceneIndex)}
                                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                                            >
                                                ×
                                            </button>
                                            <img 
                                                src={imageUrls[sceneIndex]} 
                                                alt={scene.畫面描述} 
                                                className="w-44 h-auto mx-auto" 
                                            />
                                        </>
                                    ) : (
                                        <div className="w-22 h-16 mx-auto border-2 border-dashed border-gray-300 flex items-center justify-center">
                                            <label
                                                htmlFor={`image-upload-${sceneIndex}`}
                                                className="cursor-pointer text-blue-500 hover:text-blue-600"
                                            >
                                                重新上傳
                                                <input
                                                    type="file"
                                                    id={`image-upload-${sceneIndex}`}
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            const newImages = [...uploadedImages];
                                                            newImages[sceneIndex] = file;
                                                            onUpdateImages(newImages);
                                                        }
                                                    }}
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>
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
}; 