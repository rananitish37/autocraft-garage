import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Droplets, Shield, Activity, Wind, Zap, CircleDot, Sparkles,
  CheckCircle2, Users, Star, ChevronRight, BadgeCheck,
  Gauge, DollarSign, Cpu, HeadphonesIcon, ArrowRight
} from 'lucide-react';
import Hero from '../../components/Hero/Hero';
import { services } from '../../data/services';
import { testimonials } from '../../data/testimonials';
import { businessInfo } from '../../data/businessInfo';

// ─── Icon map for services ────────────────────────────────────────────────────
const iconMap = {
  Wrench, Droplets, Shield, Activity, Wind, Zap,
  Circle: CircleDot, Sparkles,
};

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
  const Icon = iconMap[service.icon] || Wrench;
  return (
    <div className="group bg-garage-900 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5">
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
        <Icon className="w-6 h-6 text-orange-500" />
      </div>
      <div>
        <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{service.shortDesc}</p>
      </div>
      <Link
        to="/services"
        className="inline-flex items-center gap-1 text-orange-500 text-sm font-semibold hover:gap-2 transition-all mt-auto"
      >
        Learn More <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

// ─── Testimonial Card ─────────────────────────────────────────────────────────
const TestimonialCard = ({ testimonial }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < testimonial.rating);
  return (
    <div className="bg-garage-900 border border-gray-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-gray-700 transition-colors">
      <div className="flex gap-1">
        {stars.map((filled, i) => (
          <Star key={i} className={`w-4 h-4 ${filled ? 'text-orange-400 fill-orange-400' : 'text-gray-600'}`} />
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed italic">"{testimonial.text}"</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm flex-shrink-0">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{testimonial.name}</p>
          <p className="text-gray-500 text-xs">{testimonial.location} · {testimonial.service}</p>
        </div>
      </div>
    </div>
  );
};

// ─── Home Page ────────────────────────────────────────────────────────────────
const Home = () => {
  return (
    <div>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Services Section */}
      <section className="py-24 bg-garage-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div>
              <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Complete Automotive <br className="hidden md:block" />
                <span className="text-orange-500">Care Services</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-700 hover:border-orange-500 text-gray-300 hover:text-orange-500 rounded-xl text-sm font-semibold transition-all flex-shrink-0"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.slice(0, 8).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Section */}
      <section id="about" className="py-24 bg-garage-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504222490345-c075b6008014?w=800&q=80"
                  alt="AutoCraft Garage workshop"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-4 sm:right-6 bg-orange-500 rounded-2xl px-6 py-4 shadow-2xl shadow-orange-500/30">
                <p className="text-white text-3xl font-black leading-none">10+</p>
                <p className="text-white/80 text-sm font-medium">Years of Excellence</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight mb-6">
                Your Trusted Partner <br />for <span className="text-orange-500">Every Journey</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                AutoCraft Garage has been serving the Gurugram and NCR community for over a decade. What started as a small workshop has grown into a full-service automotive centre trusted by thousands of vehicle owners.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Our team of certified technicians is dedicated to delivering honest, high-quality service using the latest diagnostic equipment and genuine parts. We treat every vehicle as if it were our own.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-5 mb-8">
                {businessInfo.stats.map((stat, i) => (
                  <div key={i} className="bg-garage-800 rounded-xl p-4 border border-gray-800">
                    <p className="text-3xl font-black text-orange-500 mb-1">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/book"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-orange-500/25"
              >
                Book a Service <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-24 bg-garage-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">Why AutoCraft</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              The AutoCraft <span className="text-orange-500">Difference</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We combine technical expertise with genuine customer care to give you an automotive service experience that builds lasting trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group bg-garage-900 border border-gray-800 hover:border-orange-500/40 rounded-2xl p-7 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-5 group-hover:bg-orange-500/20 transition-colors">
                  <Icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section id="reviews" className="py-24 bg-garage-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with rating */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">Customer Reviews</p>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                What Our Customers <span className="text-orange-500">Say</span>
              </h2>
            </div>
            {/* Overall rating */}
            <div className="bg-garage-800 border border-gray-800 rounded-2xl px-6 py-4 flex items-center gap-4">
              <div className="text-center">
                <p className="text-4xl font-black text-orange-500 leading-none">4.8</p>
                <p className="text-gray-400 text-xs mt-1">out of 5</p>
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-gray-400 text-xs">Based on 200+ reviews</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="py-24 bg-garage-950 relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            Join 2,000+ Satisfied Customers
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Ready to Book Your <span className="text-orange-500">Service?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Don't wait for a breakdown. Keep your vehicle in peak condition with AutoCraft's professional service. Book online in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-400 text-white rounded-xl font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
            >
              Book Appointment Now
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-bold text-lg transition-all backdrop-blur-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
