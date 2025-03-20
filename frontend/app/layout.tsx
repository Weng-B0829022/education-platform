import type { Metadata } from "next";
import { QueryProvider } from '@/lib/providers/query-provider';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Sidebar/Sidebar';
import "./globals.css";

export const metadata: Metadata = {
  title: "PhoenEY Education Platform",
  description: "Powered By PhoenEY ",
};

export default function RootLayout({
    children,
    }: {
children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
            <QueryProvider>
                <div className="h-screen w-screen flex flex-col bg-[#F4F8FC]">
                    {/* Navbar */}
                    <Navbar className="h-14 m-2 rounded-xl bg-white shadow-sm" />
                    
                    {/* Main content area */}
                    <div className="flex flex-1 gap-2 p-2 min-h-0">
                        <Sidebar className="w-[200px] h-full rounded-xl bg-white text-white shadow-sm overflow-hidden" />
            
                        {/* Content */}
                        <main className="flex-1 h-full rounded-xl bg-white shadow-sm overflow-auto">
                            {children}
                        </main>
                    </div>
                </div>
            </QueryProvider>
        </body>
        </html>
    );
}