import React from 'react';
import SectionTitle from '../ui/SectionTitle';

// Assets
import ellipseBehind from '../../assets/Ellipse-for-behind.png';
import imgIndia from '../../assets/india.png';
import imgDubai from '../../assets/dubai.png';
import imgUk from '../../assets/uk.png';
import imgUsa from '../../assets/usa.png';

const locations = [
  { id: 1, name: 'India', image: imgIndia },
  { id: 2, name: 'Dubai', image: imgDubai },
  { id: 3, name: 'UK', image: imgUk },
  { id: 4, name: 'USA', image: imgUsa },
];

const GlobalPresenceSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-slate-50 overflow-hidden relative">
      {/* Decorative semi-circles on sides */}
      <img 
        src={ellipseBehind} 
        alt="" 
        draggable={false}
        className="absolute top-[40%] left-0 -translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] max-w-none z-0 opacity-70"
      />
      <img 
        src={ellipseBehind} 
        alt="" 
        draggable={false}
        className="absolute top-[40%] right-0 translate-x-1/2 -translate-y-1/2 w-[200px] md:w-[300px] max-w-none z-0 opacity-70"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 relative z-10">
        
        {/* Header */}
        <SectionTitle 
          eyebrow="Our Locations"
          title={
            <>
              See Our <span className="text-primary">Global Presence</span>
            </>
          }
          description="Our global locations help us connect with clients across markets and time zones, ensuring smooth collaboration and high-quality digital solutions."
          className="max-w-3xl mx-auto"
        />

        {/* Locations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mt-16 md:mt-20 justify-items-center">
          {locations.map((loc) => (
            <div key={loc.id} className="flex flex-col items-center group cursor-default w-full">
              
              {/* Image Container with Fade Effect */}
              <div className="relative h-48 md:h-[280px] w-full flex items-end justify-center mb-6">
                <img 
                  src={loc.image} 
                  alt={loc.name} 
                  className="max-h-full object-contain transition-transform duration-500 group-hover:-translate-y-2 relative z-0"
                />
                
                {/* Fade to background color at the bottom */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none"></div>
              </div>
              
              {/* Text & Underline */}
              <h3 className="text-xl md:text-2xl font-medium text-[#111111]">{loc.name}</h3>
              <div className="w-12 h-[2px] bg-primary mt-3 transition-all duration-300 group-hover:w-20"></div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalPresenceSection;
