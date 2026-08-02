import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import whoWeServeImg from '../../assets/logistics/whoweserve.png';

const WhoWeServeSection = () => {
  const leftItems = [
    "Transport agencies",
    "Third-party logistics (3PL) companies",
    "Courier & parcel delivery companies",
    "eCommerce logistics providers",
  ];

  const rightItems = [
    "Fleet & vehicle rental companies",
    "Freight forwarding & cargo services",
    "Warehouse & distribution centers",
    "Cold chain logistics",
  ];

  return (
    <section className="w-full py-6 md:py-8 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="text-[2rem] md:text-[2.4rem] lg:text-[2.6rem] font-medium text-[#111111] leading-tight mb-4">
            Who We <span className="text-primary">Serve</span>
          </h2>
          
          <p className="text-[#555555] text-[16px] mb-8">
            We build industry solutions for:
          </p>

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

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src={whoWeServeImg} 
            alt="Who We Serve" 
            className="w-full max-w-[600px] h-auto rounded-xl object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default WhoWeServeSection;
