import React from 'react';
import { FaCheck } from 'react-icons/fa';
import innovationImg from '../../assets/manufacturing/214.jpg';

const listItems = [
  "Real-Time Performance & Analytics",
  "Scalable Web & App Solutions",
  "Quality-Driven Development",
  "Secure & Reliable Systems",
  "Cost-Effective Digital Solutions"
];

const TransformingInnovation = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row bg-white">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex justify-end">
        <div className="w-full max-w-[700px] px-6 py-16 md:py-24 lg:pl-10 lg:pr-16 flex flex-col justify-center">
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] font-bold text-[#111111] leading-tight tracking-tight mb-6">
            Transforming <span className="text-primary">Businesses</span><br />
            Through <span className="text-primary">Innovation</span>
          </h2>
          
          <p className="text-[#555555] text-[14px] md:text-[14.5px] leading-relaxed mb-8">
            In today's digital-first world, staying competitive requires embracing innovation. Our IT, web, and mobile app solutions are designed to streamline operations, enhance user experiences, and drive measurable business growth—giving you a strong competitive edge in the digital landscape.
          </p>

          <div className="flex flex-wrap gap-3">
            {listItems.map((item, index) => (
              <div 
                key={index} 
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#498b8c] rounded-full text-white text-[13px] md:text-[13.5px]"
              >
                <FaCheck className="text-[12px]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
        <img 
          src={innovationImg} 
          alt="Transforming Businesses" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default TransformingInnovation;
