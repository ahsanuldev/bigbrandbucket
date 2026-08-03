import React, { useRef } from 'react';
import { RiTrophyLine, RiThumbUpLine, RiTeamLine } from 'react-icons/ri';
import flagIn from '../../assets/flags/in.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const container = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    tl.from(leftRef.current, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from(rightRef.current, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.8");
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-16 md:py-24 bg-[#eef5f4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center lg:items-start">
          
          {/* Left Column */}
          <div ref={leftRef} className="w-full lg:w-1/2">
            
            {/* Pill Badge */}
            <div className="bg-white rounded-[20px]  inline-flex flex-col p-5 px-7 mb-10">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=33" alt="Client 1" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=47" alt="Client 2" />
                  <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=12" alt="Client 3" />
                </div>
                <span className="text-3xl font-semibold text-primary leading-none mt-1">700+</span>
              </div>
              <div className="text-[15px] font-normal text-primary mt-3 text-center">Clients Have Trusted Us</div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-[45px] font-medium text-[#111111] leading-tight mb-10">
              Trusted by <span className="text-primary">Startups to<br />Global Enterprises</span>
            </h2>

            {/* Features */}
            <div className="space-y-4 pr-0 lg:pr-10">
              
              {/* Feature 1 */}
              <div className="flex items-start gap-5 p-5 rounded-2xl border border-primary/10 bg-primary/[0.03]">
                <div className="w-[46px] h-[46px] flex items-center justify-center rounded-xl border border-primary/20 text-primary flex-shrink-0 bg-transparent">
                  <RiTrophyLine className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-[18px] font-medium text-[#111111] mb-1">7+ years of experience</h4>
                  <p className="text-gray-600 text-[14.5px]">We can handle projects of all complexities.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-5 p-5 rounded-2xl border border-primary/10 bg-primary/[0.03]">
                <div className="w-[46px] h-[46px] flex items-center justify-center rounded-xl border border-primary/20 text-primary flex-shrink-0 bg-transparent">
                  <RiThumbUpLine className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-[18px] font-medium text-[#111111] mb-1">700+ satisfied clients</h4>
                  <p className="text-gray-600 text-[14.5px]">Startups to fortune we have worked with all.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-5 p-5 rounded-2xl border border-primary/10 bg-primary/[0.03]">
                <div className="w-[46px] h-[46px] flex items-center justify-center rounded-xl border border-primary/20 text-primary flex-shrink-0 bg-transparent">
                  <RiTeamLine className="text-2xl" />
                </div>
                <div>
                  <h4 className="text-[18px] font-medium text-[#111111] mb-1">50+ in house team</h4>
                  <p className="text-gray-600 text-[14.5px]">Top 1% industry talent to ensure your digital success.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (Form) */}
          <div ref={rightRef} className="w-full lg:w-1/2">
            <div className="bg-white rounded-xl p-6 md:p-8 w-full">
              <form className="space-y-6">
                
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-primary font-medium text-[15px] mb-2">First Name</label>
                    <input type="text" className="w-full border border-gray-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-[15px]" />
                  </div>
                  <div>
                    <label className="block text-primary font-medium text-[15px] mb-2">Last Name</label>
                    <input type="text" className="w-full border border-gray-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-[15px]" />
                  </div>
                </div>

                {/* Contact Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-primary font-medium text-[15px] mb-2">Email</label>
                    <input type="email" className="w-full border border-gray-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors text-[15px]" />
                  </div>
                  <div>
                    <label className="block text-primary font-medium text-[15px] mb-2">Phone Number</label>
                    <div className="flex items-center border border-gray-200 rounded-md px-4 py-2.5 bg-white focus-within:border-primary transition-colors">
                      <img src={flagIn} alt="IN" className="w-[20px] object-cover mr-1.5 rounded-[2px]" />
                      <span className="text-gray-600 text-[10px] mr-2">▼</span>
                      <input type="tel" placeholder="+91 81234 56789" className="w-full focus:outline-none text-gray-700 bg-transparent placeholder-gray-400 text-[15px]" />
                    </div>
                  </div>
                </div>

                {/* Service Row */}
                <div>
                  <label className="block text-primary font-medium text-[15px] mb-2">Choose Service</label>
                  <div className="relative">
                    <select className="w-full border border-gray-200 rounded-md px-4 py-2.5 appearance-none focus:outline-none focus:border-primary transition-colors text-gray-700 text-[15px] bg-white cursor-pointer">
                      <option value="">Select</option>
                      <option value="Website Designing">Website Designing</option>
                      <option value="Shopify Development">Shopify Development</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Customised Erp">Customised Erp</option>
                      <option value="Branding">Branding</option>
                      <option value="Social Media Marketing (SEO)">Social Media Marketing (SEO)</option>
                      <option value="Performance Marketing">Performance Marketing</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Business Automation">Business Automation</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                      <span className="text-gray-700 text-[10px]">▼</span>
                    </div>
                  </div>
                </div>

                {/* Message Row */}
                <div>
                  <label className="block text-primary font-medium text-[15px] mb-2">Message</label>
                  <textarea rows="3" className="w-full border border-gray-200 rounded-md px-4 py-2.5 focus:outline-none focus:border-primary transition-colors resize-none text-[15px]"></textarea>
                </div>

                {/* Submit Button */}
                <button type="button" className="w-full bg-primary hover:bg-black cursor-pointer text-white font-medium text-[16px] py-3 rounded-full transition-colors mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
