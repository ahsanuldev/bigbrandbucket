import React from 'react';
import SectionTitle from '../ui/SectionTitle';

import icon1 from '../../assets/soft-dev-page/online-survey-150x150.png';
import icon2 from '../../assets/soft-dev-page/ui-design-150x150.png';
import icon3 from '../../assets/soft-dev-page/front-end-programming-150x150.png';
import icon4 from '../../assets/soft-dev-page/software-150x150.png';
import icon5 from '../../assets/soft-dev-page/monitor-150x150.png';
import icon6 from '../../assets/soft-dev-page/ml-150x150.png';

import arrow1 from '../../assets/about-page/before-1.png';
import arrow2 from '../../assets/about-page/before.png';

const processSteps = [
  {
    icon: icon1,
    title: "1. Business Requirement Analysis",
    desc: "We analysed your business objectives, workflows, challenges, and technical requirements before starting the project."
  },
  {
    icon: icon2,
    title: "2. UI/UX Strategy & Planning",
    desc: "Our UI/UX experts create user-friendly interfaces focused on enhancing customer experience and usability."
  },
  {
    icon: icon3,
    title: "3. Agile Software Development",
    desc: "We use agile methodologies to ensure faster delivery, transparent communication, and flexible development cycles."
  },
  {
    icon: icon4,
    title: "4. Quality Assurance & Security Testing",
    desc: "We test every part of the software for giving the best performance, smooth functionality, and high-end security."
  },
  {
    icon: icon5,
    title: "5. Deployment & Cloud Setup",
    desc: "We deploy your software securely with optimized server infrastructure and cloud configurations."
  },
  {
    icon: icon6,
    title: "6. Ongoing Support & Maintenance",
    desc: "Our support team provides regular updates, removes bugs, enhances performance, and offers long-term technical assistance."
  }
];

const SoftwareProcessSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        
        <SectionTitle 
          title={
            <>
              Our <span className="text-primary">Software Development</span> Process
            </>
          }
          align="center"
          className="mb-20"
        />

        <div className="relative mt-8">
          
          {/* Decorative Arrows for Desktop */}
          <img src={arrow1} alt="Next Step" className="hidden lg:block absolute top-8 left-[12%] w-[9%] pointer-events-none" />
          <img src={arrow2} alt="Next Step" className="hidden lg:block absolute top-8 left-[29%] w-[9%] pointer-events-none" />
          <img src={arrow1} alt="Next Step" className="hidden lg:block absolute top-8 left-[45.5%] w-[9%] pointer-events-none" />
          <img src={arrow2} alt="Next Step" className="hidden lg:block absolute top-8 left-[62%] w-[9%] pointer-events-none" />
          <img src={arrow1} alt="Next Step" className="hidden lg:block absolute top-8 left-[79%] w-[9%] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center px-2">
                <div className="h-20 mb-6 flex items-center justify-center">
                  <img src={step.icon} alt={step.title} className="h-12 w-auto object-contain" />
                </div>
                <h3 className="text-[15px] font-medium text-gray-700 mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SoftwareProcessSection;
