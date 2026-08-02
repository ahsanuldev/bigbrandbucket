import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ChallengesSection = ({ 
  title, 
  titleHighlight, 
  description, 
  challengesList, 
  image, 
  bottomText 
}) => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Image */}
        <div className="w-full lg:w-[45%]">
          <img 
            src={image} 
            alt="Industry Challenges" 
            className="w-full h-auto rounded-3xl object-cover shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <h2 className="text-[2rem] md:text-[2.4rem] lg:text-[2.6rem] font-medium text-[#111111] leading-tight mb-6">
            {title}<br />
            {titleHighlight && <span className="text-primary">{titleHighlight}</span>}
          </h2>
          
          <p className="text-[#555555] text-[15px] mb-8">
            {description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-8">
            {challengesList.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <FaCheckCircle className="text-primary mt-0-5 shrink-0 text-[17px]" />
                <span className="text-[#444444] text-[14.5px] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {bottomText && (
            <p className="text-[#555555] text-[15px] leading-relaxed">
              {bottomText}
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default ChallengesSection;
