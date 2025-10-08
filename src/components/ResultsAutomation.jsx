import { Button } from './ui/button';

const ResultsAutomation = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-950 via-black to-green-950 overflow-hidden">
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

