import { FOUNDER_OATH_POINTS } from '../data/siteDataB';
import { ShieldCheck, Heart, Truck, CreditCard } from 'lucide-react';

export const PoliciesPageB = () => {
  return (
    <div className="py-16 bg-forest-950 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-copper-500/30 text-copper-400 font-mono text-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ethical Standards & Welfare Protocols</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-stone-100 font-bold">
            Sanctuary Welfare & Purchase Policies
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-sans">
            Our strict commitment to animal health, responsible keeper vetting, and zero-compromise transit standards.
          </p>
        </div>

        {/* 1. Founder Welfare Oath Matrix */}
        <div className="bg-forest-900 border border-copper-500/30 rounded-3xl p-8 sm:p-10 shadow-botanical space-y-6">
          <div>
            <span className="font-mono text-xs text-copper-400 uppercase tracking-widest font-semibold block mb-1">
              Brian & Angel's 5-Point Breeder Code
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-stone-100 font-bold">
              The Ethical Herpetology Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDER_OATH_POINTS.map((point, idx) => (
              <div key={idx} className="bg-forest-950 p-6 rounded-2xl border border-forest-850 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-copper-400">Pillar 0{idx + 1}</span>
                  <Heart className="w-4 h-4 text-moss-400" />
                </div>
                <h3 className="font-serif font-bold text-stone-100 text-base">{point.title}</h3>
                <p className="text-xs text-stone-300 font-sans leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Pickup Only Guarantee & AfterPay */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pickup Only */}
          <div className="bg-forest-900 border border-forest-800 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-copper-500/10 border border-copper-500/30 text-copper-400 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-stone-100 font-bold">
              In-Store Pickup Only Policy
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              We do not ship living animals through parcel couriers (FedEx/UPS/USPS). All reptiles must be adopted in person at our Fostoria shop (610 Plaza Drive) or at verified regional reptile expos. This eliminates box crushing, extreme transit temperature deaths, and shipping stress.
            </p>
          </div>

          {/* AfterPay Financing */}
          <div className="bg-forest-900 border border-forest-800 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-moss-500/10 border border-moss-500/30 text-moss-400 flex items-center justify-center">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl text-stone-100 font-bold">
              AfterPay Split Installments
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
              Proper bioactive vivarium builds (4x2x2 enclosures, linear Arcadia T5 lighting, automated misting, and clean-up crews) represent a meaningful investment. We partner with AfterPay both online and at our in-store checkout so you can split total purchases into 4 interest-free payments.
            </p>
            <div className="pt-2">
              <img
                src="/assets/afterpay.gif"
                alt="AfterPay Installment Banner"
                className="h-10 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* 3. Returns & Feeder Guarantees */}
        <div className="bg-forest-900 border border-forest-800 rounded-3xl p-8 space-y-4 font-sans text-xs sm:text-sm text-stone-300">
          <h3 className="font-serif text-2xl text-stone-100 font-bold">
            Feeder Freshness & Hardware Warranties
          </h3>
          <p className="leading-relaxed">
            <strong>Live Feeder Guarantee:</strong> All insect and worm orders inspected at pickup are guaranteed 100% active and gut-loaded. If you notice any colony issues within 24 hours of purchase, bring your receipt and container for an immediate free exchange.
          </p>
          <p className="leading-relaxed">
            <strong>Enclosures & Lighting:</strong> Unused vivarium hardware in original manufacturer packaging may be returned within 14 days with original receipt. Arcadia lighting fixtures carry a 1-year manufacturer warranty supported directly through our shop.
          </p>
        </div>
      </div>
    </div>
  );
};
