import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../ui/Button';

// Assets
import heroTrophyIcon from '../../assets/hero-trophy-icon.svg';
import starHeroSection from '../../assets/Star-Hero_section.png';
import ellipseBehind from '../../assets/Ellipse-for-behind.png';
import heroTextAsset from '../../assets/hero-text-asset.png';
import heroRightImage from '../../assets/hero-right-image.jpg';
import heroGrid from '../../assets/hero-grid.png';

const Hero = () => {
  return (
    <section className="relative w-full pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-white">
      {/* Light Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{ backgroundImage: `url(${heroGrid})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-[55%] relative z-20">
          {/* Star background effect */}
          <img 
            src={starHeroSection} 
            alt="background shape" 
            className="absolute -bottom-12 -left-24 w-62.5   max-w-none -z-10 opacity-70"
          />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-primary-alt to-[#00c9b1] text-white px-5 py-1.5 rounded-full text-sm font-medium mb-6 shadow-sm">
            <img src={heroTrophyIcon} alt="Trophy" className="w-4 h-4" />
            Top-Rated by Clients
          </div>

          {/* Main Heading */}
          <h1 className="text-[2.5rem] md:text-5xl lg:text-[4rem] font-semibold text-[#111111] leading-[1.1] mb-8 relative tracking-tight">
            Grow Your Business With <br className="hidden lg:block" />
            Our Complete
            <img 
              src={heroTextAsset} 
              alt="sparkle" 
              className="inline-block w-8 md:w-10 ml-3 -mt-4"
            />
            <br />
            <span className="text-primary">IT Services & Solutions</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Button variant="primary" arrow>Get Quote</Button>
            
            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-primary rounded-full transition-colors"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[45%] relative z-20 mt-10 lg:mt-0">
          <div className="relative flex justify-end">
            {/* Ellipse behind image */}
            <img 
              src={ellipseBehind} 
              alt="circle background" 
              className="absolute top-1/3 -translate-y-1/2 right-0 translate-x-[40%] w-[40%] max-w-none -z-10"
            />
            
            {/* The main hero visual */}
            <img 
              src={heroRightImage} 
              alt="IT Services and Solutions" 
              className="w-full h-auto object-contain rounded-3xl z-10 relative"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;