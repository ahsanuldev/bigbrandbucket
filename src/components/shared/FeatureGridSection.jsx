import React from 'react';

const FeatureGridSection = ({ 
  titlePart1, 
  highlightedTitle, 
  titlePart2, 
  description, 
  image, 
  features 
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#111111] mb-4">
            {titlePart1 && <span>{titlePart1} </span>}
            {highlightedTitle && <span className="text-primary">{highlightedTitle} </span>}
            {titlePart2 && <span>{titlePart2}</span>}
          </h2>
          <p className="text-[16px] text-gray-500 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-10 items-stretch lg:h-143">
          
          {/* Left Image */}
          <div className="relative w-full lg:w-[45%] rounded-3xl overflow-hidden shrink-0">
            <img 
              src={image} 
              alt="Feature visual" 
              className="w-full h-full object-cover min-h-87.5 lg:min-h-full"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>

          {/* Right Features Grid */}
          <div className="w-full lg:w-[55%]">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 h-full overflow-hidden flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 grow">
                {features.map((feature, idx) => {
                  // Determine borders based on index (2x2 grid)
                  let borderClasses = "";
                  if (idx === 0) borderClasses = "border-b border-gray-200 md:border-r";
                  else if (idx === 1) borderClasses = "border-b border-gray-200";
                  else if (idx === 2) borderClasses = "border-b border-gray-200 md:border-b-0 md:border-r";
                  
                  return (
                    <div key={idx} className={`p-5 lg:p-6 flex flex-col justify-center ${borderClasses}`}>
                      <div 
                        className="text-[30px] md:text-[32px] font-bold leading-none mb-2"
                        style={{
                          WebkitTextStroke: '1px #0f6d70',
                          color: 'transparent'
                        }}
                      >
                        {feature.number}
                      </div>
                      <h3 className="text-[19px] font-semibold text-[#111111] mb-2 leading-snug max-w-50">
                        {feature.title}
                      </h3>
                      <p className="text-[15px] text-gray-500 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;
