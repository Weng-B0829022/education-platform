import React from 'react';
import { Search, Calendar, MapPin, Clock, ChevronDown, ChevronRight, ChevronLeft, Users } from 'lucide-react';

const EventCard = ({ image, title, category, description, date, location, time, attendees }: { image: string, title: string, category: string, description: string, date: string, location: string, time: string, attendees: string[] }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-center">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            category === 'Marketing' ? 'bg-blue-100 text-blue-800' : 
            category === 'Sustainable' ? 'bg-green-100 text-green-800' : 
            'bg-purple-100 text-purple-800'
          }`}>
            {category}
          </span>
        </div>
        
        <h3 className="font-semibold text-gray-800 text-lg mt-3 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-5 line-clamp-2">{description}</p>
        
        <div className="space-y-2 mb-5">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-blue-500 mr-2" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-blue-500 mr-2" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 text-blue-500 mr-2" />
            <span>{time}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-lg transition-colors">
            Register Now
          </button>
          
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {attendees.map((attendee: string, index: number) => (
                <img 
                  key={index}
                  src={attendee} 
                  alt={`Attendee ${index + 1}`} 
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BusinessEventsPlatform = () => {
  const attendees = [
    "https://fakeimg.pl/200x200/cccccc/909090?text=A1",
    "https://fakeimg.pl/200x200/cccccc/909090?text=A2",
    "https://fakeimg.pl/200x200/cccccc/909090?text=A3",
    "https://fakeimg.pl/200x200/cccccc/909090?text=A4"
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-8 justify-between items-start mb-10">
        <div className="md:w-3/5">
          <h3 className="text-blue-500 font-medium mb-2">Business Events</h3>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Explore Upcoming Events
          </h1>
          <p className="text-gray-600 mb-6">
            Discover conferences, workshops, and seminars tailored for your specific business needs. Whether you're
            looking to expand your network, learn new skills, or stay updated on industry trends, find the perfect events
            that will help you and your team grow.
          </p>
        </div>
        
        <div className="md:w-2/5 flex justify-center">
          <img 
            src="https://fakeimg.pl/500x300/e0f2fe/0284c7?text=Events+Calendar" 
            alt="Events illustration" 
            className="w-full max-w-sm"
          />
        </div>
      </div>
      
      {/* Search filters */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8 flex flex-wrap gap-3 items-center">
        <div className="relative flex-grow max-w-sm">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        <div className="flex flex-wrap gap-3">
          <div className="relative w-28">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-md text-gray-700">
              <option>Type</option>
              <option>Conference</option>
              <option>Workshop</option>
              <option>Seminar</option>
              <option>Networking</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-32">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-md text-gray-700">
              <option>Event Type</option>
              <option>In Person</option>
              <option>Virtual</option>
              <option>Hybrid</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-36">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-md text-gray-700">
              <option>Location</option>
              <option>North America</option>
              <option>Europe</option>
              <option>Asia Pacific</option>
              <option>Middle East</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <div className="relative w-32">
            <select className="appearance-none w-full pl-4 pr-10 py-2 bg-white border border-gray-300 rounded-md text-gray-700">
              <option>Date</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Next Month</option>
              <option>Custom...</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={16} />
          </div>
          
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-5 rounded-md transition-colors">
            Search Events
          </button>
        </div>
      </div>
      
      {/* Events grid - First row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <EventCard 
          image="https://fakeimg.pl/600x400/f3f4f6/64748b?text=Marketing+Workshop"
          category="Marketing"
          title="Marketing Industry Workshop"
          description="Join top marketing professionals for an intensive workshop covering the latest digital marketing strategies, consumer behavior analysis, and brand building techniques."
          date="September 18, 2023"
          location="Chicago, Illinois"
          time="09:00 AM - 04:00 PM"
          attendees={attendees}
        />
        
        <EventCard 
          image="https://fakeimg.pl/600x400/f3f4f6/64748b?text=Business+Conference"
          category="Sustainable"
          title="Sustainable Business Conference"
          description="Explore sustainable business practices, ESG initiatives, and learn how companies are integrating sustainability into their core strategies while maintaining profitability."
          date="June 12, 2023"
          location="Boston, MA"
          time="10:00 AM - 06:00 PM"
          attendees={attendees}
        />
        
        <EventCard 
          image="https://fakeimg.pl/600x400/f3f4f6/64748b?text=Tech+Summit"
          category="Technology"
          title="Tech Summit 2023"
          description="Discover emerging technologies and digital transformation strategies through keynotes, panel discussions, and hands-on workshops led by industry leaders."
          date="August 24, 2023"
          location="San Francisco, CA"
          time="09:30 AM - 05:30 PM"
          attendees={attendees}
        />
      </div>
      
      {/* Events grid - Second row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <EventCard 
          image="https://fakeimg.pl/600x400/f3f4f6/64748b?text=Finance+Forum"
          category="Finance"
          title="Finance Forum 2023"
          description="Connect with finance leaders to discuss investment strategies, financial technologies, risk management approaches, and global economic outlook for the coming year."
          date="September 24, 2023"
          location="New York City, NY"
          time="08:30 AM - 04:30 PM"
          attendees={attendees}
        />
        
        <EventCard 
          image="https://fakeimg.pl/600x400/f3f4f6/64748b?text=Health+Tech"
          category="Healthcare"
          title="HealthTech Innovation Summit"
          description="Discover the intersection of healthcare and technology with discussions on telehealth, AI diagnostics, wearable medical devices, and patient-centered care solutions."
          date="October 15, 2023"
          location="Austin, TX"
          time="09:00 AM - 05:00 PM"
          attendees={attendees}
        />
        
        <EventCard 
          image="https://fakeimg.pl/600x400/f3f4f6/64748b?text=Leadership+Summit"
          category="Leadership"
          title="Leadership Summit 2023"
          description="Develop essential leadership skills with workshops on team management, strategic decision-making, emotional intelligence, and creating inclusive workplace cultures."
          date="November 10, 2023"
          location="Washington, DC"
          time="08:00 AM - 04:00 PM"
          attendees={attendees}
        />
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-12">
        <button className="w-10 h-10 rounded-md flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50">
          <ChevronLeft size={18} />
        </button>
        
        <button className="w-10 h-10 rounded-md flex items-center justify-center border border-transparent bg-blue-50 text-blue-600 font-medium">
          1
        </button>
        
        <button className="w-10 h-10 rounded-md flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50">
          2
        </button>
        
        <button className="w-10 h-10 rounded-md flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50">
          3
        </button>
        
        <button className="w-10 h-10 rounded-md flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50">
          4
        </button>
        
        <button className="w-10 h-10 rounded-md flex items-center justify-center border border-gray-300 text-gray-600 hover:bg-gray-50">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default BusinessEventsPlatform;