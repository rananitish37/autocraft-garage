import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Wrench } from 'lucide-react';
import SEO from '../../components/SEO/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="The page you are looking for doesn't exist. Return to Bombay Motors homepage."
        canonical="/404"
        noIndex={true}
      />
      <div className="min-h-screen bg-garage-950 flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <div className="text-orange-500 font-black text-[120px] leading-none mb-4 select-none">
            404
          </div>
          <h1 className="text-white text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-400 mb-10 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
            Let us help you get back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-xl font-semibold transition-all"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              to="/services"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all"
            >
              <Wrench className="w-5 h-5" />
              Our Services
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-semibold transition-all"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
