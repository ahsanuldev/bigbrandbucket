import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Assets
import aboutImage from '../../assets/AboutSectionImage.png';
import ongoingSupportIcon from '../../assets/ongoing-support.png';
import expertiseIcon from '../../assets/expertise.png';

const AboutUs = () => {
  const container = useRef(null);
  const mainImageRef = useRef(null);
  const float1WrapperRef = useRef(null);
  const float2WrapperRef = useRef(null);
  const float1Ref = useRef(null);
  const float2Ref = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    // Create a timeline for the scroll-triggered sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%',
      }
    });

    // 1. Main image slides up
    tl.from(mainImageRef.current, {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    })
    // 2. Floating cards slide in from bottom
    .from([float1WrapperRef.current, float2WrapperRef.current], {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    }, "-=0.5"); // overlap with main image

    // Text fade in (independent or part of timeline)
    gsap.from(textRef.current, {
      opacity: 0,
      duration: 1.2,
      delay: 0.2, // slight delay after images start
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%',
      }
    });

    // Continuous floating effect for the smaller cards
    gsap.to([float1Ref.current, float2Ref.current], {
      y: -15,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      stagger: 0.5, // Make them float slightly out of sync
    });
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-16 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative inline-block w-full max-w-[500px]">
            {/* Main Image */}
            <img 
              ref={mainImageRef}
              src={aboutImage} 
              alt="Team collaborating" 
              className="w-full h-auto rounded-3xl object-cover shadow-sm"
            />

            {/* Floating Card: Ongoing Support */}
            <div ref={float1WrapperRef} className="absolute -left-8 md:-left-16 bottom-12 w-36 md:w-52 z-10">
              <img 
                ref={float1Ref}
                src={ongoingSupportIcon} 
                alt="Ongoing Support" 
                className="w-full h-auto object-contain" 
              />
            </div>

            {/* Floating Card: Expertise */}
            <div ref={float2WrapperRef} className="absolute -right-8 md:-right-16 top-12 w-36 md:w-52 z-10">
              <img 
                ref={float2Ref}
                src={expertiseIcon} 
                alt="Expertise" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div ref={textRef} className="w-full lg:w-1/2 flex flex-col gap-6">
          <span className="text-[#111111] text-lg font-normal">About Us</span>
          
          <h2 className="text-[2.5rem] md:text-[3rem] leading-[1.1] font-medium text-[#111111]">
            Delivering <br />
            <span className="text-primary">Consistent Promises</span>
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
            Big Brand Bucket is a Gurgaon-based IT company helping
            startups, brands, and enterprises grow online through website
            development, software development, SEO, branding, and <span className="text-primary">scalable e-commerce solutions</span> tailored for modern digital
            businesses.
          </p>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
            With experience serving businesses across multiple industries,
            we focus on building result-driven digital experiences that
            support long-term growth and online visibility.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex-1 min-w-[120px] bg-transparent border border-gray-200 rounded-xl p-5 md:p-6 text-center">
              <div className="text-3xl md:text-4xl font-medium text-primary mb-2">650+</div>
              <div className="text-gray-600 text-xs md:text-sm whitespace-nowrap">Website Hosted</div>
            </div>
            
            <div className="flex-1 min-w-[120px] bg-transparent border border-gray-200 rounded-xl p-5 md:p-6 text-center">
              <div className="text-3xl md:text-4xl font-medium text-primary mb-2">700+</div>
              <div className="text-gray-600 text-xs md:text-sm whitespace-nowrap">Happy Clients</div>
            </div>
            
            <div className="flex-1 min-w-[120px] bg-transparent border border-gray-200 rounded-xl p-5 md:p-6 text-center">
              <div className="text-3xl md:text-4xl font-medium text-primary mb-2">7+</div>
              <div className="text-gray-600 text-xs md:text-sm whitespace-nowrap">Years Experience</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
