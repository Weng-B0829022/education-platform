"use client"

import { useState } from "react"
import { ChevronDown, Upload } from "lucide-react"

export default function ToolsPanel() {
    const [isExpanded, setIsExpanded] = useState(true)
    const [isDragging, setIsDragging] = useState(false)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        // Handle file drop here
    }

    return (
        <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-gray-800">Tools</h2>
                <span className="px-2 py-0.5 text-xs font-medium bg-blue-50 text-blue-600 rounded-full">Audio</span>
            </div>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
            >
                <div className={`transform transition-transform duration-200 ${isExpanded ? "rotate-180" : "rotate-0"}`}>
                <ChevronDown size={20} />
                </div>
            </button>
            </div>

            <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            >
            <div className="bg-gray-50 rounded-lg p-6">
                <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                    border-2 border-dashed rounded-lg p-8 
                    flex flex-col items-center justify-center
                    transition-all duration-200
                    ${
                    isDragging
                        ? "border-blue-500 bg-blue-50/50"
                        : "border-gray-300 hover:border-blue-400 hover:bg-gray-100/50"
                    }
                `}
                >
                <div
                    className={`
                    p-3 rounded-full 
                    transition-colors duration-200
                    ${isDragging ? "bg-blue-100" : "bg-blue-50"}
                `}
                >
                    <Upload
                    className={`
                        transition-colors duration-200
                        ${isDragging ? "text-blue-600" : "text-blue-500"}
                    `}
                    size={24}
                    />
                </div>
                <div className="text-center mt-4">
                    <p className="text-sm font-medium mb-1 text-gray-700">Upload Your Narration</p>
                    <p className="text-xs text-gray-500">Supported formats: MP3, WAV, M4A (Max size per file: 500KB)</p>
                </div>
                <input
                    type="file"
                    className="hidden"
                    accept=".mp3,.wav,.m4a"
                    onChange={(e) => {
                    // Handle file selection here
                    const file = e.target.files?.[0]
                    if (file) {
                        // Process the file
                    }
                    }}
                />
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

