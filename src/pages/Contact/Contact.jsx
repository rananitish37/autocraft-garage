import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin, Phone, Mail, Clock, MessageSquare,
  CheckCircle, Send, AlertCircle, User, ChevronRight, ExternalLink
} from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

const subjects = [
  'General Enquiry', 'Book an Appointment', 'Service Query',
  'Complaint / Feedback', 'Quote Request', 'Other',
];

const initialForm = { name: '', phone: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Please enter your message';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setLoading(true);
    // Replace with: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase = 'w-full bg-garage-800 border border-gray-700 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm transition-colors';

  return (
    <div className="min-h-screen bg-garage-950">
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 bg-garage-900 border-b border-gray-800">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1548032885-b5e38734eca2?w=1920&q=80"
            alt="Contact" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-garage-900/70 to-garage-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Have a question or ready to book? Reach out — we're happy to help with any vehicle concerns.
          </p>
          <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-300">Contact</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Info Cards */}
            {[
              {
                icon: MapPin, label: 'Our Address',
                content: businessInfo.address,
                href: `https://maps.google.com?q=${encodeURIComponent(businessInfo.address)}`,
                linkText: 'Get Directions',
              },
              {
                icon: Phone, label: 'Phone Number',
                content: businessInfo.phone,
                href: `tel:${businessInfo.phone}`,
                linkText: 'Call Now',
              },
              {
                icon: Mail, label: 'Email Address',
                content: businessInfo.email,
                href: `mailto:${businessInfo.email}`,
                linkText: 'Send Email',
              },
              {
                icon: Clock, label: 'Working Hours',
                content: businessInfo.hours.weekdays,
                sub: businessInfo.hours.weekend,
              },
            ].map(({ icon: Icon, label, content, sub, href, linkText }) => (
              <div key={label} className="bg-garage-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-gray-200 text-sm leading-relaxed">{content}</p>
                    {sub && <p className="text-gray-500 text-sm">{sub}</p>}
                    {href && (
                      <a href={href} target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1 text-orange-500 text-xs font-semibold mt-2 hover:gap-2 transition-all">
                        {linkText} <ChevronRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* WhatsApp Quick Link */}
            <a
              href={businessInfo.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 hover:border-green-500/40 rounded-2xl px-6 py-4 transition-colors group"
            >
              <MessageSquare className="w-6 h-6 text-green-400 flex-shrink-0" />
              <div>
                <p className="text-white font-semibold text-sm">Chat on WhatsApp</p>
                <p className="text-gray-400 text-xs">Quickest response — usually within minutes</p>
              </div>
              <ExternalLink className="w-4 h-4 text-green-400 ml-auto flex-shrink-0" />
            </a>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-garage-900 border border-gray-800 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-white mb-2">Send Us a Message</h2>
              <p className="text-gray-400 text-sm mb-8">We typically respond within 2–4 business hours.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thanks, <span className="text-white font-semibold">{form.name}</span>! We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); }}
                    className="px-6 py-2.5 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-xl text-sm font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Name <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input type="text" name="name" value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className={`${inputBase} pl-10 ${errors.name ? 'border-red-500/50' : ''}`} />
                      </div>
                      {errors.name && <p className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">
                        Phone <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="+91 XXXXX XXXXX"
                          className={`${inputBase} pl-10 ${errors.phone ? 'border-red-500/50' : ''}`} />
                      </div>
                      {errors.phone && <p className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="you@example.com"
                          className={`${inputBase} pl-10 ${errors.email ? 'border-red-500/50' : ''}`} />
                      </div>
                      {errors.email && <p className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1.5">Subject</label>
                      <div className="relative">
                        <select name="subject" value={form.subject} onChange={handleChange}
                          className={`${inputBase} pr-10 appearance-none cursor-pointer ${!form.subject ? 'text-gray-500' : 'text-white'}`}>
                          <option value="">Select subject...</option>
                          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                        <svg className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1.5">
                      Message <span className="text-orange-500">*</span>
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className={`${inputBase} resize-none ${errors.message ? 'border-red-500/50' : ''}`} />
                    {errors.message && <p className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={loading}
                    className="w-full py-4 bg-orange-500 hover:bg-orange-400 disabled:opacity-70 disabled:cursor-not-allowed text-white rounded-xl font-bold text-base transition-all hover:shadow-xl hover:shadow-orange-500/25 flex items-center justify-center gap-3">
                    {loading ? (
                      <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                    ) : (
                      <><Send className="w-5 h-5" />Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-garage-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-2">Location</p>
              <h2 className="text-2xl font-black text-white">Find Us on the Map</h2>
              <p className="text-gray-400 text-sm mt-1">{businessInfo.address}</p>
            </div>
            <a
              href={`https://maps.google.com?q=${encodeURIComponent(businessInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white rounded-xl text-sm font-bold transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Get Directions
            </a>
          </div>

          {/* Map embed (uses placeholder for demo — replace with real embed URL) */}
          <div className="rounded-2xl overflow-hidden border border-gray-800 bg-garage-800 relative" style={{ height: '400px' }}>
            <iframe
              title="AutoCraft Garage Location"
              src="https://maps.google.com/maps?q=Sector+18+Gurugram+Haryana&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.5)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay brand badge */}
            <div className="absolute top-4 left-4 bg-garage-950/90 backdrop-blur-sm border border-gray-700 rounded-xl px-4 py-2">
              <p className="text-white text-sm font-bold">AutoCraft Garage</p>
              <p className="text-gray-400 text-xs">Sector 18, Gurugram</p>
            </div>
          </div>

          <div className="mt-4 sm:hidden text-center">
            <a
              href={`https://maps.google.com?q=${encodeURIComponent(businessInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange-500 hover:bg-orange-400 text-white rounded-xl text-sm font-bold transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
