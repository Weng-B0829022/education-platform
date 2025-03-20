"use client";

import { useState } from 'react';
import { Search, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EducationalEvents() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample event data
  const events = [
    {
      id: 1,
      title: "Virtual Learning Summit 2024",
      location: "Online Event",
      date: "June 15th",
      description: "Join us for the Virtual Learning Summit 2024, a three-day event focusing on the future of online education.",
      image: "/images/virtual-summit.jpg"
    },
    {
      id: 2,
      title: "STEM Education Symposium",
      location: "Science Museum Auditorium",
      date: "August 8th",
      description: "Join us for the STEM Education Symposium, a one-day event dedicated to promoting STEM education initiatives.",
      image: "/images/stem-symposium.jpg"
    },
    {
      id: 3,
      title: "National Literacy Conference",
      location: "National Library",
      date: "October 18th",
      description: "Join us for the Virtual Learning Summit 2024, a three-day event focusing on the future of literacy education.",
      image: "/images/literacy-conference.jpg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="md:w-1/2">
          <h2 className="text-blue-600 font-medium mb-2">Educational Events</h2>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Stay ahead in the world of education by participating in these upcoming events!
          </h1>
          <p className="text-gray-600 mb-4">
            Discover a diverse range of conferences, webinars, and symposiums designed
            to enhance your knowledge, skills, and network in the field of education.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you're an educator, researcher, administrator, or industry professional,
            these events offer valuable insights, innovative strategies, and networking
            opportunities to support your professional growth and development.
          </p>
        </div>
        
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 grid-rows-3 gap-2 h-80">
            <div className="row-span-2 bg-gray-100 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-teal-100"></div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100"></div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100"></div>
            </div>
            <div className="col-span-2 bg-gray-100 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div className="relative flex-grow max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <button className="flex items-center space-x-1 px-4 py-2 border border-gray-200 rounded-md">
              <span className="text-sm text-gray-700">Topic</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-4 py-2 border border-gray-200 rounded-md">
              <span className="text-sm text-gray-700">Event Type</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-4 py-2 border border-gray-200 rounded-md">
              <span className="text-sm text-gray-700">Location</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-4 py-2 border border-gray-200 rounded-md">
              <span className="text-sm text-gray-700">DD/MM/YYYY</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          
          <button className="px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors">
            Search
          </button>
        </div>
      </div>
      
      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl overflow-hidden shadow-md">
            <div className="h-56 bg-gray-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                {event.id === 1 && (
                  <div className="grid grid-cols-2 grid-rows-2 gap-2 w-3/4 h-3/4">
                    <div className="bg-gray-100 rounded-md"></div>
                    <div className="bg-gray-100 rounded-md"></div>
                    <div className="bg-red-300 rounded-md"></div>
                    <div className="bg-gray-100 rounded-md"></div>
                  </div>
                )}
                {event.id === 2 && (
                  <div className="w-3/4 h-3/4 flex items-center justify-center">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-blue-200 rounded-full"></div>
                    </div>
                  </div>
                )}
                {event.id === 3 && (
                  <div className="w-3/4 h-3/4 flex flex-col items-center justify-center">
                    <div className="w-full h-4 bg-blue-100 rounded-full mb-3"></div>
                    <div className="w-full h-4 bg-blue-100 rounded-full mb-3"></div>
                    <div className="w-full h-4 bg-blue-100 rounded-full mb-3"></div>
                    <div className="w-3/4 h-4 bg-blue-100 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
              
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{event.location}</span>
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{event.date}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {event.description}
              </p>
              
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition-colors text-sm font-medium">
                Register now
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center space-x-4">
        <button className="p-2 rounded-full text-gray-500">
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
              currentPage === page
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        
        <button className="p-2 rounded-full text-gray-700">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}