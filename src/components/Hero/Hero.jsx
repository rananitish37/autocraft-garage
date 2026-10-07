import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Clock, Wrench, Star } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

const infoCards = [
  { icon: Shield, label: 'Certified Technicians', desc: 'ASE certified mechanics' },
  { icon: Wrench, label: 'Modern Equipment', desc: 'State-of-the-art tools' },
  { icon: Clock, label: 'On-Time Delivery', desc: 'We respect your schedule' },
  { icon: Star, label: '4.8 / 5 Rating', desc: '2000+ happy customers' },
];

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&q=90"
          alt="Professional automotive garage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-garage-950 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-0 lg:pb-0">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Premium Automotive Service — Gurugram & NCR
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
            Reliable Car Care.{' '}
            <br className="hidden sm:block" />
            <span className="text-orange-500">Done Right.</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
            Professional automotive service and repair you can trust. Serving Gurugram and NCR for over {businessInfo.stats[0].value} with certified technicians and transparent pricing.
          </p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-6 mb-10">
            {businessInfo.stats.map((stat, i) => (
              <div key={i} className="flex items-baseline gap-1.5">
                <span className="text-2xl font-black text-orange-500">{stat.value}</span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              to="/book"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white rounded-xl font-bold text-lg text-center transition-all duration-200 hover:shadow-[0_0_30px_rgba(249,115,22,0.35)] hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-xl font-bold text-lg text-center transition-all duration-200 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {infoCards.map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-4 flex flex-col items-start gap-2 hover:border-orange-500/40 transition-colors"
              >
                <Icon className="w-6 h-6 text-orange-500" />
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">{label}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
