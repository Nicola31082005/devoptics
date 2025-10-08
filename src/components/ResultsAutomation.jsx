import { Button } from './ui/button';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ResultsAutomation = () => {
  const linesRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Set up each path for drawing animation
    linesRef.current.forEach((path) => {
      if (path) {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      }
    });

    // Create timeline for smooth sequencing
    const tl = gsap.timeline();

    // Animate the lines drawing in
    tl.fromTo(linesRef.current, 
      { 
        strokeDashoffset: (i, el) => el.getTotalLength(),
        opacity: 0 
      },
      {
        strokeDashoffset: 0,
        opacity: 0.6,
        duration: 3,
        stagger: 0.5,
        ease: "power2.out"
      }
    )
    // Add very subtle floating animation after drawing is complete
    .to(linesRef.current, {
      y: "random(-5, 5)",
      x: "random(-3, 3)",
      duration: "random(6, 8)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.3
    }, "+=1"); // Start 1 second after drawing completes
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-950 via-black to-green-950 overflow-hidden">
      {/* Animated Background Lines */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none" 
        viewBox="0 0 1200 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#84cc16" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#84cc16" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#84cc16" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Curved Lines */}
        <path
          ref={el => linesRef.current[0] = el}
          d="M0,50 Q200,150 400,120 Q600,90 800,180 Q1000,250 1200,200"
          stroke="url(#lineGradient1)"
          strokeWidth="2"
          fill="none"
          className="drop-shadow-sm"
        />
        <path
          ref={el => linesRef.current[1] = el}
          d="M-50,700 Q150,600 350,650 Q550,700 750,620 Q950,540 1150,600"
          stroke="url(#lineGradient2)"
          strokeWidth="1.5"
          fill="none"
          className="drop-shadow-sm"
        />
      </svg>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-montserrat">
            Automation that delivers results.
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-montserrat">
            See how AI automation unlocks new opportunities for efficiency and growth.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Statistics */}
          <div className="flex justify-center font-montserrat ml-56">
              <div className="bg-black rounded-2xl p-6 sm:p-10 text-center space-y-3 shadow-xl border border-gray-950">
                <div className="text-7xl sm:text-8xl font-bold bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
                40%
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">
                Time Saved
              </div>
              <p className="text-sm text-gray-400">
                Achieved by one of our<br />clients.
              </p>
            </div>
          </div>

          {/* Right side - Testimonial and CTA */}
          <div className="space-y-8">
            {/* Testimonial */}
            <div className="space-y-4">
              <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed font-montserrat">
                "Devoptics transformed our operations and gave us back valuable time."
              </blockquote>
              <p className="text-gray-400 font-montserrat">
                — CEO, Partner Company
              </p>
            </div>

            {/* CTA Text */}
            <div className="text-xl sm:text-2xl text-white font-medium font-montserrat">
              Discover what's possible with Devoptics.
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-6 rounded-full text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 font-montserrat"
              >
                Explore Case Studies
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-400 hover:border-lime-400 text-white hover:text-lime-400 bg-transparent hover:bg-transparent font-semibold px-8 py-6 rounded-full text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 font-montserrat"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsAutomation;

