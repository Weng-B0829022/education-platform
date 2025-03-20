import React from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function SpotlightLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col w-full">
            <Breadcrumbs />
            {children}
        </div>
    );
}
