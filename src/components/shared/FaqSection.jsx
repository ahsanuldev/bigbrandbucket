import React, { useState, useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "How do you ensure consistent product quality throughout development?",
    answer: "Big Brand Bucket visions to provide better lives and days by solving everyday situations with the help of flawless design and IT solutions.\nWe have cheerful and fulfilled customers spread everywhere throughout the world."
  },
  {
    question: "How do I start a project with you?",
    answer: "We follow a structured, quality-driven process that includes clear documentation, regular reviews, internal quality checks, and client feedback at every milestone to ensure consistency and excellence."
  },
  {
    question: "Do you offer complete branding and design services?",
    answer: "Yes, Big Brand Bucket offers end-to-end branding and design services, including brand strategy, logo design, visual identity, digital creatives, and marketing collaterals."
  },
  {
    question: "What industries do you work with?",
    answer: "We work across multiple industries including startups, retail, real estate, education, technology, lifestyle, and professional services, delivering solutions tailored to each business."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines depend on the scope and complexity. Smaller projects may take a few weeks, while larger branding or digital projects may take several months. We share a clear timeline before starting."
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer: "Absolutely. We offer post-project support, maintenance, and ongoing optimization services to ensure your brand continues to perform and evolve."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(1); // Default to second item open as in screenshot
  const container = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 60%',
      }
    });

    tl.from(titleRef.current, {
      x: -30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
    .from('.faq-item', {
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out'
    }, "-=0.4");
  }, { scope: container });

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={container} className="w-full py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10">
        
        {/* Header */}
        <div ref={titleRef}>
          <SectionTitle 
            align="left"
          eyebrow="FAQs"
          title={
            <>
              <span className="text-primary">Frequently</span> Asked<br />Questions
            </>
          }
          description="Browse through these FAQs to find answers to commonly asked questions."
        />
        </div>

        {/* FAQs Accordion */}
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`faq-item w-full rounded-xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? 'bg-primary' : 'bg-[#f0f6f5] hover:bg-[#e6f0ef]'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-lg md:text-[19px] font-normal transition-colors ${isOpen ? 'text-white' : 'text-[#111111]'}`}>
                    {faq.question}
                  </span>
                  
                  {/* Icon */}
                  <span className={`flex-shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke={isOpen ? "white" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>
                
                {/* Answer Content */}
                <div 
                  className={`px-5 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <div className="text-white/90 text-[14px] md:text-[15px] leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
