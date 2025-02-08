'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { UploadHeader } from '@/components/upload/UploadHeader'
import { UploadForm } from '@/components/upload/UploadForm'
import { UploadActions } from '@/components/upload/UploadActions'
import { useContentStore } from '../../stores/contentStore';
import { ENDPOINTS } from '@/services/endpoint';
import { UploadedFilesList } from '@/components/upload/UploadedFilesList'

interface UploadedFile {
	id: string;
	name: string;
	file: File;
}

function RawUploadPage(): JSX.Element {
	const [fileContent, setFileContent] = useState<string>('')
	const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
	const { setContent } = useContentStore();
	const [loading, setLoading] = useState(false);

	const handlePdfUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files
		if (files) {
			const newFiles: UploadedFile[] = Array.from(files).map((file, index) => ({
				id: Date.now().toString() + index,
				name: file.name,
				file: file
			}))
			setUploadedFiles(prev => [...prev, ...newFiles])
		}
	}

	const handleSubmit = async () => {
		try {
			if (uploadedFiles.length === 0 && !fileContent.trim()) {
				alert('請先上傳檔案或輸入內容');
				return;
			}
			setLoading(true);
			const formData = new FormData();
			
			// 添加所有上傳的檔案
			uploadedFiles.forEach(file => {
				formData.append('files', file.file);  // 使用 'files' 作為 key
			});
			
			// 添加文字內容
			formData.append('text', fileContent);

			const response = await fetch(`${ENDPOINTS.gen_storyboard}`, {
				method: 'POST',
				body: formData
			});
			
			const data = await response.json();
			setContent(JSON.stringify(data.createded_content));
			setLoading(false);
			window.location.href = '/storyboard';
		} catch (error) {
			setLoading(false);
			console.error('Upload failed:', error);
		}
	};


	return (
		<div 
			className="h-full bg-cover bg-center bg-no-repeat p-6"
			style={{
				backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url('/static/background.png')`,
				transition: 'background-image 0.5s ease-in-out'
			} }
		>
			<div className="max-w-2xl mx-auto">
				<UploadHeader />
				<Card className="p-6 bg-white/90 backdrop-blur-sm">
					<UploadForm 
						value={fileContent}
						onChange={(e) => setFileContent(e.target.value)}
					/>
					<UploadedFilesList 
						files={uploadedFiles} 
						onRemove={(id) => (setUploadedFiles(prev => prev.filter(file => file.id !== id)))} 
					/>
					<UploadActions 
						onPdfUpload={handlePdfUpload}
						onSubmit={handleSubmit}
						isLoading={loading}
					/>
				</Card>
			</div>
		</div>
	)
}

export default RawUploadPage
