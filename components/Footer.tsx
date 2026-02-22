
import React from 'react';
import { STORE_NAME, LOCATION, WHATSAPP_NUMBER, CATEGORIES } from '../constants';
import { ShieldCheck, Briefcase, CircleDollarSign } from 'lucide-react';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
        window.location.hash = href;
    }
  };

  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
                <h3 className="text-lg font-semibold text-white tracking-wider uppercase">Our Values</h3>
                <div className="mt-6 space-y-6">
                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-600 text-white">
                            <ShieldCheck size={20} />
                        </div>
                        <div className="ml-4">
                            <h4 className="text-base font-medium text-white">Honesty</h4>
                            <p className="mt-1 text-sm text-gray-300">Transparent pricing and genuine products. No hidden costs, ever.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-600 text-white">
                            <Briefcase size={20} />
                        </div>
                        <div className="ml-4">
                            <h4 className="text-base font-medium text-white">Professionalism</h4>
                            <p className="mt-1 text-sm text-gray-300">Expert advice and dedicated service to meet your needs.</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-blue-600 text-white">
                            <CircleDollarSign size={20} />
                        </div>
                        <div className="ml-4">
                            <h4 className="text-base font-medium text-white">Affordability</h4>
                            <p className="mt-1 text-sm text-gray-300">Competitive prices for the best value.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
                    <ul role="list" className="mt-4 space-y-3">
                         {CATEGORIES.filter(c => c === "Home Appliances").map(category => (
                             <li key={category}><a href="#best-sellers" onClick={handleNavClick} className="text-base text-gray-300 hover:text-white transition-colors">{category}</a></li>
                         ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                    <ul role="list" className="mt-4 space-y-3">
                         <li>
                            <a href="#about-us" onClick={handleNavClick} className="text-base text-gray-300 hover:text-white transition-colors">About Us</a>
                        </li>
                        <li>
                             <a href="#testimonials" onClick={handleNavClick} className="text-base text-gray-300 hover:text-white transition-colors">Testimonials</a>
                        </li>
                         <li>
                             <a href="#careers" onClick={handleNavClick} className="text-base text-gray-300 hover:text-white transition-colors">Careers</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
                    <ul role="list" className="mt-4 space-y-3">
                        <li>
                            <p className="text-base text-gray-300">
                                <span className="block font-medium text-gray-200">Visit Us:</span>
                                <a href="#location" onClick={handleNavClick} className="hover:text-white transition-colors">{LOCATION}</a>
                            </p>
                        </li>
                        <li>
                             <p className="text-base text-gray-300">
                                <span className="block font-medium text-gray-200">WhatsApp:</span>
                                <a href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                  {WHATSAPP_NUMBER}
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <p className="text-base text-gray-400 md:order-1">
            &copy; {new Date().getFullYear()} {STORE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;