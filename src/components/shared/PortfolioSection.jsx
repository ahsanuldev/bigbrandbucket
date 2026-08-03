import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import 'swiper/css';

// Assets
import ellipseBehind from '../../assets/Ellipse-for-behind.png';
import imgKunjMotors from '../../assets/portfolio/portfolio-kunjmotors-scaled.jpg';
import imgSdInc from '../../assets/portfolio/portfolio-sd-inc.jpg';
import imgAtomMep from '../../assets/portfolio/portfolio-atom-mep.jpg';
import imgPositiveVibes from '../../assets/portfolio/portfolio-positive-vibes.jpg';
import imgLdgStudio from '../../assets/portfolio/portfolio-ldg-studio-scaled.jpg';
import imgWhiteSpaceLiving from '../../assets/portfolio/portfolio-white-space-living.jpg';
import imgWillowFern from '../../assets/portfolio/portfolio-willow-and-fern.jpg';
import imgTheImageTrove from '../../assets/portfolio/portfolio-the-image-trove.jpg';
import imgVeritasPartners from '../../assets/portfolio/portfolio-veritas-partners.jpg';

const portfolioItems = [
  { id: 1, title: 'Kunj Motor', image: imgKunjMotors },
  { id: 2, title: 'SD Inc.', image: imgSdInc },
  { id: 3, title: 'Atom MEP', image: imgAtomMep },
  { id: 4, title: 'Positive Vibes', image: imgPositiveVibes },
  { id: 5, title: 'LDG Studio', image: imgLdgStudio },
  { id: 6, title: 'White Space Living', image: imgWhiteSpaceLiving },
  { id: 7, title: 'Willow and Fern', image: imgWillowFern },
  { id: 8, title: 'The Image Trove', image: imgTheImageTrove },
  { id: 9, title: 'Veritas Partners', image: imgVeritasPartners },
];

const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const container = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    tl.from(titleRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from(carouselRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.5");
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-16 md:py-24 bg-white overflow-hidden relative">
      {/* Decorative semi-circles on sides */}
      <img 
        src={ellipseBehind} 
        alt="" 
        draggable={false}
        className="absolute top-[35%] left-0 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[250px] max-w-none z-0 opacity-65"
      />
      <img 
        src={ellipseBehind} 
        alt="" 
        draggable={false}
        className="absolute top-[35%] right-0 translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[250px] max-w-none z-0 opacity-65"
      />

      <div className="w-full px-4 md:px-8 lg:px-10 relative z-10">
        
        {/* Header */}
        <div ref={titleRef}>
          <SectionTitle 
            title={
              <>
                Our <span className="text-primary">Portfolio</span>
              </>
            }
            description="We can design any website for any industry"
          />
        </div>

        {/* Carousel */}
        <div ref={carouselRef} className="w-full cursor-grab active:cursor-grabbing mt-8 portfolio-swiper">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 2, centeredSlides: false },
              1024: { slidesPerView: 3, centeredSlides: false },
              1280: { slidesPerView: 4, centeredSlides: false },
            }}
            className=""
          >
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <div className="relative w-full h-[320px] md:h-[360px] group overflow-hidden bg-gray-100 flex flex-col justify-end">
                  
                  {/* Background Image */}
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                  />

                  {/* Dark Overlay at bottom */}
                  <div className="relative z-10 w-full bg-[#303030d9] py-4 px-6 mt-auto">
                    <div className="flex items-center justify-center gap-2">
                      <h3 className="text-white text-xl md:text-2xl font-medium">{item.title}</h3>
                      <FiArrowUpRight className="text-white text-2xl font-bold" />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Pagination Container */}
        <div className="flex justify-center items-center mt-10">
          <div className="flex gap-2">
            {portfolioItems.map((_, idx) => (
              <button
                key={idx}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-gray-500 w-2.5"
                    : "bg-gray-300 w-2.5 hover:bg-gray-400"
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

export default PortfolioSection;
