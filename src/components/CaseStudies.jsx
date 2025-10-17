import AnimatedLines from './ui/AnimatedLines';
import blobImage from '../assets/caseStudies/blob-case-studies (2).png';

const CaseStudies = () => {
  const customPaths = [
    {
      d: "M200,100 Q400,150 600,120 Q800,90 1000,140",
      gradient: 'primary',
      strokeWidth: 2
    },
    {
      d: "M100,450 Q300,400 500,430 Q700,460 900,420",
      gradient: 'secondary',
      strokeWidth: 2
    }
  ];

  const caseStudyCategories = [
    { text: "Retail\nOperations" },
    { text: "Finance\nAutomation" },
    { text: "Healthcare\nSupport" },
    { text: "Supply Chain\nOptimization" },
    { text: "Customer\nSuccess AI" }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      {/* Animated Background Lines */}
      <AnimatedLines 
        theme="light"
        size="small"
        paths={customPaths}
        viewBox="0 0 1200 600"
        opacity={{ start: 0, end: 0.7 }}
        animation={{
          duration: 2.5,
          stagger: 0.4,
          floatingRange: { x: [-2, 2], y: [-3, 3] },
          floatingDuration: [8, 10],
          delay: 0.5
        }}
      />

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-lime-200/30 to-emerald-200/20 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-lime-200/30 to-emerald-200/20 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-montserrat">
            Explore Our Case Studies
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 font-montserrat">
            Dive into real-world examples of how Devoptics transform artries<br />
            with AI-driven automation.
          </p>
        </div>

        {/* Case Study Category Blobs */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-12">
          {caseStudyCategories.map((category, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer w-64 h-48 sm:w-80 sm:h-60 lg:w-96 lg:h-72"
            >
              {/* Blob image as background */}
              <div className="relative w-full h-full flex items-center justify-center hover:scale-105 transition-all duration-300">
                <img 
                  src={blobImage} 
                  alt={category.text}
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl"
                />
                <span className="relative z-10 text-white font-bold text-sm sm:text-base font-montserrat text-center px-4 sm:px-6 max-w-[150px] sm:max-w-[200px] whitespace-pre-line">
                  {category.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Case Studies Button */}
        <div className="text-center mb-20">
          <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold text-lg px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-montserrat">
            View All Case Studies
          </button>
        </div>

        {/* Case Study Spotlight Section */}
        <div className="mt-20">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 font-montserrat">
              Case Study Spotlight
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Blob Image */}
              <div className="bg-gray-100 rounded-3xl h-64 sm:h-80 flex items-center justify-center">
                <img 
                  src={blobImage} 
                  alt="Case Study Spotlight"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Right Side - Content */}
              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 font-montserrat">
                  Retail Operations: 40% Time Saved
                </h4>
                
                <p className="text-gray-700 text-base sm:text-lg font-montserrat leading-relaxed">
                  See how Devoptics optimized workflows to reduce staffing needs and improve operational, efficiency im the retail sector.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <button className="bg-lime-400 hover:bg-lime-500 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 font-montserrat">
                    Read Full Case Study
                  </button>
                  <button className="border-2 border-gray-900 text-gray-900 font-bold text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300 hover:scale-105 font-montserrat">
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

