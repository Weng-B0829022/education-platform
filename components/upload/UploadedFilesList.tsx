interface UploadedFile {
    id: string;
    name: string;
    file: File;
}

interface UploadedFilesListProps {
    files: UploadedFile[];
    onRemove: (id: string) => void;
}

export function UploadedFilesList({ files, onRemove }: UploadedFilesListProps): JSX.Element {
    const formatFileName = (fileName: string) => {
        const ext = fileName.split('.').pop();
        const baseName = fileName.split('.').slice(0, -1).join('.');
        return baseName.length > 20
            ? `${baseName.substring(0, 20)}...${ext ? `.${ext}` : ''}`
            : fileName;
    };

    if (files.length === 0) return <div>No files uploaded</div>;

    return (
        <div className="mt-4 space-y-2">
            <h3 className="font-medium">Uploaded Files:</h3>
            <div className="grid gap-2">
                {files.map(file => (
                    <div 
                        key={file.id} 
                        className="w-full flex items-center justify-between p-2 border rounded-lg bg-gray-100"
                    >
                        <span className="flex items-center gap-2 max-w-[80%] overflow-hidden">
                            <svg className="w-5 h-5 flex-shrink-0 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span className="truncate">
                                {formatFileName(file.name)}
                            </span>
                        </span>
                        <button onClick={() => onRemove(file.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
} 