import React from 'react';

// Icons
import locationIcon from '../../assets/contact/location.png';
import phoneIcon from '../../assets/contact/phone-call.png';
import emailIcon from '../../assets/contact/email.png';

const ContactCards = () => {
  const cards = [
    {
      id: 1,
      title: <>Office <span className="text-primary">Address</span></>,
      details: (
        <>
          601 6th Floor, Jmd Galleria Mall,<br />
          Badshahpur Sohna Rd Hwy, Sector 48,<br />
          Gurugram, Haryana 122001
        </>
      ),
      icon: locationIcon,
    },
    {
      id: 2,
      title: <>Phone <span className="text-primary">Number</span></>,
      details: (
        <>
          +91 91490 39480<br />
          +91 87961 72711
        </>
      ),
      icon: phoneIcon,
    },
    {
      id: 3,
      title: <>Email <span className="text-primary">Address</span></>,
      details: (
        <>
          raghav@bigbrandbucket.com
        </>
      ),
      icon: emailIcon,
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-transparent -mt-16 md:-mt-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-white rounded-[24px] p-8 md:p-10 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-50/50 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mb-6 flex items-center justify-center">
                <img 
                  src={card.icon} 
                  alt="Contact Icon" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#111111] mb-4">
                {card.title}
              </h3>
              <p className="text-[#555555] text-[15px] leading-relaxed">
                {card.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
