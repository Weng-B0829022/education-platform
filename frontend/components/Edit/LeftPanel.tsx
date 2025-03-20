import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Copy, Trash2 } from "lucide-react";
import Image from "next/image";

interface Scene {
    id: number;
    title: string;
    thumbnail: string;
}

const scenes: Scene[] = [
    {
        id: 1,
        title: "Scene 1",
        thumbnail: "/static/bot.png",
    },
    {
        id: 2,
        title: "Scene 2",
        thumbnail: "/static/bot.png",
    },
    {
        id: 3,
        title: "Scene 3",
        thumbnail: "/static/bot.png",
    },
    {
        id: 4,
        title: "Scene 4",
        thumbnail: "/static/bot.png",
    }

];

export default function ScenesList() {
    return (
        <div className="w-[280px] bg-gray-50 flex flex-col">
            {/* Fixed Header */}
            <div className="flex-none px-4 pt-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-[15px] font-semibold text-gray-900">
                        Scenes
                    </h2>
                    <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-blue-500 hover:bg-blue-50 hover:text-blue-500"
                    >
                        <Plus className="h-5 w-5" />
                    </Button>
                </div>
                <div className="h-px bg-gray-200 my-4" />
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto max-h-[600px] p-4 ">
                <div className="space-y-3 pb-4 ">
                    {scenes.map((scene) => (
                        <div
                            key={scene.id}
                            className="group rounded-lg bg-white shadow-sm"
                        >
                            <div className="relative">
                                <div className="relative w-full aspect-video rounded-t-lg overflow-hidden">
                                    <Image
                                        src={scene.thumbnail}
                                        alt={scene.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-2 flex items-center justify-between">
                                <span className="text-sm text-gray-600">
                                    {scene.title}
                                </span>
                                <div className="flex gap-1">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-6 w-6 text-gray-400 hover:text-gray-600"
                                    >
                                        <Copy className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-6 w-6 text-gray-400 hover:text-red-500"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}