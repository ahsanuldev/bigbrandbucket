import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionTitle from '../ui/SectionTitle';

// Import Swiper styles
import 'swiper/css';

// Automotive Assets
import imgSmartVehicle from '../../assets/automotive/smart-car-1.png';
import imgFutureMobility from '../../assets/automotive/innovation-1.png';
import imgDataAnalytics from '../../assets/automotive/monitor.png';
import imgCybersecurity from '../../assets/automotive/cyber-security.png';
import imgEV from '../../assets/automotive/electric-car.png';
import imgManufacturing from '../../assets/automotive/manufacture.png';
import imgSupplyChain from '../../assets/automotive/supply-chain-management.png';
import imgSales from '../../assets/automotive/sales.png';
import imgAI from '../../assets/automotive/ml.png';

const expertiseData = [
  {
    id: 1,
    title: 'Smart Vehicle Solutions',
    description: 'Power next-generation mobility with connected vehicle platforms, telematics, HMI, navigation, and autonomous technologies—engineered to enhance safety, intelligence, and seamless driver interaction.',
    icon: imgSmartVehicle,
  },
  {
    id: 2,
    title: 'Future Mobility Solutions',
    description: 'Enable sustainable mobility with EV charging platforms and intelligent two-wheeler solutions that combine connectivity, safety, and performance for the future of transportation.',
    icon: imgFutureMobility,
  },
  {
    id: 3,
    title: 'Data Analytics & Insights',
    description: 'Turn automotive data into strategic insights with advanced analytics and predictive maintenance solutions—helping reduce downtime, improve efficiency, and optimize operations.',
    icon: imgDataAnalytics,
  },
  {
    id: 4,
    title: 'Cybersecurity',
    description: 'Safeguard vehicles and connected systems with comprehensive automotive cybersecurity solutions aligned with global standards—ensuring data protection, system integrity, and operational resilience.',
    icon: imgCybersecurity,
  },
  {
    id: 5,
    title: 'Electric Vehicle Solutions',
    description: 'Accelerate your EV journey with end-to-end solutions covering fleet management, charging infrastructure, and performance optimization—designed for scalable and efficient electric mobility.',
    icon: imgEV,
  },
  {
    id: 6,
    title: 'Manufacturing Solutions',
    description: 'Drive smarter automotive production with intelligent automation, connected manufacturing systems, and seamless ERP integration. Our solutions enhance assembly line productivity, maintain quality consistency, and enable scalable, future-ready manufacturing.',
    icon: imgManufacturing,
  },
  {
    id: 7,
    title: 'Supply Chain Management',
    description: 'Gain complete control over complex automotive supply chains with real-time inventory tracking, logistics intelligence, and accurate demand planning. Our solutions minimize disruptions, improve visibility, and support just-in-time manufacturing.',
    icon: imgSupplyChain,
  },
  {
    id: 8,
    title: 'Sales & Dealership Management',
    description: 'Transform dealership operations with advanced DMS and CRM platforms that improve sales efficiency and customer engagement. Streamline workflows, enhance service experiences, and accelerate business growth across dealer networks.',
    icon: imgSales,
  },
  {
    id: 9,
    title: 'AI, ML & IoT Solutions',
    description: 'Harness the power of AI, Machine Learning, and IoT to unlock operational intelligence. Enable predictive insights, process automation, and connected ecosystems that drive smarter decisions and improved performance.',
    icon: imgAI,
  }
];

const AutomotiveExpertise = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-[#f8fafa] overflow-hidden">
      <div className="w-full px-4 md:px-8 lg:px-10">
        
        {/* Header */}
        <SectionTitle 
          title={
            <>
              Our <span className="text-primary">Automotive</span> Expertise
            </>
          }
          description="Delivering smart, reliable solutions designed to achieve your goals."
        />

        {/* Carousel */}
        <div className="w-full cursor-grab active:cursor-grabbing">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {expertiseData.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <div className="bg-white h-full w-full p-6 md:p-8 flex flex-col items-center text-center shadow-sm relative overflow-hidden group cursor-pointer border border-gray-100">
                  
                  {/* Default State */}
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-6 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                    <img src={item.icon} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-[17px] md:text-[19px] font-semibold text-[#222222] mb-3 transition-opacity duration-300 group-hover:opacity-0">{item.title}</h3>
                  <p className="text-[#555555] text-[13px] md:text-[14px] leading-relaxed transition-opacity duration-300 group-hover:opacity-0">{item.description}</p>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary p-6 md:p-8 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] ease-out z-10">
                    <h3 className="text-[17px] md:text-[19px] font-semibold text-white mb-4">{item.title}</h3>
                    <p className="text-white/95 text-[13px] md:text-[14px] leading-relaxed mb-4">{item.description}</p>
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

export default AutomotiveExpertise;
