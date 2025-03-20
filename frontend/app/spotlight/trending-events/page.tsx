"use client";

import { useState } from 'react';
import { ChevronDown, Search, Clock, User, Users } from 'lucide-react';

export default function EducationEvents() {
  const [selectedCategory, setSelectedCategory] = useState('Conferences');
  
  // Sample events data
  const events = [
    {
      id: 1,
      title: "International Education Summit 2024",
      date: "June 15, 2024",
      time: "10:00 AM",
      description: "Join us for the International Education Summit 2024, a premier gathering of educators, policymakers, and industry leaders from around the globe. Be part of important discussions about the future of education and gain valuable networking opportunities.",
      image: "/images/international-summit.jpg",
      speakers: ["Katherine Smith", "Prof. David Johnson"],
      attendees: 82,
    },
    {
      id: 2,
      title: "EdTech Expo 2024",
      date: "September 10-12, 2024",
      time: "10:00 AM",
      description: "Join us for the International Education Summit 2024, a premier gathering of educators, policymakers, and industry leaders from around the globe. Be part of important discussions about the future of education and gain valuable networking opportunities.",
      image: "/images/edtech-expo.jpg",
      speakers: ["Katherine Smith", "Prof. David Johnson"],
      attendees: 67,
    },
    {
      id: 3,
      title: "Fostering Collaboration and Creativity",
      date: "September 19-20, 2024",
      time: "9:00 AM",
      description: "Join us for the International Education Summit 2024, a premier gathering of educators, policymakers, and industry leaders from around the globe. Be part of important discussions about the future of education and gain valuable networking opportunities.",
      image: "/images/collaboration-workshop.jpg",
      speakers: [],
      attendees: 42,
    }
  ];

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white p-4 flex items-center justify-between border-b">
        <div className="flex items-center space-x-2">
          <button className="flex items-center text-gray-700 font-medium">
            {selectedCategory}
            <ChevronDown className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">TODAY</span>
          <span className="font-medium">9:00 AM</span>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium">
            Search
          </button>
        </div>
      </header>

      {/* Event List */}
      <div className="p-4 space-y-4">
        {events.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Event Image */}
              <div className="md:w-1/3 h-44 bg-gray-200 relative">
                {/* Placeholder for actual image */}
                {event.id === 1 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-amber-50">
                    <div className="w-24 h-32 bg-blue-600 rounded-t-full relative">
                      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                        <div className="text-2xl font-bold text-blue-800">E</div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-amber-800 rounded"></div>
                    </div>
                  </div>
                )}
                
                {event.id === 2 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-36 h-24 relative">
                      <div className="absolute left-0 top-0 w-24 h-24 bg-gray-600 rounded-md"></div>
                      <div className="absolute right-0 bottom-0 w-20 h-16 bg-white border-2 border-gray-400 rounded-md shadow-md"></div>
                      <div className="absolute left-6 top-6 w-16 h-10 bg-blue-200 rounded-sm"></div>
                    </div>
                  </div>
                )}
                
                {event.id === 3 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="w-36 h-24 relative">
                      <div className="flex space-x-1">
                        <div className="w-8 h-20 bg-blue-300 rounded-t-lg"></div>
                        <div className="w-8 h-24 bg-pink-300 rounded-t-lg"></div>
                        <div className="w-8 h-16 bg-yellow-300 rounded-t-lg"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Event Details */}
              <div className="md:w-2/3 p-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                  <span>{event.date}</span>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{event.time}</span>
                  </div>
                </div>
                
                <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                  {event.description}
                </p>
                
                {event.speakers.length > 0 && (
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 flex items-center mb-1">
                      <span className="mr-1">Speakers:</span>
                      {event.speakers.map((speaker, index) => (
                        <span key={index} className="text-blue-600 mr-1">{speaker}{index < event.speakers.length - 1 ? ',' : ''}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <button className="bg-blue-500 text-white px-4 py-1.5 rounded-full text-sm">
                    Register now
                  </button>
                  
                  <div className="flex items-center">
                    <div className="flex -space-x-1 mr-2">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white"></div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{event.attendees} attendees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}