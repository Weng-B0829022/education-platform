import React from 'react';
import { Search, ChevronDown, Calendar, Check, MapPin, Award, Info } from 'lucide-react';

const StartupProfiles = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header with image collage */}
      <div className="mb-12">
        <div className="text-center mb-8">
          <h3 className="text-blue-500 font-medium mb-2">Discover Promising Startups</h3>
          <h1 className="text-3xl font-bold text-gray-800 mb-6 max-w-2xl mx-auto">
            Explore Profiles of Visionary Ventures Shaping Tomorrow's Business Landscape
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to our "Startup Spotlights" section where we shine a light on 
            the ingenuity and ambition of groundbreaking startups. These 
            spotlights offer a glimpse into the innovative ideas and entrepreneurship
            skills shaping the future of business.
          </p>
        </div>
        
        {/* Image collage */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <img 
                src="https://fakeimg.pl/300x180/cccccc/808080?text=Entrepreneur+1" 
                alt="Business professional using laptop" 
                className="rounded-lg object-cover w-60 h-40"
              />
              <img 
                src="https://fakeimg.pl/300x180/cccccc/808080?text=Entrepreneur+2" 
                alt="Startup founder in office" 
                className="rounded-lg object-cover w-60 h-40"
              />
            </div>
            <div className="flex flex-col gap-4">
              <img 
                src="https://fakeimg.pl/300x180/cccccc/808080?text=Entrepreneur+3" 
                alt="Tech team collaboration" 
                className="rounded-lg object-cover w-60 h-40"
              />
              <img 
                src="https://fakeimg.pl/300x180/cccccc/808080?text=Entrepreneur+4" 
                alt="Remote worker on laptop" 
                className="rounded-lg object-cover w-60 h-40"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Search filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-10 flex flex-wrap gap-3 items-center">
        <div className="relative flex-grow max-w-xs mr-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        <div className="flex flex-wrap gap-3 items-center">
          <div className="relative w-40">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg text-gray-700">
              <option>Industry</option>
              <option>AI & Machine Learning</option>
              <option>Fintech</option>
              <option>Healthcare</option>
              <option>Cleantech</option>
              <option>E-commerce</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-48">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg text-gray-700">
              <option>Development Stage</option>
              <option>Idea/Concept</option>
              <option>Pre-Seed</option>
              <option>Seed</option>
              <option>Series A</option>
              <option>Series B+</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-40">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg text-gray-700">
              <option>Funding Status</option>
              <option>Bootstrapped</option>
              <option>Angel-funded</option>
              <option>VC-backed</option>
              <option>Crowdfunded</option>
              <option>Acquired</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-40">
            <div className="flex items-center pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg">
              <span className="text-gray-700">Year Founded</span>
              <Calendar className="ml-2 text-gray-500" size={16} />
            </div>
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors">
            Search
          </button>
        </div>
      </div>
      
      {/* Startup profile */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-12">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Startup info */}
            <div>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-500">Startup Name</h3>
                  <Check className="ml-2 text-blue-500" size={16} />
                </div>
                <h2 className="text-xl font-bold">InnovateX Solutions</h2>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-500">Industry</h3>
                  <svg className="ml-2 text-blue-500 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold">Artificial Intelligence</h2>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Overview</h3>
                <div className="flex items-start">
                  <Info className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                  <p className="text-gray-700 text-sm">
                    InnovateX Solutions is a cutting-edge tech startup specializing in AI-powered solutions for businesses.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Column 2: Founders */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-4 flex items-center">
                Founders
                <svg className="ml-2 text-blue-500 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                </svg>
              </h3>
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <img 
                    src="https://fakeimg.pl/100x100/e2e8f0/475569?text=John" 
                    alt="John Smith" 
                    className="w-16 h-16 rounded-full mb-2 object-cover"
                  />
                  <h4 className="text-sm font-medium">John Smith</h4>
                </div>
                
                <div className="flex flex-col items-center">
                  <img 
                    src="https://fakeimg.pl/100x100/e2e8f0/475569?text=Sarah" 
                    alt="Sarah Johnson" 
                    className="w-16 h-16 rounded-full mb-2 object-cover"
                  />
                  <h4 className="text-sm font-medium">Sarah Johnson</h4>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-500 mb-4 flex items-center">
                  Key Achievements
                  <Award className="ml-2 text-blue-500" size={16} />
                </h3>
                
                <p className="text-gray-700 text-sm">
                  Secured $5 million in seed funding from leading venture capital firms.
                </p>
              </div>
            </div>
            
            {/* Column 3: Location and CTA */}
            <div>
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                  Location
                  <MapPin className="ml-2 text-blue-500" size={16} />
                </h3>
                
                <h2 className="text-lg font-semibold mb-1">Silicon Valley,</h2>
                <p className="text-gray-700">California, USA</p>
              </div>
              
              <div className="mt-auto pt-8">
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition-colors font-medium">
                  Explore more
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team image */}
        <div className="border-t border-gray-100">
          <img 
            src="https://fakeimg.pl/1200x300/e2e8f0/64748b?text=Team+Collaboration" 
            alt="Team collaborating" 
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default StartupProfiles;