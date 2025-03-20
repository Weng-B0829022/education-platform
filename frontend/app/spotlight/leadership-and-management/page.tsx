import React from 'react';
import { Search, ChevronDown, Calendar } from 'lucide-react';

const LeaderCard = ({ image, name, position, company, description }: { image: string, name: string, position: string, company: string, description: string }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start mb-8">
      <div className="flex-shrink-0">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-blue-600 mb-2">{position}, {company}</p>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-full px-4 py-1.5 transition-colors">
          Explore insights
        </button>
      </div>
    </div>
  );
};

const LeadershipInsightsPlatform = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-10 mb-12">
        <div className="md:w-1/2">
          <h3 className="text-blue-500 font-medium mb-2">Insights from Industry Leaders</h3>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Gain Valuable Leadership and Management Insights from Seasoned Professionals
          </h1>
          <p className="text-gray-600 mb-6">
            Welcome to the Leadership and Management section of ThinkLink Spotlight – your gateway to invaluable insights and strategies for navigating the dynamic world of business leadership. Here, we delve into the minds of experienced professionals and business leaders, uncovering their secrets to success, leadership styles, and effective management techniques.
          </p>
        </div>
        
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative">
            {/* Main circular background */}
            <div className="w-64 h-64 bg-blue-50 rounded-full flex items-center justify-center relative">
              {/* Center image */}
              <img 
                src="https://fakeimg.pl/400x400/e6f7ff/1e40af?text=Leader" 
                alt="Business leader" 
                className="w-48 h-48 rounded-full object-cover z-10 border-4 border-white"
              />
              
              {/* Floating circular images */}
              <div className="absolute -top-4 right-4 z-20">
                <div className="w-16 h-16 rounded-full bg-white p-1">
                  <img 
                    src="https://fakeimg.pl/200x200/fff4e6/c2410c?text=Leader1" 
                    alt="Leader 1" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-8 z-20">
                <div className="w-16 h-16 rounded-full bg-white p-1">
                  <img 
                    src="https://fakeimg.pl/200x200/e6f7ff/1e40af?text=Leader2" 
                    alt="Leader 2" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-2 right-8 z-20">
                <div className="w-16 h-16 rounded-full bg-white p-1">
                  <img 
                    src="https://fakeimg.pl/200x200/f0fdf4/166534?text=Leader3" 
                    alt="Leader 3" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              {/* Light bulb icon */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-500">
                    <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 1113.5 0v4.661c0 .326.277.585.6.544.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                    <path fillRule="evenodd" d="M9.75 9.75a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-4.5a.75.75 0 00-.75-.75h-4.5zm1.5 1.5v3h1.5v-3h-1.5z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search filters */}
      <div className="flex flex-wrap gap-3 mb-12 items-center">
        <div className="relative flex-grow max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="relative w-40">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg text-gray-700">
              <option>Industry</option>
              <option>Technology</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Retail</option>
              <option>Manufacturing</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-40">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg text-gray-700">
              <option>Topic</option>
              <option>Leadership</option>
              <option>Management</option>
              <option>Innovation</option>
              <option>Strategy</option>
              <option>Culture</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-40">
            <div className="flex items-center pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg">
              <span className="text-gray-700">DD/MM/YYYY</span>
              <Calendar className="ml-2 text-gray-500" size={16} />
            </div>
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors">
            Search
          </button>
        </div>
      </div>
      
      {/* Leader profiles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <LeaderCard 
          image="https://fakeimg.pl/200x200/f8fafc/334155?text=Elon"
          name="Elon Musk"
          position="CEO"
          company="SpaceX and Tesla"
          description="Elon Musk, one of the world's most innovative entrepreneurs, shares insights on risk-taking approaches to problem-solving and disruptive innovation."
        />
        
        <LeaderCard 
          image="https://fakeimg.pl/200x200/f8fafc/334155?text=Indra"
          name="Indra Nooyi"
          position="Former CEO, PepsiCo"
          company="PepsiCo"
          description="Indra Nooyi, former CEO of PepsiCo, is admired for her authentic leadership style. She provides invaluable perspectives on driving organizational change."
        />
        
        <LeaderCard 
          image="https://fakeimg.pl/200x200/f8fafc/334155?text=Jeff"
          name="Jeff Bezos"
          position="Executive Chairman, Amazon"
          company="Amazon"
          description="Jeff Bezos built Amazon into one of the world's most valuable brands with customer-centric philosophy and innovative thinking that revolutionized retail."
        />
        
        <LeaderCard 
          image="https://fakeimg.pl/200x200/f8fafc/334155?text=Sheryl"
          name="Sheryl Sandberg"
          position="COO, Meta/Facebook"
          company="Meta/Facebook"
          description="Sheryl Sandberg, COO of Meta/Facebook, is admired for leadership based on authenticity and a data-driven approach for improved results."
        />
        
        <LeaderCard 
          image="https://fakeimg.pl/200x200/f8fafc/334155?text=Satya"
          name="Satya Nadella"
          position="CEO, Microsoft"
          company="Microsoft"
          description="Satya Nadella's transformational leadership has revitalized Microsoft's culture and strategy, creating significant value for customers and shareholders."
        />
        
        <LeaderCard 
          image="https://fakeimg.pl/200x200/f8fafc/334155?text=Mary"
          name="Mary Barra"
          position="CEO, General Motors"
          company="General Motors"
          description="Mary Barra's CEO of General Motors, is a transforming automotive leader who has driven the company toward a zero-emission, autonomous mobility future."
        />
      </div>
    </div>
  );
};

export default LeadershipInsightsPlatform;