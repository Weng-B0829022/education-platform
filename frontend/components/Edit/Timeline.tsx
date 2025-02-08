"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Video, Music, Mic } from 'lucide-react';

const TimelineTrack = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => {
    return (
        <div className="flex items-center gap-3 mb-4">
        {/* Track Label */}
        <div className="w-20 flex items-center gap-2 text-gray-600">
            <Icon size={16} />
            <span className="text-sm">{label}</span>
        </div>

        {/* Timeline Track */}
        <div className="flex-1">
            <div className="h-10 bg-white rounded-lg relative overflow-hidden">
            {/* Preview Thumbnails */}
            <div className="flex h-full">
                <div className="w-1/4 h-full">
                <img src="/static/wave.png" alt="Preview 1" className="w-full h-full object-cover opacity-50" draggable="false" />
                </div>
                <div className="w-1/4 h-full">
                <img src="/static/wave.png" alt="Preview 2" className="w-full h-full object-cover opacity-50" draggable="false" />
                </div>
                <div className="w-1/4 h-full">
                <img src="/static/wave.png" alt="Preview 3" className="w-full h-full object-cover opacity-50" draggable="false" />
                </div>
                <div className="w-1/4 h-full">
                <img src="/static/wave.png" alt="Preview 4" className="w-full h-full object-cover opacity-50" draggable="false" />
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

const MultiTrackTimeline = ({ duration = 90 }: { duration?: number }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState(0);
    const [currentTime, setCurrentTime] = useState("00:00");
    const containerRef = useRef(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        updatePosition(e);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isDragging) {
            updatePosition(e);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const updatePosition = (e: React.MouseEvent<HTMLDivElement>) => {
        if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - 84; // Adjust for label width (w-20) and gap
        const width = rect.width - 84; // Adjust for label width
        const newPosition = Math.max(0, Math.min(x, width));
        setPosition(newPosition);
        
        const seconds = Math.floor((newPosition / width) * duration);
        const timeString = `00:${seconds.toString().padStart(2, '0')}`;
        setCurrentTime(timeString);
        }
    };

    useEffect(() => {
        if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        }
        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div className="border border-gray-200 bg-[#F4F8FC] rounded-xl  p-4">
        {/* Time Indicators */}
        <div className="flex justify-between mb-2 pl-24">
            <span className="text-sm text-gray-600">00:00</span>
            <span className="text-sm text-gray-600">00:{duration.toString().padStart(2, '0')}</span>
        </div>

        {/* Timeline Container */}
        <div 
            ref={containerRef}
            className="relative"
            onMouseDown={handleMouseDown}
        >
            {/* Timeline Tracks */}
            <TimelineTrack icon={Video} label="Video" />
            <TimelineTrack icon={Music} label="Audio" />
            <TimelineTrack icon={Mic} label="Voice" />

            {/* Shared Timeline Cursor */}
            <div 
            className="absolute top-0 bottom-0 w-0.5 bg-blue-500 cursor-ew-resize"
            style={{ 
                left: `${position + 84}px`, // Add offset for label width
                transform: 'translateX(-50%)',
                pointerEvents: 'none'
            }}
            >
            {/* Cursor Handle */}
            <div className="absolute -top-2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full" />
            {/* Current Time Indicator */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                {currentTime}
            </div>
            </div>
        </div>
        </div>
    );
};

export default MultiTrackTimeline;