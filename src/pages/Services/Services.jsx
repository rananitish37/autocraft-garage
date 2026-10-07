import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Droplets, Shield, Activity, Wind, Zap, CircleDot, Sparkles,
  CheckCircle2, Calendar
} from 'lucide-react';
import { services } from '../../data/services';

const iconMap = {
  Wrench, Droplets, Shield, Activity, Wind, Zap,
  Circle: CircleDot, Sparkles,
};

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 bg-garage-900 border-b border-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=1920&q=80"
            alt="Garage services"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-garage-900/80 to-garage-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Comprehensive automotive care for all makes and models. Every service delivered with precision, transparency, and genuine quality.
          </p>
          <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-300">Services</span>
          </div>
        </div>
      </div>

      {/* Services List */}
      <div className="py-20 bg-garage-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {services.map((service, idx) => {
            const Icon = iconMap[service.icon] || Wrench;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-garage-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-colors group"
              >
                {/* Image */}
                <div className={`relative aspect-[16/9] lg:aspect-auto lg:min-h-[320px] overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/90 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <h2 className="text-2xl font-black text-white mb-3">{service.title}</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>

                  {/* What's included */}
                  <div className="mb-6">
                    <p className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">What's Included</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why Important */}
                  <div className="bg-orange-500/5 border border-orange-500/15 rounded-xl p-4 mb-7">
                    <p className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">Why It Matters</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{service.importance}</p>
                  </div>

                  <Link
                    to="/book"
                    className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-orange-500/25 self-start"
                  >
                    <Calendar className="w-4 h-4" />
                    Book This Service
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="py-16 bg-garage-900 border-t border-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            Not sure which service you need?
          </h3>
          <p className="text-gray-400 mb-8">Contact us and our team will help you identify exactly what your vehicle requires.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-xl font-bold transition-all">
              Book Appointment
            </Link>
            <Link to="/contact" className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white rounded-xl font-semibold transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
