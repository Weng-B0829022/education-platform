"use client";

import { 
    Newspaper, 
    TrendingUp, 
    Lightbulb, 
    GraduationCap, 
    BookOpen, 
    Users, 
    Calendar, 
    Building2, 
    Rocket,
    Settings,
    BookMarked,
    FileText,
    Briefcase,
    Target,
    Archive,
    MessageCircle,
    HandshakeIcon,
    ScrollText,
    Brain
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar({ className = "" }) {
    return (
        <div className={`${className} flex flex-col h-full p-1`}>
            <div className="flex flex-col items-center py-6 gap-6 overflow-y-auto flex-1">
                {/* News & Highlights Section */}
                <SidebarSection title="News & Updates">
                    <SidebarItem icon={<Newspaper />} label="Latest News" />
                    <SidebarItem icon={<TrendingUp />} label="Weekly Highlights" />
                    <SidebarItem icon={<Calendar />} label="Trending Events" />
                    <SidebarItem icon={<ScrollText />} label="Weekly Articles" />
                </SidebarSection>

                {/* Educational Content */}
                <SidebarSection title="Educational Resources">
                    <SidebarItem icon={<GraduationCap />} label="Learning Assets" />
                    <SidebarItem icon={<HandshakeIcon />} label="Join PhoenEX" />
                    <SidebarItem icon={<BookOpen />} label="Explore Blogs" />
                    <SidebarItem icon={<Brain />} label="Pedagogical Innovations" />
                    <SidebarItem icon={<FileText />} label="Curriculum Updates" />
                    <SidebarItem icon={<Briefcase />} label="Educational Policies" />
                    <SidebarItem icon={<BookMarked />} label="Teaching Resources" />
                    <SidebarItem icon={<Calendar />} label="Educational Events" />
                    <SidebarItem icon={<Users />} label="Educator Interviews" />
                    <SidebarItem icon={<Lightbulb />} label="Research Findings" />
                    <SidebarItem icon={<Target />} label="Success Stories" />
                </SidebarSection>

                {/* Business & Innovation */}
                <SidebarSection title="Business Insights">
                    <SidebarItem icon={<Building2 />} label="Corporate News" />
                    <SidebarItem icon={<Rocket />} label="Startup Spotlights" />
                    <SidebarItem icon={<TrendingUp />} label="Market Trends" />
                    <SidebarItem icon={<Lightbulb />} label="Innovation and Technology" />
                    <SidebarItem icon={<Target />} label="Business Strategies" />
                    <SidebarItem icon={<Briefcase />} label="Leadership and Management" />
                    <SidebarItem icon={<FileText />} label="Case Studies" />
                    <SidebarItem icon={<Building2 />} label="Industry-specific News" />
                    <SidebarItem icon={<Calendar />} label="Business Events" />
                </SidebarSection>

                {/* Interaction & Archives */}
                <SidebarSection title="Community">
                    <SidebarItem icon={<MessageCircle />} label="Reader Interaction" />
                    <SidebarItem icon={<Archive />} label="Archives" />
                </SidebarSection>

                {/* Settings & More */}
                <div className="mt-auto">
                    <SidebarItem icon={<Settings />} label="Settings" />
                </div>
            </div>
        </div>
    );
}

// Helper components for cleaner code
const SidebarSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="w-full">
        <h3 className="text-xs font-semibold text-blue-400 mb-2 px-4">{title}</h3>
        <div className="flex flex-col gap-2">
            {children}
        </div>
    </div>
);

const SidebarItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => {
    const pathname = usePathname();
    
    // Move getPath function declaration before its usage
    const getPath = (label: string) => {
        return '/spotlight/' + label.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    };

    const path = getPath(label);
    const isActive = pathname === path;

    return (
        <Link href={getPath(label)}>
            <div 
                className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
                    ${isActive 
                        ? 'bg-blue-500 text-white' 
                        : 'text-slate-500 hover:bg-white/10'
                    }`}
            >
                <div className="w-5 h-5">
                    {icon}
                </div>
                <span className="text-sm">{label}</span>
            </div>
        </Link>
    );
};