
import React from 'react';
import { STORE_NAME } from '../constants';
import WhatsAppButton from './WhatsAppButton';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="sm:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="block">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tighter font-poppins text-blue-600">{STORE_NAME}</span>
              <span className="block text-[10px] sm:text-xs tracking-wide text-gray-500">UK Standard Electrical Appliances</span>
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a href="#why-us" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Why Us?</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Reviews</a>
            <a href="#about-us" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Our Story</a>
            <a href="#find-us" className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium">Find Us</a>
            <a href="#best-sellers" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-xs sm:text-sm hover:bg-green-500 transition-colors">
                Shop Best Sellers
            </a>
            <WhatsAppButton text="Contact Us" className="!px-4 !py-2 sm:!px-5 sm:!py-2.5 !bg-blue-600 hover:!bg-green-500 !text-white !font-bold !rounded-lg !text-xs sm:text-sm">
                <span className="hidden sm:inline">Contact Us</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </WhatsAppButton>
          </div>
        </div>
      </div>
    {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#why-us" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Why Us?</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Reviews</a>
            <a href="#about-us" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Our Story</a>
            <a href="#best-sellers" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Shop Best Sellers</a>
            <a href="#find-us" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:bg-gray-50 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Find Us</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;