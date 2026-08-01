import ServiceHero from '../components/shared/ServiceHero';
import TrustedBy from '../components/shared/TrustedBy';
import WhyChooseUs from '../components/software-development/WhyChooseUs';
import SoftwareServicesSection from '../components/software-development/SoftwareServicesSection';
import SoftwareIndustriesSection from '../components/software-development/SoftwareIndustriesSection';
import SoftwareTechStack from '../components/software-development/SoftwareTechStack';
import SoftwareProcessSection from '../components/software-development/SoftwareProcessSection';
import SoftwareCTASection from '../components/software-development/SoftwareCTASection';
import ContentWithImage from '../components/software-development/ContentWithImage';

import softwareBg from '../assets/service/solution.webp';
import customSoftwareImg from '../assets/soft-dev-page/18706-e1778923035473-1402x1536.jpg';
import bestSoftwareImg from '../assets/soft-dev-page/98295-1-e1778923355144.jpg';
import hireDevelopersImg from '../assets/soft-dev-page/18697-e1778923584410.jpg';
import maintenanceSupportImg from '../assets/soft-dev-page/1004-e1778923846313.jpg';
import clientFocusedImg from '../assets/soft-dev-page/46797-e1778924090284.jpg';

const customSoftwareContent = {
  title: <>Why <span className="text-primary">Custom Software</span> Is<br />Better Than Ready-Made<br />Software</>,
  description1: <p>Many businesses face issues with generic software that lacks flexibility, scalability and customization options. As a trusted <span className="text-primary">custom software development company in Gurgaon</span>, we help businesses overcome these limitations with tailored solutions designed around their unique requirements.</p>,
  subtitle: "Custom Software Advantages:",
  listItems: [
    "Optimize according to your business operations",
    "Better scalability for long-term growth",
    "Higher security standards",
    "Improved workflow automation",
    "Seamless integration with existing systems",
    "Better user experience",
    "Long-term cost efficiency"
  ],
  description2: <p>Custom software gives companies complete control over features, workflows and future upgrades. Explore our custom software solutions to learn how bespoke software development can help streamline operations, improve productivity, and support sustainable business growth.</p>,
  image: customSoftwareImg
};

const bestSoftwareContent = {
  title: <>Why We Are the Best<br /><span className="text-primary">Software Development</span><br />Company in <span className="text-primary">Gurgaon</span></>,
  description1: <p>Big Brand Bucket gives businesses technical expertise, understanding of your business and modern development practices to deliver software solutions that help businesses grow faster in today's competitive market.</p>,
  subtitle: "Our Key Strengths:",
  listItems: [
    "Experienced software developers",
    "Transparent project management",
    "Enterprise-grade development standards",
    "Flexible delivery model",
    "Dedicated support team",
    "Affordable software development cost",
    "Scalable software architecture",
    "Strong post-launch support"
  ],
  description2: <p>We create digital products that deliver real business value, enhance operational efficiency and provide measurable ROI.</p>,
  image: bestSoftwareImg
};

const hireDevelopersContent = {
  title: <>Hire Dedicated <span className="text-primary">Software<br />Developers</span> in <span className="text-primary">Gurgaon</span></>,
  description1: <p>Need a reliable development team for your project?<br />Hire dedicated software developers in Gurgaon from Big Brand Bucket and build future-proof digital solutions with complete technical support.</p>,
  subtitle: "Hiring Models:",
  listItems: [
    "Dedicated development team",
    "Fixed-price projects",
    "Hourly hiring model",
    "Offshore development services"
  ],
  description2: <p>Our developers are an extension of your internal team that ensures smooth collaboration throughout the project lifecycle.</p>,
  image: hireDevelopersImg
};

const maintenanceSupportContent = {
  title: <>Software Maintenance &<br />Support Services</>,
  description1: <p>Software development does not end after deployment. We provide you maintenance and support after deployment to keep your applications secure, updated, and optimized.</p>,
  subtitle: "Our Maintenance Services Include:",
  listItems: [
    "Security updates",
    "Bug fixing",
    "Performance optimization",
    "Cloud monitoring",
    "Feature enhancements",
    "Database optimization",
    "Technical troubleshooting"
  ],
  description2: null,
  image: maintenanceSupportImg
};

