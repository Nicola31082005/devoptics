import { Button } from './ui/button';
import { Search, Pencil, FileCode, TrendingUp, User } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'We analyze workflows and opportunities.',
    },
    {
      icon: Pencil,
      title: 'Design',
      description: 'We architect tailored automation solutions.',
    },
    {
      icon: FileCode,
      title: 'Build',
      description: 'We implement and integrate AI systems.',
    },
    {
      icon: TrendingUp,
      title: 'Optimize',
      description: 'We monitor, refine, and scale.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4 font-montserrat">
            How Devoptics Works
          </h2>
          <p className="text-xl text-gray-700 font-montserrat">
            From discovery to optimization, we make automation seamless.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Desktop view - horizontal layout */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-lime-400 transform translate-y-1/2" 
                 style={{ left: '12.5%', right: '12.5%' }}>
            </div>
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center shadow-sm">
                      <Icon className="w-10 h-10 text-gray-800" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3 font-montserrat">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 font-montserrat">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile/Tablet view - vertical layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center shadow-sm">
                      <Icon className="w-8 h-8 text-gray-800" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2 font-montserrat">
                      {step.title}
                    </h3>
                    <p className="text-gray-700 font-montserrat">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Connect Directly Section */}
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center sm:text-left">
              <h3 className="text-3xl font-bold text-black mb-3 font-montserrat">
                Connect Directly
              </h3>
              <p className="text-lg text-gray-700 mb-6 font-montserrat">
                Get in touch with our leadership team to explore how Devoptics can transform your operations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                <Button 
                  size="lg" 
                  className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-8 py-6 rounded-full text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 font-montserrat"
                >
                  Contact the CEO
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-800 hover:border-gray-900 text-black hover:text-black hover:bg-gray-100 font-semibold px-8 py-6 rounded-full text-lg transition-all duration-200 hover:shadow-lg hover:scale-105 font-montserrat"
                >
                  Book a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

