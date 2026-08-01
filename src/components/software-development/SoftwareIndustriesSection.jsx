import React from 'react';
import { FaHeartbeat, FaShoppingCart, FaBuilding, FaChartLine, FaGraduationCap, FaTruck } from 'react-icons/fa';

const industriesData = [
  {
    num: "01",
    icon: FaHeartbeat,
    title: "Healthcare Software Development",
    desc: "Patient management systems, telemedicine platforms, hospital ERP software, and healthcare automation solutions."
  },
  {
    num: "02",
    icon: FaShoppingCart,
    title: "Ecommerce Software Solutions",
    desc: "Inventory systems, ecommerce management software, customer engagement platforms, and multi-vendor marketplace development."
  },
  {
    num: "03",
    icon: FaBuilding,
    title: "Real Estate Software Development",
    desc: "Property management systems, real estate CRM software, lead automation platforms, and listing management systems."
  },
  {
    num: "04",
    icon: FaChartLine,
    title: "Fintech Software Development",
    desc: "Secure financial software, payment management systems, accounting automation, and fintech applications."
  },
  {
    num: "05",
    icon: FaGraduationCap,
    title: "Education Software Development",
    desc: "Learning management systems, online examination platforms, virtual classroom software, and student portals."
  },
  {
    num: "06",
    icon: FaTruck,
    title: "Logistics & Transportation Software",
    desc: "Fleet management software, warehouse automation systems, shipment tracking applications, and logistics management solutions."
  }
];

const SoftwareIndustriesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <h2 className="text-[2.5rem] md:text-[3rem] font-medium text-[#111111] leading-tight tracking-tight md:w-1/2">
            <span className="text-primary-alt">Industries</span> We Serve
          </h2>
          <p className="text-gray-500 text-[16px] leading-relaxed md:w-1/2 md:pl-12">
            We provide software development solutions to specific industries tailored to operational requirements and business challenges.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-[2rem] p-8 border border-gray-100 transition-all duration-300 hover:bg-primary-alt hover:border-primary-alt group hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-default"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-[1.25rem] bg-primary-alt flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                    <IconComponent className="text-white text-2xl transition-colors duration-300 group-hover:text-primary" />
                  </div>
                  <span className="text-4xl font-extrabold text-gray-200 opacity-60 transition-all duration-300 group-hover:text-white group-hover:opacity-90">
                    {item.num}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-[22px] font-medium text-[#111111] mb-4 leading-snug tracking-tight transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-[15px] leading-relaxed transition-colors duration-300 group-hover:text-white/90">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SoftwareIndustriesSection;
