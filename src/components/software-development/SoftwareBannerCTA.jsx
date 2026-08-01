import React from 'react';
import Button from '../ui/Button';

import ellipseLeftBottom from '../../assets/soft-dev-page/Ellipse-3001.png';
import ellipseRightSmall from '../../assets/soft-dev-page/Ellipse-3002.png';
import ellipseRightLarge from '../../assets/soft-dev-page/Ellipse-3000.png';

const SoftwareBannerCTA = () => {
  return (
    <section className="relative py-20 -mb-7 md:py-24 bg-[#198c90] rounded-[2rem] overflow-clip text-center">
      
      {/* Decorative Ellipses */}
      <img 
        src={ellipseLeftBottom} 
        alt="" 
        className="absolute bottom-0 left-0 w-[200px] md:w-[280px] pointer-events-none opacity-90" 
      />
      <img 
        src={ellipseRightSmall} 
        alt="" 
        className="absolute top-0 right-[15%] w-[80px] md:w-[120px] pointer-events-none opacity-90" 
      />
      <img 
        src={ellipseRightLarge} 
        alt="" 
        className="absolute top-16 right-4 w-[180px] md:w-[250px] pointer-events-none opacity-90" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-[2.5rem] font-semibold text-white leading-tight mb-6">
              Ready to Turn Your Software Idea into Reality?
            </h2>
            <p className="text-white/90 text-[15px] md:text-[16px] max-w-3xl mb-10">
              Partner with Big Brand Bucket to develop secure, scalable, and high-performance software solutions tailored to your business goals.
            </p>
            <Button variant="secondary" arrow={true}>
              Schedule an Appointment
            </Button>
          </div>
      </div>
    </section>
  );
};

export default SoftwareBannerCTA;
