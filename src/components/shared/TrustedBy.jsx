import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import logo1 from '../../assets/logo-1.png';
import logo4 from '../../assets/logo-4.png';
import logo5 from '../../assets/logo-5.png';
import logo6 from '../../assets/logo-6.png';
import logo7 from '../../assets/logo-7.png';
import fadeLineLeft from '../../assets/fade-line-to-left.png';
import fadeLineRight from '../../assets/fade-line-to-right.png';

const logos = [logo1, logo4, logo5, logo6, logo7];
// Duplicate for infinite scroll
const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

const TrustedBy = () => {
  const container = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const logosRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 85%',
      }
    });

    tl.from(title1Ref.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: 'power2.out'
    })
    .from(logosRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: 'power2.out'
    }, "-=0.4")
    .from(title2Ref.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out'
    }, "-=0.4");
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-12 md:py-16 bg-bg overflow-hidden border-y border-gray-200/50">
      <div ref={title1Ref} className="w-full flex items-center justify-between mb-10 md:mb-14">
        <img src={fadeLineLeft} alt="decorative line left" className="hidden md:block w-[35%] lg:w-[25%] h-[2px] object-fill" />
        <h2 className="text-2xl md:text-3xl font-normal text-[#111111] whitespace-nowrap px-4 text-center w-full md:w-auto">Trusted By</h2>
        <img src={fadeLineRight} alt="decorative line right" className="hidden md:block w-[35%] lg:w-[25%] h-[2px] object-fill" />
      </div>

      <div ref={logosRef} className="flex whitespace-nowrap overflow-hidden relative">
        {/* Left/Right Gradients for smooth fade */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex min-w-max items-center gap-6 md:gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
          {repeatedLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className="w-48 md:w-64 h-24 md:h-32 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center p-6 md:p-10 flex-shrink-0 border border-white hover:border-gray-100 transition-colors overflow-hidden"
            >
              <img 
                src={logo} 
                alt={`Client logo ${idx}`} 
                className="w-full h-full object-contain scale-[1.7] md:scale-[2.5]" 
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div ref={title2Ref} className="w-full flex items-center justify-between mt-10 md:mt-14">
        <img src={fadeLineLeft} alt="decorative line left" className="hidden md:block w-[35%] lg:w-[25%] h-[2px] object-fill" />
        <h2 className="text-2xl md:text-3xl font-normal text-[#111111] whitespace-nowrap px-4 text-center w-full md:w-auto">Over 700+ Global Clients</h2>
        <img src={fadeLineRight} alt="decorative line right" className="hidden md:block w-[35%] lg:w-[25%] h-[2px] object-fill" />
      </div>
    </section>
  );
};

export default TrustedBy;
