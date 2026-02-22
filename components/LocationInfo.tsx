
import React from 'react';
import { MapPin, Truck } from 'lucide-react';
import { LOCATION } from '../constants';

const LocationInfo: React.FC = () => {
    return (
        <div className="bg-gray-100 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 font-poppins">Our Base & Nationwide Delivery</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Visit us in person or have our quality products delivered right to your doorstep.
                    </p>
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white mx-auto shadow-lg">
                                <MapPin size={32} />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Our Showroom</h3>
                            <p className="mt-2 text-base text-gray-600">
                                We are proudly based in <span className="font-semibold">{LOCATION}</span>.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white mx-auto shadow-lg">
                                <Truck size={32} />
                            </div>
                            <h3 className="mt-6 text-xl font-bold text-gray-900">Nationwide Delivery</h3>
                            <p className="mt-2 text-base text-gray-600">
                                We deliver our products to all locations across Ghana. A delivery fee applies based on your location.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;