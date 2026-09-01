import { STORE_META_B } from '../data/siteDataB';
import { getStoreStatus } from '../utils/hours';
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Car } from 'lucide-react';

interface VisitPageBProps {
  onOpenInquiry?: (topic?: string) => void;
}

export const VisitPageB = ({ onOpenInquiry: _ }: VisitPageBProps) => {
  const status = getStoreStatus();

  const regionalRoutes = [
    { city: "Findlay, OH", distance: "16 miles", time: "22 mins", route: "Take OH-12 East straight into Plaza Drive" },
    { city: "Tiffin, OH", distance: "14 miles", time: "18 mins", route: "Take US-224 West to Fostoria Plaza" },
    { city: "Bowling Green, OH", distance: "23 miles", time: "28 mins", route: "Take US-6 East to OH-23 South" },
    { city: "Toledo, OH", distance: "42 miles", time: "48 mins", route: "Take I-75 South to OH-23 South into Fostoria" },
    { city: "Fremont, OH", distance: "21 miles", time: "25 mins", route: "Take OH-53 South to US-23 South" },
  ];

  const checklistItems = [
    "Verify adult enclosure footprint (e.g. 4x2x2 minimum for Bearded Dragons)",
    "Confirm digital infrared thermometer and linear T5 fixture installed 24h prior",
    "Bring insulated carrier box or tote with warm towels for animal transit",
    "Prepare pre-mixed gut-loaded feeders or species-appropriate diet",
  ];

  return (
    <div className="py-16 bg-forest-950 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-copper-500/30 text-copper-400 font-mono text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Seneca County Sanctuary Depot</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-stone-100 font-bold">
            Visit Our Fostoria Storefront
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-sans">
            Come meet Brian & Angel, handle healthy captive-bred companion reptiles, and experience our living bioactive display vivariums in person.
          </p>
        </div>

        {/* 2 Column: Hours & Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Hours & Depot Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-forest-900 border border-copper-500/30 rounded-3xl p-6 sm:p-7 shadow-botanical space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-forest-800">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-moss-400 animate-pulse' : 'bg-amber-400'}`}></span>
                  <span className="font-mono text-xs font-bold text-stone-100 uppercase">
                    {status.isOpen ? 'Currently Open' : 'Currently Closed'}
                  </span>
                </div>
                <span className="font-mono text-xs text-copper-400">
                  {status.statusText}
                </span>
              </div>

              {/* Hours Table */}
              <div className="space-y-2">
                <h3 className="font-serif text-lg font-bold text-stone-100 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-copper-400" />
                  <span>Sanctuary Hours Schedule</span>
                </h3>
                <div className="space-y-1.5 font-mono text-xs">
                  {STORE_META_B.hours.map((h, idx) => (
                    <div
                      key={idx}
                      className={`flex justify-between p-2 rounded-lg ${
                        h.day.toLowerCase() === status.currentDayName.toLowerCase()
                          ? 'bg-copper-500/20 text-copper-300 border border-copper-500/40 font-bold'
                          : 'text-stone-300 hover:bg-forest-850'
                      }`}
                    >
                      <span>{h.day}</span>
                      <span>{h.open} – {h.close}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Physical Address */}
              <div className="pt-4 border-t border-forest-800 space-y-3 font-sans text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-copper-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-100 font-semibold block text-sm">Sanctuary Address:</strong>
                    <span className="text-stone-300">
                      {STORE_META_B.address.street}<br />
                      {STORE_META_B.address.city}, {STORE_META_B.address.state} {STORE_META_B.address.zip}<br />
                      <span className="text-copper-400/90 font-mono text-[11px] mt-0.5 block">{STORE_META_B.address.landmark}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-copper-400 shrink-0" />
                  <div>
                    <strong className="text-stone-100 font-semibold block text-sm">Direct Hotline:</strong>
                    <a href={`tel:${STORE_META_B.phoneRaw}`} className="font-mono text-copper-400 hover:underline">
                      {STORE_META_B.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=610+Plaza+Drive+Fostoria+OH+44830`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-mono font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Launch Turn-by-Turn Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed + Regional Routes (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Map iframe */}
            <div className="rounded-3xl overflow-hidden border border-copper-500/30 shadow-botanical h-[380px] bg-forest-900">
              <iframe
                title="Back Road Reptiles Storefront Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.8286211831776!2d-83.42436812386419!3d41.15783301007204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b8b1b228b6d8b%3A0xa193b2a59a941f17!2s610%20Plaza%20Dr%2C%20Fostoria%2C%20OH%2044830!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Regional Driving Routes */}
            <div className="bg-forest-900 border border-forest-800 rounded-3xl p-6 sm:p-7 space-y-4">
              <h3 className="font-serif text-lg font-bold text-stone-100 flex items-center gap-2">
                <Car className="w-4 h-4 text-copper-400" />
                <span>Regional Driving Times from Nearby Ohio Towns</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {regionalRoutes.map((r, idx) => (
                  <div key={idx} className="bg-forest-950/80 p-3.5 rounded-xl border border-forest-850 space-y-1 font-mono text-xs">
                    <div className="flex justify-between font-bold">
                      <span className="text-stone-100">{r.city}</span>
                      <span className="text-copper-400">{r.time} ({r.distance})</span>
                    </div>
                    <p className="text-[11px] text-stone-400 font-sans">{r.route}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* First-Time Keeper Adoption Checklist */}
        <div className="bg-forest-900 border border-copper-500/25 rounded-3xl p-8 shadow-botanical space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-moss-400 font-semibold block mb-1">
              Ethical Welfare Requirement
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-100 font-bold">
              First-Time Keeper In-Person Adoption Checklist
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 font-sans mt-2 leading-relaxed">
              To guarantee zero animal stress and prevent rehoming, we review your habitat specs in person before releasing any live companion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="bg-forest-950 p-4 rounded-xl border border-forest-850 flex items-start gap-3 text-xs text-stone-200">
                <CheckCircle2 className="w-4 h-4 text-moss-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
