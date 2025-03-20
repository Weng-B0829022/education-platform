// pages/index.tsx
import React from 'react';
import { MessageCircle, User, Bell, Search, ChevronDown, MoreHorizontal, Paperclip, Image as ImageIcon, Smile, Send } from 'lucide-react';
import Image from 'next/image';

export default function ChatInterface() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* 左侧导航栏 */}
      <nav className="w-16 bg-[#1c2536] flex flex-col items-center py-5 space-y-8">
        <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center">
          <MessageCircle className="text-blue-600" size={16} />
        </div>
        
        <div className="flex flex-col items-center space-y-7">
          <button className="w-8 h-8 bg-blue-800 rounded-md flex items-center justify-center">
            <MessageCircle className="text-white" size={16} />
          </button>
          <button className="w-8 h-8 text-gray-400 hover:text-gray-200 flex items-center justify-center">
            <User size={16} />
          </button>
          <button className="w-8 h-8 text-gray-400 hover:text-gray-200 flex items-center justify-center">
            <Bell size={16} />
          </button>
          <button className="w-8 h-8 text-gray-400 hover:text-gray-200 flex items-center justify-center">
            <Search size={16} />
          </button>
        </div>
      </nav>

      {/* 主区域 */}
      <div className="flex-1 flex">
        {/* 聊天列表 */}
        <div className="w-80 bg-white border-r border-gray-200">
          {/* 顶部横幅 */}
          <div className="p-3">
            <div className="bg-[#1e335c] rounded-md p-3 pb-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-20">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-blue-400 ml-[-10px]"></div>
                  ))}
                </div>
              </div>
              <h2 className="text-sm text-white font-medium z-10 relative">connect, manage and collaborate</h2>
              <p className="text-xs mt-1 text-blue-200 z-10 relative">Streamline your workflow and stay organized</p>
              <button className="mt-2 bg-blue-500 text-xs text-white px-2 py-1 rounded-md z-10 relative">
                Get Started
              </button>
            </div>
          </div>

          {/* 搜索栏 */}
          <div className="px-3 pb-2 border-b border-gray-100">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full border border-gray-200 rounded-md px-3 py-1.5 text-sm pl-8"
              />
              <Search className="absolute left-2.5 top-2 text-gray-400" size={15} />
            </div>
          </div>
          
          {/* 对话列表 */}
          <div className="overflow-y-auto h-[calc(100vh-180px)]">
            {conversations.map((conversation, index) => (
              <div key={index} className={`px-3 py-2.5 hover:bg-gray-50 border-l-4 ${index === 1 ? 'border-l-blue-500 bg-blue-50' : 'border-l-transparent'}`}>
                <div className="flex items-start space-x-2">
                  <div className="relative flex-shrink-0">
                    <Image 
                      src={`/api/placeholder/36/36`} 
                      width={36} 
                      height={36} 
                      alt="User avatar" 
                      className="rounded-full"
                    />
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-sm truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500 flex-shrink-0">{conversation.time}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-0.5 truncate">{conversation.lastMessage}</p>
                    <div className="flex justify-between items-center mt-1">
                      <div className="flex space-x-1">
                        {conversation.tags && conversation.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
                            {tag}
                          </span>
                        ))}
                      </div>
                      {conversation.unread && (
                        <span className="inline-flex items-center justify-center bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex-shrink-0">
                          {conversation.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 聊天区域 */}
        <div className="flex-1 flex flex-col">
          {/* 聊天头部 */}
          <div className="py-3 px-4 border-b border-gray-200 flex justify-between items-center bg-white">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image 
                  src={`/api/placeholder/38/38`} 
                  width={38} 
                  height={38} 
                  alt="Chat avatar" 
                  className="rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <div className="flex items-center">
                  <h2 className="font-medium text-gray-800">Alex Morgan</h2>
                  <ChevronDown className="ml-1 text-gray-500" size={15} />
                </div>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button className="text-gray-500 p-1.5 hover:bg-gray-100 rounded-md">
                <Search size={18} />
              </button>
              <button className="text-gray-500 p-1.5 hover:bg-gray-100 rounded-md">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
          
          {/* 聊天消息区域 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5 bg-gray-50">
            {/* 时间分隔线 */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 h-px flex-grow"></div>
              <span className="px-2 text-xs text-gray-500">Yesterday</span>
              <div className="bg-gray-200 h-px flex-grow"></div>
            </div>

            {/* 他人消息 */}
            <div className="flex space-x-2">
              <Image 
                src={`/api/placeholder/36/36`} 
                width={36} 
                height={36} 
                alt="User avatar" 
                className="rounded-full flex-shrink-0 mt-1"
              />
              <div className="flex flex-col max-w-[75%]">
                <div className="flex items-baseline space-x-2">
                  <span className="font-medium text-sm">Alex Morgan</span>
                  <span className="text-xs text-gray-500">2:34 PM</span>
                </div>
                <div className="bg-white rounded-xl rounded-tl-none p-3 mt-1 shadow-sm">
                  <p className="text-sm">Hi there! I've just reviewed the latest mock-ups for the landing page redesign. I think we're making great progress!</p>
                </div>
                <div className="bg-white rounded-xl rounded-tl-none p-3 mt-1 shadow-sm">
                  <div className="bg-blue-50 p-2 rounded-md flex items-center space-x-2 mb-2">
                    <div className="bg-blue-100 rounded-md p-2 flex-shrink-0">
                      <ImageIcon className="text-blue-600" size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-blue-800 truncate">landing-page-concept-v2.jpg</p>
                      <p className="text-xs text-blue-600">2.4 MB</p>
                    </div>
                  </div>
                  <p className="text-sm">Here's the latest version. What do you think?</p>
                </div>
              </div>
            </div>

            {/* 我的消息 */}
            <div className="flex justify-end">
              <div className="max-w-[75%]">
                <div className="bg-blue-500 text-white rounded-xl rounded-tr-none p-3 shadow-sm">
                  <p className="text-sm">This looks fantastic! I really like the new hero section and the color scheme. The typography choices also work well with our brand identity.</p>
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right pr-1">
                  Seen 2:42 PM
                </div>
              </div>
            </div>

            {/* 时间分隔线 */}
            <div className="flex items-center justify-center">
              <div className="bg-gray-200 h-px flex-grow"></div>
              <span className="px-2 text-xs text-gray-500">Today</span>
              <div className="bg-gray-200 h-px flex-grow"></div>
            </div>

            {/* 他人消息 - 图片 */}
            <div className="flex space-x-2">
              <Image 
                src={`/api/placeholder/36/36`} 
                width={36} 
                height={36} 
                alt="User avatar" 
                className="rounded-full flex-shrink-0 mt-1"
              />
              <div className="flex flex-col max-w-[75%]">
                <div className="flex items-baseline space-x-2">
                  <span className="font-medium text-sm">Alex Morgan</span>
                  <span className="text-xs text-gray-500">9:15 AM</span>
                </div>
                <div className="mt-1 relative rounded-xl overflow-hidden shadow-sm">
                  <Image 
                    src={`/api/placeholder/320/180`} 
                    width={320} 
                    height={180} 
                    alt="Shared image" 
                    className="rounded-xl"
                  />
                </div>
                <div className="bg-white rounded-xl rounded-tl-none p-3 mt-1 shadow-sm">
                  <p className="text-sm">I've made some additional tweaks based on your feedback. Let me know what you think!</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 聊天输入框 */}
          <div className="px-4 py-3 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-2">
              <button className="text-gray-400 p-2 hover:bg-gray-100 rounded-full">
                <Paperclip size={20} />
              </button>
              <div className="flex-1 border border-gray-300 rounded-full px-4 py-2 flex items-center bg-gray-50">
                <input 
                  type="text" 
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent outline-none text-sm"
                />
                <div className="flex items-center space-x-1 ml-2">
                  <button className="text-gray-400 p-1 hover:text-gray-600">
                    <ImageIcon size={18} />
                  </button>
                  <button className="text-gray-400 p-1 hover:text-gray-600">
                    <Smile size={18} />
                  </button>
                </div>
              </div>
              <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* 右侧边栏 */}
        <div className="w-64 border-l border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-sm text-gray-800">Suggested Connections</h3>
          </div>
          
          {/* 推荐连接列表 */}
          <div className="p-3 space-y-4">
            {connections.map((connection, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Image 
                    src={`/api/placeholder/32/32`} 
                    width={32} 
                    height={32} 
                    alt="Connection avatar" 
                    className="rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-medium">{connection.name}</h4>
                    <p className="text-xs text-gray-500">{connection.role}</p>
                  </div>
                </div>
                <button className="text-blue-500 text-xs font-medium bg-blue-50 hover:bg-blue-100 rounded-md px-2 py-1">
                  Connect
                </button>
              </div>
            ))}
          </div>
          
          {/* 分隔线 */}
          <div className="border-t border-gray-200 my-2"></div>
          
          {/* 最近活动 */}
          <div className="p-4">
            <h3 className="font-medium text-sm text-gray-800 mb-3">Recent Activity</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex space-x-2">
                  <Image 
                    src={`/api/placeholder/28/28`} 
                    width={28} 
                    height={28} 
                    alt="User avatar" 
                    className="rounded-full flex-shrink-0"
                  />
                  <div>
                    <p className="text-xs">
                      <span className="font-medium">{activity.user}</span> {activity.action}
                    </p>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 底部链接区域 */}
          <div className="absolute bottom-0 w-64 bg-white p-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-xs text-gray-500 hover:underline">Documentation</div>
              <div className="text-xs text-gray-500 hover:underline">Privacy Policy</div>
              <div className="text-xs text-gray-500 hover:underline">Terms of Service</div>
              <div className="text-xs text-gray-500 hover:underline">Help Center</div>
            </div>
            <div className="mt-3 text-xs text-gray-400">
              © 2025 Company Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 示例数据
const conversations = [
  {
    name: "Marketing Team",
    lastMessage: "Alex: I've shared the Q3 campaign assets with everyone",
    time: "2m",
    unread: 3,
    online: true,
    tags: ["work", "important"]
  },
  {
    name: "Sarah Chen",
    lastMessage: "Let me know when you have time to discuss the proposal",
    time: "15m",
    unread: 0,
    online: true
  },
  {
    name: "Design Review",
    lastMessage: "James: The latest mockups look great! Just a few minor tweaks",
    time: "1h",
    unread: 0,
    online: false,
    tags: ["design", "feedback"]
  },
  {
    name: "Michael Johnson",
    lastMessage: "Are we still meeting tomorrow at 2pm?",
    time: "3h",
    unread: 0,
    online: false
  },
  {
    name: "Project Falcon",
    lastMessage: "Emma: I've updated the timeline based on client feedback",
    time: "5h",
    unread: 2,
    online: false,
    tags: ["project", "update"]
  },
  {
    name: "Tech Support",
    lastMessage: "Your ticket #45892 has been resolved. Please confirm",
    time: "Yesterday",
    unread: 0,
    online: false
  },
  {
    name: "David Wilson",
    lastMessage: "Thanks for your help with the presentation!",
    time: "Yesterday",
    unread: 0,
    online: false
  }
];

const connections = [
  {
    name: "Emily Watson",
    role: "UX/UI Designer"
  },
  {
    name: "Jason Lee",
    role: "Product Manager"
  },
  {
    name: "Rebecca Kim",
    role: "Marketing Lead"
  }
];

const activities = [
  {
    user: "Thomas Clark",
    action: "shared a document",
    time: "Just now"
  },
  {
    user: "Olivia Martinez",
    action: "commented on your post",
    time: "2 hours ago"
  },
  {
    user: "Ryan Taylor",
    action: "invited you to a meeting",
    time: "Yesterday"
  }
];