'use client'

import React from 'react'
import Header from '@/components/Edit/Header'
import LeftPanel from '@/components/Edit/LeftPanel'
import Timeline from '@/components/Edit/Timeline'
import UpperPanel from '@/components/Edit/UpperPanel'
import LowerPanel from '@/components/Edit/LowerPanel'
import { ENDPOINTS } from '@/services/endpoint'

interface VideoPlayerProps {
    videoId: string;
}

function VideoPlayer({ videoId }: VideoPlayerProps) {
    return (
        <video 
            className="w-full h-full object-contain"
            controls
            src={`${ENDPOINTS.get_generated_video}?id=${videoId}`}
        />
    );
}

function EditPage({ params }: { params: { id: string } }): JSX.Element {
    return (
        <div className="flex flex-col h-full w-full">
            <Header activeTab={0} />
            <main className="flex flex-1 w-full gap-4 p-4">
                <LeftPanel />
                <div className="flex flex-col flex-1 gap-4">
                    <div className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
                        <VideoPlayer videoId={params.id} />
                    </div>
                    <Timeline />
                </div>
                <div className="w-[440px] flex flex-col gap-4">
                    <UpperPanel />
                    <LowerPanel />
                </div>
            </main>
        </div>
    )
}

export default EditPage;