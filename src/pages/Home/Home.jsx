import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, ChevronRight, ChevronLeft, BadgeCheck,
  Gauge, DollarSign, Cpu, HeadphonesIcon, ArrowRight
} from 'lucide-react';
import Hero from '../../components/Hero/Hero';
import SEO from '../../components/SEO/SEO';
import { services } from '../../data/services';
import { testimonials } from '../../data/testimonials';
import { businessInfo } from '../../data/businessInfo';

// ─── Why Choose Us data ───────────────────────────────────────────────────────
const benefits = [
  {
    icon: BadgeCheck,
    title: 'Experienced Technicians',
    desc: 'Our ASE-certified mechanics bring years of hands-on experience with all makes and models.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    desc: 'No hidden charges. You get a clear quote before any work begins — always.',
  },
  {
    icon: CheckCircle2,
    title: 'Quality OEM Parts',
    desc: 'We use only genuine or manufacturer-approved parts to ensure longevity and performance.',
  },
  {
    icon: Gauge,
    title: 'Quick Turnaround',
    desc: 'Efficient workflows and a fully equipped workshop mean faster service without cutting corners.',
  },
  {
    icon: Cpu,
    title: 'Modern Equipment',
    desc: 'State-of-the-art diagnostic tools and workshop equipment for precise, accurate service.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    desc: 'We keep you updated throughout the service and are always reachable for follow-up queries.',
  },
];

