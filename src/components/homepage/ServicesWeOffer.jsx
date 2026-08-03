import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionTitle from '../ui/SectionTitle';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import 'swiper/css';

// Assets
import imgAppDev from '../../assets/service-img-app-development.webp';
import imgCloud from '../../assets/service-img-cloud-computing.png';
import imgCrossPlatform from '../../assets/service-img-cross-platform-development.png';
import imgSolution from '../../assets/service-img-solution-designing.png';
import imgUiUx from '../../assets/service-img-ui-ux.png';
import imgWebDev from '../../assets/service-img-web-development.png';
import imgWordpress from '../../assets/service-img-wordpress-development.png';

const services = [
  {
    id: 1,
    title: 'App Development',
    description: 'Comprehensive app development services to streamline information access and improve productivity through innovative and synchronized solutions.',
    icon: imgAppDev,
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Custom, efficient, and user-friendly solutions for businesses to enhance their online presence and reach their goals seamlessly.',
    icon: imgWebDev,
  },
  {
    id: 3,
    title: 'UI/UX',
    description: 'Focused on creating user-centered digital experiences to enhance overall usability and engagement with clients\' products.',
    icon: imgUiUx,
  },
  {
    id: 4,
    title: 'Cross Platform Development',
    description: 'Seamless cross-platform development services to help businesses effectively reach their audiences on multiple devices and platforms.',
    icon: imgCrossPlatform,
  },
  {
    id: 5,
    title: 'Solution Designing',
    description: 'Providing clients with customized and innovative solutions to meet their specific business needs and challenges.',
    icon: imgSolution,
  },
  {
    id: 6,
    title: 'Cloud Computing',
    description: 'Delivering scalable, secure, and cost-effective cloud-based solutions to help clients optimize their IT infrastructure and operations.',
    icon: imgCloud,
  },
  {
    id: 7,
    title: 'WordPress Development',
    description: 'Build fast, SEO-friendly, and custom WordPress websites designed to generate leads and support business growth.',
    icon: imgWordpress,
  },
];

const ServicesWeOffer = () => {
  const container = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%',
      }
    });

    tl.from(titleRef.current, {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    })
    .from(cardsRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out'
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-16 md:py-24 bg-bg overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-10">
        
        {/* Header */}
        <div ref={titleRef}>
          <SectionTitle 
            eyebrow="More Than Solutions"
          title={
            <>
              <span className="text-primary">Services</span> We Offer
            </>
          }
            description="Smart, reliable solutions tailored to your goals."
          />
        </div>

        {/* Carousel */}
        <div className="w-full cursor-grab active:cursor-grabbing">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={service.id} className="!h-auto">
                <div 
                  ref={(el) => cardsRef.current[index] = el}
                  className="bg-white h-full w-full p-4 md:p-6 flex flex-col items-center text-center shadow-sm relative overflow-hidden group cursor-pointer"
                >
                  
                  {/* Default State */}
                  <div className="w-14 h-14 md:w-16 md:h-16 mb-4 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium text-[#111111] mb-2 transition-opacity duration-300 group-hover:opacity-0">{service.title}</h3>
                  <p className="text-gray-500 text-[13px] md:text-sm leading-relaxed transition-opacity duration-300 group-hover:opacity-0">{service.description}</p>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary p-4 md:p-6 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] ease-out z-10">
                    <h3 className="text-lg md:text-xl font-medium text-white mb-3">{service.title}</h3>
                    <p className="text-white/90 text-[13px] md:text-sm leading-relaxed mb-4">{service.description}</p>
                    <span className="text-white font-medium text-sm flex items-center gap-1 mt-auto md:mt-2 hover:underline">
                      Learn More <span className="text-lg leading-none">&rsaquo;</span>
                    </span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default ServicesWeOffer;
