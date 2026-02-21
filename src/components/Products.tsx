'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

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
        <section id="products" className="section-padding relative bg-[#0D0D0D]">
            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 opacity-3"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #C9A96E 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                    opacity: 0.03,
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-[#C9A96E] text-xs font-semibold tracking-widest uppercase mb-3">What We Export</p>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Product <span className="gold-text">Categories</span>
                    </h2>
                    <div className="ornament max-w-xs mx-auto mt-4">
                        <span className="text-[#C9A96E] text-lg">✦</span>
                    </div>
                    <p className="text-white/50 text-base max-w-xl mx-auto mt-4">
                        From the artisan lanes of Rajasthan to your doorstep — 12 categories of India's finest exports.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="product-card group relative bg-[#141414] border border-[#C9A96E]/10 rounded-sm overflow-hidden cursor-pointer hover:border-[#C9A96E]/40"
                            onMouseEnter={() => setHovered(product.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                                {/* Badge */}
                                <div className="absolute top-3 right-3 bg-[#C9A96E] text-[#0D0D0D] text-xs font-bold px-2 py-1 rounded-sm tracking-wide">
                                    {product.badge}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-serif text-lg font-semibold text-white mb-2 group-hover:text-[#C9A96E] transition-colors">
                                    {product.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                                    {product.description}
                                </p>

                                {/* Inquiry Link */}
                                <div className="mt-4 flex items-center gap-1 text-[#C9A96E] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <Link href="#contact" className="flex items-center gap-1 hover:gap-2 transition-all">
                                        Inquire Now <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Bottom gold bar on hover */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="#contact"
                        className="btn-gold px-8 py-4 rounded-sm text-sm font-semibold tracking-widest uppercase inline-flex items-center gap-2"
                    >
                        Request a Custom Quote
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
