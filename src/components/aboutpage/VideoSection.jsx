import React from 'react';
import { FaPlay } from 'react-icons/fa';
import videoImage from '../../assets/about-page/025b7999940f153d4ac6abde6e0e45b369a81edb.jpg';
import polygonBg from '../../assets/about-page/Vector-8.png';

const VideoSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="relative flex justify-center items-center">
          {/* Background Polygon */}
          <img 
            src={polygonBg} 
            alt="Decoration Polygon" 
            className="absolute -left-10 md:-left-16 lg:-left-24 top-1/2 -translate-y-1/2 w-28 md:w-40 lg:w-48 z-0 object-contain pointer-events-none"
          />
          
          {/* Main Video Image Container */}
          <div className="relative z-10 w-full rounded-xl md:rounded-2xl overflow-hidden shadow-xl cursor-pointer group">
            <img 
              src={videoImage} 
              alt="Video Thumbnail" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-500">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FaPlay className="text-gray-800 group-hover:text-primary transition-colors text-base md:text-lg ml-1" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoSection;
