import React from 'react';

const BenefitsGrid = ({ 
  title, 
  description, 
  benefitsData, 
  bgColor = 'bg-white' 
}) => {
  return (
    <section className={`w-full py-16 md:py-24 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 mb-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[2rem] md:text-[2.4rem] lg:text-[2.6rem] font-medium text-[#111111] leading-tight">
              {title}
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="border-l-4 border-primary pl-6">
              <p className="text-[#555555] text-[15px] md:text-[16px] leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-row items-start gap-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium text-[#111111] text-[16px] leading-snug mb-1">
                  {benefit.title}
                </h3>
                <p className="text-[#555555] text-[14px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