// ─── Service Card ─────────────────────────────────────────────────────────────
const ServiceCard = ({ service }) => {
  return (
    <div className="group bg-[#0e0e13] border border-white/5 hover:border-orange-500/50 rounded-none sm:rounded-sm overflow-hidden flex flex-col transition-all duration-300 w-[285px] sm:w-[320px] md:w-[350px] lg:w-[calc(25%-18px)] flex-shrink-0 snap-start">
      {/* Picture */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e13] via-transparent to-transparent opacity-40" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Orange Accent Line */}
        <span className="w-7 h-[2px] bg-orange-500 block mb-3.5" />

        {/* Title */}
        <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-wider mb-2 leading-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
          {service.shortDesc}
        </p>

        {/* Learn More link */}
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-orange-500 text-xs font-bold uppercase tracking-wider hover:text-orange-400 hover:gap-2.5 transition-all mt-auto pt-2"
        >
          EXPLORE SERVICE <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};

// ─── Home Page ────────────────────────────────────────────────────────────────
const Home = () => {
  const scrollContainerRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const scrollServices = (direction) => {
    if (scrollContainerRef.current) {
      const cardWidth = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentReview = testimonials[activeTestimonial] || testimonials[0];

  return (
    <div>
      <SEO
        title="Bombay Motors | Multi-Brand Car Service"
        description="Bespoke multi-brand performance tuning, custom builds, paint, bodywork, and diagnostic engineering."
        canonical="/"
      />
      {/* 1. Hero */}
      <Hero />

      {/* 2. Services Section */}
      <section className="py-20 sm:py-24 bg-[#09090c] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-orange-500 inline-block" />
            <span className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase font-mono">
              OUR EXPERTISE
            </span>
          </div>

          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-normal leading-[1.05]">
                PRECISION SERVICES FOR<br />
                THE DISCERNING DRIVER.
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:max-w-md">
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Every screw turned and every line painted is executed with the goal of absolute perfection.
              </p>
              
              {/* Navigation Arrows for scrolling */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => scrollServices('left')}
                  className="w-10 h-10 rounded-sm border border-white/20 hover:border-orange-500 bg-black/60 hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scrollServices('right')}
                  className="w-10 h-10 rounded-sm border border-white/20 hover:border-orange-500 bg-black/60 hover:bg-orange-500 text-white flex items-center justify-center transition-all duration-200"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontally Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory pb-4"
          >
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section id="about" className="py-20 sm:py-24 bg-garage-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-14 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&q=80"
                  alt="Bombay Motors multi-brand workshop"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-4 sm:right-6 bg-orange-500 rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 shadow-2xl shadow-orange-500/30">
                <p className="text-white text-2xl sm:text-3xl font-bold leading-none">10+</p>
                <p className="text-white/80 text-xs sm:text-sm font-medium mt-0.5">Years of Excellence</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
                Your Trusted Partner <br />for <span className="text-orange-500">Every Journey</span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                Bombay Motors has been serving Madhubani and the surrounding Bihar community for over a decade. What started as a small workshop has grown into a full-service multi-brand automotive centre trusted by thousands of vehicle owners.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-7">
                Our team of certified technicians is dedicated to delivering honest, high-quality service using the latest diagnostic equipment and genuine parts. We treat every vehicle as if it were our own.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5 mb-8">
                {businessInfo.stats.map((stat, i) => (
                  <div key={i} className="bg-garage-800 rounded-xl p-4 border border-gray-800">
                    <p className="text-2xl sm:text-3xl font-bold text-orange-500 mb-1">{stat.value}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all hover:shadow-lg hover:shadow-orange-500/25"
              >
                Book a Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 sm:py-24 bg-garage-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-14">
            <p className="text-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">Why Bombay Motors</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              The Bombay Motors <span className="text-orange-500">Difference</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
              We combine technical expertise with genuine customer care to give you an automotive service experience that builds lasting trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-garage-900 border border-gray-800 hover:border-orange-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Editorial Reviews Section — Dark Theme, Modern Sans Typography, Decreased Size */}
      <section id="reviews" className="py-20 sm:py-24 lg:py-28 bg-[#0a0a0f] text-gray-200 border-t border-white/5 relative overflow-hidden">
        {/* Subtle orange ambient glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* Left Column (Metadata, Stylized Orange Quote Symbol, Bottom Tag) */}
            <div className="lg:col-span-4 flex flex-col justify-between self-stretch pt-1">
              <div>
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-orange-500 uppercase mb-6 sm:mb-8 font-mono">
                  {currentReview.tag || '05 / CLIENT FEEDBACK'}
                </p>

                {/* Stylized Amber / Orange Quote Mark */}
                <div className="text-6xl sm:text-7xl font-serif text-orange-500/70 leading-none select-none -mt-2 mb-4">
                  &ldquo;&ldquo;
                </div>
              </div>

              <div className="mt-6 lg:mt-auto pt-4">
                <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-gray-500 uppercase font-mono">
                  SAMPLE TESTIMONIALS
                </p>
              </div>
            </div>

            {/* Right Column (Refined Sans Quote, Author Metadata, Divider, Controls) */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              {/* Refined Sans-Serif Quote - Decreased Size & Modern Clean Font Style */}
              <blockquote className="font-sans text-lg sm:text-xl md:text-2xl font-normal text-gray-200 leading-relaxed tracking-normal mb-6 sm:mb-8 min-h-[105px] transition-all duration-300">
                &ldquo;{currentReview.quote || currentReview.text}&rdquo;
              </blockquote>

              {/* Author & Category */}
              <div className="mb-8 sm:mb-10">
                <p className="text-white font-semibold text-sm sm:text-base tracking-wide">
                  {currentReview.author || currentReview.name}
                </p>
                <p className="text-[10px] sm:text-xs font-medium tracking-[0.18em] text-orange-400 uppercase mt-1">
                  {currentReview.category || currentReview.service}
                </p>
              </div>

              {/* Thin Dividing Rule */}
              <div className="border-t border-white/10 w-full mb-6" />

              {/* Counter & Arrow Navigation Controls */}
              <div className="flex items-center justify-between pt-1">
                {/* 01 / 03 Counter */}
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-gray-400 font-mono">
                  {String(activeTestimonial + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                </span>

                {/* Left and Right Circular Outline Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 hover:border-orange-500 bg-white/5 hover:bg-orange-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 focus:outline-none"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 hover:border-orange-500 bg-white/5 hover:bg-orange-500 text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 focus:outline-none"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="py-20 sm:py-24 bg-garage-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=80"
            alt="Car service"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-garage-950 via-garage-950/95 to-garage-950/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs sm:text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            Bespoke Engineering &amp; Track Preparation
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white uppercase tracking-normal leading-[1.05] mb-5">
            READY TO ELEVATE YOUR <span className="text-orange-500">PERFORMANCE?</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm sm:text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Consult with our engineering specialists to begin your bespoke build, powertrain calibration, or track setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="px-8 py-3.5 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all shadow-lg hover:shadow-orange-500/30 rounded-sm"
            >
              INQUIRE NOW
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all backdrop-blur-sm rounded-sm"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
