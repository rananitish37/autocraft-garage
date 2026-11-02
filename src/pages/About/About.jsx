import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Plus, Minus, ArrowRight, ShieldCheck, Wrench, CheckCircle2 } from 'lucide-react';
import SEO from '../../components/SEO/SEO';

const About = () => {
  // Tab state for Mission / Vision / Goal
  const [activeTab, setActiveTab] = useState('mission');

  // FAQ accordion state (index 3 open by default as in reference screenshot)
  const [openFaqIndex, setOpenFaqIndex] = useState(3);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  const tabContent = {
    mission: {
      tag: 'OUR MISSION',
      title: 'Modern Multi-Brand Engineering & Precision Car Care',
      description:
        'At Bombay Motors, our mission is to deliver uncompromising mechanical excellence, transparency, and top-tier craftsmanship for every vehicle that enters our bays. From comprehensive multi-point diagnostics and routine servicing to bespoke performance upgrades, we ensure every driver experiences peak reliability and road confidence.',
      points: [
        'Certified ASE-grade diagnostic & mechanical workflows',
        'Strict adherence to OEM manufacturer tolerances',
        'Transparent upfront estimates with zero surprise fees',
      ],
      ctaText: 'Explore Our Services',
      ctaLink: '/services',
    },
    vision: {
      tag: 'OUR VISION',
      title: 'Setting the Benchmark in High-Performance Automotive Care',
      description:
        'We envision a new benchmark in automotive workshops — fusing cutting-edge computerized diagnostics with old-school artisanal mechanical mastery. We are building the region’s most trusted automotive center where exotic, luxury, and daily commuter vehicles receive equal precision and care.',
      points: [
        'Next-generation computerized ecu & telemetry tools',
        'Continuous technician training on hybrid & performance platforms',
        'Sustainable and eco-compliant workshop waste handling',
      ],
      ctaText: 'View Our Builds',
      ctaLink: '/gallery',
    },
    goal: {
      tag: 'OUR GOAL',
      title: 'Unmatched Reliability, Rapid Turnaround & Driver Trust',
      description:
        'Our goal is simple: deliver zero-compromise quality while respecting your time. Through organized bay scheduling, state-of-the-art lifts, and direct access to genuine parts, we minimize vehicle downtime and maximize driving satisfaction.',
      points: [
        'Same-day express turnarounds on scheduled maintenance',
        'Genuine parts warranty on all installed components',
        'Dedicated post-service support and maintenance tracking',
      ],
      ctaText: 'Book an Appointment',
      ctaLink: '/book',
    },
  };

  const currentTab = tabContent[activeTab];

  const faqs = [
    {
      question: 'What automotive services and repairs do you offer?',
      answer:
        'We are a full-service multi-brand facility offering computerized engine diagnostics, periodic maintenance, braking system overhaul, suspension tuning, clutch and transmission repairs, AC servicing, laser wheel alignment, and custom performance builds.',
    },
    {
      question: 'How does the diagnostic and estimation process work?',
      answer:
        'When your car arrives, our senior technicians perform a comprehensive multi-point diagnostic check using digital scanning equipment. We provide you with a transparent itemized estimate explaining all required work before any wrench is turned.',
    },
    {
      question: 'Do you use genuine OEM parts for vehicle servicing?',
      answer:
        'Yes, exclusively. We strictly install original equipment manufacturer (OEM) or certified high-performance aftermarket parts to safeguard your vehicle warranty, longevity, and road safety.',
    },
    {
      question: 'Do you work with custom builds and specific budget ranges?',
      answer:
        'Clarify whether you work with clients of various budget ranges and how you tailor your services to meet different financial considerations. At Bombay Motors, we provide tailored solutions — from cost-efficient scheduled maintenance for daily commuters to stage-tuned performance packages — ensuring premium quality within your planned budget.',
    },
    {
      question: 'How do I schedule an appointment or emergency vehicle drop-off?',
      answer:
        'You can easily book online via our Book Appointment form, call our customer service desk directly, or drop off your vehicle at our Madhubani workshop during operating hours.',
    },
  ];

  return (
    <div className="bg-[#09090d] text-gray-200 min-h-screen pt-24 pb-16">
      <SEO
        title="About Us — Bombay Motors | Multi Car Care & Performance"
        description="Learn about Bombay Motors multi-brand workshop, our certified team, diagnostic engineering, mission, and automotive expertise."
        canonical="/about"
      />

      {/* ─────────────────────────────────────────────────────────────
          1. Header Banner / Hero Section (Clean Aesthetic)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 border-b border-white/5 overflow-hidden">
        {/* Background glow & subtle car graphic */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute -top-24 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-orange-500 tracking-[0.2em] uppercase mb-4 font-mono">
            <span>HOME</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-gray-300">ABOUT US</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase mb-4">
            About Us
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A decade of precision engineering, transparent service, and genuine passion for every machine on the road.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. Mission / Vision / Goal Section (Reference Screenshot 1)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Workshop Image (User Provided Image) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black group">
              <img
                src="/images/workshop-garage.jpg"
                alt="Bombay Motors Workshop Facility"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              
              {/* Subtle Workshop Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-black/75 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-orange-400 uppercase tracking-widest font-mono">
                    STATE-OF-THE-ART FACILITY
                  </p>
                  <p className="text-white text-sm font-bold mt-0.5">
                    Multi-Bay Hydraulic Lifts & Diagnostic Systems
                  </p>
                </div>
                <Wrench className="w-6 h-6 text-orange-500 shrink-0" />
              </div>
            </div>
          </div>

          {/* Right Column: Mission / Vision / Goal Tabs & Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Pill Tabs (Matching Reference Design) */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === 'mission'
                    ? 'bg-gradient-to-r from-cyan-900 to-blue-900 text-cyan-200 border border-cyan-500/40 shadow-lg shadow-cyan-950/50'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                Our Mission
              </button>

              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === 'vision'
                    ? 'bg-gradient-to-r from-cyan-900 to-blue-900 text-cyan-200 border border-cyan-500/40 shadow-lg shadow-cyan-950/50'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                Our Vision
              </button>

              <button
                onClick={() => setActiveTab('goal')}
                className={`px-6 py-2.5 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  activeTab === 'goal'
                    ? 'bg-gradient-to-r from-cyan-900 to-blue-900 text-cyan-200 border border-cyan-500/40 shadow-lg shadow-cyan-950/50'
                    : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                Our Goal
              </button>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-4">
              {currentTab.title}
            </h2>

            {/* Paragraph */}
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
              {currentTab.description}
            </p>

            {/* Bullet points */}
            <div className="space-y-3 mb-8">
              {currentTab.points.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-300">{pt}</span>
                </div>
              ))}
            </div>

            {/* Read More / Action Button with gradient */}
            <div>
              <Link
                to={currentTab.ctaLink}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gradient-to-r from-[#003b46] to-[#07575b] hover:from-[#07575b] hover:to-[#003b46] text-cyan-100 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-lg shadow-cyan-950/40 border border-cyan-500/30"
              >
                {currentTab.ctaText} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. 3 Highlight Metric Cards (Reference Screenshot 1)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#0d0d14] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Dark Teal Gradient Card */}
            <div className="rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0c242c] via-[#09181e] to-[#061115] border border-cyan-500/20 shadow-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                2K+
              </p>
              <p className="text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Vehicles Serviced
              </p>
              <p className="text-gray-400 text-xs mt-2 max-w-xs">
                Comprehensive maintenance and overhaul across all major domestic and luxury brands.
              </p>
            </div>

            {/* Card 2: Bold Orange Center Card (Exact Highlight from Screenshot) */}
            <div className="rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center bg-gradient-to-br from-orange-500 to-orange-600 shadow-2xl shadow-orange-500/30 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/15 rounded-full blur-2xl pointer-events-none" />
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2">
                10K+
              </p>
              <p className="text-orange-100 text-xs sm:text-sm font-bold uppercase tracking-wider">
                Happy Customers
              </p>
              <p className="text-white/80 text-xs mt-2 max-w-xs">
                Trusted by thousands of drivers across Bihar for reliable, honest automotive repair.
              </p>
            </div>

            {/* Card 3: Dark Teal Gradient Card */}
            <div className="rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#0c242c] via-[#09181e] to-[#061115] border border-cyan-500/20 shadow-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                1K+
              </p>
              <p className="text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Precision Builds &amp; Repairs
              </p>
              <p className="text-gray-400 text-xs mt-2 max-w-xs">
                Engine diagnostics, stage-upgrades, and complex powertrain restorations delivered.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. Frequently Asked Questions (FAQ) Section (Reference Screenshot 2)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 font-mono">
            HELP &amp; INFORMATION
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto">
            Everything you need to know about our automotive diagnostic process, pricing, parts, and bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Image with Orange Vertical Stripe Accent (Matching Screenshot 2) */}
          <div className="lg:col-span-5 relative">
            <div className="flex items-stretch rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              {/* Vibrant Orange Vertical Accent Bar (Direct Reference from Screenshot 2) */}
              <div className="w-10 sm:w-12 bg-gradient-to-b from-orange-500 to-orange-600 shrink-0" />
              
              {/* User Mechanic Engine Photo */}
              <div className="relative w-full h-[400px] sm:h-[460px] overflow-hidden">
                <img
                  src="/images/mechanic-engine.png"
                  alt="Certified mechanic tuning engine"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                {/* Floating Micro Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0" />
                  <div>
                    <p className="text-white text-xs font-bold">100% Genuine OEM Parts</p>
                    <p className="text-gray-400 text-[10px]">Manufacturer warranty on all replacements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white/5 border-orange-500/40 shadow-lg shadow-black/40'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Header / Question row */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-5 sm:px-6 flex items-center justify-between gap-4 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-xs sm:text-sm font-semibold transition-colors ${
                        isOpen ? 'text-orange-400 font-bold' : 'text-gray-200 hover:text-white'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-orange-500 text-white' : 'bg-white/5 text-gray-400'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </span>
                  </button>

                  {/* Body / Answer */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-white/5">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. Bottom Call-To-Action Banner
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-orange-600/20 via-black to-orange-600/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Need Expert Advice on Your Vehicle?
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
            Reach out to our certified mechanics today for a free diagnostic consultation or schedule your service visit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/book"
              className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-lg hover:shadow-orange-500/30 rounded-lg"
            >
              Book Service Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all rounded-lg"
            >
              Contact Workshop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
