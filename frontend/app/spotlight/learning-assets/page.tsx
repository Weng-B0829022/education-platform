"use client";

export default function PedagogicalInnovations() {
  // Data for the innovations funnel
  const funnelLevels = [
    {
      color: "from-yellow-400 to-yellow-500",
      leftText: "ENHANCED ENGAGEMENT",
      rightText: "COLLABORATIVE LEARNING",
      leftIcon: "🔍",
      rightIcon: "👥"
    },
    {
      color: "from-blue-300 to-cyan-400",
      leftText: "PERSONALIZED LEARNING",
      rightText: "GLOBAL PERSPECTIVE",
      leftIcon: "🔄",
      rightIcon: "🌎"
    },
    {
      color: "from-purple-400 to-purple-500",
      leftText: "CRITICAL THINKING SKILLS",
      rightText: "LIFELONG LEARNING HABITS",
      leftIcon: "💭",
      rightIcon: "📚"
    }
  ];

  // Innovation examples below the funnel
  const innovationExamples = [
    {
      title: "Flipped Classroom",
      description: "Students engage with lecture content at home and practice concepts in class with teacher guidance.",
      image: "/images/flipped-classroom.jpg"
    },
    {
      title: "Gamification",
      description: "Incorporating game elements into learning to increase student motivation and engagement.",
      image: "/images/gamification.jpg"
    },
    {
      title: "Personalized Learning",
      description: "Tailoring education to individual needs and preferences for improved outcomes and satisfaction.",
      image: "/images/personalized-learning.jpg"
    },
    {
      title: "Project-Based Learning",
      image: "/images/project-based.jpg",
      description: "" // Partial content in the image
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
          <span>Pedagogical Innovations</span>
          <span className="text-gray-400">-</span>
          <span className="font-normal">Enhancing Learning Experiences</span>
        </h1>
        <p className="text-sm text-gray-600 mt-1 max-w-3xl mx-auto">
          Creating a dynamic educational experience requires combining new educational methods to engage students and strengthen learning outcomes
        </p>
      </div>

      {/* Educational Funnel Visualization */}
      <div className="relative max-w-3xl mx-auto h-96 mb-16">
        {/* Funnel shape with gradient layers */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl">
          {/* Level 1 */}
          <div className="relative h-24 mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg transform rotate-1">
              <div className="absolute inset-x-8 inset-y-3 bg-white rounded-full transform -rotate-1"></div>
            </div>
          </div>

          {/* Level 2 */}
          <div className="relative h-24 mb-4 -mt-6">
            <div className="absolute inset-x-8 inset-y-0 rounded-full bg-gradient-to-r from-blue-300 to-cyan-400 shadow-lg transform -rotate-1">
              <div className="absolute inset-x-8 inset-y-3 bg-white rounded-full transform rotate-1"></div>
            </div>
          </div>

          {/* Level 3 */}
          <div className="relative h-24 -mt-6">
            <div className="absolute inset-x-16 inset-y-0 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-lg transform rotate-1">
              <div className="absolute inset-x-8 inset-y-3 bg-white rounded-full transform -rotate-1"></div>
            </div>
          </div>

          {/* Funnel bulb bottom */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-12 w-10 h-20">
            <div className="w-full h-10 bg-gradient-to-b from-purple-500 to-purple-400 rounded-t-lg"></div>
            <div className="w-full h-10 bg-purple-400 rounded-b-3xl flex items-end justify-center overflow-hidden">
              <div className="w-8 h-8 bg-purple-300 rounded-full transform translate-y-1/2"></div>
            </div>
          </div>
        </div>

        {/* Text and icons overlay */}
        {funnelLevels.map((level, index) => (
          <div 
            key={index} 
            className={`absolute left-0 right-0 flex justify-between items-center text-white font-medium`}
            style={{ top: `${index * 80 + 40}px` }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl">{level.leftIcon}</span>
              </div>
              <span className="text-xs md:text-sm">{level.leftText}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs md:text-sm">{level.rightText}</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl">{level.rightIcon}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Light bulb icon at bottom */}
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-24 text-3xl">
          💡
        </div>
      </div>

      {/* Innovations Section */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Innovations</h2>
          <div className="flex space-x-2">
            <button className="p-1 rounded-full border border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="p-1 rounded-full border border-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Innovation cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {innovationExamples.map((innovation, index) => (
            <div key={index} className="rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                {/* Using a placeholder div instead of actual images */}
                <div className="absolute inset-0 bg-gray-300">
                  {index === 0 && (
                    <div className="w-full h-full bg-amber-50 flex items-center justify-center">
                      <div className="w-3/4 h-1/2 bg-amber-100 rounded-md border border-amber-200"></div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="w-full h-full bg-blue-50 flex items-center justify-center">
                      <div className="grid grid-cols-3 grid-rows-3 gap-1 w-3/4 h-1/2">
                        <div className="bg-blue-200 rounded-md"></div>
                        <div className="bg-green-200 rounded-md"></div>
                        <div className="bg-purple-200 rounded-md"></div>
                        <div className="bg-yellow-200 rounded-md"></div>
                        <div className="bg-red-200 rounded-md"></div>
                        <div className="bg-indigo-200 rounded-md"></div>
                        <div className="bg-pink-200 rounded-md"></div>
                        <div className="bg-teal-200 rounded-md"></div>
                        <div className="bg-orange-200 rounded-md"></div>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="w-full h-full bg-pink-50 flex items-center justify-center">
                      <div className="w-1/2 h-3/4 bg-white rounded-md shadow-md flex items-center justify-center">
                        <div className="w-3/4 h-3/4 border-2 border-pink-300 rounded-md p-2">
                          <div className="w-full h-4 bg-gray-200 rounded-sm mb-2"></div>
                          <div className="w-full h-4 bg-gray-200 rounded-sm mb-2"></div>
                          <div className="w-3/4 h-4 bg-gray-200 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="w-full h-full bg-green-50 flex items-center justify-center">
                      <div className="flex space-x-2">
                        <div className="w-16 h-16 bg-green-200 rounded-md flex items-center justify-center">
                          <div className="w-10 h-10 bg-green-300 rounded-sm"></div>
                        </div>
                        <div className="w-16 h-16 bg-blue-200 rounded-md flex items-center justify-center">
                          <div className="w-10 h-10 bg-blue-300 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{innovation.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{innovation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}