import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import { businessInfo } from '../../data/businessInfo';

const initialForm = { name: '', email: '', subject: '', message: '' };

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
    if (!form.name.trim()) e.name = 'Your name is required';
    if (!form.email.trim()) e.email = 'Your email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Please write your message';
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setLoading(true);
    await new Promise(r => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us | Bombay Motors"
        description="Get in touch with Bombay Motors in Madhubani, Bihar. Comprehensive automotive care, multi-brand diagnostics, and maintenance."
        canonical="/contact"
      />

      <div className="min-h-screen bg-garage-950 text-gray-100 selection:bg-orange-500/30 selection:text-orange-200">
        {/* ─── Centered Header Section ─── */}
        <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3 text-xs text-gray-400">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-200 font-medium">Contact</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Get In Touch
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Have a question, need a repair estimate, or want to schedule maintenance? We are here to help with all makes and models.
          </p>
        </section>

        {/* ─── Main Contact Card (Follows Reference Layout in Dark Brand Theme) ─── */}
        <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-garage-900 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
              {/* Left Column: Solid Accent Information Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-orange-600 via-orange-600 to-orange-700 text-white rounded-2xl p-7 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl min-h-[380px]">
                {/* Background Ambient Circle (As in Reference Image) */}
                <div className="w-52 h-52 rounded-full bg-white/15 absolute -bottom-16 -right-16 blur-sm pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Contact Information
                  </h2>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-8">
                    Reach out directly to our workshop managers or visit our multi-brand facility in Madhubani.
                  </p>

                  <div className="space-y-5 text-sm">
                    {/* Phone */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <a href={`tel:${businessInfo.phone}`} className="hover:underline font-semibold">
                          {businessInfo.phone}
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <div className="min-w-0">
                        <a href={`mailto:${businessInfo.email}`} className="hover:underline font-semibold truncate block text-xs sm:text-sm">
                          {businessInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold">{businessInfo.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Operating Hours note */}
                <div className="relative z-10 pt-6 border-t border-white/20 text-xs text-white/80">
                  <p>{businessInfo.hours.weekdays}</p>
                </div>
              </div>

              {/* Right Column: Clean Form Layout */}
              <div className="lg:col-span-7 flex flex-col justify-center py-2 lg:pl-2">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-sm mb-6">
                      Thank you, <span className="text-white font-semibold">{form.name}</span>. Our workshop team will get back to you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm(initialForm);
                      }}
                      className="px-6 py-2.5 bg-orange-500 hover:bg-orange-400 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Row 1: Name and Email side-by-side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Trangely"
                          className={`w-full bg-transparent border-b py-2 text-white text-sm focus:outline-none transition-colors placeholder-gray-600 ${
                            errors.name ? 'border-red-500' : 'border-gray-700 focus:border-orange-500'
                          }`}
                        />
                        {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-400 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="hello@nurency.com"
                          className={`w-full bg-transparent border-b py-2 text-white text-sm focus:outline-none transition-colors placeholder-gray-600 ${
                            errors.email ? 'border-red-500' : 'border-gray-700 focus:border-orange-500'
                          }`}
                        />
                        {errors.email && <p className="text-red-400 text-[11px] mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Row 2: Subject */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1">
                        Your Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="General service inquiry or repair quote"
                        className="w-full bg-transparent border-b border-gray-700 focus:border-orange-500 py-2 text-white text-sm focus:outline-none transition-colors placeholder-gray-600"
                      />
                    </div>

                    {/* Row 3: Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-1">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Write here your message"
                        className={`w-full bg-transparent border-b py-2 text-white text-sm focus:outline-none transition-colors resize-none placeholder-gray-600 ${
                          errors.message ? 'border-red-500' : 'border-gray-700 focus:border-orange-500'
                        }`}
                      />
                      {errors.message && <p className="text-red-400 text-[11px] mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="px-7 py-3 bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md hover:shadow-orange-500/25 inline-flex items-center gap-2"
                      >
                        {loading ? 'Sending...' : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Map Section ─── */}
        <section className="bg-garage-900 border-t border-white/10 py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-1">Location</p>
                <h2 className="text-2xl font-bold text-white">Find Us on the Map</h2>
              </div>
              <a
                href="https://maps.app.goo.gl/6eMbyuHVJo5g3UtQ7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 h-72 w-full">
              <iframe
                title="Bombay Motors Location"
                src={businessInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.5)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
