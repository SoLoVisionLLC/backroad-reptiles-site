import React from 'react';
import { PageRoute } from '../types';
import { STORE_INFO } from '../data/siteData';
import { Phone, MapPin, ShoppingBag, BookOpen, MessageSquare } from 'lucide-react';

interface MobileBottomNavProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenInquiry: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentRoute,
  onNavigate,
  onOpenInquiry,
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-jungle-950/95 backdrop-blur-lg border-t border-slate-800 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto text-[10px] font-medium text-slate-400 text-center">
        {/* Call */}
        <a
          href={`tel:${STORE_INFO.contact.phoneRaw}`}
          className="flex flex-col items-center gap-1 py-1 px-1 rounded-lg hover:text-white active:scale-95 transition-all"
        >
          <div className="p-1.5 rounded-full bg-jungle-850 border border-slate-800 text-slate-200">
            <Phone className="w-4 h-4 text-reptile-400" />
          </div>
          <span>Call Shop</span>
        </a>

        {/* Visit / Directions */}
        <button
          onClick={() => {
            onNavigate('visit');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 px-1 rounded-lg transition-all ${
            currentRoute === 'visit' ? 'text-reptile-400 font-bold' : 'hover:text-white'
          }`}
        >
          <div className={`p-1.5 rounded-full border ${
            currentRoute === 'visit' 
              ? 'bg-reptile-950 border-reptile-500/50 text-reptile-400' 
              : 'bg-jungle-850 border-slate-800 text-slate-200'
          }`}>
            <MapPin className="w-4 h-4" />
          </div>
          <span>Directions</span>
        </button>

        {/* Main Shop Button (Prominent) */}
        <a
          href={STORE_INFO.square.storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 -mt-3 text-white"
        >
          <div className="p-3 rounded-full bg-gradient-to-tr from-reptile-600 to-reptile-400 shadow-lg shadow-reptile-900/60 border-2 border-jungle-950 active:scale-90 transition-transform">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-reptile-300">Shop Now</span>
        </a>

        {/* Care Guides */}
        <button
          onClick={() => {
            onNavigate('care');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center gap-1 py-1 px-1 rounded-lg transition-all ${
            currentRoute === 'care' ? 'text-reptile-400 font-bold' : 'hover:text-white'
          }`}
        >
          <div className={`p-1.5 rounded-full border ${
            currentRoute === 'care' 
              ? 'bg-reptile-950 border-reptile-500/50 text-reptile-400' 
              : 'bg-jungle-850 border-slate-800 text-slate-200'
          }`}>
            <BookOpen className="w-4 h-4" />
          </div>
          <span>Care Info</span>
        </button>

        {/* Inquire */}
        <button
          onClick={onOpenInquiry}
          className="flex flex-col items-center gap-1 py-1 px-1 rounded-lg hover:text-white active:scale-95 transition-all"
        >
          <div className="p-1.5 rounded-full bg-jungle-850 border border-slate-800 text-slate-200">
            <MessageSquare className="w-4 h-4 text-amber-400" />
          </div>
          <span>Ask Keepers</span>
        </button>
      </div>
    </div>
  );
};
