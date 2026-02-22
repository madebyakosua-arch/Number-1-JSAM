
import React, { useState, useEffect } from 'react';




const CategoryNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Why Us?', href: '#why-us' },
        { name: 'Best Sellers', href: '#best-sellers' },
        { name: 'Our Story', href: '#about-us' },
        { name: 'Reviews', href: '#testimonials' },
        { name: 'Find Us', href: '#location' },
        
    ];
    
    useEffect(() => {
        const handleHashChange = () => setIsOpen(false);
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-brand-cyan hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-cyan"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
                        <div className="flex items-baseline space-x-8">
                            {navLinks.map(link => (
                                <a 
                                    key={link.name} 
                                    href={link.href}
                                    
                                    className="transition-colors duration-200 text-base font-medium text-gray-600 hover:text-blue-600 flex items-center"
                                >
                                    {link.icon ? <span className="flex items-center">{link.icon}<span className="ml-2">{link.name}</span></span> : <span>{link.name}</span>}
                                </a>
                            ))}
                        </div>
                    </div>
                    
                    

                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-white hover:bg-blue-600 transition-colors duration-200"
                            >
                                {link.icon ? <span className="flex items-center">{link.icon}<span className="ml-2">{link.name}</span></span> : <span>{link.name}</span>}
                            </a>
                        ))}
                         <div className="px-2 pt-4 space-y-2">
                            <a href="#best-sellers" className="block text-center bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-green-500 transition-colors w-full">
                                Shop Best Sellers
                            </a>
                            <a href="https://wa.me/233244000000" target="_blank" rel="noopener noreferrer" className="block text-center bg-gray-600 text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-gray-700 transition-colors w-full">
                                <span className="inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Contact Us
                                </span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default CategoryNav;