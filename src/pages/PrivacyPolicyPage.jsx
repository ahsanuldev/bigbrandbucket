import React from 'react';
import PageHeader from '../components/shared/PageHeader';
import bgImage from '../assets/about-page/e37b828d865eff5aee0394507980868482a42f88.jpg';

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-white">
      <PageHeader 
        title="Privacy Policy"
        bgImage={bgImage}
        showHeroTextAsset={false}
      />
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 text-gray-800">
        <div className="space-y-6 text-[15px] md:text-[16px] leading-relaxed">
          <p>
            bigbrandbucket.com is the leading design and branding online company. As a reward for our continued customer loyalty and 
            diligence, we have earned global recognition, won awards and legal accreditation from various regulatory bodies.
          </p>
          <p>
            Here are some of the key highlights in our policy document.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-[#147b82] pt-4">Non-Disclosure Agreement:</h3>
          <p>
            We value the privacy of our clients. Rest assured that any personal information that you provide to us when placing your order will not 
            be rented out, shared or disclosed to third parties without your consent!
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-[#147b82] pt-4">Cookies Agreement:</h3>
          <p>
            Our main reason for using cookies is not to collect information but to track clients who access our website. This information helps us to 
            improve our service deliver,y to meet all clients' needs.
          </p>
          <p>
            Bigbrandbucket uses cookies policy in its site. This is designed to offer you better services especially by linking the users to the 
            websites of the products they are viewing. You should not get disappointed when you learn that Bigbrandbucket uses cookies as if you 
            don't feel them appropriate, you can always disable them. You can disable cookies on your browser, actually on every browser such 
            as Mozilla, internet explorer, Firefox, Google Chrome, Opera and Safari.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold text-[#147b82] pt-4">Terms and Conditions</h3>
          <p>
            Before using Bigbrandbucket, you need to know the terms and conditions that govern the users. You are required to read and 
            understand the terms and conditions before transacting any deals with us. This company is a fully registered private online company 
            in India going by the company name Bigbrandbucket Online Private Limited. It is located at Gurgaon - 122001 in India. This site allows 
            you to view and read any information displayed on the site. However, using or copying the content or using the photographs or any 
            other information on the site elsewhere is illegal and prohibited by not only Bigbrandbucket but also the law. In such a case you are 
            required to have permission from the company to use this information. This site is critical to downtime and will always strive to ensure 
            the site is active around the clock, unless the situation is beyond the company's control. The visitor is expect to have formal conduct 
            while surfing the site and more so in the interactive segment where visitor pose their views and comments.
          </p>
          <p>
            For any questions, confirmations or comments, feel free to contact Bigbrandbucket Private Limited at <a href="mailto:info@bigbrandbucket.com" className="text-[#147b82] hover:underline">info@bigbrandbucket.com</a>. You 
            can as well place a Toll Free call on <a href="tel:+919149039480" className="text-[#147b82] hover:underline">+91 - 9149039480</a>.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
