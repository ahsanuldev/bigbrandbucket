import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionTitle from '../ui/SectionTitle';
import 'swiper/css';

import icon1 from '../../assets/logistics/monitor.png';
import icon2 from '../../assets/logistics/cross-docking-300x300.png';
import icon3 from '../../assets/logistics/warehouse.png';
import icon4 from '../../assets/logistics/delivered-150x150.png';
import icon5 from '../../assets/logistics/supply-chain-management-300x300.png';
import icon6 from '../../assets/logistics/work-300x300.png';
import icon7 from '../../assets/logistics/iot-300x300.png';

const solutions = [
  {
    id: 1,
    title: 'Fleet Management Software',
    icon: icon1,
    points: [
      'Vehicle tracking & telematics',
      'Fuel monitoring',
      'Driver behavior analytics',
      'Preventive maintenance alerts',
      'Trip history & reports'
    ]
  },
  {
    id: 2,
    title: 'Transportation & Delivery Management Systems (TMS/DMS)',
    icon: icon2,
    points: [
      'Shipment planning & scheduling',
      'Route optimization & geo-tracking',
      'Proof of delivery (POD)',
      'Order assignment & dispatch automation',
      'Customer notifications & real-time updates'
    ]
  },
  {
    id: 3,
    title: 'Warehouse Management Systems (WMS)',
    icon: icon3,
    points: [
      'Inventory control',
      'Barcode/RFID scanning',
      'Slotting & put-away optimisation',
      'Goods receiving & dispatch management',
      'Stock reporting & forecasting'
    ]
  },
  {
    id: 4,
    title: 'On-Demand Logistics & Courier Apps',
    icon: icon4,
    points: [
      'Customer booking interface',
      'Real-time driver allocation',
      'Live tracking',
      'Fare estimation & digital payments',
      'Ratings & reviews'
    ]
  },
  {
    id: 5,
    title: 'Supply Chain Management (SCM) Software',
    icon: icon5,
    points: [
      'Supplier & vendor management',
      'Demand forecasting',
      'Purchase planning',
      'Logistics & distribution monitoring'
    ]
  },
  {
    id: 6,
    title: 'Driver & Workforce Management Apps',
    icon: icon6,
    points: [
      'Attendance & shift scheduling',
      'Task assignment',
      'Live location & trip monitoring',
      'Performance analytics'
    ]
  },
  {
    id: 7,
    title: 'IoT & GPS Tracking Solutions',
    icon: icon7,
    points: [
      'Live vehicle tracking',
      'Temperature & cargo condition monitoring',
      'Geofencing alerts',
      'Sensor-based analytics'
    ]
  }
];

const LogisticsSolutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="w-full py-16 md:py-24 bg-[#eef1f2]">
      <div className="w-full px-4 md:px-12 lg:px-20 mx-auto">
        <SectionTitle 
          title={<>Our Logistics <span className="text-primary">Software & App</span> Development Solutions</>}
          description="We deliver custom-built logistics technology products tailored to your business model."
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

export default LogisticsSolutions;
