import React from 'react';
import { motion } from 'framer-motion';

const services = [
  "Web Development",
  "UI / UX",
  "Cross Platform Development",
  "Solution Designing",
  "Cloud Computing",
  "App Development",
];

// Duplicate the array to ensure seamless scrolling
const repeatedServices = [...services, ...services, ...services, ...services];

const MarqueeLine = ({ items, direction = "left", className = "" }) => {
  return (
    <div className={`flex whitespace-nowrap overflow-hidden ${className}`}>
      <motion.div
        className="flex min-w-max items-center"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35, // Adjust speed
        }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center mx-6 md:mx-10">
            <span className="w-1.5 h-1.5 rounded-full bg-current mr-6 md:mr-10"></span>
            <span className="text-base md:text-lg font-medium tracking-wide">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const ServicesMarquee = () => {
  return (
    <section className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden bg-white">
      {/* Dark teal strip - rotated up */}
      <div className="absolute top-1/2 left-1/2 w-[120vw] md:w-[110vw] -translate-x-1/2 -translate-y-1/2 -rotate-[4deg] z-10">
        <MarqueeLine 
          items={repeatedServices} 
          direction="right" 
          className="bg-primary text-white py-4 shadow-lg" 
        />
      </div>

      {/* Light blue strip - rotated down */}
      <div className="absolute top-1/2 left-1/2 w-[120vw] md:w-[110vw] -translate-x-1/2 -translate-y-1/2 rotate-[4deg] z-20">
        <MarqueeLine 
          items={repeatedServices} 
          direction="left" 
          className="bg-secondary text-[#111111] py-4 shadow-sm" 
        />
      </div>
    </section>
  );
};

export default ServicesMarquee;
