import React from 'react';
import { PageRoute } from '../types';
import { STORE_INFO } from '../data/siteData';
import { WEEKLY_HOURS, getStoreStatus } from '../utils/hours';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  Car, 
  Sparkles, 
  ShoppingBag
} from 'lucide-react';

interface VisitPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenInquiry: (topic?: string) => void;
}

export const VisitPage: React.FC<VisitPageProps> = ({ onOpenInquiry }) => {
  const status = getStoreStatus();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jungle-900 border border-reptile-500/30 text-xs font-semibold text-slate-200">
          <span className="flex h-2 w-2 relative">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
              status.statusType === 'open' ? 'bg-reptile-400' : 'bg-amber-400'
            }`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${
              status.statusType === 'open' ? 'bg-reptile-500' : 'bg-amber-500'
            }`}></span>
          </span>
          <span className="font-mono text-reptile-300 font-bold">{status.statusText}</span>
          <span className="text-slate-500">|</span>
          <span>Seneca County, OH</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Plan Your In-Store Visit
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Come visit our physical shop in Fostoria, Ohio. Experience live captive-bred reptiles and amphibians up close, inspect our fresh feeder stock, and get personal setup guidance from Brian & Angel.
        </p>
      </div>

      {/* Main Location & Schedule Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Hours & Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Address & Direct Dial Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5 bg-jungle-950/90">
            <div className="flex items-start gap-3">
              <div className="p-3 rounded-xl bg-reptile-950 border border-reptile-500/30 text-reptile-400 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">Storefront Address</span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {STORE_INFO.address.street}
                </h3>
                <p className="text-sm text-slate-300">
                  {STORE_INFO.address.city}, {STORE_INFO.address.state} {STORE_INFO.address.zip}
                </p>
                <div className="pt-2">
                  <a
                    href={STORE_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-reptile-400 hover:text-reptile-300 font-semibold"
                  >
                    <span>Get Navigation Directions</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-reptile-400" />
                  <span>Phone</span>
                </span>
                <a href={`tel:${STORE_INFO.contact.phoneRaw}`} className="text-white font-mono font-bold hover:text-reptile-400">
                  {STORE_INFO.contact.phone}
                </a>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-reptile-400" />
                  <span>Email</span>
                </span>
                <a href={`mailto:${STORE_INFO.contact.email}`} className="text-white hover:text-reptile-400 truncate max-w-[180px]">
                  {STORE_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Table Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 bg-jungle-950/90">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" />
                <h3 className="text-base font-bold text-white font-display">Operating Schedule</h3>
              </div>
              <span className="text-xs font-mono text-reptile-400 font-bold">EST (Ohio)</span>
            </div>

            <div className="space-y-2">
              {WEEKLY_HOURS.map((item) => {
                const isToday = item.day.toLowerCase() === status.currentDayName.toLowerCase();
                return (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between p-2.5 rounded-xl text-xs transition-colors ${
                      isToday
                        ? 'bg-reptile-950/80 border border-reptile-500/40 text-reptile-300 font-semibold'
                        : 'bg-jungle-900/60 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {isToday && <span className="w-1.5 h-1.5 rounded-full bg-reptile-400 animate-pulse"></span>}
                      <span>{item.day}</span>
                    </div>
                    <span className={item.open ? 'font-mono text-white font-bold' : 'text-slate-500 italic'}>
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
              <span className="font-semibold text-slate-300">Appointment Notice:</span> Friday through Monday hours are reserved for habitat deliveries, maintenance, and private keeper consultations. Call ahead to schedule.
            </div>
          </div>

        </div>

        {/* Right Col: Map & What to Expect */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Map Embed */}
          <div className="glass-panel rounded-2xl border border-slate-700 p-3 bg-jungle-900 shadow-2xl">
            <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-jungle-950">
              <iframe
                title="Google Maps Location 610 Plaza Drive"
                src="https://maps.google.com/maps?q=610%20Plaza%20Dr,%20Fostoria,%20OH%2044830&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter grayscale-[15%] contrast-110"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Parking and Access Tips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-reptile-400 text-xs font-bold font-mono uppercase">
                <Car className="w-4 h-4" />
                <span>Parking & Store Access</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Plaza Drive features easy ground-level entry and expansive free storefront parking. Perfect for loading large terrarium setups, tanks, and bulk supplies.
              </p>
            </div>

            <div className="glass-card p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Live Enclosure Demos</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Inspect running bioactive setups in-person to understand drainage layers, live tropical plants, microfauna clean-up crews, and humidity cycles.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* First-Time Keeper Visit Checklist */}
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 bg-jungle-950/90 space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold font-mono text-reptile-400 uppercase tracking-wider">
            First-Time Keeper Checklist
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white mt-1">
            Bringing Home a Companion? Here’s How We Help.
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            We ensure every animal enters a fully prepared habitat. Review this quick checklist before picking up your new pet in Fostoria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-jungle-900 border border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-reptile-950 border border-reptile-500/40 text-reptile-300 flex items-center justify-center font-mono font-bold text-xs">
              01
            </div>
            <h4 className="text-sm font-bold text-white">Habitat Setup First</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Have your enclosure, heating, and lighting running 24–48 hours in advance to dial in proper thermal gradients.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-jungle-900 border border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-reptile-950 border border-reptile-500/40 text-reptile-300 flex items-center justify-center font-mono font-bold text-xs">
              02
            </div>
            <h4 className="text-sm font-bold text-white">Hands-On Handling</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Brian & Angel will demonstrate proper handling, body language cues, and temperament checks in the shop.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-jungle-900 border border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-reptile-950 border border-reptile-500/40 text-reptile-300 flex items-center justify-center font-mono font-bold text-xs">
              03
            </div>
            <h4 className="text-sm font-bold text-white">Feeder Stock Included</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Take home appropriate gut-loaded feeders (crickets, dubias, worms, or frozen rodents) matched to your pet’s exact age.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-jungle-900 border border-slate-800 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-reptile-950 border border-reptile-500/40 text-reptile-300 flex items-center justify-center font-mono font-bold text-xs">
              04
            </div>
            <h4 className="text-sm font-bold text-white">Ongoing Support</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Call or message anytime with shedding, appetite, or temperature questions. We are your local husbandry partners.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onOpenInquiry('Planning My Store Visit')}
            className="px-6 py-3 rounded-xl bg-reptile-600 hover:bg-reptile-500 text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            Notify Shop of Your Visit
          </button>
          <a
            href={STORE_INFO.square.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-jungle-850 hover:bg-jungle-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-colors flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Pre-Order Supplies for Pickup</span>
          </a>
        </div>
      </div>

    </div>
  );
};
