import { Brain, Zap, FileText, Sparkles } from 'lucide-react';

export default function Sidebar({ className = "" }) {
    return (
        <div className={`${className} flex flex-col items-center py-6 gap-8`}>
            {/* Learning Tools Section */}
            <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                        <Brain className="w-5 h-5" />
                    </div>
                    <span className="text-xs">Learning</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                        <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-xs">Express</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-xs">Files</span>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-auto">
                <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                        <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="text-xs">Pro</span>
                </div>
            </div>
        </div>
    );
}