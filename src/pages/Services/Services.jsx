import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO/SEO';
import { services } from '../../data/services';

const ITEMS_PER_PAGE = 4;

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const gridSectionRef = useRef(null);

  const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentServices = services.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (gridSectionRef.current) {
      gridSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  return (
    <>
      <SEO
        title="Our Services | Stage & Garage"
        description="Comprehensive automotive care for all makes and models — general servicing, engine overhauling, transmission, brake systems, suspension, electrical, AC, bodywork, and bespoke detailing."
        canonical="/services"
      />

      <div className="min-h-screen bg-garage-950 text-gray-100 selection:bg-orange-500/30 selection:text-orange-200">
        {/* ─── Clean Minimal Header Section ─── */}
        <section className="pt-32 sm:pt-36 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-2 mb-3 text-xs text-gray-400">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-200 font-medium">Services</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-3 font-normal">
            Features That Make<br className="hidden sm:inline" /> Stage &amp; Garage Stand Out
          </h1>

          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Comprehensive automotive care delivered with precision, transparency, and genuine quality.
          </p>
        </section>

        {/* ─── Lean & Minimal Service Cards (2x2 Grid) ─── */}
        <section ref={gridSectionRef} className="pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {currentServices.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-garage-900 border border-white/10 shadow-xl hover:border-orange-500/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                {/* Atmospheric Dark Photo Background */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-25 group-hover:scale-105 group-hover:opacity-35 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/95" />
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
                </div>

                {/* Top Header Content (Compact & Minimal) */}
                <div className="relative z-10 p-5 sm:p-6 pb-3">
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {service.shortDesc || service.description}
                  </p>
                </div>

                {/* Bottom Nested Small Card (Lean, Minimal, Pure Text) */}
                <div className="relative z-10 mx-3 sm:mx-5 mb-0 rounded-t-xl sm:rounded-t-2xl bg-[#12121a]/95 backdrop-blur-xl p-4 sm:p-5 shadow-xl border-t border-x border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="border-b border-white/10 pb-2 mb-2.5">
                      <p className="text-[11px] font-bold text-orange-400 uppercase tracking-wider font-mono">
                        Key Services
                      </p>
                    </div>

                    {/* Minimal 3 Key Points Only */}
                    <ul className="space-y-2 text-xs text-gray-300">
                      {service.included.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-orange-400 flex-shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clean Minimal Action Link */}
                  <div className="mt-3.5 pt-2.5 border-t border-white/10 flex items-center justify-end">
                    <Link
                      to="/book"
                      className="inline-flex items-center gap-1.5 text-orange-400 hover:text-orange-300 text-xs font-bold uppercase tracking-wider hover:gap-2 transition-all"
                    >
                      Book Service <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ─── Pagination Controls ─── */}
          {totalPages > 1 && (
            <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400 font-medium">
                Showing <span className="text-white font-bold">{startIndex + 1}</span>–<span className="text-white font-bold">{Math.min(startIndex + ITEMS_PER_PAGE, services.length)}</span> of <span className="text-orange-400 font-bold">{services.length}</span> Services
              </p>

              {/* Number Buttons */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all duration-200 ${
                      currentPage === page
                        ? 'bg-orange-500 text-white shadow-md shadow-orange-500/25'
                        : 'bg-garage-900 text-gray-400 hover:text-white hover:bg-garage-800 border border-white/10'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next / Previous Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all border ${
                    currentPage === 1
                      ? 'bg-garage-900/50 text-gray-600 border-white/5 cursor-not-allowed'
                      : 'bg-garage-900 hover:bg-garage-800 text-gray-200 border-white/10 hover:border-white/20'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Prev
                </button>

                <button
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                  className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-md ${
                    currentPage === totalPages
                      ? 'bg-garage-900/50 text-gray-600 border border-white/5 cursor-not-allowed'
                      : 'bg-orange-500 hover:bg-orange-400 text-white shadow-orange-500/20 hover:gap-2'
                  }`}
                >
                  Next Services <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </section>

        {/* ─── Bottom CTA Banner ─── */}
        <section className="border-t border-white/10 bg-garage-900 py-12 sm:py-16 relative overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-3">
              Need a custom diagnostic or multi-point service?
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto mb-6 leading-relaxed">
              Our certified mechanics handle all makes and models with transparent pricing and warranty-backed parts.
            </p>
            <div className="flex items-center justify-center">
              <Link
                to="/book"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-orange-500/25"
              >
                Book An Appointment
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
