
import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';


const FeatureListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <li className="flex items-start">
        <svg className="flex-shrink-0 h-6 w-6 text-brand-cyan mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span className="ml-3 text-gray-700">{children}</span>
    </li>
);

const CareersPage: React.FC = () => {
    const careersMessage = "Hello! I'm interested in the Sales Representative role.";

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl font-poppins">Join Our Team</h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                        Become a Commission-Based Sales Representative at Number 1 JSAM.
                    </p>
                </div>

                <div className="mt-16 space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">The Opportunity</h2>
                        <p className="mt-4 text-lg text-gray-700">
                            As a Sales Representative, you will be a key part of our growth, introducing customers to our high-quality, UK-standard products and earning a commission on every successful referral. This is a flexible, remote-friendly role perfect for self-motivated individuals with a passion for sales and quality goods.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Key Responsibilities</h2>
                        <ul className="mt-4 space-y-4 text-lg">
                            <FeatureListItem>Actively seek out new sales opportunities through networking and social media.</FeatureListItem>
                            <FeatureListItem>Build and maintain strong, long-lasting customer relationships.</FeatureListItem>
                            <FeatureListItem>Educate customers on product features, benefits, and our commitment to UK standards.</FeatureListItem>
                            <FeatureListItem>Process customer inquiries and facilitate sales efficiently via WhatsApp.</FeatureListItem>
                        </ul>
                    </div>
                    
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">What We&apos;re Looking For</h2>
                        <ul className="mt-4 space-y-4 text-lg">
                            <FeatureListItem>Excellent communication and interpersonal skills.</FeatureListItem>
                            <FeatureListItem>Proven experience in sales or customer service is a plus, but not required.</FeatureListItem>
                            <FeatureListItem>Familiarity with social media platforms (like Facebook, Instagram, WhatsApp) for marketing.</FeatureListItem>
                            <FeatureListItem>A self-starter with a proactive, honest, and results-oriented mindset.</FeatureListItem>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Why Join Us?</h2>
                         <ul className="mt-4 space-y-4 text-lg">
                            <FeatureListItem><strong>Competitive Commission:</strong> Earn an attractive percentage on every sale you refer.</FeatureListItem>
                            <FeatureListItem><strong>Flexibility:</strong> Work on your own schedule from anywhere in Ghana.</FeatureListItem>
                            <FeatureListItem><strong>Quality Products:</strong> Represent a trusted brand with a reputation for excellence and durability.</FeatureListItem>
                            <FeatureListItem><strong>Full Support:</strong> We provide you with the product knowledge and support you need to succeed.</FeatureListItem>
                        </ul>
                    </div>

                    <div className="text-center pt-8">
                        <h2 className="text-3xl font-bold text-gray-900">Ready to Apply?</h2>
                        <p className="mt-3 text-lg text-gray-600">
                            If you&apos;re ready to earn and grow with a trusted brand, we&apos;d love to hear from you.
                        </p>
                        <div className="mt-8">
                            <WhatsAppButton
                                text="Apply Now on WhatsApp"
                                message={careersMessage}
                                className="!px-8 !py-4 !text-lg !font-bold !rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;