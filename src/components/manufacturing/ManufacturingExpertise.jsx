import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import iconShield from '../../assets/manufacturing/shield-150x150.png';
import iconQuality from '../../assets/manufacturing/best-seller-150x150.png';
import iconCustomization from '../../assets/manufacturing/customization-150x150.png';
import iconIntegration from '../../assets/manufacturing/integration-150x150.png';
import iconFactory from '../../assets/manufacturing/factory-150x150.png';
import iconInnovation from '../../assets/manufacturing/innovation-150x150.png';

const expertiseItems = [
  {
    id: 1,
    title: 'Innovation at the Core',
    description: 'Innovation powers everything we do. By combining creative thinking with technical excellence, we deliver smart digital solutions that solve real business challenges and help brands stay ahead in a competitive market.',
    icon: iconShield,
  },
  {
    id: 2,
    title: 'Quality Assurance',
    description: 'Every project goes through strict quality checks to ensure flawless performance, security, and usability. Our QA processes guarantee that every solution we deliver meets the highest industry standards.',
    icon: iconQuality,
  },
  {
    id: 3,
    title: 'Customization & Flexibility',
    description: 'We don\'t believe in one-size-fits-all solutions. Our services are fully customized to your business needs, offering flexibility in design, development, and scalability to match your growth goals.',
    icon: iconCustomization,
  },
  {
    id: 4,
    title: 'End-to-End Solutions',
    description: 'From strategy and design to development, deployment, and support—we provide complete digital solutions under one roof. Big Brand Bucket is your trusted partner for long-term digital success.',
    icon: iconIntegration,
  },
  {
    id: 5,
    title: 'Industry-Leading Professionals',
    description: 'Our success is driven by a skilled team of developers, designers, and strategists who bring deep expertise and creativity to every project. From concept to execution, our professionals ensure reliable, scalable, and impactful digital solutions.',
    icon: iconFactory,
  },
  {
    id: 6,
    title: 'State-of-the-Art Technology',
    description: 'We leverage modern frameworks, cloud-native tools, and the latest technologies to build high-performance websites and applications. Our continuous investment in innovation ensures speed, security, and future-ready solutions.',
    icon: iconInnovation,
  },
];

const ManufacturingExpertise = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-bg overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] font-semibold text-[#111111] leading-tight tracking-tight mb-4">
            Our <span className="text-primary">Manufacturing</span> Expertise
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] max-w-2xl mx-auto">
            Delivering smart, reliable solutions designed to achieve your goals.
          </p>
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
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {expertiseItems.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <div className="bg-white h-full w-full px-6 py-10 md:px-8 md:py-12 flex flex-col items-center text-center shadow-sm relative overflow-hidden group cursor-pointer">
                  
                  {/* Default State */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-6 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-[17px] md:text-lg font-semibold text-[#111111] mb-4 transition-opacity duration-300 group-hover:opacity-0">{item.title}</h3>
                  <p className="text-gray-500 text-[13px] md:text-[14px] leading-relaxed transition-opacity duration-300 group-hover:opacity-0">{item.description}</p>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary p-6 md:p-8 flex flex-col items-center justify-center text-center translate-y-[101%] group-hover:translate-y-0 transition-transform duration-[400ms] ease-out z-10">
                    <h3 className="text-[17px] md:text-lg font-semibold text-white mb-4">{item.title}</h3>
                    <p className="text-white/90 text-[13px] md:text-[14px] leading-relaxed mb-4">{item.description}</p>
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

export default ManufacturingExpertise;
