import React from 'react';
import bgImage from '../../assets/service/bg-services.webp';
import indFlag from '../../assets/flags/in.svg';

const ServiceHero = ({ eyebrow, title, description, checklist }) => {
  return (
    <section
      className="relative w-full pt-28 pb-40 lg:pt-26 lg:pb-30 bg-cover bg-center px-6 md:px-12 lg:px-24"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for darkening the background to match the design */}
      {/* <div className="absolute inset-0 bg-[#0d595c]/60 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#032021]/80 to-transparent"></div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <div className="w-full lg:w-3/5 text-white pt-8 lg:pt-0">
            <h4 className="text-[16px] md:text-[18px] font-medium mb-3">{eyebrow}</h4>
            <h1 className="text-[36px] md:text-[46px] lg:text-[54px] font-medium leading-[1.15] mb-6">
              {title}
            </h1>
            <p className="text-[15px] md:text-[16.5px] text-white/90 leading-relaxed mb-10 max-w-[90%]">
              {description}
            </p>

            {/* Checklist */}
            {checklist && checklist.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-white shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/95 text-[14.5px]">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Form */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white rounded-xl p-7 lg:p-9 shadow-2xl">
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] text-gray-700 focus:outline-none focus:border-primary placeholder-gray-400"
                  required
                />
                <input
                  type="email"
                  placeholder="Business Email*"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] text-gray-700 focus:outline-none focus:border-primary placeholder-gray-400"
                  required
                />

                <div className="flex w-full border border-gray-300 rounded-md overflow-hidden focus-within:border-primary transition-colors">
                  <div className="flex items-center gap-2 bg-gray-50 px-3 border-r border-gray-300">
                    <img src={indFlag} alt="Flag" className="w-[18px] object-contain" />
                    <span className="text-[10px] text-gray-500">▼</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="flex-1 px-4 py-3 text-[14px] text-gray-700 focus:outline-none placeholder-gray-400"
                    required
                  />
                </div>

                <select className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] text-gray-500 focus:outline-none focus:border-primary bg-white">
                  <option>--Please choose an option--</option>
                  <option>App Development</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Other Services</option>
                </select>

                <div className="mt-2">
                  <label className="block text-[14.5px] font-bold text-[#111111] mb-2">Share your requirements*</label>
                  <textarea
                    placeholder="(You can add links to your shareable materials)"
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-[14px] text-gray-700 focus:outline-none focus:border-primary h-28 resize-none placeholder-gray-400"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0f6d70] hover:bg-[#0c595c] text-white font-medium py-3 rounded-full transition-colors mt-2 text-[15.5px]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default ServiceHero;
