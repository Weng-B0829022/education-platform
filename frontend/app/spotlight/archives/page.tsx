export default function EducationalArchives() {
    // Archive categories
    const archiveCategories = [
      {
        id: 1,
        title: "Weekly Archives",
        icon: "folder-clock",
        color: "blue"
      },
      {
        id: 2,
        title: "Research Findings",
        icon: "document-magnify",
        color: "blue"
      },
      {
        id: 3,
        title: "Pedagogical Innovations",
        icon: "lightbulb",
        color: "blue"
      },
      {
        id: 4,
        title: "Curriculum Updates",
        icon: "book-open",
        color: "blue"
      },
      {
        id: 5,
        title: "Educational Policies",
        icon: "scale-balance",
        color: "blue"
      },
      {
        id: 6,
        title: "Student Success Stories",
        icon: "user-graduate",
        color: "blue"
      },
      {
        id: 7,
        title: "Interviews with Educators",
        icon: "microphone",
        color: "blue"
      },
      {
        id: 8,
        title: "Teaching Resources",
        icon: "briefcase",
        color: "blue"
      },
      {
        id: 9,
        title: "Educational Events",
        icon: "calendar",
        color: "blue"
      }
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-2/3">
            <h1 className="text-blue-600 text-xl font-bold mb-2">Archives</h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Discover Previous Editions of Education Highlights in the Archives.
            </h2>
            <p className="text-gray-600 mb-4">
              Our comprehensive archive gives you access to past editions of "Education Highlights," featuring valuable insights and innovations in
              teaching methodologies, educational policies, and pedagogical advancements.
            </p>
            <p className="text-gray-600">
              Browse by category to find exactly what you need.
            </p>
          </div>
          
          <div className="md:w-1/3 flex items-center justify-center">
            <div className="relative w-48 h-48">
              {/* Colorful folder illustration */}
              <div className="absolute left-0 top-0 w-32 h-24 bg-blue-100 rounded-t-lg transform rotate-6 z-10"></div>
              <div className="absolute left-4 top-2 w-32 h-24 bg-yellow-200 rounded-t-lg transform rotate-3 z-20"></div>
              <div className="absolute left-8 top-4 w-32 h-24 bg-blue-200 rounded-t-lg transform -rotate-2 z-30"></div>
              
              {/* Document illustration */}
              <div className="absolute right-4 top-6 w-20 h-28 bg-white border border-gray-200 shadow-sm transform rotate-6 z-40">
                <div className="absolute left-2 top-2 w-12 h-2 bg-gray-200 rounded-sm"></div>
                <div className="absolute left-2 top-6 w-16 h-2 bg-gray-200 rounded-sm"></div>
                <div className="absolute left-2 top-10 w-14 h-2 bg-gray-200 rounded-sm"></div>
                <div className="absolute left-2 top-16 w-8 h-8 bg-blue-100 rounded-md"></div>
              </div>
              
              {/* Person icon */}
              <div className="absolute left-12 bottom-4 w-12 h-20 z-50">
                <div className="w-8 h-8 mx-auto bg-blue-500 rounded-full"></div>
                <div className="w-2 h-8 mx-auto bg-blue-500"></div>
                <div className="w-10 h-4 mx-auto bg-blue-500 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Archive Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {archiveCategories.map((category) => (
            <div 
              key={category.id}
              className="bg-white border border-gray-200 rounded-lg p-4 flex items-center space-x-3 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                {category.icon === "folder-clock" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                    <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                  </svg>
                )}
                {category.icon === "document-magnify" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
                    <path fillRule="evenodd" d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                  </svg>
                )}
                {category.icon === "lightbulb" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                )}
                {/* Placeholder icon for other categories */}
                {!["folder-clock", "document-magnify", "lightbulb"].includes(category.icon) && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }