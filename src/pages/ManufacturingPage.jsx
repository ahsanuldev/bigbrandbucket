import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import Button from '../components/ui/Button';
import bgImage from '../assets/about-page/e37b828d865eff5aee0394507980868482a42f88.jpg';

// Icons
import iconWarehouse from '../assets/manufacturing/warehouse.png';
import iconSupplyChain from '../assets/manufacturing/supply-chain-management-150x150.png';
import iconTransport from '../assets/manufacturing/cross-docking-150x150.png';

import ManufacturingExpertise from '../components/manufacturing/ManufacturingExpertise';
import TransformingInnovation from '../components/manufacturing/TransformingInnovation';
import ManufacturingCTA from '../components/manufacturing/ManufacturingCTA';
import IndustriesWeServeSection from '../components/shared/IndustriesWeServeSection';
import TrustedBy from '../components/shared/TrustedBy';
import TestimonialsSection from '../components/shared/TestimonialsSection';
import GlobalPresenceSection from '../components/shared/GlobalPresenceSection';
import FaqSection from '../components/shared/FaqSection';

const ManufacturingPage = () => {
  return (
    <main className="bg-[#f8fafa] min-h-screen">
      <PageHeader 
        title={<>Transforming Manufacturing<br />Excellence with Smart IT Solutions</>}
        description="We combine innovative thinking, advanced technology, and customer-focused design to deliver smarter solutions that drive lasting impact."
        bgImage={bgImage}
        className="pb-36 md:pb-48 lg:pb-56"
      >
        <Button variant="secondary" arrow={true}>
          Request A Quote
        </Button>
      </PageHeader>

      {/* Cards Section */}
      <section className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 -mt-16 md:-mt-24 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-[1.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col items-center text-center">
            <div className="mb-6">
              <img src={iconWarehouse} alt="Warehouse Management" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-[17px] md:text-[18px] font-semibold text-gray-900 mb-4">
              Warehouse Management Solution
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Streamline automotive parts storage and inventory with real-time tracking, automated workflows, and accurate stock control—ensuring faster dispatch, reduced downtime, and optimized warehouse operations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[1.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col items-center text-center">
            <div className="mb-6">
              <img src={iconSupplyChain} alt="Supply Chain Management" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-[17px] md:text-[18px] font-semibold text-gray-900 mb-4">
              Supply Chain Management Solution
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Enhance supply chain visibility across suppliers, plants, and distributors with intelligent planning and real-time insights that improve demand forecasting, reduce disruptions, and support just-in-time manufacturing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[1.25rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col items-center text-center">
            <div className="mb-6">
              <img src={iconTransport} alt="Transportation Management" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-[17px] md:text-[18px] font-semibold text-gray-900 mb-4">
              Transportation Management
            </h3>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              Optimize inbound and outbound automotive logistics with smart route planning, shipment tracking, and freight optimization to ensure on-time deliveries and lower transportation costs.
            </p>
          </div>

        </div>
      </section>

      <ManufacturingExpertise />
      <TransformingInnovation />
      <ManufacturingCTA />
      <IndustriesWeServeSection bgColor="bg-white" />
      <TrustedBy />
      <TestimonialsSection />
      <GlobalPresenceSection />
      <FaqSection />
    </main>
  );
};

export default ManufacturingPage;
