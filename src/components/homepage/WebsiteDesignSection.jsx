import React from 'react';
import Button from '../ui/Button';
import designImage from '../../assets/website-design-company-in-delhi-image.jpg';

const WebsiteDesignSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="bg-primary rounded-[2.5rem] p-6 md:p-8 lg:p-9 flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12 overflow-hidden relative">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start gap-4 md:gap-5 relative z-10 text-white pr-0 md:pr-4">
            <h2 className="text-2xl md:text-[2rem] lg:text-[2.75rem] font-medium leading-tight whitespace-nowrap tracking-tight">
              Website Designing <br />
              Company In Delhi
            </h2>
            
            <div>
              <p className="text-white/90 text-[13px] lg:text-sm leading-relaxed">
              Big Brand Bucket visions to provide better lives and days by
              solving everyday situations with the help of flawless design and
              IT solutions.
            </p>
            
            <p className="text-white/90 text-[13px] lg:text-sm leading-relaxed">
              We have cheerful and fulfilled customers spread everywhere
              throughout the world.
            </p>
            </div>
            
            <button className="mt-2 bg-white text-primary px-6 md:px-8 py-2.5 md:py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
              Explore More
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative z-10 flex justify-end">
            <img 
              src={designImage} 
              alt="Website Designing Company In Delhi" 
              className="w-full h-auto rounded-3xl object-cover shadow-lg"
            />
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default WebsiteDesignSection;
