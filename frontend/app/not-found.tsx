import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-xl text-gray-600 mb-6">找不到頁面</h2>
        <p className="text-gray-500 mb-8">
            抱歉，您要尋找的頁面不存在或已被移除。
        </p>
        <Link 
            href="/" 
            className="px-6 py-2 bg-[#0066FF] text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
            返回首頁
        </Link>
        </div>
    )
} 