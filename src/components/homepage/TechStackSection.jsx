import React, { useRef } from 'react';
import techStackImg from '../../assets/tech-stack.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechStackSection = () => {
  const container = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    // 1. Text slides in (one-time)
    gsap.from(textRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%',
      }
    });

    // 2. Image scales up based on scroll (scrubbed)
    gsap.fromTo(imageRef.current, 
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 60%',
          end: 'center center',
          scrub: 1 // smooth scrubbing
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-16 md:py-24 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div ref={textRef} className="w-full lg:w-1/2 flex flex-col items-start gap-5 md:gap-6">
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#111111] leading-tight tracking-tight">
            Our <span className="text-primary">Technologies Stack</span>
          </h2>
          
          <p className="text-gray-600 text-[15px] md:text-base leading-relaxed max-w-lg">
            Behind every product we build is a powerful technology stack.
            Using modern frameworks and cloud-native tools, we create
            innovative, scalable, and seamless digital experiences.
          </p>
          
          <button className="mt-2 bg-primary text-white px-8 py-3 rounded-full text-[15px] font-medium hover:bg-primary/90 transition-colors shadow-sm flex items-center gap-2">
            Learn More 
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>

        {/* Right Image */}
        <div ref={imageRef} className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img 
            src={techStackImg} 
            alt="Technologies Stack" 
            className="w-full max-w-[400px] lg:max-w-[480px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
