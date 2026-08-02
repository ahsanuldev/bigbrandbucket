import React from 'react';
import flagIn from '../../assets/flags/in.svg';

const ContactFormMap = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="bg-white rounded-3xl p-4 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left: Google Map */}
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden h-[400px] lg:h-auto min-h-[400px] bg-gray-100 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8105658097034!2d77.03780361507797!3d28.424982682498075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1875d69784df%3A0xc66fb3ecab7c7!2sBig%20Brand%20Bucket%20Pvt%20Ltd%20%7C%20%231%20Top%20Ranked%20Website%20Designing%20%7C%20SEO%20%7C%20Digital%20Marketing%20%7C%20App%20%26%20Software%20Development%20in%20Gurgaon!5e0!3m2!1sen!2sin!4v1689100000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Big Brand Bucket Location Map"
            ></iframe>
          </div>

          {/* Right: Contact Form */}
          <div className="w-full lg:w-1/2 py-4 lg:py-8 lg:pr-8">
            <h4 className="text-primary font-semibold text-lg mb-2">Get In Touch</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-8 tracking-tight">
              Book An Appointment
            </h2>

            <form className="space-y-4">
              
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full bg-[#f8fafa] rounded-md px-5 py-3.5 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors text-[15px] placeholder-gray-400" 
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full bg-[#f8fafa] rounded-md px-5 py-3.5 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors text-[15px] placeholder-gray-400" 
                />
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="email" 
                  placeholder="Business Email" 
                  className="w-full bg-[#f8fafa] rounded-md px-5 py-3.5 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors text-[15px] placeholder-gray-400" 
                />
                <div className="flex items-center bg-[#f8fafa] rounded-md px-5 py-3.5 focus-within:ring-1 focus-within:ring-primary/30 transition-colors">
                  <img src={flagIn} alt="IN" className="w-5 object-cover mr-1.5 rounded-[2px]" />
                  <span className="text-gray-500 text-[10px] mr-2">▼</span>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full focus:outline-none text-gray-700 bg-transparent placeholder-gray-400 text-[15px]" 
                  />
                </div>
              </div>

              {/* Service Row */}
              <div className="relative">
                <select className="w-full bg-[#f8fafa] rounded-md px-5 py-3.5 appearance-none focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors text-gray-500 text-[15px] cursor-pointer">
                  <option value="">--Please choose service--</option>
                  <option value="Website Designing">Website Designing</option>
                  <option value="Shopify Development">Shopify Development</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                  <option value="Customised Erp">Customised Erp</option>
                  <option value="Branding">Branding</option>
                  <option value="Social Media Marketing (SEO)">Social Media Marketing (SEO)</option>
                  <option value="Performance Marketing">Performance Marketing</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Business Automation">Business Automation</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-5 pointer-events-none">
                  <span className="text-gray-500 text-[10px]">▼</span>
                </div>
              </div>

              {/* Message Row */}
              <div>
                <textarea 
                  rows="4" 
                  placeholder="Message"
                  className="w-full bg-[#f8fafa] rounded-md px-5 py-3.5 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors resize-none text-[15px] placeholder-gray-400"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                className="w-full bg-primary hover:bg-[#0c5a5c] cursor-pointer text-white font-medium text-[16px] py-4 rounded-full transition-colors mt-2"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFormMap;
