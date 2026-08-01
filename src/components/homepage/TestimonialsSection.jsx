import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { RiVerifiedBadgeFill } from 'react-icons/ri';
import { IoStar } from 'react-icons/io5';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';

import 'swiper/css';
import 'swiper/css/navigation';

import googleLogo from '../../assets/google-logo.svg';

const reviews = [
  {
    id: 1,
    name: 'Yogita Sharma',
    time: '4 years ago',
    text: 'One of the best website designer in Gurugram. Highly recommended to all.',
    avatarColor: 'bg-[#008ccf]',
    initial: 'Y',
    avatarImg: null,
  },
  {
    id: 2,
    name: 'Rajiv Kumar',
    time: '4 years ago',
    text: 'This website development company is highly experienced in the field of Website Development.',
    avatarColor: 'bg-[#7d939e]',
    initial: 'R',
    avatarImg: null,
  },
  {
    id: 3,
    name: 'Rani Singham',
    time: '4 years ago',
    text: 'Big Brand Bucket Pvt. Ltd for over 3 years, and has been working on various small online projects from design, website redesign and content writing to technical...',
    avatarColor: null,
    initial: 'R',
    avatarImg: 'https://i.pravatar.cc/100?img=47',
  },
  {
    id: 4,
    name: 'Amit Singh',
    time: '3 years ago',
    text: 'Great experience working with the team. Delivered the project on time and with great quality. Will definitely recommend them.',
    avatarColor: 'bg-[#e56b3e]',
    initial: 'A',
    avatarImg: null,
  }
];

const TestimonialsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Top Content */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-medium text-[#111111] leading-tight mb-4 tracking-tight">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
            <p className="text-gray-600 text-[15px] md:text-[15.5px] leading-relaxed max-w-[600px]">
              Our Google Reviews showcase genuine experiences shared by our clients. Their feedback reflects our dedication to excellence, reliability, and consistent results.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center mt-4 md:mt-0">
            <div className="text-[17px] font-semibold text-[#111] mb-1 tracking-wide">Excellent</div>
            <div className="flex items-center gap-[2px] text-[#fbbc04] text-[22px] mb-2">
              <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
            </div>
            <img src={googleLogo} alt="Google" className="h-[34px] mb-2" />
            <div className="text-[13px] text-gray-500">Based on <span className="font-semibold text-gray-700">74 reviews</span></div>
          </div>
        </div>

        {/* Slider Content */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-4 pt-2 px-1" // Padding to prevent cutting off shadow
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="h-auto pb-4 pt-2">
                <div className="flex flex-col h-full">
                  
                  {/* Card (Speech Bubble) */}
                  <div className="relative mb-6 group flex-grow">
                    <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-7 h-full shadow-[0_2px_15px_-3px_rgba(0,0,0,0.06),0_10px_20px_-2px_rgba(0,0,0,0.03)] relative z-10">
                      
                      {/* Card Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-1.5">
                          <div className="flex gap-[2px] text-[#fbbc04] text-[19px]">
                            <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
                          </div>
                          <RiVerifiedBadgeFill className="text-[#1a73e8] text-[18px]" />
                        </div>
                        <FcGoogle className="text-[22px]" />
                      </div>
                      
                      {/* Card Body */}
                      <p className="text-[#111111] text-[15.5px] leading-relaxed line-clamp-3">
                        {review.text}
                      </p>
                    </div>

                    {/* Speech Bubble Tail */}
                    <div className="absolute -bottom-[8px] left-[32px] w-4 h-4 bg-white border-b border-r border-gray-100 rotate-45 z-20"></div>
                  </div>
                  
                  {/* User Info (Outside Card) */}
                  <div className="flex items-center gap-3.5 px-2 mt-auto ml-2">
                    {review.avatarImg ? (
                      <img src={review.avatarImg} alt={review.name} className="w-[46px] h-[46px] rounded-full object-cover" />
                    ) : (
                      <div className={`w-[46px] h-[46px] rounded-full flex items-center justify-center text-white font-medium text-xl ${review.avatarColor}`}>
                        {review.initial}
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-[15.5px] text-[#111111] leading-tight">{review.name}</div>
                      <div className="text-[13.5px] text-gray-500 mt-1">{review.time}</div>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button 
            ref={prevRef} 
            className="absolute top-1/2 -left-3 md:-left-5 lg:-left-5 -translate-y-1/2 z-10 w-[38px] h-[38px] bg-white border border-gray-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all disabled:opacity-0"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          
          <button 
            ref={nextRef} 
            className="absolute top-1/2 -right-3 md:-right-5 lg:-right-5 -translate-y-1/2 z-10 w-[38px] h-[38px] bg-white border border-gray-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all disabled:opacity-0"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
