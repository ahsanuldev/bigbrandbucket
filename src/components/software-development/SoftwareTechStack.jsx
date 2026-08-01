import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { FaDesktop, FaServer, FaMobileAlt, FaDatabase, FaCloud } from 'react-icons/fa';

const techStackData = [
  {
    title: "Frontend Technologies",
    icon: FaDesktop,
    technologies: ["React JS", "Angular JS", "Vue JS", "HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Backend Technologies",
    icon: FaServer,
    technologies: ["Node JS", "Laravel", "PHP", "Python", "Django", ".NET"]
  },
  {
    title: "Mobile Technologies",
    icon: FaMobileAlt,
    technologies: ["Flutter", "React Native", "Kotlin", "Swift"]
  },
  {
    title: "Database Technologies",
    icon: FaDatabase,
    technologies: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD Pipelines"]
  }
];

const SoftwareTechStack = () => {
  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <SectionTitle 
          title={
            <>
              <span className="text-primary">Technologies</span> We Use
            </>
          }
          description="Our software developers in Gurgaon use today’s technologies and frameworks to build secure, extensible and high-performing software applications."
          align="center"
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStackData.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-[2rem] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-[1.25rem] bg-primary flex items-center justify-center mb-8">
                  <IconComponent className="text-white text-2xl" />
                </div>
                
                <h3 className="text-[22px] font-medium text-[#111111] mb-6 leading-snug tracking-tight">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 rounded-full text-[13.5px] font-medium text-primary bg-primary/5 border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SoftwareTechStack;
