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
        <section id="about" className="section-padding bg-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-[#54c625]/5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#54c625]/5 rounded-full translate-y-1/2 -translate-x-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left: Text content */}
                    <div>
                        <span className="inline-block bg-[#54c625]/15 text-[#3A9A18] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Who We Are</span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3A08] mb-5 leading-tight">
                            A Legacy of <br />
                            <span className="green-text">Trust &amp; Quality</span>
                        </h2>

                        <div className="w-16 h-1 bg-[#54c625] rounded-full mb-5" />

                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                            <strong className="text-[#1A3A08]">PK Global Overseas Pvt. Ltd.</strong> is a leading Indian export house dedicated to bridging the rich cultural heritage and artisanal excellence of India with markets across the globe.
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                            Founded with a passion for authentic Indian craftsmanship, we work directly with artisans, farmers, and manufacturers to ensure every product meets the highest standards of quality, authenticity, and ethical sourcing.
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-7">
                            From handcrafted handicrafts to fresh agricultural produce, premium spices to luxury furniture — we are your one-stop export partner for all things India.
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
                                    <span className="w-5 h-5 rounded-full bg-[#54c625]/20 flex items-center justify-center flex-shrink-0">
                                        <span className="w-2 h-2 rounded-full bg-[#54c625]" />
                                    </span>
                                    <span className="text-gray-700 text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Stats cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map(({ icon: Icon, value, label }) => (
                            <div
                                key={label}
                                className="bg-[#F4FAF0] border border-[#54c625]/20 rounded-2xl p-5 sm:p-6 group hover:bg-[#54c625] hover:border-[#54c625] transition-all duration-300 shadow-sm"
                            >
                                <div className="w-11 h-11 rounded-xl bg-[#54c625]/20 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                                    <Icon className="w-5 h-5 text-[#54c625] group-hover:text-white transition-colors" />
                                </div>
                                <div className="font-serif text-3xl font-bold text-[#54c625] group-hover:text-white transition-colors mb-1">{value}</div>
                                <div className="text-gray-500 group-hover:text-white/80 text-sm transition-colors">{label}</div>
                            </div>
                        ))}

                        {/* Mission card */}
                        <div className="col-span-2 bg-gradient-to-br from-[#54c625] to-[#3A9A18] rounded-2xl p-5 sm:p-6 shadow-md">
                            <p className="text-white/80 text-xs font-semibold tracking-widest uppercase mb-2">Our Mission</p>
                            <p className="text-white text-sm sm:text-base leading-relaxed italic font-serif">
                                &quot;To showcase India&apos;s finest to the world with integrity, quality, and pride.&quot;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
