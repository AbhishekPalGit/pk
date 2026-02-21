'use client';

import { Globe, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const productLinks = [
    'Handicraft', 'Spices', 'Temple Items', 'Brass & Copper',
    'Leather Goods', 'Imitation Jewellery', 'Clothing',
    'Fruits & Vegetables', 'Grocery', 'Glass Products', 'Furniture', 'Ceramic',
];

const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About Us' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
];

export default function Footer() {
    return (
        <footer className="bg-[#0F2605] border-t border-[#54c625]/20">
            {/* Top section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full border-2 border-[#54c625] flex items-center justify-center bg-[#54c625]/15">
                                <Globe className="w-5 h-5 text-[#54c625]" />
                            </div>
                            <div>
                                <div className="text-[#54c625] font-bold text-sm tracking-widest uppercase font-serif">PK Global</div>
                                <div className="text-white/50 text-xs tracking-wider">Overseas Pvt. Ltd.</div>
                            </div>
                        </div>
                        <p className="text-white/40 text-sm leading-relaxed mb-6">
                            India&apos;s premier export house — bringing the finest Indian products to global markets since 2009.
                        </p>

                        {/* Social icons */}
                        <div className="flex gap-3">
                            {[
                                { icon: Facebook, label: 'Facebook' },
                                { icon: Instagram, label: 'Instagram' },
                                { icon: Linkedin, label: 'LinkedIn' },
                                { icon: Twitter, label: 'Twitter' },
                            ].map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full border border-[#54c625]/25 flex items-center justify-center text-[#54c625]/60 hover:text-[#54c625] hover:border-[#54c625] hover:bg-[#54c625]/10 transition-all duration-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[#54c625] text-xs font-semibold uppercase tracking-widest mb-4">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map(({ href, label }) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        className="text-white/50 text-sm hover:text-[#54c625] transition-colors flex items-center gap-1.5 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#54c625]/40 group-hover:bg-[#54c625] transition-colors" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-[#54c625] text-xs font-semibold uppercase tracking-widest mb-4">Products</h4>
                        <ul className="space-y-2 grid grid-cols-2 gap-x-3">
                            {productLinks.map((p) => (
                                <li key={p}>
                                    <a
                                        href="#products"
                                        className="text-white/50 text-xs hover:text-[#54c625] transition-colors block"
                                    >
                                        {p}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[#54c625] text-xs font-semibold uppercase tracking-widest mb-4">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#54c625] mt-0.5 flex-shrink-0" />
                                <span className="text-white/50 text-sm">New Delhi – 110001, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[#54c625] flex-shrink-0" />
                                <a href="tel:+919876543210" className="text-white/50 text-sm hover:text-[#54c625] transition-colors">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[#54c625] flex-shrink-0" />
                                <a href="mailto:info@pkglobaloverseas.com" className="text-white/50 text-sm hover:text-[#54c625] transition-colors">info@pkglobaloverseas.com</a>
                            </li>
                        </ul>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="btn-green mt-6 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide inline-block"
                        >
                            Get a Quote
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-[#54c625]/10 py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                    <p className="text-white/30 text-xs text-center">
                        &copy; 2025 PK Global Overseas Pvt. Ltd. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
                            <a key={item} href="#" className="text-white/30 text-xs hover:text-[#54c625] transition-colors whitespace-nowrap">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
