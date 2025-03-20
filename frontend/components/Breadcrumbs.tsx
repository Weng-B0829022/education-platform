'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import React from 'react';
export function Breadcrumbs() {
    const pathname = usePathname();
    const paths = pathname.split('/').filter(path => path);

    return (
        <div className="flex items-center gap-2 p-4 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-500">
                Home
            </Link>
            {paths.map((path, index) => (
                <React.Fragment key={path}>
                    <ChevronRight className="w-4 h-4" />
                    <Link
                        href={`/${paths.slice(0, index + 1).join('/')}`}
                        className="capitalize hover:text-blue-500"
                    >
                        {path}
                    </Link>
                </React.Fragment>
            ))}
        </div>
    );
} 