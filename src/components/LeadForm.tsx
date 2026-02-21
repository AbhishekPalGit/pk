'use client';

import { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const categories = [
    'Handicraft', 'Spices', 'Temple Items', 'Brass & Copper',
    'Leather Goods', 'Imitation Jewellery', 'Clothing',
    'Fruits & Vegetables', 'Grocery', 'Glass Products', 'Furniture', 'Ceramic', 'Multiple Categories',
];

type FormData = {
    name: string;
    email: string;
    phone: string;
    company: string;
    country: string;
    category: string;
    message: string;
};

const initial: FormData = { name: '', email: '', phone: '', company: '', country: '', category: '', message: '' };

export default function LeadForm() {
    const [form, setForm] = useState<FormData>(initial);
    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const validate = () => {
        const e: Partial<FormData> = {};
        if (!form.name.trim()) e.name = 'Name is required';
        if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
        if (!form.phone.trim()) e.phone = 'Phone is required';
        if (!form.category) e.category = 'Please select a category';
        if (!form.message.trim()) e.message = 'Message is required';
        return e;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }
        setErrors({});
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setForm(initial);
        }, 1800);
    };

    const handle = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm((p) => ({ ...p, [field]: e.target.value }));
        if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
    };

    const inputClass = (field: keyof FormData) =>
        `w-full bg-white border rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#54c625]/50 focus:border-[#54c625] transition-all duration-200 ${errors[field] ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-[#54c625]/40'
        }`;

    return (
        <section id="contact" className="section-padding bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#54c625] to-transparent opacity-40" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                    {/* Left: Copy */}
                    <div className="lg:sticky lg:top-24">
                        <span className="inline-block bg-[#54c625]/15 text-[#3A9A18] text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Start a Conversation</span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A3A08] mb-5 leading-tight">
                            Request a <br /><span className="green-text">Free Quote</span>
                        </h2>
                        <div className="w-16 h-1 bg-[#54c625] rounded-full mb-5" />
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
                            Whether you&apos;re looking to import a single category or build a comprehensive Indian product line,
                            we&apos;re here to help. Fill out the form and our team will get back to you within 24 hours.
                        </p>

                        <div className="space-y-3">
                            {[
                                { icon: '⚡', title: '24-Hour Response', desc: 'Our team responds within one business day' },
                                { icon: '📦', title: 'Sample Request', desc: 'Ask for product samples before placing bulk orders' },
                                { icon: '🚢', title: 'Global Shipping', desc: 'We ship to 25+ countries worldwide' },
                                { icon: '🤝', title: 'Custom Orders', desc: 'Tailored packaging and private label available' },
                            ].map(({ icon, title, desc }) => (
                                <div key={title} className="flex items-start gap-4 p-3 sm:p-4 bg-[#F4FAF0] border border-[#54c625]/20 rounded-xl hover:border-[#54c625]/50 hover:bg-[#EAF7DE] transition-colors">
                                    <span className="text-xl sm:text-2xl flex-shrink-0">{icon}</span>
                                    <div>
                                        <div className="text-[#1A3A08] font-semibold text-sm">{title}</div>
                                        <div className="text-gray-500 text-xs mt-0.5">{desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-[#F4FAF0] border border-[#54c625]/20 rounded-2xl p-5 sm:p-8 shadow-sm">
                        {status === 'success' ? (
                            <div className="flex flex-col items-center text-center py-12">
                                <CheckCircle2 className="w-16 h-16 text-[#54c625] mb-4" />
                                <h3 className="font-serif text-2xl font-bold text-[#1A3A08] mb-2">Inquiry Sent!</h3>
                                <p className="text-gray-500 text-sm max-w-sm">
                                    Thank you for reaching out. Our team will contact you within 24 hours with a detailed quote.
                                </p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 btn-green px-6 py-2.5 rounded-full text-sm font-semibold"
                                >
                                    Send Another Inquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                {/* Name + Email */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Full Name *</label>
                                        <input type="text" placeholder="John Smith" value={form.name} onChange={handle('name')} className={inputClass('name')} />
                                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Email *</label>
                                        <input type="email" placeholder="john@company.com" value={form.email} onChange={handle('email')} className={inputClass('email')} />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Phone + Company */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Phone *</label>
                                        <input type="tel" placeholder="+1 234 567 8900" value={form.phone} onChange={handle('phone')} className={inputClass('phone')} />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Company</label>
                                        <input type="text" placeholder="Your Company" value={form.company} onChange={handle('company')} className={inputClass('company')} />
                                    </div>
                                </div>

                                {/* Country + Category */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Country</label>
                                        <input type="text" placeholder="USA, UAE, UK..." value={form.country} onChange={handle('country')} className={inputClass('country')} />
                                    </div>
                                    <div>
                                        <label className="block text-gray-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Product Category *</label>
                                        <select value={form.category} onChange={handle('category')} className={inputClass('category')}>
                                            <option value="">Select category</option>
                                            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                                        </select>
                                        {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-600 text-xs font-semibold mb-1.5 uppercase tracking-wide">Message *</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Tell us about your requirements — quantity, specifications, delivery location..."
                                        value={form.message}
                                        onChange={handle('message')}
                                        className={`${inputClass('message')} resize-none`}
                                    />
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="btn-green w-full py-3.5 rounded-full text-sm font-semibold tracking-wide flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                                    ) : (
                                        <><Send className="w-4 h-4" /> Send Inquiry</>
                                    )}
                                </button>

                                <p className="text-gray-400 text-xs text-center">
                                    By submitting, you agree to be contacted by PK Global Overseas Pvt. Ltd.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
