'use client';

import { Award, Globe2, Package, Users } from 'lucide-react';

const stats = [
    { icon: Globe2, value: '25+', label: 'Countries Reached' },
    { icon: Package, value: '500+', label: 'Product SKUs' },
    { icon: Users, value: '1200+', label: 'Global Clients' },
    { icon: Award, value: '15+', label: 'Years of Excellence' },
];

export default function About() {
    return (
        <section id="about" className="section-padding bg-[#141414] relative overflow-hidden">
            {/* Decorative PK — hidden on small screens to prevent bleed */}
            <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none">
                <div className="absolute right-10 top-10 text-[20rem] font-serif text-[#C9A96E] leading-none select-none">
                    PK
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Text content */}
                    <div>
                        <p className="text-[#C9A96E] text-xs font-semibold tracking-widest uppercase mb-3">Who We Are</p>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                            A Legacy of <br />
                            <span className="gold-text">Trust &amp; Quality</span>
                        </h2>

                        <div className="w-16 h-0.5 bg-gradient-to-r from-[#C9A96E] to-transparent mb-5" />

                        <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4">
                            <strong className="text-white">PK Global Overseas Pvt. Ltd.</strong> is a leading Indian export house headquartered
                            in India, dedicated to bridging the rich cultural heritage and artisanal excellence of India with
                            markets across the globe.
                        </p>
                        <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-4">
                            Founded with a passion for authentic Indian craftsmanship, we work directly with
                            artisans, farmers, and manufacturers to ensure every product meets the highest standards
                            of quality, authenticity, and ethical sourcing.
                        </p>
                        <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                            From handcrafted handicrafts to fresh agricultural produce, premium spices to luxury furniture —
                            we are your one-stop export partner for all things India.
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                            {[
                                'ISO Certified Quality',
                                'Direct Artisan Sourcing',
                                'Custom Packaging',
                                'Worldwide Shipping',
                                'Competitive Pricing',
                                'Dedicated Support',
                            ].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] flex-shrink-0" />
                                    <span className="text-white/70 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Stats cards */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {stats.map(({ icon: Icon, value, label }) => (
                            <div
                                key={label}
                                className="bg-[#1C1C1C] border border-[#C9A96E]/15 rounded-sm p-4 sm:p-6 group hover:border-[#C9A96E]/50 hover:bg-[#C9A96E]/5 transition-all duration-300"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-sm bg-[#C9A96E]/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#C9A96E]/20 transition-colors">
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#C9A96E]" />
                                </div>
                                <div className="font-serif text-3xl sm:text-4xl font-bold gold-text mb-1">{value}</div>
                                <div className="text-white/50 text-xs sm:text-sm">{label}</div>
                            </div>
                        ))}

                        {/* Mission card */}
                        <div className="col-span-2 bg-gradient-to-br from-[#C9A96E]/15 to-[#A07840]/5 border border-[#C9A96E]/30 rounded-sm p-4 sm:p-6">
                            <p className="text-[#C9A96E] text-xs font-semibold tracking-widest uppercase mb-2">Our Mission</p>
                            <p className="text-white/70 text-sm sm:text-base leading-relaxed italic font-serif">
                                &quot;To showcase India&apos;s finest to the world with integrity, quality, and pride.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