const clientFocusedContent = {
  title: <>Client-Focused Software<br />Solutions for Gurgaon<br />Businesses</>,
  description1: <p>From startups in Cyber Hub to enterprises in Udyog Vihar and businesses across Gurugram, we help organizations develop software systems that simplify operations, enhance customer experiences and drive long-term digital growth.</p>,
  subtitle: "Our software development solutions are ready to:",
  listItems: [
    "Improve operational efficiency",
    "Reduce manual workload",
    "Automate business workflows",
    "Enhance customer management",
    "Increase scalability",
    "Improve data security",
    "Support digital transformation"
  ],
  description2: null,
  image: clientFocusedImg
};

const SoftwareDevelopmentPage = () => {
  return (
    <main>
      <ServiceHero 
        eyebrow="Software Development Company in Gurgaon"
        title="Build Custom Software Solutions That Accelerate Business Growth"
        description={
          <>
            <p>Businesses running with outdated systems, manual operations and broken workflows can reduce growth and productivity and increase operational costs. As a leading software development company in Gurgaon, we help businesses to win these challenges with our scalable, secure, and productivity-focused software solutions tailored to fulfil unique requirements.</p>
            <p>At Big Brand Bucket, we develop custom software applications, SaaS platforms, ERP systems, CRM software and enterprise-level digital solutions that give smooth operation experiences and improve business efficiency.</p>
            <p>Whether you are a new company in Cyber City Gurgaon, an enterprise in Udyog Vihar, or a growing company on Sohna Road, our expert software developers create futuristic software designed to help your business scale rapidly.</p>
          </>
        }
        checklist={[
          "Custom Software Development",
          "ERP & CRM Solutions",
          "SaaS Product Development",
          "Business Automation Software",
          "Enterprise Web Applications",
          "Ongoing Technical Support"
        ]}
        bgImage={softwareBg}
      />
      
      <WhyChooseUs />
      <TrustedBy />
      <SoftwareServicesSection />
      <SoftwareIndustriesSection />
      <SoftwareTechStack />
      <SoftwareProcessSection />
      <SoftwareCTASection />
      
      <ContentWithImage 
        title={customSoftwareContent.title}
        description1={customSoftwareContent.description1}
        subtitle={customSoftwareContent.subtitle}
        listItems={customSoftwareContent.listItems}
        description2={customSoftwareContent.description2}
        image={customSoftwareContent.image}
      />

      <ContentWithImage 
        title={bestSoftwareContent.title}
        description1={bestSoftwareContent.description1}
        subtitle={bestSoftwareContent.subtitle}
        listItems={bestSoftwareContent.listItems}
        description2={bestSoftwareContent.description2}
        image={bestSoftwareContent.image}
        imagePosition="left"
        bgClass="bg-white"
      />

      <ContentWithImage 
        title={hireDevelopersContent.title}
        description1={hireDevelopersContent.description1}
        subtitle={hireDevelopersContent.subtitle}
        listItems={hireDevelopersContent.listItems}
        description2={hireDevelopersContent.description2}
        image={hireDevelopersContent.image}
      />

      <ContentWithImage 
        title={maintenanceSupportContent.title}
        description1={maintenanceSupportContent.description1}
        subtitle={maintenanceSupportContent.subtitle}
        listItems={maintenanceSupportContent.listItems}
        description2={maintenanceSupportContent.description2}
        image={maintenanceSupportContent.image}
        imagePosition="left"
        bgClass="bg-white"
      />

      <ContentWithImage 
        title={clientFocusedContent.title}
        description1={clientFocusedContent.description1}
        subtitle={clientFocusedContent.subtitle}
        listItems={clientFocusedContent.listItems}
        description2={clientFocusedContent.description2}
        image={clientFocusedContent.image}
      />
    </main>
  );
};

export default SoftwareDevelopmentPage;
