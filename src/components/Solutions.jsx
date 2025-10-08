import AnimatedLines from './ui/AnimatedLines';

const Solutions = () => {
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

  const solutions = [
    {
      title: "Starter Pack",
      subtitle: "Perfect for small teams beginning their automation journey.",
      features: [
        "Lead Intake Automation",
        "Workflow Optimization"
      ]
    },
    {
      title: "Growth Pack", 
      subtitle: "For growing businesses ready to scale automation across departments.",
      features: [
        "Sales Operations",
        "Customer Support AI",
        "Intelligent Analytics"
      ]
    },
    {
      title: "Enterprise Pack",
      subtitle: "Full-scale automation designed for large organizations.",
      features: [
        "Advanced Machine Learning",
        "End-to-End Workflow Integration", 
        "Custom AI Solutions"
      ]
    }
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
      {/* Animated Background Lines - Subtle */}
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
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gray-800/20 to-gray-600/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-montserrat">
            Solutions Built for
            <br />
            Your Business
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl text-gray-700 font-montserrat font-semibold">
              Choose the automation solution that matches your business goals.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 font-montserrat font-semibold">
              Each pack is designed to accelerate efficiency, reduce costs,
              <br />
              and unlock new growth opportunities.
            </p>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center space-y-6">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-montserrat">
                  {solution.title}
                </h3>
                
                {/* Subtitle */}
                <p className="text-gray-700 text-base sm:text-lg font-montserrat leading-relaxed font-semibold">
                  {solution.subtitle}
                </p>
                
                {/* Features List */}
                <div className="space-y-4 pt-4">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-start space-x-3">
                      {/* Green bullet point */}
                      <div className="w-3 h-3 bg-gradient-to-r from-lime-400 to-emerald-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-800 font-montserrat text-left text-base sm:text-lg">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="text-center mt-16">
          <p className="text-lg sm:text-xl text-gray-700 font-montserrat max-w-4xl mx-auto font-semibold">
            Find the pack that fits your business – and see how automation can transform your operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
