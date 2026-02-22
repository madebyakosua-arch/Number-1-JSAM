
import React from 'react';
import type { Product } from '../types';
import WhatsAppButton from './WhatsAppButton';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const message = `Hello! I'm interested in the ${product.name}.`;

  return (
    <div className="w-72 group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 text-center">
        <p className="text-sm text-gray-500">{product.category}</p>
        <h3 className="mt-1 text-base font-semibold text-gray-900">
            {product.name}
        </h3>
        <div className="flex-1 flex flex-col justify-end mt-4">
             <WhatsAppButton
                text="Inquire Now"
                message={message}
                className="w-full !rounded-full !bg-blue-600 hover:!bg-green-500 !text-white !font-bold"
            />
        </div>
      </div>
    </div>
  );
};


const ProductGrid: React.FC<{ title: string; products: Product[] }> = ({ title, products }) => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl font-poppins">{title}</h2>
        </div>
        <div className="mt-12 flex flex-wrap items-stretch justify-center gap-y-10 gap-x-6 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;