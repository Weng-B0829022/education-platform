import React from 'react';
import { Search, ChevronDown, Calendar, ExternalLink } from 'lucide-react';

const CaseStudyTag = ({ text, color }: { text: string, color: string }) => {
  const bgColor = color === 'amber' ? 'bg-amber-100 text-amber-800' : color === 'violet' ? 'bg-violet-100 text-violet-800' : color === 'green' ? 'bg-green-100 text-green-800' : color === 'red' ? 'bg-red-100 text-red-800' : color === 'teal' ? 'bg-teal-100 text-teal-800' : '';

  return (
    <span className={`text-xs px-2.5 py-1 rounded-full ${bgColor} font-medium`}>
      {text}
    </span>
  );
};

const CaseStudyCard = ({ image, industry, title, tags, description }: { image: string, industry: string, title: string, tags: { text: string, color: string }[], description: string }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 left-3">
          <CaseStudyTag text={industry} color="blue" />
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-semibold text-gray-800 text-lg mb-3">{title}</h3>
        
        <div className="mb-4 text-xs">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.map((tag: any, index: number) => (
              <CaseStudyTag 
                key={index} 
                text={tag.text} 
                color={tag.color} 
              />
            ))}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-5">
          {description}
        </p>
        
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-md transition-colors flex items-center">
          Explore Insights
          <ExternalLink size={14} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

const BusinessCaseStudiesPlatform = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header section */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
        <div className="md:w-3/5">
          <h3 className="text-blue-500 font-medium mb-2">Exploring Business Case Studies</h3>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Uncover Strategies, Decisions, and Outcomes Across Industries
          </h1>
          <p className="text-gray-600 mb-6">
            Each case study presented here is meticulously analyzed, providing you with valuable insights into the  
            decision-making processes of successful businesses. From startups navigating the complexities of market 
            entry to established corporations tackling industry disruption, our case studies cover a diverse range of 
            scenarios to satisfy your research and learning needs.
          </p>
        </div>
        
        <div className="md:w-2/5 flex justify-center">
          <div className="relative w-72 h-72">
            <img 
              src="https://fakeimg.pl/500x500/e0e7ff/6366f1?text=Documents" 
              alt="Case studies illustration" 
              className="w-full"
            />
            <div className="absolute -top-6 right-0">
              <div className="bg-indigo-100 rounded-full p-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-indigo-500">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-10 flex flex-wrap gap-3 items-center">
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
              <option>Healthcare</option>
              <option>Energy</option>
              <option>Finance</option>
              <option>Retail</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-44">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg text-gray-700">
              <option>Company Size</option>
              <option>Startup</option>
              <option>Small Business</option>
              <option>Mid-Market</option>
              <option>Enterprise</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-44">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg text-gray-700">
              <option>Challenge Type</option>
              <option>Market Entry</option>
              <option>Digital Transformation</option>
              <option>Growth Strategy</option>
              <option>Crisis Management</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-28">
            <div className="flex items-center pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-lg">
              <span className="text-gray-700">Year</span>
              <Calendar className="ml-2 text-gray-500" size={16} />
            </div>
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg transition-colors">
            Search
          </button>
        </div>
      </div>
      
      {/* Case studies grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CaseStudyCard 
          image="https://fakeimg.pl/800x600/f0f9ff/0369a1?text=Wearable+Tech"
          industry="Technology"
          title="Revolutionizing Wearable Technology: The Journey of FitBot"
          tags={[
            { text: "Startup", color: "amber" },
            { text: "Product Development", color: "violet" }
          ]}
          description="Follow the journey of FitBot, a tech startup specializing in wearable fitness devices. Facing intense competition and technological challenges, FitBot transitioned from consumer hardware to product development to create a revolutionary system that seamlessly integrates fitness tracking with health management."
        />
        
        <CaseStudyCard 
          image="https://fakeimg.pl/800x600/f0fdfa/0f766e?text=PharmaCare"
          industry="Healthcare"
          title="Breaking Boundaries: PharmaCare's Expansion Into Emerging Markets"
          tags={[
            { text: "Large Corporation", color: "green" },
            { text: "Market Expansion", color: "red" }
          ]}
          description="Explore how PharmaCare, a leading pharmaceutical company, successfully expanded to countries with emerging markets by developing tailored healthcare solutions. Their strategic partnerships and innovative strategies in preventive healthcare and sustainable distribution channels transformed their global presence."
        />
        
        <CaseStudyCard 
          image="https://fakeimg.pl/800x600/fffbeb/92400e?text=SolarTech"
          industry="Energy"
          title="Powering the Future: SolarTech's Renewable Energy Revolution"
          tags={[
            { text: "Large Corporation", color: "green" },
            { text: "Sustainability Initiatives", color: "teal" }
          ]}
          description="Learn about Solar-Tech, a renewable energy pioneer dedicated to solar power technology. With unwavering commitment to clean energy and environmental sustainability, Solar-Tech developed innovative solar solutions and championed policies to accelerate the transition to renewable energy sources worldwide."
        />
      </div>
    </div>
  );
};

export default BusinessCaseStudiesPlatform;