import React from 'react';
import icon1 from '../../assets/about-page/graph.png';
import icon2 from '../../assets/about-page/process.png';
import icon3 from '../../assets/about-page/handshake.png';
import icon4 from '../../assets/about-page/portfolio.png';
import ellipseBg from '../../assets/Ellipse-for-behind.png';

const features = [
  {
    icon: icon1,
    title: 'Mutual Growth',
    description: 'At Big Brand Bucket Pvt. Ltd., we believe in partnerships over transactions. Since 2016, led by Founder & CEO Mr. Raghav Bhasin, we align our goals with yours to grow together.'
  },
  {
    icon: icon2,
    title: 'Process-Driven Execution',
    description: 'Our structured, process-oriented approach ensures consistency, quality, and timely delivery across web solutions, business consulting, IT services, and outsourcing—no matter the project size or location.'
  },
  {
    icon: icon3,
    title: 'Integrity & Transparency',
    description: 'We value honesty and clarity in every engagement. From capabilities to timelines, we set realistic expectations and deliver exactly what we promise.'
  },
  {
    icon: icon4,
    title: 'Ethical Business Practices',
    description: 'We grow through the strength of our work, not by undermining others. Big Brand Bucket is committed to fair, ethical, and responsible business practices across all markets we serve.'
  }
];

const CodeWeLiveBy = () => {
  return (
    <section className="py-24 bg-bg relative overflow-hidden">
      {/* Decorative Ellipse */}
      <img 
        src={ellipseBg} 
        alt="Background Decoration" 
        className="absolute left-[-5%] md:left-[-3%] top-[40%] -translate-y-1/2 h-[30%] md:h-[40%] object-contain pointer-events-none z-0 opacity-70"
      />

      <div className="max-w-360 mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <h2 className="text-[32px] md:text-[40px] font-semibold text-center text-[#111111] mb-16">
          The Code We <span className="text-primary">Live By</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-5 md:p-6 py-8 text-center relative overflow-hidden group cursor-pointer h-full flex flex-col">
              
              {/* Default State */}
              <div className="grow flex flex-col items-center">
                <img src={feature.icon} alt={feature.title} className="h-13 mx-auto mb-4 object-contain transition-opacity duration-300 group-hover:opacity-0" />
                <h3 className="text-[20px] font-medium text-gray-900 mb-3 transition-opacity duration-300 group-hover:opacity-0">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-500 transition-opacity duration-300 group-hover:opacity-0">
                  {feature.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary p-5 md:p-6 flex flex-col items-center justify-center text-center translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out z-10">
                <h3 className="text-[17px] font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-white/90 text-[13px] leading-relaxed">{feature.description}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeWeLiveBy;
