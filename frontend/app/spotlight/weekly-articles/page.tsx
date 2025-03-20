"use client";

import { useState } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function EducationInsights() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Featured articles
  const featuredArticles = [
    {
      id: 1,
      category: "FEATURED",
      title: "Promoting Well-being: Strategies to Support Student Mental Health",
      date: "May 3, 2024",
      image: "/images/student-wellbeing.jpg",
    },
    {
      id: 2,
      category: "ARTS FOCUS",
      title: "Cultivating Innovation: The Vital Role of Arts Education",
      date: "May 2, 2024",
      image: "/images/arts-education.jpg",
    },
    {
      id: 3,
      category: "DIGITAL INSIGHTS",
      title: "Digital Literacy Essentials: Empowering Students in a Connected World",
      date: "May 4, 2024",
      image: "/images/digital-literacy.jpg",
    },
    {
      id: 4,
      category: "TEACHING METHODS",
      title: "Cultivating Creativity: Strategies for Effective Education",
      date: "May 1, 2024",
      image: "/images/creativity-education.jpg",
    },
  ];
  
  // Regular article listings
  const articles = [
    {
      id: 5,
      category: "Technology Use",
      title: "Empowering Student Voice: The Impact of Project-Based Learning",
      date: "May 1, 2023",
      excerpt: "Innovative teaching methods are transforming student engagement...",
      image: "/images/project-learning.jpg",
    },
    {
      id: 6,
      category: "Advanced Topics",
      title: "Fostering Critical Thinking: Strategies for Effective Classroom Discussions",
      date: "May 2, 2023",
      excerpt: "Advanced discussion techniques to ignite purposeful...",
      image: "/images/critical-thinking.jpg",
    },
    {
      id: 7,
      category: "Science Studies",
      title: "Hands-On Science: The Importance of Inquiry-Based Learning",
      date: "May 12, 2023",
      excerpt: "Practical science methods for inspiring student curiosity...",
      image: "/images/science-inquiry.jpg",
    },
    {
      id: 8,
      category: "Collaboration",
      title: "The Power of Peer Tutoring: Enhancing Learning Through Collaboration",
      date: "May 14, 2023",
      excerpt: "Structured peer-to-peer learning increases student success...",
      image: "/images/peer-tutoring.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">PhoenEdX Weekly Education Insights & Highlights</h1>
          
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-3">Stay Informed, Inspired, and Engaged</h2>
            <p className="text-gray-600 mb-4">
              Dive into a curated selection of articles written by educators, researchers, 
              and experts covering a diverse array of topics from pedagogical 
              strategies to policy changes. Whether you're an educator, student, parent, 
              or simply passionate about learning, our weekly updates provide valuable 
              insights and inspiration to fuel your educational journey.
            </p>
          </div>
        </div>
        
        {/* Hero illustration */}
        <div className="flex justify-center">
          <div className="relative h-80 w-full">
            <div className="absolute inset-0 bg-blue-50 rounded-lg flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Stylized computer */}
                <div className="absolute inset-0 bg-blue-100 rounded-lg"></div>
                <div className="absolute left-4 right-4 top-4 h-32 bg-blue-500 rounded-md"></div>
                <div className="absolute left-4 right-4 top-40 h-6 bg-blue-300 rounded-md"></div>
                <div className="absolute left-4 right-4 top-48 h-6 bg-blue-300 rounded-md"></div>
                <div className="absolute left-4 right-4 top-56 h-6 bg-blue-300 rounded-md"></div>
                <div className="absolute left-1/2 -bottom-4 transform -translate-x-1/2 w-24 h-1 bg-blue-400"></div>
                <div className="absolute left-1/2 -bottom-8 transform -translate-x-1/2 w-36 h-4 bg-blue-700 rounded-md"></div>
                
                {/* Decorative elements */}
                <div className="absolute -left-8 top-8 w-16 h-12 bg-blue-200 transform -rotate-12 rounded-md"></div>
                <div className="absolute -right-8 top-16 w-12 h-8 bg-blue-200 transform rotate-12 rounded-md"></div>
                <div className="absolute left-48 bottom-16 w-8 h-8 bg-blue-300 rounded-full"></div>
                <div className="absolute left-56 bottom-24 w-6 h-6 bg-blue-200 rounded-full"></div>
                
                {/* Plant */}
                <div className="absolute -left-12 bottom-0 w-8 h-16 flex flex-col items-center">
                  <div className="w-5 h-12 bg-blue-600 rounded-b-md"></div>
                  <div className="w-12 h-8 -mt-2 bg-blue-100 rounded-full"></div>
                  <div className="w-10 h-6 -mt-4 bg-blue-200 rounded-full"></div>
                  <div className="w-8 h-4 -mt-2 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {featuredArticles.map((article, index) => (
          <div 
            key={article.id} 
            className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'} rounded-lg overflow-hidden border border-gray-100 hover:shadow-md transition-shadow`}
          >
            <div className="w-1/2 bg-gray-100 relative">
              <div className="absolute inset-0 bg-gray-200">
                {article.id === 1 && (
                  <div className="w-full h-full relative flex items-center justify-center">
                    <div className="w-32 h-40 relative overflow-hidden">
                      <div className="absolute inset-0 bg-pink-100 rounded-t-full"></div>
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-200 rounded-full"></div>
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-blue-300 rounded-md"></div>
                    </div>
                  </div>
                )}
                {article.id === 2 && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-blue-700 rounded-lg rotate-45"></div>
                  </div>
                )}
                {article.id === 3 && (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-16 bg-blue-400 rounded"></div>
                      <div className="h-16 bg-blue-500 rounded"></div>
                      <div className="h-16 bg-blue-600 rounded"></div>
                    </div>
                  </div>
                )}
                {article.id === 4 && (
                  <div className="w-full h-full relative">
                    <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-blue-300 rounded-full"></div>
                    <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-green-300 rounded-full"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-yellow-300 rounded-full"></div>
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-between">
              <div>
                <div className="text-xs text-blue-600 font-medium mb-1">{article.category}</div>
                <h3 className="text-sm font-semibold mb-2 line-clamp-3">{article.title}</h3>
              </div>
              <div className="text-xs text-gray-500">{article.date}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Search and Filters */}
      <div className="flex flex-wrap items-center space-y-2 md:space-y-0 gap-3 mb-8 border-b pb-4">
        <div className="relative flex-grow max-w-sm">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <div className="relative">
            <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-md">
              <span className="text-sm">Topic</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-md">
              <span className="text-sm">Author</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-md">
              <span className="text-sm">Article Type</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-md">
              <span className="text-sm">Educational Level</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-md">
              <span className="text-sm">Date</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          
          <button className="px-8 py-2 bg-blue-600 text-white rounded-md">
            Search
          </button>
        </div>
      </div>
      
      {/* Article Listings */}
      <div className="space-y-8 mb-12">
        {articles.map((article) => (
          <div key={article.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b pb-8">
            <div className="md:col-span-1">
              <div className="h-32 bg-gray-200 rounded-lg relative overflow-hidden">
                {/* Placeholder image elements */}
                {article.id === 5 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center bg-amber-50">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 bg-amber-200 rounded-full"></div>
                        <div className="absolute inset-2 bg-amber-300 rounded-full"></div>
                        <div className="absolute inset-4 bg-amber-400 rounded-full"></div>
                        <div className="absolute inset-6 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
                {article.id === 6 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-blue-50">
                    <div className="w-20 h-20 relative">
                      <div className="absolute inset-0 bg-blue-200 rounded-lg transform rotate-45"></div>
                      <div className="absolute inset-4 bg-blue-300 rounded-lg transform rotate-45"></div>
                      <div className="absolute inset-8 bg-blue-400 rounded-lg transform rotate-45"></div>
                    </div>
                  </div>
                )}
                {article.id === 7 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-green-50">
                    <div className="w-24 h-24 relative">
                      <div className="absolute top-0 left-0 w-12 h-12 bg-green-200 rounded-full"></div>
                      <div className="absolute top-6 left-12 w-10 h-10 bg-green-300 rounded-full"></div>
                      <div className="absolute top-14 left-4 w-8 h-8 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                )}
                {article.id === 8 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center bg-amber-50">
                      <div className="relative w-16 h-16">
                        <div className="absolute inset-0 bg-amber-200 rounded-full"></div>
                        <div className="absolute inset-2 bg-amber-300 rounded-full"></div>
                        <div className="absolute inset-4 bg-amber-400 rounded-full"></div>
                        <div className="absolute inset-6 bg-amber-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="text-xs text-blue-600 font-medium mb-2">{article.category}</div>
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <button className="text-sm bg-blue-100 text-blue-700 px-4 py-1 rounded-md hover:bg-blue-200">
                  Read more
                </button>
                <span className="text-xs text-gray-500">{article.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
              currentPage === page 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        
        <button className="p-2 rounded-full hover:bg-gray-100">
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}