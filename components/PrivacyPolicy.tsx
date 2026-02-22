
import React from 'react';
import { STORE_NAME } from '../constants';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg mx-auto text-gray-600">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 font-poppins">Privacy Policy</h1>
                    <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

                    <p>
                        Welcome to {STORE_NAME}. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                    </p>

                    <h2>Information We Collect</h2>
                    <p>
                        We may collect information about you in a variety of ways. The information we may collect on the Site includes personal data, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.
                    </p>

                    <h2>How We Use Your Information</h2>
                    <p>
                        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                    </p>
                    <ul>
                        <li>Create and manage your account.</li>
                        <li>Process your transactions and send you related information, including purchase confirmations and invoices.</li>
                        <li>Communicate with you about products, services, offers, promotions, and events.</li>
                        <li>Respond to your comments, questions, and customer service requests.</li>
                    </ul>

                    <h2>Security of Your Information</h2>
                    <p>
                        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have questions or comments about this Privacy Policy, please contact us via the contact information provided on our website.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;