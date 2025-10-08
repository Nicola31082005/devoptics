import { Button } from './ui/button';
import AnimatedLines from './ui/AnimatedLines';

const WhatIsDifferent = () => {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M24 8L26.1 18.5L36 16L28.5 24L36 32L26.1 29.5L24 40L21.9 29.5L12 32L19.5 24L12 16L21.9 18.5L24 8Z" 
            fill="url(#gradient1)" 
            stroke="currentColor" 
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Scalable by Design",
      description: "Start small and expand automation as your business grows."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="8" fill="url(#gradient2)" stroke="currentColor" strokeWidth="2"/>
          <circle cx="30" cy="18" r="8" fill="url(#gradient2)" stroke="currentColor" strokeWidth="2"/>
          <circle cx="24" cy="30" r="8" fill="url(#gradient2)" stroke="currentColor" strokeWidth="2"/>
          <path d="M22 22L26 26" stroke="currentColor" strokeWidth="2"/>
          <path d="M26 22L22 26" stroke="currentColor" strokeWidth="2"/>
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Seamless Integration",
      description: "Connect with your existing tools and systems effortlessly."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="32" width="4" height="8" fill="url(#gradient3)" rx="2"/>
          <rect x="16" y="24" width="4" height="16" fill="url(#gradient3)" rx="2"/>
          <rect x="24" y="16" width="4" height="24" fill="url(#gradient3)" rx="2"/>
          <rect x="32" y="20" width="4" height="20" fill="url(#gradient3)" rx="2"/>
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#84cc16" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
        </svg>
      ),
      title: "Real Results",
      description: "Our clients report significant time and cost savings."
    }
  ];

  const customPaths = [
    // Left side curved lines
    {
      d: "M-50,200 Q100,250 150,350 Q200,450 250,550 Q300,650 350,750",
      gradient: 'primary',
      strokeWidth: 3
    },
    {
      d: "M-100,300 Q50,380 100,480 Q150,580 200,680 Q250,780 300,880",
      gradient: 'primary',
      strokeWidth: 2.5
    },
    {
      d: "M0,400 Q80,480 130,580 Q180,680 230,780",
      gradient: 'secondary',
      strokeWidth: 2
    },
    // Bottom curved lines
    {
      d: "M200,800 Q400,750 600,780 Q800,810 1000,780 Q1200,750 1400,800",
      gradient: 'primary',
      strokeWidth: 3
    },
    {
      d: "M150,850 Q350,820 550,850 Q750,880 950,850 Q1150,820 1350,870",
      gradient: 'secondary',
      strokeWidth: 2.5
    },
    {
      d: "M100,900 Q300,870 500,900 Q700,930 900,900 Q1100,870 1300,920",
      gradient: 'primary',
      strokeWidth: 2
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
      {/* Animated Background Lines */}
      <AnimatedLines 
        theme="light"
        size="medium"
        paths={customPaths}
        viewBox="0 0 1400 1000"
        opacity={{ start: 0, end: 0.9 }}
        animation={{
          duration: 3,
          stagger: 0.3,
          floatingRange: { x: [-3, 3], y: [-4, 4] },
          floatingDuration: [10, 14],
          delay: 0.3
        }}
      />

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-lime-200/30 to-emerald-200/20 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-800/20 to-gray-600/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Outer Dark Card with Glowing Border */}
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-3xl border-2 border-lime-400/30 shadow-[0_0_80px_rgba(132,204,22,0.15)] p-4 sm:p-6 lg:p-8">
          {/* Inner White/Light Content Card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 lg:p-14">
            {/* Header Section */}
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-montserrat">
                What Makes Devoptics Different
              </h2>
              <p className="text-base sm:text-lg text-gray-600 font-montserrat max-w-3xl mx-auto font-semibold">
                Our automation solutions are designed to scale with your business and deliver measurable results.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="text-center space-y-4">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 flex items-center justify-center text-gray-800">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-montserrat">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base font-montserrat leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonial Section */}
            <div className="bg-gray-800 rounded-2xl p-8 mb-10">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:gap-8">
                {/* Stats */}
                <div className="text-center md:text-left flex-shrink-0">
                  <div className="text-3xl sm:text-4xl font-bold text-lime-400 font-montserrat">
                    2M+ Automated Tasks
                  </div>
                </div>
                
                {/* Quote */}
                <div className="text-center md:text-right max-w-2xl">
                  <blockquote className="text-base sm:text-lg text-gray-200 font-montserrat italic mb-2">
                    "Devoptics has become the backbone of our operations."
                  </blockquote>
                  <cite className="text-sm text-gray-400 font-montserrat not-italic">
                    — CEO, Client Company
                  </cite>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-montserrat whitespace-nowrap">
                Ready to choose your pack?
              </h3>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-lg hover:scale-105 font-montserrat"
                >
                  Explore Case Studies
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-800 hover:border-gray-900 text-gray-900 hover:text-gray-900 bg-transparent hover:bg-gray-50 font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-lg hover:scale-105 font-montserrat"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDifferent;
