import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { FaCode, FaLayerGroup, FaUsers, FaCloud, FaGlobe, FaMobileAlt, FaRobot, FaServer, FaCheck } from 'react-icons/fa';
import ellipseImage from '../../assets/Ellipse-for-behind.png';

const servicesData = [
  {
    icon: FaCode,
    title: "Custom Software Development",
    desc: "We develop custom software solutions tailored according to your business needs, operational requirements, and long-term growth accomplishments.",
    sections: [
      {
        heading: "Our Custom Software Solutions Include:",
        list: [
          "Workflow automation software",
          "Inventory management systems",
          "Business process automation",
          "HR management software",
          "Billing & invoicing systems",
          "Enterprise management platforms",
          "Internal business portals"
        ]
      },
      {
        heading: "Benefits of Custom Software Development",
        list: [
          "Increased business efficiency",
          "Reduced operational costs",
          "Better scalability",
          "Improved workflow automation",
          "Enhanced data security",
          "Seamless integration capabilities"
        ]
      }
    ]
  },
  {
    icon: FaLayerGroup,
    title: "ERP Software Development",
    desc: "Our centralized ERP system helps you to manage your entire business operations through improved efficiency, reporting and decision-making.",
    sections: [
      {
        heading: "ERP Features:",
        list: [
          "Finance management",
          "Inventory tracking",
          "HR & payroll management",
          "Sales & CRM integration",
          "Automated reporting",
          "Multi-department workflow management"
        ]
      }
    ],
    footerText: "Our ERP software solutions help businesses in Gurgaon to optimize operations and reduce management complexity."
  },
  {
    icon: FaUsers,
    title: "CRM Software Development",
    desc: "BBB builds complete CRM software solutions to improve customer engagement and sales management designed for modern businesses.",
    sections: [
      {
        heading: "CRM Solutions Include:",
        list: [
          "Lead management systems",
          "Customer support automation",
          "Sales pipeline tracking",
          "WhatsApp & email integration",
          "Follow-up automation",
          "Customer analytics dashboards"
        ]
      }
    ],
    footerText: "Our 360 CRM software helps businesses increase conversions, improve customer retention and enhance sales processes."
  },
  {
    icon: FaCloud,
    title: "SaaS Application Development",
    desc: "We develop secure and scalable SaaS applications with cloud-ready architecture designed for new-age startups and enterprises.",
    sections: [
      {
        heading: "Our SaaS Development Services:",
        list: [
          "SaaS MVP development",
          "Subscription-based platforms",
          "Multi-tenant SaaS applications",
          "Cloud-native software",
          "API integrations",
          "SaaS dashboard development"
        ]
      }
    ],
    footerText: "We help startups to transform innovative ideas into scalable SaaS products in Gurgaon."
  },
  {
    icon: FaGlobe,
    title: "Enterprise Web Application Development",
    desc: "We develop enterprise-level web applications that delivers performance, security, scalability and a good user experience.",
    sections: [
      {
        heading: "Web Applications We Develop:",
        list: [
          "Ecommerce platforms",
          "Customer portals",
          "Admin dashboards",
          "Booking systems",
          "Marketplace platforms",
          "Business management applications"
        ]
      }
    ]
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    desc: "Our mobile app development services help businesses to engage users through user-friendly Android and iOS applications.",
    sections: [
      {
        heading: "Mobile App Solutions:",
        list: [
          "Android app development",
          "iOS app development",
          "Flutter app development",
          "Hybrid app development",
          "Ecommerce mobile apps",
          "Enterprise mobility solutions"
        ]
      }
    ]
  },
  {
    icon: FaRobot,
    title: "AI-Powered Software Solutions",
    desc: "Our team Integrates artificial intelligence into your daily business operations with advanced AI-driven software solutions.",
    sections: [
      {
        heading: "Our AI Software Services:",
        list: [
          "AI chatbots",
          "Business intelligence dashboards",
          "Predictive analytics",
          "AI workflow automation",
          "Recommendation engines",
          "AI-powered customer support systems"
        ]
      }
    ]
  },
  {
    icon: FaServer,
    title: "Cloud Application Development",
    desc: "We build secure and scalable cloud-based software applications with tech-heavy cloud infrastructure solutions.",
    sections: [
      {
        heading: "Cloud Solutions:",
        list: [
          "AWS cloud applications",
          "Azure cloud deployment",
          "Cloud migration services",
          "Scalable server architecture",
          "Cloud security implementation",
          "DevOps & CI/CD integration"
        ]
      }
    ]
  }
];

const SoftwareServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <SectionTitle 
          title={
            <>
              Our <span className="text-primary">Software Development</span> Services in <span className="text-primary">Gurgaon</span>
            </>
          }
          description="We provide secure, scalable, and business-focused software development solutions designed to help Gurgaon businesses streamline operations and accelerate growth."
          align="center"
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            
            return (
              <div 
                key={index} 
                className="bg-white rounded-[2rem] p-8 border border-gray-200 relative overflow-hidden flex flex-col h-full hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-300"
              >
                {/* Decorative background shape from screenshot */}
                <img src={ellipseImage} alt="" className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 object-cover opacity-50 z-0 pointer-events-none -translate-y-1/3 translate-x-1/3" />
                
                <div className="relative z-10 flex-grow">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  
                  {/* Title & Desc */}
                  <h3 className="text-2xl md:text-[26px] font-medium text-gray-900 mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-[15px] mb-8">
                    {service.desc}
                  </p>

                  {/* Sections */}
                  {service.sections.map((sec, secIndex) => (
                    <div key={secIndex} className="mb-8 last:mb-0">
                      <h4 className="text-primary font-medium text-[16px] mb-4">
                        {sec.heading}
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                        {sec.list.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <FaCheck className="text-primary mt-1 shrink-0 text-sm" />
                            <span className="text-gray-600 text-[14.5px] leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {/* Divider if not last section */}
                      {secIndex < service.sections.length - 1 && (
                        <div className="w-full h-px bg-gray-100 my-8"></div>
                      )}
                    </div>
                  ))}

                  {/* Footer Text */}
                  {service.footerText && (
                    <p className="text-gray-600 leading-relaxed text-[15px] mt-8">
                      {service.footerText}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SoftwareServicesSection;
