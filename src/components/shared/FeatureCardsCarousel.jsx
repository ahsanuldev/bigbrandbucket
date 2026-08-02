import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';

const FeatureCardsCarousel = ({ items }) => {
  const swiperRef = useRef(null);

  return (
    <section className="w-full relative z-10 -mt-16 md:-mt-32 pb-16 px-4 md:px-12 lg:px-20 bg-transparent">
      <div className="max-w-[1400px] mx-auto relative group">
        
        {/* Navigation Buttons Container */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-6 z-20 hidden md:block">
          <button 
            onClick={() => swiperRef.current?.swiper.slidePrev()}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-sm md:text-base" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-6 z-20 hidden md:block">
          <button 
            onClick={() => swiperRef.current?.swiper.slideNext()}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-sm md:text-base" />
          </button>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full !px-2 md:!px-0"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto py-4">
              <div className="bg-white rounded-[20px] p-8 md:p-10 h-full min-h-[380px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex flex-col items-center text-center border border-gray-100 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 mb-6 flex items-center justify-center text-primary">
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-[20px] md:text-[22px] font-bold text-[#222222] mb-4">
                  {item.title}
                </h3>
                <p className="text-[15px] md:text-[16px] text-[#555555] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeatureCardsCarousel;
