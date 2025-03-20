"use client";

import { useState } from 'react';

export default function EducationCalendar() {
  const [filterPanelExpanded, setFilterPanelExpanded] = useState(false);
  
  // Sample event data
  const events = [
    {
      id: 1,
      title: "Technology Conference prep",
      time: "10:00 AM",
      type: "meeting",
      day: 2, // Monday
      isHighlighted: true,
    },
    {
      id: 2,
      title: "Program review",
      time: "2:00 PM",
      type: "meeting",
      day: 2, // Monday
      isHighlighted: false,
    },
    {
      id: 3,
      title: "Curriculum design",
      time: "9:00 AM",
      type: "task",
      day: 3, // Tuesday
      isHighlighted: true,
    },
    {
      id: 4,
      title: "Teacher training",
      time: "11:00 AM",
      type: "meeting",
      day: 4, // Wednesday
      isHighlighted: true,
    },
    {
      id: 5,
      title: "STEM Education plan",
      time: "2:00 PM",
      type: "task",
      day: 4, // Wednesday
      isHighlighted: false,
    },
    {
      id: 6,
      title: "Resource allocation",
      time: "9:00 AM",
      type: "meeting",
      day: 6, // Friday
      isHighlighted: true,
    },
  ];

  // Build calendar grid
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const dayNumbers = [2, 3, 4, 5, 6, 7, 8]; // Sept 2024 starting days
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar filters */}
      <aside className="w-56 border-r border-gray-200 p-4 bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-medium text-gray-700">Filters</h2>
          <button className="text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <input id="events" type="checkbox" checked className="h-4 w-4 bg-blue-500 border-transparent rounded" />
            <label htmlFor="events" className="ml-2 text-sm text-gray-700">Events</label>
          </div>
          
          <div className="flex items-center">
            <input id="announcements" type="checkbox" checked className="h-4 w-4 bg-blue-500 border-transparent rounded" />
            <label htmlFor="announcements" className="ml-2 text-sm text-gray-700">Announcements</label>
          </div>
          
          <div className="pl-6 text-xs text-gray-500">
            <div>Developments</div>
          </div>
        </div>
        
        {/* Today's Events */}
        <div className="mt-8">
          <h2 className="text-sm font-medium text-gray-700 mb-3">Today</h2>
          
          <div className="bg-white border border-gray-200 rounded-md mb-4">
            <div className="p-3">
              <h3 className="text-xs font-medium">Global Education Technology Conference 2024</h3>
              <p className="text-xs text-gray-500 my-1">Annual meeting for education technology innovations, featuring keynote speakers and workshops</p>
              <div className="text-xs text-blue-500">Sept 05, 2024</div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-md">
            <div className="p-3">
              <h3 className="text-xs font-medium">New Online Learning Platform Launch</h3>
              <p className="text-xs text-gray-500 my-1">Introduction to adaptive learning platform for K-12 education</p>
              <div className="text-xs text-blue-500">Sept 05, 2024</div>
            </div>
          </div>
        </div>
        
        {/* Tomorrow's Events */}
        <div className="mt-8">
          <h2 className="text-sm font-medium text-gray-700 mb-3">Tomorrow</h2>
          
          <div className="bg-white border border-gray-200 rounded-md">
            <div className="p-3">
              <h3 className="text-xs font-medium">Educational Grant Program for Underserved Schools</h3>
              <p className="text-xs text-gray-500 my-1">Application deadline for educational resources funding for rural and underserved districts</p>
              <div className="text-xs text-blue-500">Sept 06, 2024</div>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="flex-1">
        {/* Calendar header */}
        <header className="bg-white p-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold text-gray-800">September 2024</h1>
            <div className="space-x-2">
              <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">Month</button>
              <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 border border-blue-300 rounded">Week</button>
              <button className="px-3 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50">Day</button>
            </div>
          </div>
        </header>
        
        {/* Calendar grid */}
        <div className="p-4">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Days of week header */}
            <div className="grid grid-cols-7 border-b border-gray-200">
              {days.map((day, index) => (
                <div key={day} className="px-2 py-3 text-center text-sm font-medium text-gray-500">
                  <div>{day}</div>
                  <div className="mt-1 text-gray-900 font-semibold">{dayNumbers[index]}</div>
                </div>
              ))}
            </div>
            
            {/* Calendar cells */}
            <div className="grid grid-cols-7 grid-rows-5 h-96">
              {Array.from({ length: 35 }).map((_, index) => {
                const dayIndex = index % 7;
                const dayEvents = events.filter(event => event.day === dayIndex + 2);
                
                return (
                  <div 
                    key={index} 
                    className={`border-b border-r border-gray-200 p-1 ${dayIndex === 5 || dayIndex === 6 ? 'bg-gray-50' : ''}`}
                  >
                    {dayEvents.map(event => (
                      <div 
                        key={event.id}
                        className={`mb-1 p-1 rounded text-xs ${
                          event.isHighlighted 
                            ? 'bg-blue-100 border-l-4 border-blue-500' 
                            : 'bg-gray-100'
                        }`}
                      >
                        <div className="font-medium">{event.time}</div>
                        <div>{event.title}</div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Did You Know section */}
          <div className="mt-8 bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex">
              <div className="flex-1">
                <h2 className="text-lg font-semibold mb-3">Did You Know?</h2>
                <p className="text-sm text-gray-600 mb-2">
                  Did you know that as of 2023, over 90% of the world's primary school-aged children are now learning computer programming in some form thanks to educational technology? This represents a significant increase from the past decade, highlighting global progress in primary education standards and accessibility.
                </p>
              </div>
              <div className="w-1/4 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  {/* Stylized education illustration */}
                  <div className="absolute bottom-0 w-24 h-4 bg-blue-200 rounded-full left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute bottom-4 w-20 h-16 bg-blue-400 rounded-lg left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute bottom-20 w-16 h-2 bg-pink-400 rounded-full left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute bottom-22 w-8 h-8 bg-yellow-300 rounded-full left-1/2 transform -translate-x-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}