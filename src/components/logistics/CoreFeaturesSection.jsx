import React from 'react';
import { FaCheck } from 'react-icons/fa';
import featureImg from '../../assets/logistics/2151468806.jpg';

const featuresList = [
  "Real-time GPS tracking",
  "Interactive dashboards & analytics",
  "Automated billing & invoicing",
  "Digital proof of delivery (e-signature/OTP)",
  "Multi-language & multi-currency support",
  "AI-based route optimization",
  "Cloud-based accessibility",
  "API integration with ERP, CRM & accounting tools",
  "Secure data encryption",
  "Offline functionality"
];

const CoreFeaturesSection = () => {
  return (
    <section className="relative w-full flex flex-col md:flex-row bg-[#f8fafa]">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex justify-end">
        <div className="w-full max-w-[700px] px-6 py-16 md:py-24 lg:pl-10 lg:pr-16 flex flex-col justify-center">
          <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] font-medium text-[#111111] leading-tight tracking-tight mb-6">
            Core Features of Our<br />
            <span className="text-primary">Logistics Solutions</span>
          </h2>
          
          <p className="text-[#555555] text-[14px] md:text-[14.5px] leading-relaxed mb-8">
            Our logistics solutions deliver real-time visibility and operational control through GPS tracking, AI-powered route optimization, smart dashboards, and automated billing. With secure cloud access, offline functionality, and seamless ERP, CRM, and accounting integrations, we provide a scalable and future-ready logistics ecosystem.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {featuresList.map((item, index) => (
              <div 
                key={index} 
                className="flex w-fit items-center gap-2 px-4 py-2 bg-[#498b8c] rounded-full text-white text-[13px] md:text-[13.5px]"
              >
                <FaCheck className="text-[12px]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px]">
        <img 
          src={featureImg} 
          alt="Warehouse Interior" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default CoreFeaturesSection;
