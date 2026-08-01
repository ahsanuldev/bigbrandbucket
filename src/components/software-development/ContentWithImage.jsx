import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const ContentWithImage = ({
  title,
  description1,
  subtitle,
  listItems = [],
  description2,
  image,
  imagePosition = 'right',
  bgClass = 'bg-bg'
}) => {
  return (
    <section className={`py-24 ${bgClass}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-[1.8rem] md:text-[2.25rem] font-medium text-[#111111] leading-tight tracking-tight mb-4">
              {title}
            </h2>
            
            {description1 && (
              <div className="text-gray-600 text-[14px] md:text-[14.5px] leading-relaxed mb-5">
                {description1}
              </div>
            )}

            {subtitle && (
              <h3 className="text-lg md:text-[1.15rem] font-semibold text-[#111111] mb-3">
                {subtitle}
              </h3>
            )}

            {listItems.length > 0 && (
              <ul className="space-y-1 mb-6">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600 text-[14px] md:text-[14.5px]">
                    <FaCheckCircle className="text-primary mt-[3px] mr-2.5 flex-shrink-0 text-sm" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {description2 && (
              <div className="text-gray-600 text-[14px] md:text-[14.5px] leading-relaxed">
                {description2}
              </div>
            )}
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2">
            <img 
              src={image} 
              alt="Section visual" 
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentWithImage;
