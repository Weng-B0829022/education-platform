export default function StudentSuccessStories() {
    // Featured graduates data
    const featuredGraduates = [
      { name: "Jacob Anderson", company: "", avatar: "/avatars/jacob.jpg" },
      { name: "Emily Rodriguez", company: "Google", avatar: "/avatars/emily.jpg" },
      { name: "Michael Chen", company: "Microsoft", avatar: "/avatars/michael.jpg" },
      { name: "Sophia Lee", company: "", avatar: "/avatars/sophia.jpg" },
      { name: "James Davis", company: "BMW", avatar: "/avatars/james.jpg" },
      { name: "Olivia Roberts", company: "IBM", avatar: "/avatars/olivia.jpg" },
      { name: "David Lewis", company: "Tesla", avatar: "/avatars/david.jpg" },
      { name: "Maria Garcia", company: "Apple", avatar: "/avatars/maria.jpg" },
    ];
  
    // Featured story data
    const featuredStory = {
      name: "Priya Patel",
      title: "Digital Marketing Champion",
      description: "From computer science novice to leading marketing strategist for a major brand in just three years after graduation. From coding lessons to SEO optimization, Priya's journey shows how adaptable tech skills can be.",
      image: "/stories/priya.jpg",
      additionalImages: [
        "/stories/priya-work1.jpg",
        "/stories/priya-work2.jpg",
      ]
    };
  
    // Success stories data
    const successStories = [
      {
        name: "Omar Elliott",
        field: "Software Engineering",
        description: "Started learning programming at age 14, now leading development team at a top tech startup. His innovative solutions in cloud computing have revolutionized how his company manages data infrastructure.",
        avatar: "/avatars/omar.jpg"
      },
      {
        name: "Sophia Cheung",
        field: "UX/UI Design",
        description: "Crafted her first complete web interface during her second year, now designing experiences for millions at a leading tech company. Her user-centered approach has increased product engagement by 45%.",
        avatar: "/avatars/sophia-cheung.jpg"
      },
      {
        name: "Jackson Thompson",
        field: "Data Science",
        description: "Turned his passion for statistics into a thriving career analyzing consumer trends for major retail brands. His predictive models have helped companies save millions in inventory optimization.",
        avatar: "/avatars/jackson.jpg"
      },
      {
        name: "Emma Wilkins",
        field: "Cybersecurity",
        description: "Started learning about network security at 16, now protecting critical systems for a major financial institution. Her work has prevented several high-profile attacks and established new security protocols.",
        avatar: "/avatars/emma.jpg"
      }
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">Inspiring Student Success Stories</h1>
            <div className="ml-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">7</span>
            </div>
          </div>
          <p className="text-gray-600 mt-2 max-w-3xl">
            Welcome to our collection of inspiring student journeys and real-life success stories demonstrating the power of education. Learn from these meaningful experiences as demonstrated through professional accomplishments in prestigious organizations.
          </p>
        </div>
  
        {/* Featured Graduates Scrollable */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-gray-500 mb-4">FEATURED GRADS</h2>
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {featuredGraduates.map((graduate, index) => (
              <div key={index} className="flex flex-col items-center min-w-[80px]">
                <div className="relative mb-2">
                  <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-300"></div>
                  </div>
                  {graduate.company && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                      {graduate.company === "Google" && (
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-red-500"></div>
                      )}
                      {graduate.company === "Microsoft" && (
                        <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-green-500"></div>
                      )}
                      {graduate.company === "Tesla" && (
                        <div className="w-4 h-4 bg-red-500"></div>
                      )}
                      {graduate.company === "BMW" && (
                        <div className="w-4 h-4 rounded-full bg-blue-800"></div>
                      )}
                      {graduate.company === "IBM" && (
                        <div className="w-4 h-4 bg-blue-600"></div>
                      )}
                      {graduate.company === "Apple" && (
                        <div className="w-4 h-4 rounded-full bg-gray-800"></div>
                      )}
                    </div>
                  )}
                </div>
                <span className="text-xs text-center text-gray-800">{graduate.name}</span>
                {graduate.company && (
                  <span className="text-xs text-gray-500">{graduate.company}</span>
                )}
              </div>
            ))}
          </div>
        </div>
  
        {/* Featured Story */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Featured Story</h2>
            <button className="text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
  
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-96 mb-6">
            {/* Main featured image */}
            <div className="col-span-1 row-span-2 bg-purple-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div className="w-40 h-40 bg-gray-400 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
                </div>
              </div>
            </div>
  
            {/* Second featured image */}
            <div className="col-span-1 row-span-1 bg-blue-100 rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="w-20 h-20 bg-gray-400 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700"></div>
                </div>
              </div>
            </div>
  
            {/* Third featured image and text */}
            <div className="col-span-1 row-span-1 bg-white rounded-lg overflow-hidden border border-gray-100 p-4">
              <h3 className="font-bold text-gray-800 mb-1">{featuredStory.name}</h3>
              <p className="text-blue-600 text-sm mb-3">{featuredStory.title}</p>
              <p className="text-gray-600 text-sm mb-4">{featuredStory.description}</p>
              <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md">Read Story</button>
            </div>
          </div>
        </div>
  
        {/* Success Stories */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-800">Success stories</h2>
            <div className="flex space-x-2">
              <button className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, index) => (
              <div key={index} className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-3">
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{story.name}</h3>
                      <p className="text-sm text-gray-500">{story.field}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{story.description}</p>
                  <button className="text-blue-500 text-sm font-medium">Read more</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }