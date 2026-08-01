import React from 'react';
import { FaCheck } from 'react-icons/fa';

const SplitContentSection = ({
  title,
  description,
  listItems = [],
  image,
  imageAlt = "Image",
  reverse = false,
  bgColor = "bg-white",
  titleFontWeight = "font-bold",
  pillLayout = "flex" // "flex" or "grid"
}) => {
  return (
    <section className={`relative w-full flex flex-col md:flex-row ${bgColor}`}>

      {/* Text Content */}
      <div className={`w-full md:w-1/2 flex ${reverse ? 'justify-start md:order-2' : 'justify-end md:order-1'}`}>
        <div className={`w-full max-w-[700px] px-6 py-16 md:py-24 ${reverse ? 'lg:pr-10 lg:pl-16' : 'lg:pl-10 lg:pr-16'} flex flex-col justify-center`}>
          <h2 className={`text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] ${titleFontWeight} text-[#111111] leading-tight tracking-tight mb-6`}>
            {title}
          </h2>

          <div className="text-[#555555] text-[14px] md:text-[14.5px] leading-relaxed mb-8">
            {description}
          </div>

          {pillLayout === 'flex' ? (
            <div className="flex flex-wrap gap-3">
              {listItems.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex whitespace-nowrap items-center gap-2 px-4 py-2 bg-[#498b8c] rounded-full text-white text-[13px] md:text-[13.5px]"
                >
                  <FaCheck className="text-[12px]" />
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
              {listItems.map((item, index) => (
                <div
                  key={index}
                  className="flex w-fit items-center gap-2 px-4 py-2 bg-[#498b8c] rounded-full text-white text-[13px] md:text-[13.5px]"
                >
                  <FaCheck className="text-[12px]" />
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Image */}
      <div className={`w-full md:w-1/2 relative min-h-[400px] md:min-h-full ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default SplitContentSection;
