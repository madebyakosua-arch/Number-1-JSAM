
import React from 'react';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-gray-900">
            <div className="absolute inset-0">
                <img className="w-full h-full object-cover" src="https://i.ibb.co/21pdJ64z/hf-20260205-035020-e03cc44f-c51e-4685-bfee-8c442c76b7a8.jpg" alt="A display of high-quality Superclass steam irons available at Number 1 JSAM" />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 sm:py-48">
                 <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-poppins [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
                    Real UK Standard Electrical Appliances,
                    <span className="block text-blue-600 mt-2">Right Here in Ghana.</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-200 font-semibold [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                    Stop wasting money on appliances that break down. At Number 1 JSAM, we provide only genuine, durable UK-standard products built to serve your family for years.
                </p>
                <div className="mt-10">
                     <a
                        href="#best-sellers"
                        onClick={(e) => { e.preventDefault(); window.location.hash = '#best-sellers'; }}
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-blue-600 hover:bg-green-500 transition-colors duration-300 shadow-lg transform hover:scale-105"
                    >
                        Shop Our Best Sellers
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Hero;