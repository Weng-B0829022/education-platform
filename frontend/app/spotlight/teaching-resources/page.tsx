export default function TeachingResources() {
    const lessonPlans = [
      {
        id: 1,
        title: "Exploring Ecosystems: A Hands-On Science Adventure",
        subject: "Science",
        level: "Grades 4-6",
        description: "Engage students in understanding ecosystem dynamics through interactive models and outdoor exploration activities.",
        downloads: 1245,
        format: "PDF, Google Docs",
        designer: "Dr. Rebecca Martinez",
        image: "/images/ecosystems-lesson.jpg"
      },
      {
        id: 2,
        title: "Writing Journey: Crafting Creative Future Worlds",
        subject: "English",
        level: "Grades 7-9",
        description: "Guide students in building detailed future world scenarios through structured creative writing exercises.",
        downloads: 978,
        format: "PDF, Editable Worksheets",
        designer: "James Wilson, M.Ed.",
        image: "/images/writing-journey.jpg"
      },
      {
        id: 3,
        title: "Math Mysteries: 5-in-1 Real World Challenge",
        subject: "Mathematics",
        level: "Grades 5-8",
        description: "Engage students with real-life mathematical mysteries requiring critical thinking and collaborative problem-solving.",
        downloads: 1387,
        format: "PDF, Excel, Google Sheets",
        designer: "Samantha Chen, Ph.D.",
        image: "/images/math-mysteries.jpg"
      }
    ];
  
    const educationalTools = [
      {
        id: 1,
        title: "Interactive Presentation Builder",
        category: "Digital Tools",
        description: "Quickly create engaging, interactive presentations with built-in assessment tools and multimedia support.",
        compatibility: "Web, iOS, Android",
        type: "SaaS / Online Tool",
        image: "/images/presentation-builder.jpg"
      },
      {
        id: 2,
        title: "Quizzes and Assessment Tools",
        category: "Assessment",
        description: "Comprehensive quiz builder with automatic grading, detailed analytics, and differentiated question types.",
        compatibility: "All devices",
        type: "Web Application",
        image: "/images/assessment-tools.jpg"
      }
    ];
  
    const worksheets = [
      {
        id: 1,
        title: "Early Shapes Collection: Printable Forms Series",
        subject: "Mathematics",
        level: "K-2",
        description: "Colorful worksheets for introducing geometric shapes with progressive difficulty levels and tactile learning components.",
        pages: 24,
        format: "PDF, Printable",
        designer: "Maria Rodriguez",
        image: "/images/shapes-worksheets.jpg"
      },
      {
        id: 2,
        title: "Literary Analysis: Exploring Theme and Symbolism",
        subject: "English Literature",
        level: "Grades 9-12",
        description: "Structured worksheets guiding students through analyzing themes and symbols in classic and contemporary literature.",
        pages: 18,
        format: "PDF, Google Docs",
        designer: "Dr. Thomas Bennett",
        image: "/images/literary-analysis.jpg"
      },
      {
        id: 3,
        title: "Science Lab Safety: Rules and Procedures",
        subject: "Science",
        level: "Grades 6-12",
        description: "Comprehensive worksheets covering laboratory safety protocols, equipment handling, and emergency procedures.",
        pages: 15,
        format: "PDF, Printable",
        designer: "Safety First Educational Group",
        image: "/images/lab-safety.jpg"
      }
    ];
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
        {/* Hero Section */}
        <div className="relative mb-16">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Empower Your Teaching:</h1>
            <h2 className="text-xl text-gray-700 mb-6">Explore Our Comprehensive Teaching Resources</h2>
            <p className="text-gray-600 mb-6">
              Welcome to our teaching resources hub. You'll find a wealth of materials designed to support 
              educators at all levels and subjects, helping to make impactful learning experiences.
            </p>
            <p className="text-gray-600 mb-6">
              Our carefully curated collection includes lesson plans, interactive digital tools, printable 
              worksheets, assessment materials, and professional development resources.
            </p>
            <p className="text-gray-600">
              These resources have been developed by experienced educators and curriculum specialists 
              to align with educational standards while engaging students in meaningful learning.
            </p>
          </div>
  
          {/* Decorative Elements */}
          <div className="absolute left-0 top-8">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 bg-amber-100 rounded-full">
                <div className="absolute inset-1 bg-amber-200 rounded-full">
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-amber-500 rotate-45"></div>
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-1 bg-amber-500 -rotate-45"></div>
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-1 h-8 bg-amber-500"></div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="absolute right-0 top-16">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 bg-gray-100 rounded-full">
                <div className="absolute inset-4 bg-gray-200 rounded-full"></div>
                <div className="absolute top-2 right-4 w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-2 left-4 w-6 h-2 bg-blue-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
          </div>
  
          <div className="absolute left-10 bottom-0">
            <div className="relative w-24 h-16">
              <div className="w-12 h-12 bg-blue-500 rounded-t-full overflow-hidden relative">
                <div className="absolute w-12 h-6 bg-white top-0 rounded-t-full"></div>
                <div className="absolute left-3 top-3 w-6 h-6 bg-white rounded-full"></div>
                <div className="absolute w-24 h-4 bg-yellow-400 bottom-0"></div>
              </div>
            </div>
          </div>
  
          <div className="absolute right-16 bottom-0">
            <div className="relative w-24 h-24">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-300 rounded-full overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-6 bg-blue-500 rounded-br-full"></div>
                <div className="absolute bottom-0 left-0 w-8 h-6 bg-green-500 rounded-tl-full"></div>
                <div className="absolute top-0 left-4 w-8 h-6 bg-yellow-500 rounded-bl-full"></div>
              </div>
            </div>
          </div>
  
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-16">
            <div className="relative w-64 h-12">
              <div className="absolute inset-x-0 top-0 h-6 bg-blue-400 rounded-full"></div>
              <div className="absolute inset-x-8 -bottom-4 h-12 bg-yellow-400 rounded-t-lg"></div>
            </div>
          </div>
  
          {/* Colorful splashes */}
          <div className="absolute top-0 left-0 w-8 h-8 bg-blue-200 rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-10 right-10 w-4 h-4 bg-pink-200 rounded-full opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-yellow-200 rounded-full opacity-50 transform translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/4 left-1/4 w-5 h-5 bg-green-200 rounded-full opacity-50"></div>
        </div>
  
        {/* Lesson Plans Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <h2 className="text-lg font-bold text-gray-800">Lesson Plans</h2>
              <span className="ml-2 text-xs text-gray-500">PAGE 1/7</span>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 rounded-md text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-1 rounded-md text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lessonPlans.map((plan) => (
              <div key={plan.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                    {plan.id === 1 && (
                      <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center">
                        <div className="w-16 h-16 bg-green-300 rounded-full"></div>
                      </div>
                    )}
                    {plan.id === 2 && (
                      <div className="w-24 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                        <div className="w-16 h-1 bg-blue-400 mb-2"></div>
                        <div className="w-12 h-1 bg-blue-300 mb-2"></div>
                        <div className="w-14 h-1 bg-blue-200"></div>
                      </div>
                    )}
                    {plan.id === 3 && (
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-12 bg-red-300 rounded-md transform rotate-12 absolute"></div>
                        <div className="w-6 h-12 bg-blue-300 rounded-md absolute"></div>
                        <div className="w-6 h-12 bg-green-300 rounded-md transform -rotate-12 absolute"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span className="mr-3">{plan.subject}</span>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                      <span>{plan.level}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{plan.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{plan.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <div>Downloads: {plan.downloads}</div>
                    <div>Format: {plan.format}</div>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">
                    Created by: <span className="text-blue-600">{plan.designer}</span>
                  </div>
                  <button className="w-full bg-blue-500 text-white rounded-md py-2 text-sm font-medium hover:bg-blue-600 transition-colors">
                    Download Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Educational Tools Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <h2 className="text-lg font-bold text-gray-800">Educational tools</h2>
              <span className="ml-2 text-xs text-gray-500">PAGE 1/3</span>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 rounded-md text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-1 rounded-md text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationalTools.map((tool) => (
              <div key={tool.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-50 flex items-center justify-center">
                    {tool.id === 1 && (
                      <div className="w-48 h-32 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4">
                        <div className="w-full h-4 bg-blue-100 rounded-sm mb-2"></div>
                        <div className="w-full flex items-center mb-3">
                          <div className="w-12 h-12 bg-red-400 rounded-full mr-3"></div>
                          <div className="flex-1">
                            <div className="w-full h-2 bg-gray-200 rounded-sm mb-1"></div>
                            <div className="w-2/3 h-2 bg-gray-200 rounded-sm"></div>
                          </div>
                        </div>
                        <div className="w-full flex space-x-2">
                          <div className="w-1/3 h-6 bg-blue-200 rounded-sm"></div>
                          <div className="w-1/3 h-6 bg-green-200 rounded-sm"></div>
                          <div className="w-1/3 h-6 bg-yellow-200 rounded-sm"></div>
                        </div>
                      </div>
                    )}
                    {tool.id === 2 && (
                      <div className="grid grid-cols-3 grid-rows-2 gap-3">
                        <div className="w-12 h-12 bg-purple-300 rounded-md"></div>
                        <div className="w-12 h-12 bg-blue-300 rounded-md"></div>
                        <div className="w-12 h-12 bg-green-300 rounded-md"></div>
                        <div className="w-12 h-12 bg-yellow-300 rounded-md"></div>
                        <div className="w-12 h-12 bg-red-300 rounded-md"></div>
                        <div className="w-12 h-12 bg-pink-300 rounded-md"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span>{tool.category}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{tool.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <div>Compatibility: {tool.compatibility}</div>
                    <div>Type: {tool.type}</div>
                  </div>
                  <button className="w-full bg-blue-500 text-white rounded-md py-2 text-sm font-medium hover:bg-blue-600 transition-colors">
                    Access Tool
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Worksheets Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <h2 className="text-lg font-bold text-gray-800">Worksheets</h2>
              <span className="ml-2 text-xs text-gray-500">PAGE 1/5</span>
            </div>
            <div className="flex space-x-2">
              <button className="p-1 rounded-md text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-1 rounded-md text-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {worksheets.map((worksheet) => (
              <div key={worksheet.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                    {worksheet.id === 1 && (
                      <div className="flex flex-wrap w-32 h-32 justify-center items-center">
                        <div className="w-8 h-8 bg-red-300 rounded-md m-1 transform rotate-45"></div>
                        <div className="w-10 h-10 bg-yellow-300 rounded-full m-1"></div>
                        <div className="w-8 h-8 bg-blue-300 m-1"></div>
                        <div className="w-10 h-5 bg-green-300 rounded-full m-1"></div>
                        <div className="w-12 h-6 bg-purple-300 rounded-md m-1"></div>
                      </div>
                    )}
                    {worksheet.id === 2 && (
                      <div className="w-32 h-32 bg-blue-50 rounded-lg p-4">
                        <div className="w-full h-4 bg-gray-300 rounded mb-3"></div>
                        <div className="w-full h-3 bg-gray-300 rounded mb-3"></div>
                        <div className="w-3/4 h-3 bg-gray-300 rounded mb-6"></div>
                        <div className="w-full flex justify-between">
                          <div className="w-5 h-5 bg-blue-300 rounded-full"></div>
                          <div className="w-5 h-5 bg-red-300 rounded-full"></div>
                          <div className="w-5 h-5 bg-green-300 rounded-full"></div>
                        </div>
                      </div>
                    )}
                    {worksheet.id === 3 && (
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-yellow-300 rounded-t-lg flex items-center justify-center mb-2">
                          <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="w-20 h-4 bg-gray-400 rounded-sm"></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <span className="mr-3">{worksheet.subject}</span>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                      <span>{worksheet.level}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{worksheet.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{worksheet.description}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                    <div>{worksheet.pages} pages</div>
                    <div>Format: {worksheet.format}</div>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">
                    Created by: <span className="text-blue-600">{worksheet.designer}</span>
                  </div>
                  <button className="w-full bg-blue-500 text-white rounded-md py-2 text-sm font-medium hover:bg-blue-600 transition-colors">
                    Download Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }