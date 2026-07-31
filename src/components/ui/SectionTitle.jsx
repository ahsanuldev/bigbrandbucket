import React from 'react';

const SectionTitle = ({ eyebrow, title, description, align = 'center', className = '' }) => {
  return (
    <div className={`text-${align} mb-12 ${className}`}>
      {eyebrow && (
        <span className="text-[#111111] text-lg font-normal mb-2 block">
          {eyebrow}
        </span>
      )}
      
      {title && (
        <h2 className="text-[2.5rem] md:text-[3rem] font-medium text-[#111111] leading-tight mb-4 tracking-tight">
          {title}
        </h2>
      )}
      
      {description && (
        <p className="text-gray-600 text-[15px] md:text-base">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
