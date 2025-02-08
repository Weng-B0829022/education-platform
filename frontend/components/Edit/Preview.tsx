import React from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const VideoPlayer = () => {
    return (
        <div className="flex-1 min-h-0 rounded-xl border border-gray-200 bg-white p-4">
        <div className="w-full h-full flex items-center justify-center">
            <div className="relative w-full max-w-[80%] mx-auto">
            {/* Video Container with 16:9 Aspect Ratio */}
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                {/* Placeholder Image */}
                <img 
                src="/static/bot2.png" 
                alt="Video preview" 
                className="w-full h-full object-cover"
                />
                
                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-600 rounded-full mb-4">
                    <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
                </div>
                
                {/* Control Buttons */}
                <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-4">
                    <button className="p-1 hover:bg-white/20 rounded-full transition">
                        <SkipBack size={20} />
                    </button>
                    <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition">
                        <Play size={24} fill="currentColor" />
                    </button>
                    <button className="p-1 hover:bg-white/20 rounded-full transition">
                        <SkipForward size={20} />
                    </button>
                    <span className="text-sm ml-2">1:23 / 3:45</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <Volume2 size={20} />
                        <div className="w-20 h-1 bg-gray-600 rounded-full">
                        <div className="w-2/3 h-full bg-white rounded-full"></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default VideoPlayer;