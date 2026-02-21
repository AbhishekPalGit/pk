'use client';

import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
    {
        icon: MapPin,
        title: 'Office Address',
        lines: ['PK Global Overseas Pvt. Ltd.', 'New Delhi – 110001, India'],
    },
    {
        icon: Phone,
        title: 'Phone & WhatsApp',
        lines: ['+91 98765 43210', '+91 11 2345 6789'],
    },
    {
        icon: Mail,
        title: 'Email Us',
        lines: ['info@pkglobaloverseas.com', 'exports@pkglobaloverseas.com'],
    },
    {
        icon: Clock,
        title: 'Business Hours',
        lines: ['Mon – Sat: 9:00 AM – 6:00 PM IST', 'Sun: Closed'],
    },
];

export default function Contact() {
    return (
        <section className="py-16 bg-[#1C1C1C] relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-[#C9A96E] text-xs font-semibold tracking-widest uppercase mb-3">Reach Us</p>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                        Contact <span className="gold-text">Information</span>
                    </h2>
                </div>

                {/* Contact cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                    {contactInfo.map(({ icon: Icon, title, lines }) => (
                        <div
                            key={title}
                            className="bg-[#141414] border border-[#C9A96E]/15 rounded-sm p-6 hover:border-[#C9A96E]/40 hover:bg-[#C9A96E]/5 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-sm bg-[#C9A96E]/10 flex items-center justify-center mb-4 group-hover:bg-[#C9A96E]/20 transition-colors">
                                <Icon className="w-5 h-5 text-[#C9A96E]" />
                            </div>
                            <h3 className="text-[#C9A96E] text-xs font-semibold uppercase tracking-wider mb-2">{title}</h3>
                            {lines.map((line) => (
                                <p key={line} className="text-white/60 text-sm leading-relaxed">{line}</p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Map placeholder + quick CTA */}
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-[#141414] border border-[#C9A96E]/15 rounded-sm overflow-hidden h-56 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-10 h-10 text-[#C9A96E]/50 mx-auto mb-2" />
                            <p className="text-white/30 text-sm">New Delhi, India</p>
                            <p className="text-white/20 text-xs mt-1">ISO Certified Export House</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#C9A96E]/15 to-[#A07840]/5 border border-[#C9A96E]/30 rounded-sm p-6 flex flex-col justify-between">
                        <div>
                            <Send className="w-8 h-8 text-[#C9A96E] mb-3" />
                            <h3 className="font-serif text-xl font-bold text-white mb-2">Start Exporting Today</h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                Join 1200+ global buyers who trust PK Global Overseas for authentic Indian products.
                            </p>
                        </div>
                        <a
                            href="mailto:info@pkglobaloverseas.com"
                            className="btn-gold mt-6 py-3 rounded-sm text-sm font-semibold text-center tracking-wide uppercase"
                        >
                            Email Us Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
