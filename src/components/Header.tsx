'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About Us' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-md shadow-green-100 py-3'
                : 'bg-white/80 backdrop-blur-sm py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="#home" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full border-2 border-[#54c625] flex items-center justify-center bg-[#54c625]/10 group-hover:bg-[#54c625]/20 transition-colors">
                        <Globe className="w-5 h-5 text-[#54c625]" />
                    </div>
                    <div className="leading-tight">
                        <div className="text-[#54c625] font-bold text-sm tracking-widest uppercase font-serif">PK Global</div>
                        <div className="text-gray-500 text-xs tracking-wider">Overseas Pvt. Ltd.</div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${activeLink === link.href ? 'text-[#54c625]' : 'text-gray-600 hover:text-[#54c625]'
                                }`}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 h-0.5 bg-[#54c625] transition-all duration-300 w-0 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <a
                        href="#contact"
                        className="btn-green px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide"
                    >
                        Get a Quote
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 p-2 hover:text-[#54c625] transition-colors"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={`md:hidden transition-all duration-400 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-white border-t border-[#54c625]/20 px-4 py-4 flex flex-col gap-4 shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => { setActiveLink(link.href); setMobileOpen(false); }}
                            className="text-gray-600 hover:text-[#54c625] text-sm font-medium tracking-wide transition-colors py-1 border-b border-gray-100"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="btn-green px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-2"
                    >
                        Get a Quote
                    </a>
                </div>
            </div>
        </header>
    );
}
