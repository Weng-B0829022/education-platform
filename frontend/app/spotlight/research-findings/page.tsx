"use client";

import { useState } from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ResearchFindings() {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Research articles data
  const articles = [
    {
      id: 1,
      date: {
        day: '03',
        month: 'JUNE',
        year: '2024'
      },
      author: {
        name: 'DR. EMILY ROBERTS',
        role: 'AUTHOR'
      },
      title: 'Enhancing Student Engagement Through Digital Storytelling',
      excerpt: 'An exploration into how digital storytelling boosts student engagement in remote learning environments.',
      imageUrl: '/images/researcher-1.jpg'
    },
    {
      id: 2,
      date: {
        day: '10',
        month: 'JUNE',
        year: '2024'
      },
      author: {
        name: 'DR. MICHAEL JOHNSON',
        role: 'AUTHOR'
      },
      title: 'The Role of Peer Feedback in Improving Writing Skills',
      excerpt: 'A comprehensive study on how feedback enhances writing skills.',
      imageUrl: '/images/researcher-2.jpg'
    },
    {
      id: 3,
      date: {
        day: '17',
        month: 'JUNE',
        year: '2024'
      },
      author: {
        name: 'DR. SARAH THOMPSON',
        role: 'AUTHOR'
      },
      title: 'Exploring the Impact of Mindfulness Practices on Student Well-being',
      excerpt: 'An investigation into how mindfulness affects student well-being.',
      imageUrl: '/images/researcher-3.jpg'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Welcome to PhoenEdX Research Findings, your gateway to<br />
          exploring cutting-edge insights into the world of education.
        </h1>
        <p className="text-sm text-gray-500 mb-16">
          Join us as we explore trending methodologies and pedagogical innovations
        </p>
        
        {/* Hero Illustration */}
        <div className="relative h-80 mx-auto">
          {/* Main search box */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl">
            <div className="relative">
              <div className="h-14 bg-blue-100 rounded-full shadow-lg flex items-center pl-16 pr-4">
                <input
                  type="text"
                  placeholder="Search for research topics, authors, or keywords..."
                  className="w-full bg-transparent border-none focus:outline-none text-gray-700"
                />
              </div>
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Search className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          {/* Blue chat bubble */}
          <div className="absolute left-1/4 top-0 w-48 h-24 bg-blue-400 rounded-2xl transform -translate-x-1/2 -rotate-6 shadow-md flex items-center justify-center">
            <div className="w-12 h-12 bg-blue-600 rounded-full opacity-40"></div>
          </div>
          
          {/* Yellow notebook */}
          <div className="absolute right-1/4 top-1/4 w-32 h-40 bg-yellow-300 transform rotate-12 shadow-md"></div>
          
          {/* Image card */}
          <div className="absolute left-1/6 bottom-0 w-20 h-16 bg-blue-200 rounded-md transform -rotate-6 shadow-md flex items-center justify-center overflow-hidden">
            <div className="w-full h-3/4 bg-blue-400"></div>
            <div className="absolute bottom-1 left-1 w-3 h-3 bg-white rounded-full"></div>
          </div>
          
          {/* Yellow envelope */}
          <div className="absolute right-1/3 bottom-1/6 w-16 h-12 bg-yellow-300 transform rotate-12 shadow-md">
            <div className="absolute top-1/2 right-0 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          
          {/* Pink book */}
          <div className="absolute right-1/6 bottom-0 w-24 h-20 bg-gradient-to-r from-yellow-100 to-pink-200 transform rotate-6 shadow-md flex items-center justify-center">
            <div className="w-px h-full bg-pink-300"></div>
          </div>
          
          {/* Decorative clouds */}
          <div className="absolute left-1/5 top-1/6 w-12 h-6 bg-gray-100 rounded-full"></div>
          <div className="absolute left-1/6 top-1/5 w-16 h-8 bg-gray-100 rounded-full"></div>
          <div className="absolute right-1/5 top-1/6 w-12 h-6 bg-gray-100 rounded-full"></div>
          <div className="absolute right-1/6 top-1/5 w-16 h-8 bg-gray-100 rounded-full"></div>
          
          {/* Decorative stars */}
          <div className="absolute left-2/3 top-1/5 w-6 h-6 transform rotate-45 bg-pink-300"></div>
          <div className="absolute left-1/5 bottom-1/3 w-6 h-6 transform rotate-45 bg-pink-300"></div>
          <div className="absolute right-1/3 bottom-1/4 w-4 h-4 rounded-full bg-yellow-300"></div>
          <div className="absolute right-1/4 bottom-1/4 w-4 h-4 rounded-full bg-pink-300"></div>
          
          {/* Decorative squiggles */}
          <div className="absolute left-10 top-10 h-12 w-5 border-l-4 border-yellow-400 rounded-l-full"></div>
          <div className="absolute right-10 bottom-10 h-16 w-8 border-r-4 border-green-400 rounded-r-full"></div>
        </div>
      </div>
      
      {/* Search Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
        <div className="flex space-x-2">
          <div className="relative">
            <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-md text-sm">
              <span>Category</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-md text-sm">
              <span>Date</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-md text-sm">
              <span>Author</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          
          <div className="relative">
            <button className="flex items-center space-x-1 px-3 py-2 border border-gray-200 rounded-md text-sm">
              <span>Content Type</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <button className="px-8 py-2 bg-blue-500 text-white rounded-md text-sm">
          Search
        </button>
      </div>
      
      {/* Research Articles */}
      <div className="space-y-6 mb-10">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/5 bg-gray-100 p-4 flex flex-col items-center justify-center">
                {/* Researcher image placeholder */}
                <div className="w-16 h-16 rounded-full bg-gray-300 mb-4 overflow-hidden">
                  {article.id === 1 && (
                    <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-300 relative">
                      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-200 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-pink-300"></div>
                    </div>
                  )}
                  {article.id === 2 && (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-300 relative">
                      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-200 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-blue-400"></div>
                    </div>
                  )}
                  {article.id === 3 && (
                    <div className="w-full h-full bg-gradient-to-br from-teal-100 to-teal-300 relative">
                      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-200 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-teal-400"></div>
                    </div>
                  )}
                </div>
                
                {/* Date display */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">
                    {article.date.day}
                  </div>
                  <div className="text-xs text-gray-500">
                    {article.date.month} {article.date.year}
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-6">
                <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{article.excerpt}</p>
                <button className="px-4 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600">
                  Read more
                </button>
              </div>
              
              <div className="md:w-1/5 p-4 bg-gray-50 flex flex-col items-center justify-center">
                <div className="text-xs text-blue-600 font-medium mb-1">{article.author.name}</div>
                <div className="text-xs text-gray-500">{article.author.role}</div>
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
                ? 'bg-blue-500 text-white' 
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