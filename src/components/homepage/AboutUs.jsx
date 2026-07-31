import React from 'react';

// Assets
import aboutImage from '../../assets/AboutSectionImage.png';
import ongoingSupportIcon from '../../assets/ongoing-support.png';
import expertiseIcon from '../../assets/expertise.png';

const AboutUs = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Images */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative inline-block w-full max-w-[500px]">
            {/* Main Image */}
            <img 
              src={aboutImage} 
              alt="Team collaborating" 
              className="w-full h-auto rounded-3xl object-cover shadow-sm"
            />

            {/* Floating Card: Ongoing Support */}
            <img 
              src={ongoingSupportIcon} 
              alt="Ongoing Support" 
              className="absolute -left-8 md:-left-16 bottom-12 w-36 md:w-52 h-auto object-contain" 
            />

            {/* Floating Card: Expertise */}
            <img 
              src={expertiseIcon} 
              alt="Expertise" 
              className="absolute -right-8 md:-right-16 top-12 w-36 md:w-52 h-auto object-contain" 
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
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
