import React from 'react';
import leftImage from '../../assets/about-page/1f2d1319cf2e7d9ab8a9829551774cb0fd70d735.jpg';
import icon1 from '../../assets/about-page/SVG-3.png';
import icon2 from '../../assets/about-page/SVG-4.png';
import icon3 from '../../assets/about-page/SVG-5.png';
import icon4 from '../../assets/about-page/SVG-6.png';

const DistinctiveEdge = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <img 
              src={leftImage} 
              alt="Our Distinctive Edge" 
              className="w-full h-auto rounded-3xl object-cover shadow-sm"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-[17px] text-gray-800 mb-3">What Makes Us Different</h4>
            <h2 className="text-[32px] md:text-[42px] font-semibold leading-tight text-[#111111] mb-12">
              Our Distinctive Edge in <br className="hidden lg:block" />
              <span className="text-primary">Delivering Excellence</span>
            </h2>

            {/* 2x2 Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-8 h-8 md:w-9 md:h-9 shrink-0 mt-1">
                  <img src={icon1} alt="Creativity" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#2d3748] group-hover:text-primary transition-colors duration-300 mb-2">Creativity</h3>
                  <p className="text-[14.5px] text-gray-500 leading-relaxed">
                    We create fresh solutions that turn ideas into reality.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-8 h-8 md:w-9 md:h-9 shrink-0 mt-1">
                  <img src={icon2} alt="Innovative Thinking" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold group-hover:text-primary mb-2">Innovative Thinking</h3>
                  <p className="text-[14.5px] text-gray-500 leading-relaxed">
                    We explore new ideas to solve problems smartly.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-8 h-8 md:w-9 md:h-9 shrink-0 mt-1">
                  <img src={icon3} alt="Rapid Solutions" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#2d3748] group-hover:text-primary transition-colors duration-300 mb-2">Rapid Solutions</h3>
                  <p className="text-[14.5px] text-gray-500 leading-relaxed">
                    We deliver quick results without losing quality.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-8 h-8 md:w-9 md:h-9 shrink-0 mt-1">
                  <img src={icon4} alt="Top-Notch Support" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#2d3748] group-hover:text-primary transition-colors duration-300 mb-2">Top-Notch Support</h3>
                  <p className="text-[14.5px] text-gray-500 leading-relaxed">
                    We provide constant help to keep you moving.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DistinctiveEdge;
