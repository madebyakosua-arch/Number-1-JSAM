import React from 'react';
import { ShieldCheck, Users, Award, Smile } from 'lucide-react';



const WhyChooseUs: React.FC = () => {
    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 font-poppins sm:text-4xl">Why Choose Number 1 JSAM?</h2>
                    <p className="mt-4 text-lg text-gray-600">Your trusted source for quality home appliances.</p>
                </div>
                
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-md">
                        <div className="flex-shrink-0">
                            <Users className="h-10 w-10 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-3xl font-bold text-gray-900">10,000+</p>
                            <p className="text-base text-gray-600">Happy Customers Served</p>
                        </div>
                    </div><div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-md">
                        <div className="flex-shrink-0">
                            <Award className="h-10 w-10 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-3xl font-bold text-gray-900">10+</p>
                            <p className="text-base text-gray-600">Years in Business</p>
                        </div>
                    </div><div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-md">
                        <div className="flex-shrink-0">
                            <Smile className="h-10 w-10 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-3xl font-bold text-gray-900">98%</p>
                            <p className="text-base text-gray-600">Customer Satisfaction</p>
                        </div>
                    </div><div className="flex items-center justify-center bg-white rounded-lg p-6 shadow-md">
                        <div className="flex-shrink-0">
                            <ShieldCheck className="h-10 w-10 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-3xl font-bold text-gray-900">Warranty</p>
                            <p className="text-base text-gray-600">On All Products</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
