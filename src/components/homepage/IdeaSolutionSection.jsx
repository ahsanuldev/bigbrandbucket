import React from 'react';
import bgImage from '../../assets/you-have-idea-bg-image.jpg';

const IdeaSolutionSection = () => {
  return (
    <section 
      className="w-full relative min-h-[250px] md:min-h-[350px] py-16 md:py-20 flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0e676b]/85 z-0"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="w-full lg:w-full flex flex-col items-start gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white leading-tight">
            You have Idea ? We have Solution.
          </h2>
          
          <p className="text-white/90 text-[15px] md:text-base leading-relaxed max-w-3xl">
            Delivering Customized and Unmatchable Digital Marketing , Web Development & Mobile App
            Design Solutions Since 2016
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdeaSolutionSection;
