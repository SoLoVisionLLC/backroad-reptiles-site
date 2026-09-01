import React from 'react';
import { STORE_META_B, FOUNDER_OATH_POINTS } from '../data/siteDataB';
import { MapPin, Phone, Mail, Clock, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterBProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (topic?: string) => void;
}

export const FooterB: React.FC<FooterBProps> = ({ onNavigate, onOpenInquiry }) => {
  return (
    <footer className="bg-forest-950 border-t border-copper-500/20 text-stone-300 relative overflow-hidden">
      {/* Botanical ambient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-copper-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-moss-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Top Breeder Oath Strip */}
      <div className="border-b border-forest-850 bg-forest-900/60 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold block mb-1">
                The Seneca County Herpetological Oath
              </span>
              <h3 className="font-serif text-2xl text-stone-100 font-bold">
                Ethical Welfare Standards by Brian & Angel Johnson
              </h3>
            </div>
            <a
              href="/policies.html"
              onClick={(e) => { e.preventDefault(); onNavigate('/policies.html'); }}
              className="inline-flex items-center gap-2 text-xs font-mono text-copper-400 hover:text-copper-300 transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Read All Welfare & In-Store Pickup Protocols →</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FOUNDER_OATH_POINTS.map((point, idx) => (
              <div key={idx} className="bg-forest-850/60 border border-copper-500/10 rounded-xl p-4 hover:border-copper-500/30 transition-all">
                <span className="font-mono text-copper-400 text-xs font-bold block mb-2">0{idx + 1}.</span>
                <h4 className="font-serif font-semibold text-stone-100 text-sm mb-1">{point.title}</h4>
                <p className="text-xs text-stone-400 leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1: Brand & Origin */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo.webp"
              alt="Back Road Reptiles"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-xs text-stone-400 leading-relaxed font-sans">
            Back Road Reptiles and Exotics LLC is Fostoria’s dedicated specialty reptile sanctuary and live feeder supply center. Locally owned and operated by Brian and Angel Johnson.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <a
              href={STORE_META_B.bbbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-forest-850 border border-copper-500/30 text-[11px] font-mono text-copper-400 hover:border-copper-400 transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{STORE_META_B.bbbRating}</span>
            </a>
            <span className="text-[11px] font-mono text-moss-400 bg-moss-950/60 px-2.5 py-1.5 rounded-lg border border-moss-500/20">
              Est. {STORE_META_B.established}
            </span>
          </div>
        </div>

        {/* Col 2: Operating Hours */}
        <div className="space-y-3">
          <h4 className="font-serif text-base font-bold text-stone-100 flex items-center gap-2">
            <Clock className="w-4 h-4 text-copper-400" />
            <span>Sanctuary Hours</span>
          </h4>
          <div className="space-y-1.5 text-xs font-mono">
            {STORE_META_B.hours.map((h, i) => (
              <div key={i} className="flex justify-between py-1 border-b border-forest-850/60 text-stone-300">
                <span className="text-stone-400">{h.day}</span>
                <span className="text-stone-200 font-semibold">{h.open} – {h.close}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3: Navigation & Field Portals */}
        <div className="space-y-3">
          <h4 className="font-serif text-base font-bold text-stone-100">
            Explorer Index
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={() => onNavigate('/shop.html')}
                className="text-stone-400 hover:text-copper-400 transition-colors flex items-center gap-1.5"
              >
                <span>Live Feeders & Bio Supplies</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('/care.html')}
                className="text-stone-400 hover:text-copper-400 transition-colors flex items-center gap-1.5"
              >
                <span>Husbandry Field Journal</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('/visit.html')}
                className="text-stone-400 hover:text-copper-400 transition-colors flex items-center gap-1.5"
              >
                <span>Storefront Tour & Driving Directions</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('/contact.html')}
                className="text-stone-400 hover:text-copper-400 transition-colors flex items-center gap-1.5"
              >
                <span>Keeper Inquiry & Special Orders</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('/policies.html')}
                className="text-stone-400 hover:text-copper-400 transition-colors flex items-center gap-1.5"
              >
                <span>AfterPay & Pickup Guarantee</span>
              </button>
            </li>
            <li>
              <a
                href={STORE_META_B.squareOnlineStore}
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper-400 hover:text-copper-300 font-mono transition-colors flex items-center gap-1"
              >
                <span>Official Square Storefront</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Storefront & Contact */}
        <div className="space-y-3">
          <h4 className="font-serif text-base font-bold text-stone-100">
            Sanctuary Depot
          </h4>
          <div className="space-y-2.5 text-xs text-stone-300">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
              <span>
                {STORE_META_B.address.street}<br />
                {STORE_META_B.address.city}, {STORE_META_B.address.state} {STORE_META_B.address.zip} ({STORE_META_B.address.county})<br />
                <span className="text-stone-400 text-[11px]">{STORE_META_B.address.landmark}</span>
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-copper-400 shrink-0" />
              <a href={`tel:${STORE_META_B.phoneRaw}`} className="font-mono hover:text-copper-300 transition-colors">
                {STORE_META_B.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-copper-400 shrink-0" />
              <a href={`mailto:${STORE_META_B.email}`} className="font-mono hover:text-copper-300 transition-colors truncate">
                {STORE_META_B.email}
              </a>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry('Custom Bioactive Setup')}
                className="w-full py-2.5 px-3 rounded-lg text-xs font-mono font-semibold bg-forest-850 hover:bg-forest-800 text-copper-400 border border-copper-500/30 transition-all hover:border-copper-400 text-center"
              >
                Inquire About Living Animals
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-forest-850/80 py-6 px-4 text-center text-xs font-mono text-stone-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {STORE_META_B.name}. All Rights Reserved. Captive-Bred & Socialized in Ohio.</p>
          <div className="flex items-center gap-4 text-stone-400">
            <a href={STORE_META_B.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-copper-400 transition-colors">Facebook</a>
            <a href={STORE_META_B.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-copper-400 transition-colors">TikTok</a>
            <button onClick={() => onNavigate('/policies.html')} className="hover:text-copper-400 transition-colors">Policies</button>
            <span className="flex items-center gap-1 text-stone-400">
              Built with <Heart className="w-3 h-3 text-copper-400 fill-copper-400 inline" /> for keepers
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
