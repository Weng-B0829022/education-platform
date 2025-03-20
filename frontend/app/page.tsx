"use client";

import { create } from 'zustand';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

// Zustand store
interface AppState {
	// 之後可以加入需要的狀態
}

interface CreationMode {
	title: string;
	description: string;
	IconComponent: React.ComponentType<{ className?: string }>;
}

const CREATION_MODES: CreationMode[] = [
	{
		IconComponent: ({ className }) => (
			<svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M13 10V3L4 14H11V21L20 10H13Z" 
					stroke="currentColor" 
					strokeWidth="2" 
					strokeLinecap="round" 
					strokeLinejoin="round"
				/>
			</svg>
		),
		title: "Express Mode",
		description: "Dive into video creation with minimal effort. Perfect for quick turnarounds and those seeking simplicity.",
	},
	{
		IconComponent: ({ className }) => (
			<svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" 
					stroke="currentColor" 
					strokeWidth="2" 
					strokeLinecap="round" 
					strokeLinejoin="round"
				/>
				<path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" 
					stroke="currentColor" 
					strokeWidth="2" 
					strokeLinecap="round" 
					strokeLinejoin="round"
				/>
			</svg>
		),
		title: "Professional Mode",
		description: "Craft videos with high precision and tailored features. Ideal for comprehensive projects.",
	},
	{
		IconComponent: ({ className }) => (
			<svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M11 4H4C3.44772 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H18C18.5523 20 19 19.5523 19 19V12" 
					stroke="currentColor" 
					strokeWidth="2" 
					strokeLinecap="round" 
					strokeLinejoin="round"
				/>
				<path d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" 
					stroke="currentColor" 
					strokeWidth="2" 
					strokeLinecap="round" 
					strokeLinejoin="round"
				/>
			</svg>
		),
		title: "Editor Mode",
		description: "Best for detailed edits. Dive into full customization with advanced editing tools.",
	},
];

export default function Home() {
	const [showExpressPopup, setShowExpressPopup] = useState(false);
	const router = useRouter();

	return (
		<div className="flex flex-col h-full items-center p-8" style={{
			backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/static/interface-preview.png')`,
			backgroundPosition: 'bottom',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			transition: 'background-image 0.5s ease-in-out',
			scrollbarWidth: 'thin',
			scrollbarColor: '#CBD5E1 #F1F5F9',
		}}>
			

			{/* Header Section */}
			<div className="max-w-2xl mx-auto mb-16 text-center">
				<h1 className="text-[32px] font-semibold text-gray-800 mb-4">
					Choose Your Video Creation Path!
				</h1>
				<p className="text-base text-gray-500">
					Explore modes tailored to your creative needs. Effortless, professional, or detailed—your choice.
				</p>
			</div>

			{/* Mode Cards */}
			<div className="grid grid-cols-3 gap-8 w-full max-w-5xl mb-16">
				{CREATION_MODES.map((mode, index) => (
					<div 
						key={mode.title}
						onClick={() => {
							if (mode.title === "Express Mode") {
								setShowExpressPopup(true);
							}
						}}
						className={`
							relative group cursor-pointer
							p-8 rounded-3xl bg-white
							border border-gray-100 hover:border-blue-200
							transition-all duration-300 ease-in-out hover:shadow-md
						`}
					>
						{/* Icon */}
						<div className="flex items-center gap-3 mb-6">
							<div className={`
								p-2 rounded-xl
								bg-gray-50 text-gray-600
								group-hover:bg-blue-50 group-hover:text-blue-500
								transition-colors duration-300
							`}>
								<mode.IconComponent className="w-6 h-6" />
							</div>
							<h3 className="font-medium text-gray-800">{mode.title}</h3>
						</div>

						{/* Description */}
						<p className="text-sm leading-relaxed text-gray-500">
							{mode.description}
						</p>

						{/* Hover Effect Indicator */}
						<div className={`
							absolute bottom-0 left-1/2 -translate-x-1/2
							w-0 h-1 bg-blue-500 rounded-full
							group-hover:w-1/2
							transition-all duration-300 ease-in-out
						`} />
					</div>
				))}
				
			</div>

			{/* Express Mode Popup */}
			{showExpressPopup && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-3xl p-8 max-w-3xl w-full mx-4">
						{/* Close button */}
						<button 
							onClick={() => setShowExpressPopup(false)}
							className="absolute right-6 top-6 text-gray-500 hover:text-gray-700"
						>
							<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>

						{/* Modal Content */}
						<h2 className="text-[32px] font-semibold text-center mb-8">
							Where would you like to begin your creative process?
						</h2>

						<div className="grid grid-cols-2 gap-6">
							{/* Upload Content Option */}
							<div 
								onClick={() => router.push('/process')}
								className="cursor-pointer p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md"
							>
								<div className="flex justify-center mb-6">
									<div className="bg-blue-500 p-4 rounded-xl">
										<svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
											<path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											<path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
								</div>
								<h3 className="text-xl font-medium text-center mb-4">Upload Content</h3>
								<p className="text-gray-600 text-center">
									Craft videos with high precision and tailored features. Ideal for comprehensive projects.
								</p>
							</div>

							{/* Start with Keywords Option */}
							<div className="cursor-pointer p-8 rounded-3xl border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md">
								<div className="flex justify-center mb-6">
									<div className="bg-blue-500 p-4 rounded-xl">
										<svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none">
											<path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</div>
								</div>
								<h3 className="text-xl font-medium text-center mb-4">Start with Keywords</h3>
								<p className="text-gray-600 text-center">
									Enter keywords to inspire and guide the AI in generating your storyboard.
								</p>
							</div>
						</div>
					</div>
				</div>
				
			)}
			
		</div>
	);
}