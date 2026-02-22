
import React from 'react';
import { STORE_NAME } from '../constants';

const TermsOfService: React.FC = () => {
    return (
        <div className="bg-gray-100 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="prose prose-lg mx-auto text-gray-600">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 font-poppins">Terms of Service</h1>
                    <p className="text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website&apos;s particular services, you shall be subject to any posted guidelines or rules applicable to such services, which may be posted and modified from time to time.
                    </p>

                    <h2>2. Use of the Website</h2>
                    <p>
                        This website and its components are offered for informational purposes only; this site shall not be responsible or liable for the accuracy, usefulness or availability of any information transmitted or made available via the site, and shall not be responsible or liable for any error or omissions in that information.
                    </p>

                    <h2>3. Intellectual Property</h2>
                    <p>
                        The Site and its original content, features, and functionality are owned by {STORE_NAME} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>

                    <h2>4. Limitation of Liability</h2>
                    <p>
                        In no event shall {STORE_NAME}, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                    </p>

                     <h2>5. Governing Law</h2>
                    <p>
                       These Terms shall be governed and construed in accordance with the laws of Ghana, without regard to its conflict of law provisions.
                    </p>

                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;