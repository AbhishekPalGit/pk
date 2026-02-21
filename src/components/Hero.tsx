'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
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
        >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#141414] to-[#0D0D0D]" />

            {/* Decorative orbs — hidden on mobile to avoid overflow */}
            <div className="hidden sm:block absolute top-1/4 left-1/4 w-72 h-72 bg-[#C9A96E]/5 rounded-full blur-3xl animate-float" />
            <div className="hidden sm:block absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl animate-float delay-300" />

            {/* Subtle grid pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `linear-gradient(#C9A96E 1px, transparent 1px), linear-gradient(90deg, #C9A96E 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Top gold bar */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-full px-3 py-1.5 mb-6 animate-fadeInUp">
                    <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse flex-shrink-0" />
                    <span className="text-[#C9A96E] text-xs font-semibold tracking-wider uppercase">India&apos;s Premier Export Partner</span>
                </div>

                {/* Main Heading */}
                <h1 className="font-serif text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-5 animate-fadeInUp delay-100 leading-tight">
                    <span className="text-white">Bridging India</span>
                    <br />
                    <span className="gold-text">To The World</span>
                </h1>

                {/* Rotating word */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-5 animate-fadeInUp delay-200">
                    <span className="text-white/60 text-lg sm:text-xl md:text-2xl font-light">Premium</span>
                    <span
                        className={`text-[#C9A96E] text-lg sm:text-xl md:text-2xl font-semibold font-serif transition-all duration-400 min-w-[110px] ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}
                    >
                        {words[wordIndex]}
                    </span>
                    <span className="text-white/60 text-lg sm:text-xl md:text-2xl font-light">Exports</span>
                </div>

                <p className="text-white/50 text-sm sm:text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed animate-fadeInUp delay-300 px-2">
                    PK Global Overseas Pvt. Ltd. — your trusted partner for sourcing authentic Indian goods.
                    Quality, reliability, and heritage delivered worldwide.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col xs:flex-row gap-3 justify-center animate-fadeInUp delay-400 px-4 xs:px-0">
                    <Link
                        href="#products"
                        className="btn-gold px-6 py-3.5 rounded-sm text-sm font-semibold tracking-wide uppercase flex items-center justify-center gap-2 group"
                    >
                        Explore Products
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#contact"
                        className="border border-[#C9A96E]/50 text-[#C9A96E] px-6 py-3.5 rounded-sm text-sm font-semibold tracking-wide uppercase hover:bg-[#C9A96E]/10 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14 pt-8 border-t border-[#C9A96E]/15 animate-fadeInUp delay-500">
                    {[
                        { value: '25+', label: 'Countries Served' },
                        { value: '500+', label: 'Product SKUs' },
                        { value: '15+', label: 'Years of Trust' },
                        { value: '1200+', label: 'Happy Clients' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gold-text font-serif mb-1">{stat.value}</div>
                            <div className="text-white/40 text-xs sm:text-sm tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float">
                <span className="text-[#C9A96E]/50 text-xs tracking-widest uppercase">Scroll</span>
                <ChevronDown className="w-4 h-4 text-[#C9A96E]/50" />
            </div>
        </section>
    );
}
