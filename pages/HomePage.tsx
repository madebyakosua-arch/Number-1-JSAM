
import React from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import ProductGrid from '../components/ProductGrid';
import { BEST_SELLING_PRODUCTS } from '../constants';
import LocationInfo from '../components/LocationInfo';
import SuperclassIronSection from '../components/SuperclassIronSection';
import ContactUs from '../components/ContactUs';

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <div>
                <WhyChooseUs />
            </div>
            <div id="best-sellers">
                <ProductGrid title="Our Best Selling Products" products={BEST_SELLING_PRODUCTS} />
            </div>
            <SuperclassIronSection />
            <div>
                <Testimonials />
            </div>
            <div>
                <AboutUs />
            </div>
            <div>
                <ContactUs />
            </div>
            <div>
                <LocationInfo />
            </div>
        </>
    );
};

export default HomePage;