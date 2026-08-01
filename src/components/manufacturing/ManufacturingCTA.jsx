import React from 'react';
import bgImage from '../../assets/manufacturing/120.jpg';

const ManufacturingCTA = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row bg-[#0f6d70]">
      {/* Left Image (Spans to left edge) */}
      <div className="hidden md:block md:w-[40%] lg:w-[35%] relative min-h-[300px]">
        <img 
          src={bgImage} 
          alt="Manufacturing Team" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Teal Overlay over image */}
        <div className="absolute inset-0 bg-[#0f6d70]/80"></div>
      </div>
      
      {/* Right Content */}
      <div className="w-full md:w-[60%] lg:w-[65%] py-12 md:py-14 lg:py-16 px-6 md:px-12 lg:px-16 flex flex-col justify-center">
        <div className="max-w-[800px]">
          <h2 className="text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-bold text-white mb-4 leading-tight">
            Ready to Transform Your Digital Presence
          </h2>
          <p className="text-white/90 text-[14px] md:text-[14.5px] leading-relaxed mb-1">
            Big Brand Bucket visions to provide better lives and days by solving everyday situations with the help of flawless design and IT solutions.
          </p>
          <p className="text-white/90 text-[14px] md:text-[14.5px] leading-relaxed mb-8">
            We have cheerful and fulfilled customers spread everywhere throughout the world.
          </p>
          <button className="bg-white text-[#0f6d70] font-semibold px-8 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-[14.5px]">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingCTA;
