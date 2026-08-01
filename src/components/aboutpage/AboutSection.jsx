import React from 'react';
import bgImage from '../../assets/about-page/121150.jpg';
import commitmentImage from '../../assets/about-page/25079.jpg';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Top Text Row */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16">
          <div className="lg:w-[45%] lg:pr-6">
            <h4 className="text-[17px] font-medium text-gray-800 mb-4">About Us</h4>
            <h2 className="text-[36px] md:text-[40px] lg:text-[44px] font-semibold leading-tight text-[#111111]">
              <span className="whitespace-nowrap">Delivering <span className="text-primary">Consistent</span></span><br />
              <span className="text-primary">Promises</span>
            </h2>
          </div>
          <div className="lg:w-[55%] flex flex-col gap-4 text-[15px] leading-relaxed text-gray-600 lg:pt-2">
            <p>
              Big Brand Bucket Pvt. Ltd. has been operating since 2018, founded by Mr. Raghav Bhasin, Founder & CEO, with a vision to become a leading player in web solutions, business consulting, IT services, and outsourcing.
            </p>
            <p>
              We take pride in serving happy and satisfied clients across the globe, including the United Kingdom, UAE, Canada, Saudi Arabia, Kuwait, Australia.
            </p>
            <p>
              Whether you need an attractive, budget-friendly website or a dynamic, scalable eCommerce platform, we have the right solution for you. We build products tailored to our clients' requirements and scale them with high-impact digital marketing solutions to drive measurable growth.
            </p>
          </div>
        </div>

        {/* Middle Image Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Our Mission */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[450px] shadow-sm">
            <img 
              src={bgImage} 
              alt="Our Mission Background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* White floating box */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-6 md:p-8 shadow-md">
              <h3 className="text-[22px] font-semibold text-[#111111] mb-3">
                Our <span className="text-primary">Mission</span>
              </h3>
              <p className="text-[14.5px] text-gray-600 leading-relaxed">
                Our mission at Big Brand Bucket is to support business growth and global expansion through tailored commercial strategies powered by technology and expertise.
              </p>
            </div>
          </div>

          {/* Card 2: Our Commitment */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[450px] shadow-sm">
            <img 
              src={commitmentImage} 
              alt="Our Commitment Background" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* White floating box */}
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl p-6 md:p-8 shadow-md">
              <h3 className="text-[22px] font-semibold text-[#111111] mb-3">
                Our <span className="text-primary">Commitment</span>
              </h3>
              <p className="text-[14.5px] text-gray-600 leading-relaxed">
                We are committed to the highest standards of ethics, quality, and confidentiality, delivering customized solutions and building long-term relationships that create lasting value.
              </p>
            </div>
          </div>
          
        </div>

        {/* Bottom Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-2xl py-8 px-6 text-center shadow-sm">
            <div className="text-4xl md:text-[42px] font-semibold text-primary mb-2">650+</div>
            <div className="text-[15px] font-medium text-gray-600">Website Hosted</div>
          </div>
          <div className="border border-gray-200 rounded-2xl py-8 px-6 text-center shadow-sm">
            <div className="text-4xl md:text-[42px] font-semibold text-primary mb-2">700+</div>
            <div className="text-[15px] font-medium text-gray-600">Happy Clients</div>
          </div>
          <div className="border border-gray-200 rounded-2xl py-8 px-6 text-center shadow-sm">
            <div className="text-4xl md:text-[42px] font-semibold text-primary mb-2">7+</div>
            <div className="text-[15px] font-medium text-gray-600">Years Experience</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
