import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div id="contact-us" className="bg-gray-200 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-poppins">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Have a question about our products, or want to place an order? We're here to help!
        </p>
        <div className="mt-8 inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p className="text-xl font-medium text-gray-800">
            Call Us: <a href="tel:+233263437776" className="text-blue-600 hover:text-blue-800">+233263437776</a>
          </p>
        </div>
        <p className="mt-4 text-gray-600">Our team is available to assist you from Monday to Saturday, 8 AM to 6 PM.</p>
      </div>
    </div>
  );
};

export default ContactUs;
