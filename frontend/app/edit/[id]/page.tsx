import React from 'react'
import Header from '@/components/Edit/Header'
import LeftPanel from '@/components/Edit/LeftPanel'
import Preview from '@/components/Edit/Preview'
import Timeline from '@/components/Edit/Timeline'
import UpperPanel from '@/components/Edit/UpperPanel'
import LowerPanel from '@/components/Edit/LowerPanel'

function EditPage(): JSX.Element {
    return (
        <div className="flex flex-col h-full w-full">
            <Header activeTab={0} />
            <main className="flex flex-1 w-full gap-4 p-4">
                <LeftPanel />
                <div className="flex flex-col flex-1 gap-4">
                    <Preview />
                    <Timeline />
                </div>
                <div className="w-[440px] flex flex-col gap-4">
                    <UpperPanel />
                    <LowerPanel />
                </div>
            </main>
        </div>
    )
}

export default EditPage;