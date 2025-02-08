import { Menu, Home, FileText, LayoutDashboard } from 'lucide-react';

export default function Navbar({ className = "" }) {
    return (
        <nav className={`${className} px-4 flex items-center justify-between bg-white`}>
            {/* Left Section */}
            <div className="flex items-center gap-8">
                <Menu className="w-5 h-5 text-gray-500 cursor-pointer" />
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
                        <Home className="w-4 h-4" />
                        <span className="text-sm">Home</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
                        <FileText className="w-4 h-4" />
                        <span className="text-sm">File</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 cursor-pointer">
                        <LayoutDashboard className="w-4 h-4" />
                        <span className="text-sm">Workspace</span>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-6">

                {/* Action Buttons */}
                <button className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 4L15 7M12 4L9 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm">Print Assets</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 text-gray-600 hover:bg-gray-100 rounded-md">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.21721 10.9071C6.83295 10.2169 6.64082 9.81183 6.64082 9.37132C6.64082 8.93081 6.83295 8.52573 7.21721 7.83558L9.57668 3.59869C9.96094 2.90854 10.1531 2.56346 10.4477 2.41964C10.7424 2.27582 11.0807 2.27582 11.7574 2.27582H16.2426C16.9193 2.27582 17.2576 2.27582 17.5523 2.41964C17.8469 2.56346 18.0391 2.90854 18.4233 3.59869L20.7828 7.83558C21.1671 8.52573 21.3592 8.93081 21.3592 9.37132C21.3592 9.81183 21.1671 10.2169 20.7828 10.9071L18.4233 15.144C18.0391 15.8341 17.8469 16.1792 17.5523 16.323C17.2576 16.4668 16.9193 16.4668 16.2426 16.4668H11.7574C11.0807 16.4668 10.7424 16.4668 10.4477 16.323C10.1531 16.1792 9.96094 15.8341 9.57668 15.144L7.21721 10.9071Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21.1415 15.8621C21.7461 16.3136 22.0484 16.5394 22.1808 16.8711C22.3132 17.2028 22.2404 17.5501 22.0947 18.2447L21.6675 20.126C21.5219 20.8206 21.449 21.1679 21.2066 21.3584C20.9642 21.5489 20.6557 21.5489 20.0388 21.5489H3.96122C3.34429 21.5489 3.03583 21.5489 2.79342 21.3584C2.55101 21.1679 2.47815 20.8206 2.33244 20.126L1.90525 18.2447C1.75954 17.5501 1.68668 17.2028 1.81906 16.8711C1.95144 16.5394 2.25376 16.3136 2.8584 15.8621L14 7.37311" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm">Share</span>
                </button>
            </div>
        </nav>
    );
}