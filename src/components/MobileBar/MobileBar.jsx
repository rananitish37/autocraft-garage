import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { businessInfo } from '../../data/businessInfo';

const MobileBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-garage-900/95 backdrop-blur-md border-t border-gray-800 safe-area-pb">
      <div className="flex items-stretch divide-x divide-gray-800">
        <a
          href={`tel:${businessInfo.phone}`}
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-gray-300 hover:text-orange-500 hover:bg-gray-800/50 transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-medium">Call</span>
        </a>
        <a
          href={businessInfo.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 text-gray-300 hover:text-green-400 hover:bg-gray-800/50 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <Link
          to="/book"
          className="flex-1 flex flex-col items-center justify-center py-3 gap-1 bg-orange-500 hover:bg-orange-400 text-white transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-xs font-bold">Book</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileBar;
