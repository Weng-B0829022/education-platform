import React from 'react';
import { ChevronDown, Search, Filter, ArrowRight, ThumbsUp, MessageSquare } from 'lucide-react';

const TechCard = ({ 
  image, 
  title, 
  description, 
  tags, 
  applicationAreas, 
  articleCount, 
  discussionCount 
}: { 
  image: string, 
  title: string, 
  description: string, 
  tags: string[], 
  applicationAreas: string[], 
  articleCount: string, 
  discussionCount: string
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-xl shadow-sm mb-6 hover:shadow-md transition-shadow border border-gray-100">
      <div className="w-full md:w-40 md:h-40 flex-shrink-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
          {title}
          {title === 'Artificial Intelligence (AI)' && (
            <span className="ml-2 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53-1.471-1.47a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.137-.089l4-5.598z" clipRule="evenodd" />
              </svg>
            </span>
          )}
        </h3>
        <p className="text-gray-600 text-sm mt-2 mb-4">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap items-center gap-1 mb-1">
            <span className="text-xs text-gray-500 font-medium mr-1">Popular topics:</span>
            {tags.map((tag, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-xs text-gray-500 font-medium mr-1">Application areas:</span>
            {applicationAreas.map((area, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                {area}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-gray-500 text-xs">
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1 text-gray-400">
                <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
              </svg>
              Articles: {articleCount}
            </span>
            <span className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              Discussions: {discussionCount}
            </span>
            {title === 'Artificial Intelligence (AI)' && (
              <span className="flex items-center">
                <ThumbsUp className="w-4 h-4 mr-1" />
                86 ratings
              </span>
            )}
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm transition-colors flex items-center">
            Explore More
            <ArrowRight className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const InnovationTechDirectory = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-8 mb-10">
        <div className="lg:w-1/2">
          <h2 className="text-blue-600 font-semibold mb-2">Innovation and Technology</h2>
          <h1 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
            Dive into the Dynamic Intersection of Innovation and Industry Transformation
          </h1>
          <p className="text-gray-600 mb-6">
            Explore the pioneering technologies that are driving profound changes across industries and reshaping the future of business. From artificial intelligence to blockchain and renewable energy, discover how these innovations are creating new opportunities and challenges.
          </p>
          <p className="text-gray-600">
            Join our community of innovators to stay at the forefront of technological advancement.
          </p>
        </div>
        
        <div className="lg:w-1/2">
          <div className="grid grid-cols-3 grid-rows-4 gap-2 max-w-lg mx-auto">
            {[...Array(12)].map((_, i) => (
              <div key={i} className={`rounded-lg overflow-hidden ${i === 3 || i === 6 ? 'col-span-2 row-span-2' : ''}`}>
                <img 
                  src={`https://fakeimg.pl/800x800/0a47a9/e6f7ff?text=Tech${i+1}`} 
                  alt={`Technology illustration ${i+1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          <div className="md:col-span-2 relative">
            <input
              type="text"
              placeholder="Search technologies, topics, trends..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <div className="relative">
            <select className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-8 bg-white">
              <option>Technology Type</option>
              <option>Digital</option>
              <option>Physical</option>
              <option>Hybrid</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative">
            <select className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-8 bg-white">
              <option>Industry</option>
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Manufacturing</option>
              <option>Retail</option>
              <option>Education</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative">
            <select className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-8 bg-white">
              <option>Development Stage</option>
              <option>Emerging</option>
              <option>Growing</option>
              <option>Mature</option>
              <option>Declining</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
              <Filter size={16} className="mr-2" />
              Filter Results
            </button>
          </div>
        </div>
      </div>
      
      {/* Technology Cards */}
      <div>
        <TechCard 
          image="https://fakeimg.pl/400x400/3b82f6/e0f2fe?text=AI"
          title="Artificial Intelligence (AI)"
          description="A branch of computer science focused on creating intelligent machines capable of performing tasks that would typically require human intelligence, such as visual perception, speech recognition, decision-making, and language translation."
          tags={["Machine Learning", "Neural Networks", "Computer Vision", "Deep Learning", "Natural Language Processing"]}
          applicationAreas={["Healthcare", "Finance", "Manufacturing", "Customer Service", "Transportation"]}
          articleCount="124"
          discussionCount="37"
        />
        
        <TechCard 
          image="https://fakeimg.pl/400x400/0891b2/e0f7fa?text=Blockchain"
          title="Blockchain"
          description="A distributed, decentralized, public ledger technology that records transactions across many computers so that any involved record cannot be altered retroactively, without the alteration of all subsequent blocks."
          tags={["Cryptocurrency", "Smart Contracts", "DeFi", "NFTs", "Distributed Ledger"]}
          applicationAreas={["Finance", "Supply Chain", "Healthcare", "Government", "Digital Identity"]}
          articleCount="89"
          discussionCount="42"
        />
        
        <TechCard 
          image="https://fakeimg.pl/400x400/16a34a/f0fdf4?text=Energy"
          title="Renewable Energy"
          description="Energy collected from resources which are naturally replenished on a human timescale, such as sunlight, wind, rain, tides, waves, and geothermal heat. Renewable energy often provides energy for electricity generation, air and water heating/cooling, and transportation."
          tags={["Solar", "Wind", "Hydro", "Geothermal", "Biomass"]}
          applicationAreas={["Utilities", "Residential", "Transportation", "Manufacturing", "Agriculture"]}
          articleCount="76"
          discussionCount="28"
        />
      </div>
    </div>
  );
};

export default InnovationTechDirectory;