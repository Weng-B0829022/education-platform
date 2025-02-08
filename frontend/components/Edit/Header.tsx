import { Button } from "@/components/ui/button"

export default function Header({ activeTab = 0 }: { activeTab?: number }) {
    const tabs = [
        { name: "Visuals", active: activeTab === 0 },
        { name: "Music", active: activeTab === 1 },
        { name: "Avatar", active: activeTab === 2 },
        { name: "Audio", active: activeTab === 3 },
        { name: "Transitions", active: activeTab === 4 },
    ]

    return (
        <header className="h-[70px] w-full border-b border-gray-200 px-4">
            <div className="h-full flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <nav className="flex items-center">
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.name}
                                className={`flex items-center ${
                                    tab.active
                                        ? "text-blue-600"
                                        : "text-gray-600"
                                }`}
                            >
                                <div className={`px-4 py-2 rounded-lg text-sm transition-colors bg-[#F4F8FC] ${tab.active ? " border border-blue-600" : ""}`}>
                                    {tab.name}
                                </div>
                                {index < tabs.length - 1 && (
                                    <div className="w-8 h-[4px] bg-[#F4F8FC]"></div>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="text-blue-600">
                        Preview
                    </Button>
                    <Button className="bg-blue-500 hover:bg-blue-600">
                        Next
                    </Button>
                </div>
            </div>
        </header>
    )
}