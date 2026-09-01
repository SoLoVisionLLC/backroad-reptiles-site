import React from 'react';
import { PageRoute } from '../types';
import { STORE_INFO } from '../data/siteData';
import { WEEKLY_HOURS } from '../utils/hours';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  Facebook,
  Instagram,
  Twitter,
  CreditCard
} from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-jungle-950 border-t border-slate-800/80 pt-16 pb-28 md:pb-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Brand Story & Recognition */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-lg p-1.5 shadow-md inline-block">
                <img 
                  src="/assets/logo.webp" 
                  alt="Back Road Reptiles and Exotics Logo" 
                  className="h-10 w-auto object-contain"
                />
              </div>
              <img 
                src="/assets/emblem.webp" 
                alt="Emblem" 
                className="h-10 w-10 object-contain rounded-full border border-slate-700 bg-jungle-900 p-0.5"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Fostoria’s hands-on specialty exotic pet and reptile shop. Founded in 2017 with over two decades of keeper experience. Dedicated to education, ethical captive breeding, and clean nutrition.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-reptile-950 text-reptile-300 border border-reptile-500/30">
                <ShieldCheck className="w-3.5 h-3.5 text-reptile-400" />
                <span>{STORE_INFO.accreditation}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-950/60 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Est. {STORE_INFO.established}</span>
              </span>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2">Connect With The Keepers</div>
              <div className="flex items-center gap-3">
                <a 
                  href={STORE_INFO.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-lg bg-jungle-850 hover:bg-reptile-900/60 text-slate-300 hover:text-white border border-slate-800 hover:border-reptile-500/40 transition-all duration-200"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href={STORE_INFO.socials.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-lg bg-jungle-850 hover:bg-reptile-900/60 text-slate-300 hover:text-white border border-slate-800 hover:border-reptile-500/40 transition-all duration-200"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href={STORE_INFO.socials.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-lg bg-jungle-850 hover:bg-reptile-900/60 text-slate-300 hover:text-white border border-slate-800 hover:border-reptile-500/40 transition-all duration-200"
                  aria-label="Twitter/X Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-reptile-400 transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('shop'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-reptile-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Shop Stock & Feeders</span>
                  <span className="text-[10px] bg-reptile-500/20 text-reptile-300 px-1.5 py-0.5 rounded font-mono">Live</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('visit'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-reptile-400 transition-colors"
                >
                  Plan Your Visit & Map
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('care'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-reptile-400 transition-colors"
                >
                  Species Husbandry Guides
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-reptile-400 transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { onNavigate('policies'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-reptile-400 transition-colors"
                >
                  Store & Welfare Policies
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Storefront & Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Visit Store</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-reptile-400 shrink-0 mt-1" />
                <p className="text-slate-300">
                  {STORE_INFO.address.street}<br />
                  {STORE_INFO.address.city}, {STORE_INFO.address.state} {STORE_INFO.address.zip}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-reptile-400 shrink-0" />
                <a href={`tel:${STORE_INFO.contact.phoneRaw}`} className="text-slate-300 hover:text-white font-mono">
                  {STORE_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-reptile-400 shrink-0" />
                <a href={`mailto:${STORE_INFO.contact.email}`} className="text-slate-300 hover:text-white truncate">
                  {STORE_INFO.contact.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={STORE_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-reptile-400 hover:text-reptile-300 font-semibold"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 5: Operating Hours */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 font-mono">Store Hours</h3>
            <div className="space-y-1.5 text-xs">
              {WEEKLY_HOURS.map((item) => (
                <div key={item.day} className="flex justify-between py-1 border-b border-slate-900">
                  <span className="text-slate-400">{item.day}</span>
                  <span className={item.open ? 'font-mono text-slate-200' : 'text-slate-500 italic'}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-500 mt-2 italic">
              Private consultations & feeder pickups available outside public hours by appointment.
            </p>
          </div>
        </div>

        {/* Financing & Payment Badges */}
        <div className="py-6 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/assets/afterpay.gif" alt="AfterPay logo" className="h-6 w-auto object-contain rounded" />
            <span className="text-xs text-slate-300">
              Split payments into 4 interest-free installments with AfterPay.
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <CreditCard className="w-4 h-4 text-reptile-400" />
            <span>Accepting Visa, Mastercard, Amex, Apple Pay, Google Pay, Cash App & Square Pay</span>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {STORE_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('policies')} className="hover:text-slate-300 transition-colors">
              Animal Welfare & Health Policy
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('policies')} className="hover:text-slate-300 transition-colors">
              No Shipping / Pickup Only
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('policies')} className="hover:text-slate-300 transition-colors">
              All Sales Final
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
