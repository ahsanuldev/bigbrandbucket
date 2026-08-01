import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import challengesImg from '../../assets/logistics/2152005472.jpg';

const challengesList = [
  "Lack of shipment visibility and live tracking",
  "Warehouse mismanagement and inventory inaccuracies",
  "Manual paperwork and inefficient processes",
  "Difficulty managing drivers and on-ground workforce",
  "Fleet and route mismanagement",
  "Limited data analytics and performance insights",
  "High fuel consumption and operating costs",
  "Customer dissatisfaction due to poor communication",
  "Delay in deliveries and lack of route optimization",
  "Risk of loss, theft, or cargo damage",
];

const KeyChallengesSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Image */}
        <div className="w-full lg:w-[45%]">
          <img 
            src={challengesImg} 
            alt="Logistics Challenges" 
            className="w-full h-auto rounded-3xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <h2 className="text-[2rem] md:text-[2.4rem] lg:text-[2.6rem] font-medium text-[#111111] leading-tight mb-6">
            Key Challenges in the<br />
            <span className="text-primary">Logistics Industry</span>
          </h2>
          
          <p className="text-[#555555] text-[15px] mb-8">
            The logistics industry faces multiple operational and management challenges:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-8">
            {challengesList.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-[2px] flex-shrink-0 text-[17px]" />
                <span className="text-[#444444] text-[14.5px] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[#555555] text-[15px] leading-relaxed">
            Businesses looking to overcome these operational challenges can leverage our <a href="#" className="text-primary hover:underline font-medium">logistics app development company</a> expertise to build custom fleet management, delivery tracking, and transportation management solutions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default KeyChallengesSection;
