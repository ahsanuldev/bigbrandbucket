import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const features = [
  {
    num: "01",
    title: "Business-Focused Development Approach",
    desc: "We create software solutions that improve productivity, automate workflows, reduce manual tasks, and help businesses achieve operational efficiency."
  },
  {
    num: "02",
    title: "Scalable & Future-Ready Architecture",
    desc: "We build software systems with modern technologies and scalable infrastructure to support in long-term business growth."
  },
  {
    num: "03",
    title: "Dedicated Gurgaon Software Developers",
    desc: "Our expert developers, designers and project managers always touch in with clients to ensure smooth project execution and transparent communication."
  },
  {
    num: "04",
    title: "Agile Development Process",
    desc: "We follow agile methodologies to deliver projects in faster pace with better flexibility, real-time updates, and on-the-go improvements."
  },
  {
    num: "05",
    title: "Enterprise-Level Security",
    desc: "We implement advanced security practices, secure APIs, cloud protection and NDA agreements to protect your extremely important business data."
  },
  {
    num: "06",
    title: "Long-Term Technical Support",
    desc: "We give you complete post-launch support from software maintenance to performance optimization and feature upgrades because we are with you always."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <SectionTitle 
          title={
            <>
              Why Businesses in <span className="text-primary">Gurgaon</span> Choose <br className="hidden md:block" /> <span className="text-primary">Big Brand Bucket</span>
            </>
          }
          description="Businesses trust Big Brand Bucket in Gurugram because we deliver easy-to-use software solutions that generate results for business instead of making fake promises."
          align="center"
          className="max-w-4xl mx-auto !mb-8"
        />

        <h3 className="text-[24px] md:text-[28px] font-semibold text-center text-[#111111] mb-14">
          What Makes Us Different?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-[2rem] p-6 border border-gray-300 transition-all duration-300 hover:bg-primary hover:-translate-y-3 cursor-default">
              <div className="w-[72px] h-[72px] rounded-2xl bg-primary flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-white">
                <span className="text-white text-[26px] font-bold transition-colors duration-300 group-hover:text-primary">{feature.num}</span>
              </div>
              <h4 className="text-[20px] font-semibold text-gray-900 mb-4 leading-snug transition-colors duration-300 group-hover:text-white">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-[15px] transition-colors duration-300 group-hover:text-white/90">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
