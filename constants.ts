
import type { Product } from './types';

export const STORE_NAME = "Number 1 JSAM";
export const LOCATION = "Teshie Nungua, Accra, Ghana";
export const WHATSAPP_NUMBER = "+233263437776";
export const WHATSAPP_MESSAGE = "Hello! I'm interested in your UK standard products. Can you tell me more?";

export const CATEGORIES = ["Home Appliances", "Kitchen", "Family Essentials"];

export const BEST_SELLING_PRODUCTS: Product[] = [
    {
        name: "High Quality Kettle",
        imageUrl: "https://i.ibb.co/1YM1rWhp/Chat-GPT-Image-Feb-24-2026-03-35-56-AM.png",
        category: "Home Appliances",
        bestSeller: true,
    },
    {
        name: "High-Performance Blender",
        imageUrl: "https://i.ibb.co/YB1wbMQ0/Chat-GPT-Image-Feb-23-2026-09-38-30-PM.png",
        category: "Kitchen",
        bestSeller: true,
    },
    {
        name: "Super Powerful Microwaves",
        imageUrl: "https://i.ibb.co/d0D2gwK3/Chat-GPT-Image-Feb-23-2026-09-38-44-PM.png",
        category: "Kitchen",
        bestSeller: true,
    },
];

// Fix: Export ALL_PRODUCTS to be used in SearchResultsPage.tsx
export const ALL_PRODUCTS: Product[] = [
    ...BEST_SELLING_PRODUCTS,
    {
        name: "Microwave Oven",
        imageUrl: "https://images.pexels.com/photos/6206416/pexels-photo-6206416.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Kitchen",
    },
    {
        name: "Standing Fan",
        imageUrl: "https://images.pexels.com/photos/1571469/pexels-photo-1571469.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Home Appliances",
    },
    {
        name: "Baby Diapers Pack",
        imageUrl: "https://images.pexels.com/photos/3995832/pexels-photo-3995832.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Family Essentials",
    },
    {
        name: "Electric Rice Cooker",
        imageUrl: "https://images.pexels.com/photos/6869440/pexels-photo-6869440.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Kitchen",
    },
    {
        name: "Washing Machine",
        imageUrl: "https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Home Appliances",
    },
    {
        name: "Family First Aid Kit",
        imageUrl: "https://images.pexels.com/photos/3951901/pexels-photo-3951901.jpeg?auto=compress&cs=tinysrgb&w=400",
        category: "Family Essentials",
    },
];