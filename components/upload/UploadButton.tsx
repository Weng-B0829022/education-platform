'use client'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

export interface UploadButtonProps {
    icon: LucideIcon
    label: string
    id: string
    className?: string
    accept?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export function UploadButton({ 
    icon: Icon, 
    label, 
    id, 
    className,
    accept,
    onChange 
}: UploadButtonProps) {
    return (
        <div className="relative">
        <input
            type="file"
            className="hidden"
            id={id}
            accept={accept}
            onChange={onChange}
        />
        <label
            htmlFor={id}
            className={cn(
            "flex flex-col items-center justify-center p-4 border-2 border-dashed",
            "rounded-lg cursor-pointer hover:bg-gray-50 transition-colors",
            className
            )}
        >
            <Icon className="w-6 h-6 text-blue-500 mb-2" />
            <span className="text-sm text-blue-500 ">{label}</span>
        </label>
        </div>
    )
}