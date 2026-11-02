import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background — Preserved exactly as requested */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=90"
          alt="Stage & Garage automotive performance"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-garage-950 via-transparent to-transparent" />
      </div>

      {/* Hero Content aligned to reference design */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow / Category Tag */}
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <span className="w-8 sm:w-10 h-[2px] bg-orange-500 inline-block" />
            <span className="text-orange-500 font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
              PERFORMANCE AUTHORITY
            </span>
          </div>

          {/* High-Impact Condensed Headline - Refined Boldness & Size */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.98] mb-5 sm:mb-6">
            BUILT IN THE GARAGE.<br />
            PROVEN ON THE STAGE.
          </h1>

          {/* Clean Sub-paragraph */}
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed mb-8 sm:mb-10 text-pretty">
            We engineer automotive masterpieces for those who demand uncompromising performance
            and world-class aesthetics. From track-ready builds to show-stopping restorations.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/gallery"
              className="px-8 py-3.5 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 shadow-lg hover:shadow-orange-500/30 rounded-sm inline-flex items-center justify-center"
            >
              VIEW PORTFOLIO
            </Link>
            <Link
              to="/services"
              className="px-8 py-3.5 sm:py-4 bg-black/40 hover:bg-white/10 border border-white/50 hover:border-orange-500 text-white hover:text-orange-400 font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-200 backdrop-blur-sm rounded-sm inline-flex items-center justify-center"
            >
              OUR SERVICES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
