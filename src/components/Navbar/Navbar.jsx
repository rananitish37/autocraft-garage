import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'BUILDS', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path.split('#')[0]) && path.split('#')[0] !== '/';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-4 sm:px-6 pointer-events-none transition-all duration-300">
      <div
        className={`max-w-5xl mx-auto rounded-2xl transition-all duration-300 pointer-events-auto border ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-white/15 shadow-2xl py-2 px-4 sm:px-6'
            : 'bg-black/75 backdrop-blur-md border-white/10 shadow-xl py-2.5 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo with User-Provided Bombay Motors Image */}
          <Link
            to="/"
            className="flex items-center group select-none gap-2.5"
            aria-label="Bombay Motors - Home"
          >
            <img
              src="/images/logo.jpg"
              alt="Bombay Motors"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border border-orange-500/40 shadow-md group-hover:border-orange-500 transition-colors"
            />
            <div className="flex flex-col">
              <span className="text-white font-display font-black text-lg sm:text-xl tracking-wider uppercase group-hover:text-orange-400 transition-colors leading-none">
                BOMBAY MOTORS
              </span>
              <span className="text-[9px] font-semibold tracking-widest text-orange-500 uppercase">
                Multi Car Repair and Service
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Frosted Pill Active State (Reference: Sociafy Navbar) */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-lg transition-all duration-200 ${
                    active
                      ? 'bg-white/15 text-white shadow-sm border border-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden pt-3 pb-2 border-t border-white/10 mt-2 space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors ${
                    active ? 'bg-white/15 text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
