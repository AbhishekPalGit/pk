'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const words = ['Handicraft', 'Spices', 'Textiles', 'Jewellery', 'Furniture', 'Ceramics'];

export default function Hero() {
    const [wordIndex, setWordIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn(false);
            setTimeout(() => {
                setWordIndex((prev) => (prev + 1) % words.length);
                setFadeIn(true);
            }, 400);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
            style={{ background: 'linear-gradient(160deg, #ffffff 0%, #f0fbe6 50%, #e2f7cc 100%)' }}
        >
            {/* Decorative circles */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-[#54c625]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#54c625]/6 rounded-full blur-3xl" />

            {/* Subtle dot pattern */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #54c625 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                    opacity: 0.04,
                }}
            />

            {/* Top green line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#54c625] to-transparent" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#54c625]/15 border border-[#54c625]/40 rounded-full px-4 py-1.5 mb-7 animate-fadeInUp">
                    <span className="w-2 h-2 rounded-full bg-[#54c625] animate-pulse flex-shrink-0" />
                    <span className="text-[#3A9A18] text-xs font-semibold tracking-wider uppercase">India&apos;s Premier Export Partner</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-5 animate-fadeInUp delay-100 leading-tight text-[#1A3A08]">
                    Bridging India
                    <br />
                    <span className="green-text">To The World</span>
                </h1>

                {/* Rotating word */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-5 animate-fadeInUp delay-200">
                    <span className="text-gray-500 text-lg sm:text-xl md:text-2xl font-light">Premium</span>
                    <span
                        className={`text-[#54c625] text-lg sm:text-xl md:text-2xl font-semibold font-serif transition-all duration-400 min-w-[110px] ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                    >
                        {words[wordIndex]}
                    </span>
                    <span className="text-gray-500 text-lg sm:text-xl md:text-2xl font-light">Exports</span>
                </div>

                <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-9 leading-relaxed animate-fadeInUp delay-300 px-2">
                    PK Global Overseas Pvt. Ltd. — your trusted partner for sourcing authentic Indian goods.
                    Quality, reliability, and heritage delivered worldwide.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fadeInUp delay-400 px-4 sm:px-0">
                    <a
                        href="#products"
                        className="btn-green px-8 py-4 rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 group"
                    >
                        Explore Products
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#contact"
                        className="btn-outline-green px-8 py-4 rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2"
                    >
                        Get a Quote
                    </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-8 border-t border-[#54c625]/20 animate-fadeInUp delay-500">
                    {[
                        { value: '25+', label: 'Countries Served' },
                        { value: '500+', label: 'Product SKUs' },
                        { value: '15+', label: 'Years of Trust' },
                        { value: '1200+', label: 'Happy Clients' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold green-text font-serif mb-1">{stat.value}</div>
                            <div className="text-gray-400 text-xs sm:text-sm tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float">
                <span className="text-[#54c625]/60 text-xs tracking-widest uppercase">Scroll</span>
                <ChevronDown className="w-4 h-4 text-[#54c625]/60" />
            </div>
        </section>
    );
}
