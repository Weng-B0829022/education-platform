'use client'
import { Textarea } from '@/components/ui/textarea'

interface UploadFormProps {
    value?: string
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export function UploadForm({ value, onChange }: UploadFormProps): JSX.Element {
    return (
        <>
        <h2 className="text-xl font-semibold mb-4">Upload Content</h2>
        <Textarea 
            value={value}
            onChange={onChange}
            placeholder="Enter your story here..."
            className="min-h-32 mb-6"
        />
        </>
    )
}