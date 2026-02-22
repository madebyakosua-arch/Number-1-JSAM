
import React from 'react';

const StarRating = () => (
    <div className="flex items-center text-brand-orange">
        {[...Array(5)].map((_, i) => (
            <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

const TestimonialCard: React.FC<{
    quote: string;
    author: string;
    location: string;
    imageUrl: string;
}> = ({ quote, author, location, imageUrl }) => (
    <div className="flex flex-col rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm h-full">
        <div className="flex-1 p-6 flex flex-col">
            <StarRating />
            <blockquote className="mt-4 flex-1">
                <p className="text-base text-gray-600">&quot;{quote}&quot;</p>
            </blockquote>
        </div>
        <footer className="bg-gray-50 p-4 flex items-center">
            <img className="h-10 w-10 rounded-full object-cover" src={imageUrl} alt={author} />
            <div className="ml-3">
                <div className="text-sm font-semibold text-gray-900">{author}</div>
                <div className="text-sm text-gray-500">{location}</div>
            </div>
        </footer>
    </div>
);


const Testimonials: React.FC = () => {
    const testimonials = [

        {
            quote: "Shopping here is so easy. I just send a message on WhatsApp and they arrange everything. The customer service is excellent and so friendly!",
            author: "David B.",
            location: "Nungua",
            imageUrl: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=250&h=250&dpr=2"
        },
        {
            quote: "I've been a customer for almost 10 years. From blenders to TVs for my family, I trust Number 1 JSAM for reliable products. They have never disappointed.",
            author: "Grace O.",
            location: "Spintex",
            imageUrl: "https://i.ibb.co/cKZ8gw4R/Chat-GPT-Image-Feb-20-2026-10-29-38-PM.png"
        },
        {
            quote: "The quality of the appliances is top-notch. I bought a microwave and it's been working perfectly. Highly recommend this shop for anyone looking for durable goods.",
            author: "Samuel K.",
            location: "East Legon, Accra",
            imageUrl: "https://i.ibb.co/5g2WXkQ3/Chat-GPT-Image-Feb-20-2026-10-31-19-PM.png"
        }
    ];

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-left">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-poppins">
                        What Our Customers Say
                    </h2>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-6 lg:grid-cols-3 lg:max-w-none">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.author} {...testimonial} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;