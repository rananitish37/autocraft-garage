import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Clock } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';
import { serviceOptions } from '../../data/services';

const Footer = () => {
  return (
    <footer className="bg-garage-950 border-t border-gray-800 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div>
            <Link to="/" className="flex flex-col gap-0.5 group mb-6" aria-label="Bombay Motors - Home">
              <span className="text-white font-black text-2xl tracking-widest uppercase group-hover:text-orange-400 transition-colors">
                BOMBAY <span className="text-orange-500">MOTORS</span>
              </span>
              <span className="text-gray-500 text-[10px] tracking-[0.2em] uppercase font-medium">
                Multi Car Repair and Service
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Professional multi-brand automotive service and repair you can trust. Serving Bihar with certified technicians and transparent pricing.
            </p>
            <div className="flex gap-4">
              <a href={businessInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Bombay Motors on Instagram" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={businessInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Bombay Motors on Facebook" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={businessInfo.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Bombay Motors" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Home</Link></li>
              <li><Link to="/#about" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Gallery</Link></li>
              <li><Link to="/book" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Book Appointment</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-4">
              {serviceOptions.slice(0, 5).map((service, idx) => (
                <li key={idx}>
                  <Link to="/services" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">{service}</Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-orange-500 text-sm hover:underline">View all services &rarr;</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm leading-relaxed">{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="text-gray-400 text-sm hover:text-white transition-colors">{businessInfo.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="text-gray-400 text-sm hover:text-white transition-colors">{businessInfo.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div className="text-gray-400 text-sm leading-relaxed">
                  <p>{businessInfo.hours.weekdays}</p>
                  <p>{businessInfo.hours.weekend}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Bombay Motors. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
