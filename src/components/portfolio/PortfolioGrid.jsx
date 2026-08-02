import React from 'react';

// Portfolio Images
import willowFernImg from '../../assets/portfolio/portfolio-willow-and-fern.jpg';
import whiteSpaceImg from '../../assets/portfolio/portfolio-white-space-living.jpg';
import kunjMotorImg from '../../assets/portfolio/portfolio-kunjmotors-scaled.jpg';
import sdIncImg from '../../assets/portfolio/portfolio-sd-inc.jpg';
import ldgStudioImg from '../../assets/portfolio/portfolio-ldg-studio-scaled.jpg';
import atomMepImg from '../../assets/portfolio/portfolio-atom-mep.jpg';
import positiveVibesImg from '../../assets/portfolio/portfolio-positive-vibes.jpg';
import imageTroveImg from '../../assets/portfolio/portfolio-the-image-trove.jpg';
import veritasPartnersImg from '../../assets/portfolio/portfolio-veritas-partners.jpg';

const portfolioProjects = [
  {
    id: 1,
    title: 'Willow & Fern',
    category: 'Ecommerce',
    image: willowFernImg,
  },
  {
    id: 2,
    title: 'White Space Living',
    category: 'Ecommerce',
    image: whiteSpaceImg,
  },
  {
    id: 3,
    title: 'Kunj Motor',
    category: 'Automobile',
    image: kunjMotorImg,
  },
  {
    id: 4,
    title: 'SD Inc.',
    category: 'Architects & Interior',
    image: sdIncImg,
  },
  {
    id: 5,
    title: 'LDG Studio',
    category: 'Architects & Interior',
    image: ldgStudioImg,
  },
  {
    id: 6,
    title: 'Atom MEP',
    category: 'Architects & Interior',
    image: atomMepImg,
  },
  {
    id: 7,
    title: 'Positive Vibes',
    category: 'Education',
    image: positiveVibesImg,
  },
  {
    id: 8,
    title: 'The Image Trove',
    category: 'Education',
    image: imageTroveImg,
  },
  {
    id: 9,
    title: 'Veritas Partners',
    category: 'Education',
    image: veritasPartnersImg,
  }
];

const PortfolioGrid = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioProjects.map((project) => (
            <div 
              key={project.id} 
              className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[280px] md:h-[320px] lg:h-[360px] object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Gradient Overlay at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 pt-28 pb-6 px-6 bg-gradient-to-t from-black via-black/70 to-black/5">
                <div className="flex items-end justify-between">
                  <div className="text-white">
                    <h3 className="text-xl md:text-2xl font-bold mb-1 tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-white/80 text-[14px] md:text-[15px]">
                      {project.category}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[14px] font-medium text-white group-hover:text-white/80 transition-colors">
                    Know More 
                    <span className="text-lg leading-none transform group-hover:translate-x-1 transition-transform">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
