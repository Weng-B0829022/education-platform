// app/page.tsx
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6">
      {/* Trending Today Banner */}
      <div className="bg-blue-500 text-white py-1 px-4 mb-8 flex items-center">
        <span className="font-semibold mr-2">Trending Today:</span>
        <p className="truncate">Providing all students have access to digital devices and internet connectivity, the initiative aims to create a more inclusive educational environment in underserved communities.</p>
      </div>

      {/* Featured News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Main Featured News */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-64 bg-gray-200">
            <img 
              src="https://fakeimg.pl/600x400/f3f4f6/64748b?text=Education+Summit"
              alt="Global Education Summit 2024"
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Global Education Summit 2024 Announced</h2>
              <span className="text-xs text-gray-500">Oct 10, 2024</span>
            </div>
            <p className="text-gray-700 text-sm mb-3">
              The Global Education Summit for 2024 has been officially announced, set to take place in Tokyo, Japan. This year's event will focus on "Inclusive Learning in a Digital Age," bringing together educators, policymakers, and technology innovators to discuss emerging trends, digital innovations in education, and strategies for inclusive learning.
            </p>
            <a href="#" className="text-blue-500 text-sm font-medium">
              Read more
            </a>
          </div>
        </div>

        {/* Secondary Featured News - Right Column */}
        <div className="flex flex-col space-y-6">
          {/* VR Technology News */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <h3 className="font-bold mb-1">Breakthrough in Educational VR Technology</h3>
                <span className="text-xs text-gray-500 block mb-2">Feb 6, 2025</span>
                <p className="text-gray-700 text-xs mb-3">
                  EduTech Solutions has launched a groundbreaking new platform focused on immersive history education. Their virtual reality tool brings historical events to life, allowing students to walk through historical events as an engaging and interactive learning experience.
                </p>
                <a href="#" className="text-blue-500 text-xs font-medium">
                  Read more
                </a>
              </div>
              <div className="md:w-1/2 h-48 bg-gray-200 relative">
                <img
                  src="https://fakeimg.pl/600x400/f3f4f6/64748b?text=VR+Tech"
                  alt="VR Technology in Education"
                  
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Digital Divide News */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4">
                <h3 className="font-bold mb-1">Nationwide Initiative to Bridge the Digital Divide</h3>
                <span className="text-xs text-gray-500 block mb-2">Apr 5, 2025</span>
                <p className="text-gray-700 text-xs mb-3">
                  The Department of Education launched a nationwide initiative to address the digital divide in schools across the country. The program will provide grants to underfunded schools for equipment purchases and includes key projects for improving digital access.
                </p>
                <a href="#" className="text-blue-500 text-xs font-medium">
                  Read more
                </a>
              </div>
              <div className="md:w-1/2 h-48 bg-gray-200 relative">
                <img
                  src="https://fakeimg.pl/600x400/f3f4f6/64748b?text=Digital+Access"
                  alt="Digital Divide Initiative"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Educational Innovations Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Educational innovations</h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Innovation Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src="https://fakeimg.pl/600x400/f3f4f6/64748b?text=Interactive+Learning"
                  alt="Interactive Textbooks"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1">Interactive Textbooks Revolutionize Science Education</h3>
                <span className="text-xs text-gray-500 block mb-2">Mar 15, 2025</span>
                <p className="text-gray-700 text-xs mb-3">
                  New interactive science textbooks using AR technology allow students to visualize complex concepts through 3D models, graphics, and video embedded in an immersive learning experience.
                </p>
                <a href="#" className="text-blue-500 text-xs font-medium">
                  Read more
                </a>
              </div>
            </div>

            {/* Innovation Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src="https://fakeimg.pl/600x400/f3f4f6/64748b?text=Global+Virtual+Exchange"
                  alt="Global Virtual Exchange Program"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1">Global Virtual Exchange Program Expands Network</h3>
                <span className="text-xs text-gray-500 block mb-2">Jan 22, 2025</span>
                <p className="text-gray-700 text-xs mb-3">
                  The Global Virtual Exchange Program connects students worldwide, fostering collaboration and cultural exchange in virtual classrooms.
                </p>
                <a href="#" className="text-blue-500 text-xs font-medium">
                  Read more
                </a>
              </div>
            </div>

            {/* Innovation Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src="https://fakeimg.pl/600x400/f3f4f6/64748b?text=AI+Powered"
                  alt="AI-Powered Personal Learning Assistants"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1">AI-Powered Personal Learning Assistants on the Rise</h3>
                <span className="text-xs text-gray-500 block mb-2">Apr 10, 2025</span>
                <p className="text-gray-700 text-xs mb-3">
                  Education technology startups are developing AI-powered personal learning assistants providing students with tailored learning experiences.
                </p>
                <a href="#" className="text-blue-500 text-xs font-medium">
                  Read more
                </a>
              </div>
            </div>

            {/* Innovation Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 relative">
                <img
                  src="https://fakeimg.pl/600x400/f3f4f6/64748b?text=Nationwide+Coding"
                  alt="Nationwide Coding Literacy Program"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-1">Nationwide Coding Literacy Program Launched</h3>
                <span className="text-xs text-gray-500 block mb-2">Dec 5, 2024</span>
                <p className="text-gray-700 text-xs mb-3">
                  A nationwide initiative aims to improve student technical literacy through introducing coding skills into the standard curriculum from elementary to high school level.
                </p>
                <a href="#" className="text-blue-500 text-xs font-medium">
                  Read more
                </a>
              </div>
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full shadow-md p-2"
            aria-label="Previous innovations"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full shadow-md p-2"
            aria-label="Next innovations"
          >
            <ArrowRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </main>
  );
}