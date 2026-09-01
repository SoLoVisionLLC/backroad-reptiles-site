import { useState } from 'react';
import { STORE_META_B } from '../data/siteDataB';
import { getStoreStatus } from '../utils/hours';
import { MapPin, Phone, ShoppingBag, Menu, X, Compass, Leaf, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

interface HeaderBProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenInquiry: (topic?: string) => void;
}

export const HeaderB = ({ currentPath, onNavigate, onOpenInquiry }: HeaderBProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const status = getStoreStatus();

  const navItems = [
    { label: "Sanctuary", path: "/", icon: Compass },
    { label: "Habitat Builder", path: "#habitat-builder", icon: Sparkles },
    { label: "Feeder Freshness", path: "#feeder-matrix", icon: Leaf },
    { label: "Field Journal", path: "/care.html", icon: BookOpen },
    { label: "Store & Feeders", path: "/shop.html", icon: ShoppingBag },
    { label: "Expedition Plan", path: "/visit.html", icon: MapPin },
    { label: "Welfare Oath", path: "/policies.html", icon: ShieldCheck },
  ];

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    if (path.startsWith('#')) {
      if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        onNavigate('/');
        setTimeout(() => {
          const el = document.querySelector(path);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      } else {
        const el = document.querySelector(path);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      onNavigate(path);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-forest-950/90 backdrop-blur-md border-b border-copper-500/20 transition-all duration-300">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-forest-900 via-forest-850 to-forest-900 border-b border-copper-500/10 px-4 py-1.5 text-xs text-stone-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-mono text-[11px] bg-forest-800 text-copper-400 border border-copper-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-copper-400 animate-pulse"></span>
              Seneca County Sanctuary
            </span>
            <span className="hidden sm:inline text-stone-400">
              610 Plaza Dr, Fostoria, OH • Hand-Reared with Ethical Husbandry
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${status.isOpen ? 'bg-moss-400 animate-pulse' : 'bg-amber-400'}`}></span>
              <span className="font-mono font-medium text-stone-200">
                {status.statusText}
              </span>
            </div>
            <a
              href={`tel:${STORE_META_B.phoneRaw}`}
              className="hidden md:flex items-center gap-1 text-copper-400 hover:text-copper-300 font-mono transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{STORE_META_B.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <div
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-forest-900 border-2 border-copper-500/40 p-0.5 group-hover:border-copper-400 transition-colors shadow-botanical">
              <img
                src="/assets/emblem.webp"
                alt="Back Road Reptiles Emblem"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="block font-serif font-bold text-lg sm:text-xl text-stone-100 tracking-tight leading-tight group-hover:text-copper-400 transition-colors">
                Back Road Reptiles
              </span>
              <span className="block text-[11px] font-mono tracking-wider text-moss-400 uppercase">
                & Exotics • Herpetology & Bioactive
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path || (item.path === '/' && (currentPath === '' || currentPath === '/index.html'));
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs xl:text-sm font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-copper-500/20 text-copper-300 border border-copper-500/40'
                      : 'text-stone-300 hover:text-stone-100 hover:bg-forest-850'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 text-copper-400/80" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry('Custom Bioactive Setup')}
              className="px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-forest-850 hover:bg-forest-800 text-stone-200 border border-copper-500/30 transition-all hover:border-copper-400"
            >
              Consult Keeper
            </button>
            <a
              href={STORE_META_B.squareCatalog}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-gradient-to-r from-copper-600 to-copper-500 hover:from-copper-500 hover:to-copper-400 text-forest-950 shadow-copper-glow transition-all"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Square Store</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-forest-850 text-stone-300 hover:text-stone-100 border border-copper-500/20"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-copper-400" /> : <Menu className="w-6 h-6 text-copper-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-forest-950 border-b border-copper-500/30 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-copper-500/20 text-copper-300 border border-copper-500/40'
                    : 'text-stone-200 hover:bg-forest-850'
                }`}
              >
                <Icon className="w-4 h-4 text-copper-400" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-4 border-t border-forest-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-2.5 px-3 rounded-lg text-xs font-mono font-semibold bg-forest-850 text-stone-200 border border-copper-500/30 text-center"
            >
              Consult Keeper
            </button>
            <a
              href={STORE_META_B.squareCatalog}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-lg text-xs font-mono font-semibold bg-copper-500 text-forest-950 text-center flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Square Catalog</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
