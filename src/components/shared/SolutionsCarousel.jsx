import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionTitle from '../ui/SectionTitle';
import 'swiper/css';

const SolutionsCarousel = ({ 
  title, 
  description, 
  solutions, 
  bgColor = 'bg-[#eef1f2]' 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className={`w-full py-16 md:py-24 ${bgColor}`}>
      <div className="w-full px-4 md:px-12 lg:px-20 mx-auto">
        <SectionTitle 
          title={title}
          description={description}
        />

        <div className="w-full cursor-grab active:cursor-grabbing">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {solutions.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <div className="bg-[#f8fafa] rounded-2xl p-8 md:p-10 h-full min-h-[480px] md:min-h-[520px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col items-start border border-gray-100/50">
                  <div className="w-20 h-20 md:w-24 md:h-24 mb-8 flex items-center justify-center self-center opacity-80">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-[19px] md:text-[21px] font-medium text-left text-[#111111] mb-8 min-h-[56px] flex items-center">
                    {item.title}
                  </h3>
                  <ul className="w-full flex flex-col gap-3.5">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-start text-[15px] md:text-[16px] text-[#444444] leading-relaxed">
                        <span className="mr-3 mt-[8px] w-1.5 h-1.5 rounded-full bg-[#555555] flex-shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Container */}
        <div className="flex justify-center items-center mt-12">
          <div className="flex gap-2.5">
            {solutions.map((_, idx) => (
              <button
                key={idx}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-primary w-2.5"
                    : "bg-[#bdc3c7] w-2.5 hover:bg-gray-400"
                }`}
                onClick={() => {
                  setActiveIndex(idx);
                  swiperRef.current.swiper.slideToLoop(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsCarousel;
