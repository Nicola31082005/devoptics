import { Button } from './ui/button';
import AnimatedLines from './ui/AnimatedLines';
import icon1 from '../assets/whatIsDifferent/attatchment.hlm0gE.png';
import icon2 from '../assets/whatIsDifferent/attatchment.R0Vzqx.png';
import icon3 from '../assets/whatIsDifferent/attatchment.ztRBFF.png';

const WhatIsDifferent = () => {
  const features = [
    {
      icon: <img src={icon1} alt="Scalable by Design" className="w-16 h-16" />,
      title: "Scalable by Design",
      description: "Start small and expand automation as your business grows."
    },
    {
        icon: <img src={icon3} alt="Real Results" className="w-16 h-16" />,
        title: "Seamless Integration",
        description: "Connect with your existing tools and systems effortlessly."
    },
    {
      icon: <img src={icon2} alt="Seamless Integration" className="w-16 h-16" />,
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
        <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl border-2 border-lime-400/30 shadow-[0_0_80px_rgba(132,204,22,0.15)] p-3 sm:p-4 md:p-6 lg:p-8">
          {/* Inner White/Light Content Card */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-montserrat px-2">
                What Makes Devoptics Different
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-montserrat max-w-3xl mx-auto font-semibold px-4">
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
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:gap-8">
                {/* Stats */}
                <div className="text-center md:text-left flex-shrink-0">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-lime-400 font-montserrat">
                    2M+ Automated Tasks
                  </div>
                </div>
                
                {/* Quote */}
                <div className="text-center md:text-right max-w-2xl">
                  <blockquote className="text-sm sm:text-base md:text-lg text-gray-200 font-montserrat italic mb-2">
                    "Devoptics has become the backbone of our operations."
                  </blockquote>
                  <cite className="text-xs sm:text-sm text-gray-400 font-montserrat not-italic">
                    — CEO, Client Company
                  </cite>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 font-montserrat text-center sm:whitespace-nowrap px-2">
                Ready to choose your pack?
              </h3>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-200 hover:shadow-lg hover:scale-105 font-montserrat w-full sm:w-auto"
                >
                  Explore Case Studies
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-800 hover:border-gray-900 text-gray-900 hover:text-gray-900 bg-transparent hover:bg-gray-50 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-200 hover:shadow-lg hover:scale-105 font-montserrat w-full sm:w-auto"
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
