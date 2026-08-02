import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import whyChooseUsImg from '../../assets/logistics/whychooseus.png';

const WhyChooseUsSection = () => {
  const leftItems = [
    "Industry-specific development expertise",
    "Custom, scalable & future-ready solutions",
    "Strong focus on UI/UX for easy adoption",
    "Integration with your existing systems",
  ];

  const rightItems = [
    "End-to-end development, deployment & support",
    "Data security & compliance-driven architecture",
    "Agile development approach",
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
          <img 
            src={whyChooseUsImg} 
            alt="Why Choose Us" 
            className="w-full max-w-[600px] h-auto rounded-xl object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col order-1 lg:order-2">
          <h2 className="text-[2rem] md:text-[2.4rem] lg:text-[2.6rem] font-medium text-[#111111] leading-tight mb-8">
            Why <span className="text-primary">Choose</span> Us?
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            {/* Left List */}
            <div className="flex flex-col gap-4 flex-1">
              {leftItems.map((item, index) => (
                <div key={`left-${index}`} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary mt-[3px] flex-shrink-0 text-[16px]" />
                  <span className="text-[#444444] text-[15px] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Right List */}
            <div className="flex flex-col gap-4 flex-1">
              {rightItems.map((item, index) => (
                <div key={`right-${index}`} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary mt-[3px] flex-shrink-0 text-[16px]" />
                  <span className="text-[#444444] text-[15px] leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
