
import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Feature: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <li className="flex items-start">
        <div className="flex-shrink-0">
            {icon}
        </div>
        <p className="ml-3 text-base text-gray-700">{text}</p>
    </li>
);

const SuperclassIronSection: React.FC = () => {
    const message = "Hello! I'm interested in learning more about the Superclass Iron.";
    const checkIcon = <svg className="h-6 w-6 text-brand-cyan" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;

    return (
        <div id="superclass-iron" className="bg-white overflow-hidden py-16 sm:py-24">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
                    <div className="relative">
                        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl font-poppins">The Last Iron You&apos;ll Ever Need</h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Experience the difference with our flagship <span className="font-bold text-brand-cyan">Superclass Iron</span>. Engineered to UK standards, it delivers professional results and unmatched durability, making ironing faster, easier, and more efficient.
                        </p>

                        <ul role="list" className="mt-8 space-y-5">
                            <Feature icon={checkIcon} text="Heavy-duty construction for superior heat retention and pressure." />
                            <Feature icon={checkIcon} text="Non-stick soleplate that glides effortlessly over any fabric." />
                            <Feature icon={checkIcon} text="Precision temperature control to protect your delicate garments." />
                             <Feature icon={checkIcon} text="Built to last for years, saving you money in the long run." />
                        </ul>
                         <div className="mt-10 text-center">
                            <WhatsAppButton
                                text="Ask About Our Superclass Iron"
                                message={message}
                                className="!px-8 !py-4 !text-lg !font-bold !rounded-lg !bg-blue-600 hover:!bg-green-500"
                            />
                        </div>
                    </div>

                    <div className="mt-10 lg:mt-0" aria-hidden="true">
                        <div className="relative rounded-lg overflow-hidden shadow-xl">
                             <img
                                className="w-full h-full object-cover object-center"
                                src="https://i.ibb.co/5xcJDxsv/hf-20260214-042648-f80cdebf-80e2-4b1f-9b47-f44c78f799b6.png"
                                alt="Superclass Iron"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuperclassIronSection;