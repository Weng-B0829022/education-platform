"use client";

export default function CurriculumUpdates() {
  // Data for the latest updates section
  const latestUpdates = [
    {
      title: "Virtual Reality Integration",
      date: "Apr 15, 2024",
      description: "Adding virtual reality components to science and history curricula"
    },
    {
      title: "Project-Based Learning Initiative",
      date: "Apr 10, 2024",
      description: "Expansion of project-based learning across multiple subjects"
    },
    {
      title: "Global Citizenship Curriculum",
      date: "Mar 28, 2024",
      description: "New module focusing on global awareness and cultural diversity"
    },
    {
      title: "Environmental Sustainability Initiative",
      date: "Mar 15, 2024",
      description: "Integrating sustainability concepts across scientific disciplines"
    },
    {
      title: "Social-Emotional Learning Integration",
      date: "Mar 10, 2024",
      description: "Adding SEL components to enhance student wellbeing"
    },
    {
      title: "Data Literacy Modules",
      date: "Mar 02, 2024",
      description: "New modules focusing on data analysis skills"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gray-100 rounded-lg mb-8 overflow-hidden relative">
        <div className="p-8 flex items-center justify-center">
          <div className="relative">
            {/* Main Curriculum Text */}
            <h1 className="text-6xl font-bold text-teal-500 tracking-wider relative z-10">
              CURRICULUM
            </h1>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 -left-16 w-10 h-10">
              <div className="w-8 h-12 bg-red-400 rounded-tl-2xl rounded-tr-2xl rounded-br-md"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full absolute bottom-0 left-2"></div>
            </div>
            
            <div className="absolute -top-8 right-0">
              <div className="w-10 h-10 bg-red-400 rounded-xl"></div>
              <div className="w-14 h-2 bg-red-500 absolute -bottom-1 left-10"></div>
              <div className="w-6 h-6 bg-gray-600 transform rotate-45 absolute -top-4 right-10"></div>
            </div>
            
            <div className="absolute -bottom-2 right-0 flex items-center">
              <div className="w-6 h-6 rounded-full border-2 border-gray-800"></div>
              <div className="w-40 h-1 bg-gray-800"></div>
              <div className="w-3 h-3 rounded-full bg-gray-800"></div>
              <div className="w-20 h-1 bg-gray-800"></div>
              <div className="w-4 h-4 rounded-full border border-gray-800"></div>
              <div className="w-10 h-1 border-t-2 border-dashed border-gray-800"></div>
              <div className="transform -translate-y-1">
                <div className="w-12 h-3 bg-gray-200 rounded"></div>
                <div className="w-2 h-5 bg-gray-400 absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-2 -left-16 flex items-center">
              <div className="w-10 h-12 bg-red-400 rounded-md"></div>
              <div className="w-60 h-1 bg-gray-800 ml-2"></div>
              <div className="w-3 h-3 rounded-full bg-gray-800"></div>
              <div className="w-10 h-1 border-t-2 border-dashed border-gray-800"></div>
              <div className="w-3 h-3 rounded-full bg-gray-800"></div>
            </div>
            
            {/* Mouse cursor */}
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
              <div className="w-4 h-4 border-t-2 border-l-2 border-gray-800 transform -rotate-45"></div>
              <div className="w-1 h-1 bg-gray-800 absolute top-0 left-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Curriculum Updates</h2>
          <p className="text-gray-600 mb-4">
            This update of the curriculum will be across departments and is differentiated according to education level. 
            These updates will be phased in during the next two years. Changes implemented in Fall 2024 will include the following:
          </p>
          
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">What to Expect</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800">K-12 Improvements</h4>
                <p className="text-gray-600 ml-6">
                  Focus on global citizenship, critical thinking, and digital literacy across curriculum. 
                  Updated content to reflect the latest in science, social studies, and literature.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800">Community College</h4>
                <p className="text-gray-600 ml-6">
                  Enhanced career pathway programs, improved transfer agreements, and digital skill integration.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800">Higher Education Modifications</h4>
                <p className="text-gray-600 ml-6">
                  Focus on skills rather than degree-specific programs, interdisciplinary courses, 
                  implementation of project-based learning and authentic assessments.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Why It Matters</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800">Relevance</h4>
                <p className="text-gray-600 ml-6">
                  Keep pace with curriculum changes to ensure education that motivates and meets the needs of modern learners.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800">Future Readiness</h4>
                <p className="text-gray-600 ml-6">
                  Students need updated skills and knowledge for the workplace of tomorrow.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">How We Help</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-800">Training Workshops</h4>
                <p className="text-gray-600 ml-6">
                  Regular training sessions to design content implementation, focusing on new topics.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800">Insights & Updates</h4>
                <p className="text-gray-600 ml-6">
                  Provide access to recent, up-to-date, and useful insights for the implementation and classroom techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Latest Updates Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-800">Latest Updates</h3>
            <div className="h-px bg-blue-500 flex-grow ml-4"></div>
          </div>
          
          <div className="space-y-6">
            {latestUpdates.map((update, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-0">
                <h4 className="font-semibold text-gray-800 mb-1">{update.title}</h4>
                <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
                  <span>{update.date}</span>
                </div>
                <p className="text-sm text-gray-600">{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}