import React from 'react';
import reductionIcon from '../../assets/logistics/reduction-150x150.png';
import operationalIcon from '../../assets/logistics/operational-150x150.png';
import deliveredIcon from '../../assets/logistics/delivered-150x150.png';
import satisfactionIcon from '../../assets/logistics/satisfaction-150x150.png';
import paperIcon from '../../assets/logistics/paper-150x150.png';
import accountabilityIcon from '../../assets/logistics/accountability-150x150.png';
import monitorIcon from '../../assets/logistics/monitor.png';
import growthIcon from '../../assets/logistics/growth-150x150.webp';

const benefitsData = [
  {
    icon: reductionIcon,
    title: "30-40% reduction in operational costs",
    description: "through automation and optimized workflows"
  },
  {
    icon: operationalIcon,
    title: "Improved fleet utilization and fuel efficiency",
    description: "with real-time tracking and route optimization"
  },
  {
    icon: deliveredIcon,
    title: "Faster deliveries and reduced turnaround times",
    description: "across transportation networks"
  },
  {
    icon: satisfactionIcon,
    title: "Enhanced customer satisfaction",
    description: "through live shipment updates and transparency"
  },
  {
    icon: paperIcon,
    title: "Minimal paperwork and fewer manual errors",
    description: "via digital documentation"
  },
  {
    icon: accountabilityIcon,
    title: "Greater operational visibility and accountability",
    description: "across teams and partners"
  },
  {
    icon: monitorIcon,
    title: "Data-backed decision-making",
    description: "powered by analytics and performance insights"
  },
  {
    icon: growthIcon,
    title: "Stronger risk management and compliance",
    description: "control with secure, centralized systems"
  }
];

const LogisticsBenefits = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-16 mb-16">
          <div className="w-full lg:w-1/2">
            <h2 className="text-[2rem] md:text-[2.4rem] lg:text-[2.6rem] font-medium text-[#111111] leading-tight">
              Benefits For<br />
              <span className="text-primary">Logistics Businesses</span>
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="border-l-4 border-primary pl-6">
              <p className="text-[#555555] text-[15px] md:text-[16px] leading-relaxed">
                By implementing smart, technology-driven logistics solutions, businesses can unlock measurable performance improvements and long-term operational value:
              </p>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {benefitsData.map((benefit, index) => (
            <div key={index} className="flex flex-row items-start gap-4">
              <div className="w-16 h-16 shrink-0">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-medium text-[#111111] text-[16px] leading-snug mb-1">
                  {benefit.title}
                </h3>
                <p className="text-[#555555] text-[14px] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsBenefits;
