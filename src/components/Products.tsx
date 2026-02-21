'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const products = [
    {
        id: 'handicraft',
        title: 'Handicraft',
        description: "Exquisite handmade crafts — wooden toys, pottery, metalwork, and embroidery that showcase India's artisan heritage.",
        image: '/images/products/handicraft.png',
        badge: 'Artisan Made',
    },
    {
        id: 'spices',
        title: 'Spices',
        description: 'Premium Indian spices — saffron, cardamom, turmeric, black pepper — packed fresh for global palates.',
        image: '/images/products/spices.png',
        badge: 'Farm Fresh',
    },
    {
        id: 'temple',
        title: 'Temple Items',
        description: 'Sacred décor — brass diyas, temple bells, incense holders, marble idols, and ritual artifacts of divine craftsmanship.',
        image: '/images/products/temple.png',
        badge: 'Sacred Arts',
    },
    {
        id: 'brass-copper',
        title: 'Brass & Copper',
        description: 'Elegantly crafted brass and copper vessels, plates, candleholders, and decorative art pieces.',
        image: '/images/products/brass-copper.png',
        badge: 'Luxury Metal',
    },
    {
        id: 'leather',
        title: 'Leather Goods',
        description: 'Genuine leather handbags, wallets, belts, shoes, and journals crafted by skilled artisans.',
        image: '/images/products/leather.png',
        badge: 'Genuine Leather',
    },
    {
        id: 'jewellery',
        title: 'Imitation Jewellery',
        description: 'Stunning kundan, meenakari, and gold-plated traditional jewellery — necklaces, bangles, earrings, and more.',
        image: '/images/products/jewellery.png',
        badge: 'Fashion Forward',
    },
    {
        id: 'clothing',
        title: 'Clothing',
        description: "Vibrant ethnic wear — sarees, kurtas, lehengas, and block-print textiles reflecting India's textile legacy.",
        image: '/images/products/clothing.png',
        badge: 'Handwoven',
    },
    {
        id: 'fruits-vegetables',
        title: 'Fruits & Vegetables',
        description: 'Fresh exotic Indian produce — Alphonso mangoes, pomegranates, guavas, and seasonal vegetables, exports-grade quality.',
        image: '/images/products/fruits-vegetables.png',
        badge: 'Farm to World',
    },
    {
        id: 'grocery',
        title: 'Grocery',
        description: 'Authentic Indian grocery staples — basmati rice, dal, ghee, atta, and more in premium packaging.',
        image: '/images/products/grocery.png',
        badge: 'Premium Quality',
    },
    {
        id: 'glass',
        title: 'Glass Products',
        description: 'Hand-blown artisan glassware — decorative vases, colored bottles, sculptures, and luxury crystal pieces.',
        image: '/images/products/glass.png',
        badge: 'Handblown',
    },
    {
        id: 'furniture',
        title: 'Furniture',
        description: 'Ornate handcrafted Indian furniture — sheesham wood, teak, and rosewood with intricate inlay and carved detailing.',
        image: '/images/products/furniture.png',
        badge: 'Master Crafted',
    },
    {
        id: 'ceramic',
        title: 'Ceramic',
        description: 'Beautiful blue pottery, hand-painted ceramic bowls, plates, mugs, and home décor pieces from Indian artisans.',
        image: '/images/products/ceramic.png',
        badge: 'Hand Painted',
    },
];

export default function Products() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section id="products" className="section-padding relative bg-[#F4FAF0]">
            {/* Top wave */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#54c625] to-transparent opacity-40" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="inline-block bg-[#54c625]/15 text-[#3A9A18] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">What We Export</span>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3A08] mb-4">
                        Our Product <span className="green-text">Categories</span>
                    </h2>
                    <div className="ornament max-w-xs mx-auto mt-4">
                        <span className="text-[#54c625] text-lg">✦</span>
                    </div>
                    <p className="text-gray-500 text-base max-w-xl mx-auto mt-4">
                        From the artisan lanes of Rajasthan to your doorstep — 12 categories of India&apos;s finest exports.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="product-card group relative bg-white border border-[#54c625]/15 rounded-2xl overflow-hidden cursor-pointer hover:border-[#54c625]/50 shadow-sm hover:shadow-lg hover:shadow-[#54c625]/10"
                            onMouseEnter={() => setHovered(product.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Badge */}
                                <div className="absolute top-3 right-3 bg-[#54c625] text-white text-xs font-bold px-2.5 py-1 rounded-full tracking-wide shadow-md">
                                    {product.badge}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="font-serif text-base font-bold text-[#1A3A08] mb-1.5 group-hover:text-[#54c625] transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                                    {product.description}
                                </p>

                                {/* Inquiry Link */}
                                <div className="mt-3 flex items-center gap-1 text-[#54c625] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                                    <a href="#contact" className="flex items-center gap-1 hover:gap-2 transition-all">
                                        Inquire Now <ArrowRight className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>

                            {/* Bottom green bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#54c625] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <a
                        href="#contact"
                        className="btn-green px-8 py-4 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-2"
                    >
                        Request a Custom Quote
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
