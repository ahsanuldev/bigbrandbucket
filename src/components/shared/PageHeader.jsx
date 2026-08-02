import React from 'react';
import heroTextAsset from '../../assets/hero-text-asset.png';

const PageHeader = ({ title, subtitle, description, bgImage, children, className = '', showHeroTextAsset = true }) => {
  return (
    <section 
      className={`relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center bg-cover bg-center bg-no-repeat ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Teal Overlay */}
      <div className="absolute inset-0 bg-primary/85"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {subtitle && (
          <h4 className="text-[17px] font-medium mb-4 tracking-wide text-white/90">
            {subtitle}
          </h4>
        )}
        
        {title && (
          <div className="relative inline-block mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight">
              {title}
            </h1>
            {showHeroTextAsset && (
              <img 
                src={heroTextAsset} 
                alt="Highlight Accent" 
                className="absolute -top-3 -right-6 md:-top-2 md:-right-8 w-6 md:w-8 object-contain pointer-events-none"
              />
            )}
          </div>
        )}
        
        {description && (
          <p className="text-[15px] md:text-[15.5px] leading-relaxed text-white/90 max-w-3xl mx-auto">
            {description}
          </p>
        )}
        
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
