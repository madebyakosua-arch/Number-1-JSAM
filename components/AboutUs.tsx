
import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-16 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-brand-cyan">OUR STORY</h2>
                            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-poppins">Your Trusted Partner for a Better Home</p>
                            <p className="mt-6 text-xl leading-8 text-gray-600">
                                For over a decade, Number 1 JSAM has been dedicated to a simple mission: bringing the unparalleled quality and reliability of UK-standard products to homes across Ghana.
                            </p>
                            <p className="mt-8 text-gray-600">
                                We believe that every family deserves appliances and home goods that are built to last, perform flawlessly, and make daily life easier. That&apos;s why we meticulously source our products, ensuring every item on our shelves meets the rigorous standards our customers have come to trust. We are more than just a retail store; we are a part of the community, committed to providing honest service and exceptional value.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                        <img
                            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 object-cover lg:max-w-lg"
                            src="https://i.ibb.co/pvfjQ2pT/hf-20260214-002727-579e0531-d905-474b-9b59-bbabde1691f5-1.png"
                            alt="A friendly person helping a customer in a store"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;