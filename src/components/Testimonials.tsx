'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Ahmed Al-Rashidi',
        title: 'Import Manager',
        company: 'Al-Rashidi Trading LLC',
        country: '🇦🇪 UAE',
        rating: 5,
        text: 'PK Global Overseas has been our preferred Indian export partner for over 5 years. Their spices and handicraft collections are exceptional quality, and their shipping is always on time. Highly recommended!',
    },
    {
        id: 2,
        name: 'Sophie Beaumont',
        title: 'Director',
        company: 'Maison Exotique',
        country: '🇫🇷 France',
        rating: 5,
        text: 'The furniture and ceramic pieces we sourced from PK Global are absolutely stunning. Our customers love the authenticity and craftsmanship. Communication is seamless and professional.',
    },
    {
        id: 3,
        name: 'James Thornton',
        title: 'Procurement Head',
        company: 'Heritage Stores UK',
        country: '🇬🇧 United Kingdom',
        rating: 5,
        text: 'We import Indian textiles and jewellery through PK Global Overseas. Their product quality is consistently excellent, and they always accommodate our custom packaging requests. Outstanding service!',
    },
    {
        id: 4,
        name: 'Fatima Nour',
        title: 'Business Owner',
        company: 'Desert Rose Imports',
        country: '🇸🇦 Saudi Arabia',
        rating: 5,
        text: 'The brass and copper products from PK Global are magnificent. Our clients in the premium décor segment adore these pieces. The team is responsive, honest, and truly cares about quality.',
    },
    {
        id: 5,
        name: 'Carlos Mendoza',
        title: 'CEO',
        company: 'Spice Route Americas',
        country: '🇺🇸 USA',
        rating: 5,
        text: 'Sourcing Indian spices and grocery items through PK Global has transformed our product line. Consistent quality, great pricing, and they truly understand the needs of international buyers.',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const goTo = (index: number) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent(index);
            setIsAnimating(false);
        }, 300);
    };

    const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
    const next = () => goTo((current + 1) % testimonials.length);

    useEffect(() => {
        timeoutRef.current = setInterval(next, 5000);
        return () => { if (timeoutRef.current) clearInterval(timeoutRef.current); };
    }, [current]);

    const t = testimonials[current];

    return (
        <section id="testimonials" className="section-padding bg-[#0D0D0D] relative overflow-hidden">
            {/* Background orb */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C9A96E]/3 rounded-full blur-3xl" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
                {/* Header */}
                <div className="text-center mb-14">
                    <p className="text-[#C9A96E] text-xs font-semibold tracking-widest uppercase mb-3">Client Stories</p>
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                        Trusted <span className="gold-text">Worldwide</span>
                    </h2>
                    <div className="ornament max-w-xs mx-auto mt-4">
                        <span className="text-[#C9A96E] text-lg">✦</span>
                    </div>
                </div>

                {/* Main testimonial card */}
                <div
                    className={`bg-[#141414] border border-[#C9A96E]/20 rounded-sm p-5 sm:p-8 md:p-12 text-center transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                        }`}
                >
                    {/* Quote icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-14 h-14 rounded-full bg-[#C9A96E]/10 flex items-center justify-center">
                            <Quote className="w-7 h-7 text-[#C9A96E]" />
                        </div>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                        {Array.from({ length: t.rating }).map((_, i) => (
                            <span key={i} className="text-[#C9A96E] text-xl">★</span>
                        ))}
                    </div>

                    {/* Quote text */}
                    <blockquote className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed font-serif italic mb-6 sm:mb-8 max-w-3xl mx-auto">
                        &quot;{t.text}&quot;
                    </blockquote>

                    {/* Client info */}
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A96E] to-[#A07840] flex items-center justify-center text-[#0D0D0D] font-bold text-lg mb-3 font-serif">
                            {t.name.charAt(0)}
                        </div>
                        <div className="text-white font-semibold text-base">{t.name}</div>
                        <div className="text-white/50 text-sm">{t.title}, {t.company}</div>
                        <div className="text-[#C9A96E] text-sm mt-1 font-medium">{t.country}</div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-6 mt-8">
                    <button
                        onClick={prev}
                        className="w-10 h-10 rounded-full border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] hover:bg-[#C9A96E]/10 hover:border-[#C9A96E] transition-all duration-200"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    {/* Dots */}
                    <div className="flex gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`rounded-full transition-all duration-300 ${i === current ? 'w-6 h-2 bg-[#C9A96E]' : 'w-2 h-2 bg-[#C9A96E]/30'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        className="w-10 h-10 rounded-full border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] hover:bg-[#C9A96E]/10 hover:border-[#C9A96E] transition-all duration-200"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
}
