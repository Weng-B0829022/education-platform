'use client'

import { FileUp, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UploadButton } from './UploadButton'
import { useEffect, useState } from 'react'

interface UploadActionsProps {
    onFileUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onVoiceUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onPdfUpload?: (event: React.ChangeEvent<HTMLInputElement>) => void
    onSubmit?: () => void
    isLoading?: boolean
}

export function UploadActions({
    onPdfUpload,
    onSubmit,
    isLoading
}: UploadActionsProps): JSX.Element {
    const [progress, setProgress] = useState(0);

    const handleSubmit = () => {
        

        // 實際的提交操作
        onSubmit?.();
    };
    useEffect(() => {
        if (isLoading) {
            let count = 0;
            const interval = setInterval(() => {
            count = (count + 1) ;
                setProgress(count);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isLoading]);
    return (
        <>
        <div className="grid grid-cols-1 gap-4 mb-6">
            <UploadButton 
                icon={FileUp}
                label="PDF"
                id="pdfInput"
                accept=".pdf"
                onChange={onPdfUpload}
            />
        </div>
        <Button 
            className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-xl"
            onClick={handleSubmit}
            disabled={isLoading}
        >
            {isLoading ? (
                <div className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>正在生成分鏡稿 經過時長{progress}(s)</span>
                </div>
            ) : (
                '生成分鏡稿'
            )}
        </Button>
        </>
    )
}