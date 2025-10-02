import { Button } from './ui/button';

const BusinessAutomation = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight font-montserrat">
                AI BUSINESS
                <br />
                <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
                  AUTOMATION
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-black leading-relaxed max-w-lg font-montserrat font-semibold">
                Empowering businesses through intelligent process automation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-6 rounded-full text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 font-montserrat"
              >
                Get Started
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-gray-400 text-black hover:text-black font-semibold px-8 py-6 rounded-full text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 font-montserrat"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Right side placeholder for additional content or interactions */}
         
        </div>
      </div>
    </section>
  );
};

export default BusinessAutomation;
