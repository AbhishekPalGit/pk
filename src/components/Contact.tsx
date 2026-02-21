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
        <section className="py-16 bg-[#F4FAF0] relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#54c625] to-transparent opacity-40" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block bg-[#54c625]/15 text-[#3A9A18] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Reach Us</span>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1A3A08]">
                        Contact <span className="green-text">Information</span>
                    </h2>
                </div>

                {/* Contact cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                    {contactInfo.map(({ icon: Icon, title, lines }) => (
                        <div
                            key={title}
                            className="bg-white border border-[#54c625]/15 rounded-2xl p-6 hover:border-[#54c625]/50 hover:shadow-md hover:shadow-[#54c625]/10 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-[#54c625]/15 flex items-center justify-center mb-4 group-hover:bg-[#54c625] transition-colors">
                                <Icon className="w-5 h-5 text-[#54c625] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-[#3A9A18] text-xs font-semibold uppercase tracking-wider mb-2">{title}</h3>
                            {lines.map((line) => (
                                <p key={line} className="text-gray-500 text-sm leading-relaxed">{line}</p>
                            ))}
                        </div>
                    ))}
                </div>

                {/* Map placeholder + quick CTA */}
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white border border-[#54c625]/15 rounded-2xl overflow-hidden h-56 flex items-center justify-center shadow-sm">
                        <div className="text-center">
                            <MapPin className="w-10 h-10 text-[#54c625]/50 mx-auto mb-2" />
                            <p className="text-gray-400 text-sm">New Delhi, India</p>
                            <p className="text-gray-300 text-xs mt-1">ISO Certified Export House</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#54c625] to-[#3A9A18] rounded-2xl p-6 flex flex-col justify-between shadow-md">
                        <div>
                            <Send className="w-8 h-8 text-white/80 mb-3" />
                            <h3 className="font-serif text-xl font-bold text-white mb-2">Start Exporting Today</h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Join 1200+ global buyers who trust PK Global Overseas for authentic Indian products.
                            </p>
                        </div>
                        <a
                            href="mailto:info@pkglobaloverseas.com"
                            className="mt-6 bg-white text-[#3A9A18] py-3 rounded-full text-sm font-semibold text-center tracking-wide hover:shadow-lg transition-all"
                        >
                            Email Us Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
