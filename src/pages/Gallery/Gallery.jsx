import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryImages, galleryCategories } from '../../data/gallery';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState(null); // index into filtered array

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (idx) => {
    setLightbox(idx);
    document.body.classList.add('no-scroll');
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.classList.remove('no-scroll');
  }, []);

  const prev = useCallback(() => {
    setLightbox(i => (i - 1 + filtered.length) % filtered.length);
  }, [filtered.length]);

  const next = useCallback(() => {
    setLightbox(i => (i + 1) % filtered.length);
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, closeLightbox, prev, next]);

  // Close lightbox when category changes
  useEffect(() => {
    closeLightbox();
  }, [activeCategory, closeLightbox]);

  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 bg-garage-900 border-b border-gray-800">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?w=1920&q=80"
            alt="Gallery"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-garage-900/70 to-garage-900" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Workshop <span className="text-orange-500">Gallery</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A glimpse inside AutoCraft Garage — our facilities, our team, and the quality of work we deliver every day.
          </p>
          <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-gray-300">Gallery</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-30 bg-garage-950/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-none">
            {galleryCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white'
                    : 'bg-garage-800 text-gray-400 hover:text-white hover:bg-garage-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="py-16 bg-garage-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {filtered.map((img, idx) => (
              <div
                key={img.id}
                className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer bg-garage-900"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-orange-400 font-semibold">{img.category}</span>
                  <p className="text-white text-sm font-medium leading-tight">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-16">No images in this category.</p>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-gray-400 text-sm">
            {lightbox + 1} / {filtered.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Image */}
          <div className="relative max-w-5xl max-h-[85vh] w-full" onClick={e => e.stopPropagation()}>
            <img
              src={filtered[lightbox]?.url}
              alt={filtered[lightbox]?.alt}
              className="w-full h-full object-contain max-h-[80vh] rounded-xl"
            />
            <div className="text-center mt-3">
              <p className="text-orange-400 text-xs font-semibold uppercase tracking-wider">{filtered[lightbox]?.category}</p>
              <p className="text-gray-300 text-sm mt-1">{filtered[lightbox]?.alt}</p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
