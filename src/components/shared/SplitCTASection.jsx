import React from 'react';

const SplitCTASection = ({
  title,
  description1,
  description2,
  buttonText = "Get Started",
  buttonLink = "#",
  image,
  imageAlt = "Background",
  bgColor = "bg-[#0f6d70]",
  overlayColor = "bg-[#0f6d70]/80",
}) => {
  return (
    <section className={`relative w-full flex flex-col md:flex-row ${bgColor}`}>
      {/* Left Image (Spans to left edge) */}
      <div className="hidden md:block md:w-[40%] lg:w-[35%] relative min-h-[300px]">
        {image && (
          <img 
            src={image} 
            alt={imageAlt} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        {/* Overlay over image */}
        <div className={`absolute inset-0 ${overlayColor}`}></div>
      </div>
      
      {/* Right Content */}
      <div className="w-full md:w-[60%] lg:w-[65%] py-12 md:py-14 lg:py-16 px-6 md:px-12 lg:px-16 flex flex-col justify-center">
        <div className="max-w-[800px]">
          <h2 className="text-[1.8rem] md:text-[2rem] lg:text-[2.2rem] font-bold text-white mb-4 leading-tight">
            {title}
          </h2>
          {description1 && (
            <p className="text-white/90 text-[14px] md:text-[14.5px] leading-relaxed mb-1">
              {description1}
            </p>
          )}
          {description2 && (
            <p className="text-white/90 text-[14px] md:text-[14.5px] leading-relaxed mb-8">
              {description2}
            </p>
          )}
          {!description2 && <div className="mb-8"></div>}
          <a href={buttonLink} className="inline-block bg-white text-[#0f6d70] font-semibold px-8 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-[14.5px]">
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default SplitCTASection;
