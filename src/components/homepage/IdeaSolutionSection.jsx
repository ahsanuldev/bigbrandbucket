import React, { useRef } from 'react';
import bgImage from '../../assets/you-have-idea-bg-image.jpg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IdeaSolutionSection = () => {
  const container = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    gsap.from(textRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });
  }, { scope: container });

  return (
    <section 
      ref={container}
      className="w-full relative min-h-[250px] md:min-h-[350px] py-16 md:py-20 flex items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0e676b]/85 z-0"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div ref={textRef} className="w-full lg:w-full flex flex-col items-start gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white leading-tight">
            You have Idea ? We have Solution.
          </h2>
          
          <p className="text-white/90 text-[15px] md:text-base leading-relaxed max-w-3xl">
            Delivering Customized and Unmatchable Digital Marketing , Web Development & Mobile App
            Design Solutions Since 2016
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdeaSolutionSection;
