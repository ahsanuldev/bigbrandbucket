import React from 'react';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-[#a3a3a3]">
      <div className="pt-20 pb-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Contact Info */}
          <div className="flex flex-col gap-3.5 text-[14.5px] leading-relaxed lg:pr-8 lg:col-span-2">
            <p>
              Phone: +91 91490 39480, +91 87961 72711
            </p>
            <p>
              Email: raghav@bigbrandbucket.com
            </p>
            <p>
              Address: 601 6th Floor, Jmd Galleria Mall, Badshahpur Sohna Rd Hwy, 
              Sector 48, Gurugram, Haryana 122001
            </p>
            <div className="flex items-center gap-3 mt-3">
              <a href="#" className="w-[32px] h-[32px] rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <FaLinkedinIn size={13} />
              </a>
              <a href="#" className="w-[32px] h-[32px] rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                <FaInstagram size={13} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col lg:pl-10">
            <h3 className="text-white font-medium text-[19px] mb-5 tracking-wide">Quick Links</h3>
            <ul className="flex flex-col gap-3.5 text-[14.5px]">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition-colors">Our Portfolio</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div className="flex flex-col">
            <h3 className="text-white font-medium text-[19px] mb-5 tracking-wide">Industries</h3>
            <ul className="flex flex-col gap-3.5 text-[14.5px]">
              <li><Link to="/manufacturing" className="hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link to="/logistics" className="hover:text-white transition-colors">Logistic</Link></li>
              <li><Link to="/construction" className="hover:text-white transition-colors">Construction</Link></li>
              <li><Link to="/education" className="hover:text-white transition-colors">Education</Link></li>
              <li><Link to="/travel" className="hover:text-white transition-colors">Travel</Link></li>
            </ul>
          </div>

          {/* Column 4: Our Services */}
          <div className="flex flex-col">
            <h3 className="text-white font-medium text-[19px] mb-5 tracking-wide">Our Services</h3>
            <ul className="flex flex-col gap-3.5 text-[14.5px]">
              <li><Link to="/app-development" className="hover:text-white transition-colors">App Development</Link></li>
              <li><Link to="/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/ui-ux" className="hover:text-white transition-colors">UI/UX</Link></li>
              <li><Link to="/cross-platform-development" className="hover:text-white transition-colors">Cross Platform Development</Link></li>
              <li><Link to="/solution-designing" className="hover:text-white transition-colors">Solution Designing</Link></li>
              <li><Link to="/cloud-computing" className="hover:text-white transition-colors">Cloud Computing</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#222] pt-8 text-center relative z-10">
          <p className="text-[15px] text-[#ccc] font-normal tracking-wide">
            © 2026, Made with Big Brand Bucket. All Rights Reserved.
          </p>
        </div>
      </div>
      </div>

      {/* Giant Fading Background Text */}
      <div className="w-full mt-4 pointer-events-none select-none overflow-hidden flex justify-center">
        <svg viewBox="0 0 1000 120" className="w-full h-[22vw] sm:h-[18vw] md:h-[15vw] block" preserveAspectRatio="none">
          <defs>
            <linearGradient id="fadeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="25%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <text 
            x="0" 
            y="105" 
            fill="url(#fadeGradient)" 
            className="font-semibold uppercase"
            style={{ fontSize: '105px', fontFamily: 'inherit' }}
            textLength="1000"
            lengthAdjust="spacing"
          >
            BIG BRAND BUCKET
          </text>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
