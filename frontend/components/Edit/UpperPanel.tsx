"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const WaveformBar = ({ height, index }: { height: number; index: number }) => (
    <div
        className="w-0.5 bg-blue-400/80 mx-[1px] rounded-full animate-in fade-in duration-300 ease-out"
        style={{
        height: `${height}px`,
        animationDelay: `${index * 20}ms`,
        }}
    />
)

const Waveform = () => {
  // Generate smoother, more natural-looking waveform heights
    const generateWaveformData = () => {
        const length = 40
        const heights = []
        let prevHeight = 15

        for (let i = 0; i < length; i++) {
        const maxChange = 8
        const change = Math.random() * maxChange * 2 - maxChange
        const newHeight = Math.max(4, Math.min(24, prevHeight + change))
        heights.push(newHeight)
        prevHeight = newHeight
        }
        return heights
    }

    return (
        <div className="flex items-center h-8 justify-center">
        {generateWaveformData().map((height, index) => (
            <WaveformBar key={index} height={height} index={index} />
        ))}
        </div>
    )
}

export default function AudioSuggestions() {
    const [isExpanded, setIsExpanded] = useState(true)

    return (
        <div className="w-full max-w-md mx-auto">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-gray-800">AI Suggestions</h2>
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
            className={`space-y-3 overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            >
            <div className="bg-gray-50 rounded-lg p-3 transition-colors duration-200 cursor-pointer hover:bg-gray-100 group">
                <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-600">Professional Voice Over</p>
                <span className="text-xs text-blue-500 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                    Preview
                </span>
                </div>
                <Waveform />
            </div>

            <div className="bg-gray-50 rounded-lg p-3 transition-colors duration-200 cursor-pointer hover:bg-gray-100 group">
                <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-gray-600">Friendly Voice Over</p>
                <span className="text-xs text-blue-500 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
                    Preview
                </span>
                </div>
                <Waveform />
            </div>
            </div>
        </div>
        </div>
    )
}

