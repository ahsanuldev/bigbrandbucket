import React from 'react';
import SectionTitle from '../ui/SectionTitle';

import icon1 from '../../assets/about-page/SVG-4.png';
import icon2 from '../../assets/about-page/SVG-1.png';
import icon3 from '../../assets/about-page/SVG-2.png';
import arrow1 from '../../assets/about-page/before-1.png';
import arrow2 from '../../assets/about-page/before.png';

const WorkingProcess = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="max-w-6xl mx-auto text-center">
          <SectionTitle 
            eyebrow="Our Working Process"
            title={
              <>
                Find Out Everything You Need To Know<br />
                About <span className="text-primary">Creating A Business Process Model</span>
              </>
            }
            description="Behind every product we build is a powerful technology stack. Using modern frameworks and cloud-native tools, we create innovative, scalable, and seamless digital experiences."
          />
        </div>

        <div className="relative max-w-5xl mx-auto mt-16 lg:mt-24">
          
          {/* Decorative Arrows for Desktop */}
          <img 
            src={arrow1} 
            alt="Next Step" 
            className="hidden md:block absolute top-8 left-[28%] w-[100px] lg:w-[130px] pointer-events-none"
          />
          <img 
            src={arrow2} 
            alt="Next Step" 
            className="hidden md:block absolute top-8 right-[28%] w-[100px] lg:w-[130px] pointer-events-none"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="h-20 mb-6 flex items-center justify-center">
                <img src={icon1} alt="Collect Ideas" className="h-10 object-contain" />
              </div>
              <h3 className="text-lg font-medium text-[#2d3748] mb-3">
                1. Collect Ideas
              </h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed">
                We gather your concepts clearly to shape direction and goals.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="h-20 mb-6 flex items-center justify-center">
                <img src={icon2} alt="Data Analysis" className="h-10 object-contain" />
              </div>
              <h3 className="text-lg font-medium text-[#2d3748] mb-3">
                2. Data Analysis
              </h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed">
                We examine data carefully to uncover trends and insights.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center px-4">
              <div className="h-20 mb-6 flex items-center justify-center">
                <img src={icon3} alt="Finalize Design" className="h-10 object-contain" />
              </div>
              <h3 className="text-lg font-medium text-[#2d3748] mb-3">
                3. Finalize Design
              </h3>
              <p className="text-[14.5px] text-gray-500 leading-relaxed">
                We perfect the design, making it visually appealing and user-friendly.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WorkingProcess;
