import React from 'react';
import { Search, Calendar, ChevronDown, TrendingUp, UserCheck, Zap } from 'lucide-react';

const CategoryButton = ({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) => (
  <div className={`flex flex-col items-center justify-center p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}>
    <div className="mb-2">{icon}</div>
    <span className="text-xs text-center whitespace-nowrap">{label}</span>
  </div>
);

const StrategyCard = ({ logo, company, date, title, description, metrics, icon }: { logo: string, company: string, date: string, title: string, description: string, metrics: { label: string, value: string }[], icon: React.ReactNode }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-2 mb-3">
      <img src={logo} alt={company} className="w-8 h-8 rounded-full" />
      <span className="font-medium text-sm">{company}</span>
      <span className="text-xs text-gray-500 ml-auto">{date}</span>
    </div>
    
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-32 bg-gray-800 flex items-center justify-center">
        {logo && <img src={logo} alt={company} className="h-16" />}
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-blue-500">{icon}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Key Figures:</h4>
          <ul className="space-y-1">
            {metrics.map((metric, index) => (
              <li key={index} className="flex items-start text-sm">
                <span className="text-gray-600 mr-2">•</span>
                <span>{metric.label}:</span> 
                <span className="text-blue-600 font-medium ml-1">{metric.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="border-t p-3">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md text-sm transition-colors">
          Explore More
        </button>
      </div>
    </div>
  </div>
);

const BusinessStrategyPlatform = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-10">
        <div className="md:w-3/5">
          <h3 className="text-blue-600 font-medium mb-2">Mastering Business Strategies</h3>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Unlock the Power of Strategic Thinking and Execution
          </h1>
          <p className="text-gray-600 mb-6">
            Welcome to our comprehensive guide to mastering business strategies. In today's
            dynamic and competitive business landscape, success hinges on the ability to
            develop and execute effective strategies that drive growth, innovation, and
            sustainability. Whether you're an aspiring entrepreneur, seasoned business
            professional, or industry enthusiast, this section serves as your roadmap to navigating
            the complexities of strategic decision-making.
          </p>
        </div>
        <div className="md:w-2/5">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl overflow-hidden h-64 relative">
            <img 
              src="https://fakeimg.pl/600x400/0a5fff/ffffff?text=Strategy+Meeting" 
              alt="Business strategy meeting" 
              className="w-full h-full object-cover"
            />
            <img 
              src="https://fakeimg.pl/200x200/ff5a5a/ffffff?text=Rocket" 
              alt="Strategic growth" 
              className="absolute -top-10 right-10 w-32 h-32 transform rotate-12"
            />
          </div>
        </div>
      </div>
      
      {/* Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-8">
        <CategoryButton 
          icon={<img src="https://fakeimg.pl/50x50/eeeeee/808080?text=M&B" alt="Marketing" className="w-10 h-10" />}
          label="Marketing & Branding"
        />
        <CategoryButton 
          icon={<img src="https://fakeimg.pl/50x50/eeeeee/808080?text=S&R" alt="Sales" className="w-10 h-10" />}
          label="Sales & Revenue"
        />
        <CategoryButton 
          icon={<img src="https://fakeimg.pl/50x50/eeeeee/808080?text=OM" alt="Operations" className="w-10 h-10" />}
          label="Operations Management"
        />
        <CategoryButton 
          icon={<img src="https://fakeimg.pl/50x50/eeeeee/808080?text=I&T" alt="Innovation" className="w-10 h-10" />}
          label="Innovation & Tech"
          active={true}
        />
        <CategoryButton 
          icon={<img src="https://fakeimg.pl/50x50/eeeeee/808080?text=OE" alt="Operational" className="w-10 h-10" />}
          label="Operational Efficiency"
        />
        <CategoryButton 
          icon={<img src="https://fakeimg.pl/50x50/eeeeee/808080?text=S&M" alt="Strategy" className="w-10 h-10" />}
          label="Strategic Planning"
        />
      </div>
      
      {/* Search filters */}
      <div className="flex flex-wrap gap-3 mb-8 items-center">
        <div className="relative flex-grow max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <div className="relative w-40">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-md">
              <option>Industry</option>
              <option>Technology</option>
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Manufacturing</option>
              <option>Retail</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-40">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-md">
              <option>Company</option>
              <option>Startups</option>
              <option>SMBs</option>
              <option>Enterprise</option>
              <option>Non-profit</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-32">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-md">
              <option>Topic</option>
              <option>Growth</option>
              <option>Optimization</option>
              <option>Expansion</option>
              <option>Turnaround</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-40">
            <input
              type="text"
              placeholder="DD/MM/YYYY"
              className="pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-md w-full"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition-colors">
            Search
          </button>
        </div>
      </div>
      
      {/* Strategy cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StrategyCard 
          logo="https://fakeimg.pl/200x200/0a2540/ffffff?text=TECHCORP"
          company="TechCorp"
          date="August 14, 2024"
          title="Marketing & Branding"
          description="Elevate your brand with effective marketing and branding strategies. Cultivate customer loyalty, generate awareness, and drive sales."
          icon={<TrendingUp size={18} />}
          metrics={[
            { label: "Social Media", value: "+60% brand engagement" },
            { label: "Content Strategy", value: "40% lead generation" },
            { label: "Branding", value: "+35% brand recognition" },
            { label: "Influencer Marketing", value: "+78% purchase intent" }
          ]}
        />
        
        <StrategyCard 
          logo="https://fakeimg.pl/200x200/204060/ffffff?text=DATA"
          company="DataSolutions"
          date="August 15, 2024"
          title="Sales & Revenue"
          description="Boost your bottom line with strategic sales and revenue generation techniques. Increase sales, maximize conversions, and build business growth."
          icon={<Zap size={18} />}
          metrics={[
            { label: "Sales Techniques", value: "+70% conversion rate" },
            { label: "Pricing Strategy", value: "+25% profit margin" },
            { label: "Cross-selling", value: "+40% revenue per customer" },
            { label: "Upselling", value: "+25% average transaction value" }
          ]}
        />
        
        <StrategyCard 
          logo="https://fakeimg.pl/200x200/602010/ffffff?text=INNOVATE"
          company="InnovateX"
          date="August 20, 2024"
          title="Customer Management"
          description="Deliver exceptional customer experiences and build lasting relationships to boost customer loyalty and retention rates."
          icon={<UserCheck size={18} />}
          metrics={[
            { label: "Customer Satisfaction", value: "+35% retention rate" },
            { label: "Customer loyalty", value: "+40% repeat purchases" },
            { label: "Customer Feedback", value: "+30% product improvement" },
            { label: "Personalization", value: "+55% customer engagement" }
          ]}
        />
      </div>
    </div>
  );
};

export default BusinessStrategyPlatform;