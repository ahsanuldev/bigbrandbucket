import React from 'react';
import Button from '../ui/Button';

const SoftwareCTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
        
        <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.8rem] font-semibold text-[#111111] leading-tight tracking-tight mb-6">
          Looking for a Trusted <span className="text-primary">Software Development<br className="hidden md:block" /> Company</span> in Gurgaon?
        </h2>
        
        <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed max-w-4xl mx-auto mb-10">
          From ERP and CRM systems to SaaS platforms, web applications, and business automation solutions, we help businesses build scalable software that drives efficiency, innovation, and long-term growth.
        </p>
        
        <Button variant="primary">
          Get Free Consultation Today
        </Button>

      </div>
    </section>
  );
};

export default SoftwareCTASection;
