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
                    ? 'bg-[#0D0D0D]/95 backdrop-blur-md shadow-lg shadow-black/30 py-3'
                    : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="#home" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-full border-2 border-[#C9A96E] flex items-center justify-center bg-[#C9A96E]/10 group-hover:bg-[#C9A96E]/20 transition-colors">
                        <Globe className="w-5 h-5 text-[#C9A96E]" />
                    </div>
                    <div className="leading-tight">
                        <div className="text-[#C9A96E] font-bold text-sm tracking-widest uppercase font-serif">PK Global</div>
                        <div className="text-white/70 text-xs tracking-wider">Overseas Pvt. Ltd.</div>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${activeLink === link.href ? 'text-[#C9A96E]' : 'text-white/80 hover:text-[#C9A96E]'
                                }`}
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 h-px bg-[#C9A96E] transition-all duration-300 w-0 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="btn-gold px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wide uppercase"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
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
                <div className="bg-[#141414] border-t border-[#C9A96E]/20 px-4 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => { setActiveLink(link.href); setMobileOpen(false); }}
                            className="text-white/80 hover:text-[#C9A96E] text-sm font-medium tracking-wide transition-colors py-1"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        onClick={() => setMobileOpen(false)}
                        className="btn-gold px-5 py-2.5 rounded-sm text-sm font-semibold tracking-wide uppercase text-center mt-2"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
        </header>
    );
}
