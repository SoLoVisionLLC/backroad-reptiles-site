import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { STORE_INFO } from '../data/siteData';
import { getStoreStatus, StoreStatus } from '../utils/hours';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  Clock, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenInquiry: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, onNavigate, onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<StoreStatus>(getStoreStatus());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getStoreStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute; badge?: string }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Shop & Stock', route: 'shop', badge: 'Live' },
    { label: 'Visit & Hours', route: 'visit' },
    { label: 'Care Guides', route: 'care' },
    { label: 'Contact', route: 'contact' },
    { label: 'Store Policies', route: 'policies' },
  ];

  return (
    <>
      {/* Top Banner / Announcement Bar */}
      <div className="bg-gradient-to-r from-jungle-900 via-reptile-950 to-jungle-900 border-b border-reptile-500/20 text-xs py-1.5 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                status.statusType === 'open' ? 'bg-reptile-400' : status.statusType === 'closing-soon' ? 'bg-amber-400' : 'bg-slate-400'
              }`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                status.statusType === 'open' ? 'bg-reptile-500' : status.statusType === 'closing-soon' ? 'bg-amber-500' : 'bg-slate-500'
              }`}></span>
            </span>
            <span className="font-medium text-slate-200">{status.statusText}</span>
            <span className="hidden sm:inline text-slate-400">· {status.todayHoursText}</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${STORE_INFO.contact.phoneRaw}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-reptile-400 transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-reptile-400" />
              <span>{STORE_INFO.contact.phone}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <a 
              href={STORE_INFO.square.giftCardUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1 text-amber-400 hover:text-amber-300 transition-colors font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Gift Cards</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-jungle-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-2.5' 
          : 'bg-jungle-950/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo and Brand */}
          <button 
            onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-reptile-600 to-amber-500 rounded-xl blur opacity-25 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-white rounded-lg p-1.5 shadow-md flex items-center justify-center">
                <img 
                  src="/assets/logo.webp" 
                  alt="Back Road Reptiles Logo" 
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="text-sm font-display font-bold text-white tracking-tight flex items-center gap-1.5">
                <span>Back Road Reptiles</span>
                <span className="text-reptile-400 text-xs px-1.5 py-0.5 rounded bg-reptile-950/80 border border-reptile-500/30">LLC</span>
              </div>
              <p className="text-[11px] text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-reptile-500" />
                <span>Fostoria, Ohio</span>
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => {
                    onNavigate(item.route);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-reptile-400 bg-reptile-950/60 border border-reptile-500/30 shadow-glow-green' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.2 bg-reptile-500/20 text-reptile-300 rounded-full font-mono">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-jungle-800 text-slate-200 hover:text-white hover:bg-jungle-700 border border-slate-700 transition-all duration-200"
            >
              <span>Ask a Keeper</span>
            </button>

            <a
              href={STORE_INFO.square.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold bg-gradient-to-r from-reptile-600 to-reptile-500 text-white shadow-lg shadow-reptile-900/40 hover:from-reptile-500 hover:to-reptile-400 transition-all duration-300 active:scale-95"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Online</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-jungle-850 text-slate-300 hover:text-white border border-slate-800 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-panel border-t border-slate-800 mt-2.5 px-4 py-4 space-y-2 animate-fadeIn">
            {/* Live Status Pill */}
            <div className="p-3 rounded-lg bg-jungle-900/80 border border-slate-800 mb-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-reptile-400" />
                <span className="text-slate-200 font-medium">{status.statusText}</span>
              </div>
              <span className="text-slate-400 font-mono">{status.todayHoursText}</span>
            </div>

            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => {
                    onNavigate(item.route);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-reptile-950/80 text-reptile-400 border border-reptile-500/30'
                      : 'text-slate-200 hover:bg-white/5'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-2.5 rounded-lg text-sm font-semibold bg-jungle-800 text-slate-100 hover:bg-jungle-700 text-center"
              >
                Ask Husbandry / Feeder Question
              </button>
              <a
                href={STORE_INFO.square.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg text-sm font-bold bg-reptile-600 text-white hover:bg-reptile-500 flex items-center justify-center gap-2 text-center"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Square Store</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
