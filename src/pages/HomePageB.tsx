import { STORE_META_B } from '../data/siteDataB';
import { getStoreStatus } from '../utils/hours';
import { HabitatConfigurator } from '../components/HabitatConfigurator';
import { FeederFreshnessMatrix } from '../components/FeederFreshnessMatrix';
import { HusbandryFieldJournal } from '../components/HusbandryFieldJournal';
import { MapPin, Phone, ShoppingBag, Sparkles, ShieldCheck, Heart, Star } from 'lucide-react';

interface HomePageBProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (topic?: string, details?: string) => void;
}

export const HomePageB = ({ onNavigate, onOpenInquiry }: HomePageBProps) => {
  const status = getStoreStatus();

  return (
    <div className="space-y-0">
      {/* 1. Naturalist Expedition Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-forest-950 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 overflow-hidden">
        {/* Background Radial Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-moss-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-copper-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Column: Naturalist Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-forest-900 border border-copper-500/30 text-copper-400 font-mono text-xs shadow-botanical">
              <span className="w-2 h-2 rounded-full bg-moss-400 animate-pulse"></span>
              <span>Fostoria, Ohio • Living Bioactive Terrariums & Captive-Bred Exotics</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-100 font-bold tracking-tight leading-[1.1]">
              A Higher Standard in <span className="text-copper-400 italic">Captive-Bred</span> Herpetology.
            </h1>

            <p className="font-sans text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Welcome to <strong className="text-stone-100">Back Road Reptiles and Exotics LLC</strong>, Seneca County’s premier herpetological sanctuary. Founded by Brian and Angel Johnson, we specialize in captive-bred companion reptiles, daily gut-loaded feeder colonies, and custom living bioactive vivariums.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => {
                  const el = document.querySelector('#habitat-builder');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Launch Habitat Bio-Configurator</span>
              </button>

              <a
                href={STORE_META_B.squareCatalog}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold bg-forest-850 hover:bg-forest-800 text-stone-200 border border-copper-500/30 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-copper-400" />
                <span>Browse Square Live Inventory</span>
              </a>
            </div>

            {/* Live Sanctuary Trust Badges */}
            <div className="pt-4 flex items-center gap-6 flex-wrap text-xs font-mono text-stone-400 border-t border-forest-850">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-moss-400" />
                <span>BBB A+ Accredited</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-copper-400" />
                <span>Zero Animal Shipping Mail Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-copper-300" />
                <span>610 Plaza Dr, Fostoria, OH</span>
              </div>
            </div>
          </div>

          {/* Right Column: Living Sensor & Founder Card (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Live Sanctuary Status Card */}
            <div className="bg-forest-900/90 border border-copper-500/30 rounded-3xl p-6 sm:p-7 shadow-botanical backdrop-blur-md relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-forest-800 mb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-moss-400 animate-pulse' : 'bg-amber-400'}`}></span>
                  <span className="font-mono text-xs uppercase tracking-wider text-stone-200 font-bold">
                    {status.isOpen ? 'Sanctuary Active & Open' : 'Sanctuary Closed Now'}
                  </span>
                </div>
                <span className="font-mono text-xs text-copper-400">
                  {status.statusText}
                </span>
              </div>

              {/* Sensor Dials */}
              <div className="grid grid-cols-2 gap-3 mb-4 font-mono">
                <div className="bg-forest-950 p-3.5 rounded-xl border border-forest-800">
                  <span className="text-[10px] text-stone-400 block uppercase">Sanctuary Temp</span>
                  <span className="text-xl font-bold text-copper-400">{STORE_META_B.environmentSensors.sanctuaryTemp}</span>
                  <span className="text-[10px] text-moss-400 block mt-0.5">Dual-zoned HVAC</span>
                </div>
                <div className="bg-forest-950 p-3.5 rounded-xl border border-forest-800">
                  <span className="text-[10px] text-stone-400 block uppercase">Relative Humidity</span>
                  <span className="text-xl font-bold text-moss-400">{STORE_META_B.environmentSensors.sanctuaryHumidity}</span>
                  <span className="text-[10px] text-stone-400 block mt-0.5">Ultrasonic misted</span>
                </div>
              </div>

              {/* Live Feeder Counter */}
              <div className="bg-forest-950/80 p-3.5 rounded-xl border border-forest-800 flex items-center justify-between text-xs font-mono mb-4">
                <div>
                  <span className="text-stone-400 block text-[10px] uppercase">Active Feeder Reserves</span>
                  <span className="text-stone-100 font-bold">{STORE_META_B.environmentSensors.feederColonyCount} Live Insects</span>
                </div>
                <span className="px-2 py-1 rounded bg-moss-950 text-moss-300 border border-moss-500/20 text-[11px]">
                  Daily Gut-Loaded
                </span>
              </div>

              {/* Founder Spotlight snippet */}
              <div className="flex items-center gap-3 pt-2 border-t border-forest-800">
                <img
                  src="/assets/owners.webp"
                  alt="Brian & Angel Johnson"
                  className="w-12 h-12 rounded-full object-cover border border-copper-500/40"
                />
                <div>
                  <span className="font-serif font-bold text-stone-100 text-sm block">
                    Brian & Angel Johnson
                  </span>
                  <span className="text-[11px] font-mono text-copper-400">
                    Founders & Master Keepers
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Visit Banner */}
            <div className="bg-forest-850 border border-copper-500/20 rounded-2xl p-4 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-copper-400" />
                <span className="text-stone-300">Visiting from Findlay or Toledo?</span>
              </div>
              <button
                onClick={() => onNavigate('/visit.html')}
                className="text-copper-400 hover:text-copper-300 font-bold flex items-center gap-1"
              >
                <span>Directions →</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Bioactive Habitat Builder Section */}
      <HabitatConfigurator onOpenInquiry={onOpenInquiry} />

      {/* 3. Feeder Freshness Matrix Section */}
      <FeederFreshnessMatrix onOpenInquiry={onOpenInquiry} />

      {/* 4. Husbandry Field Journal Section */}
      <HusbandryFieldJournal onOpenInquiry={onOpenInquiry} />

      {/* 5. Founder Story & Seneca County Community */}
      <section className="py-20 bg-forest-950 border-b border-copper-500/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-copper-500/30 shadow-botanical group">
                <img
                  src="/assets/owners.webp"
                  alt="Brian and Angel Johnson at Back Road Reptiles"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-mono text-xs text-copper-400 uppercase tracking-widest font-semibold block mb-1">
                    Locally Owned & Operated
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-100">
                    Brian & Angel Johnson
                  </h3>
                  <p className="text-xs font-mono text-stone-300">
                    Fostoria Sanctuary Founders
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-copper-500/30 text-copper-400 font-mono text-xs">
                <span>The Story of Back Road Reptiles</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-stone-100 font-bold leading-tight">
                Born from Passion, Run with Uncompromising Ethics.
              </h2>
              <div className="space-y-4 font-sans text-sm sm:text-base text-stone-300 leading-relaxed">
                <p>
                  We started Back Road Reptiles and Exotics with a clear mission: provide Northwest Ohio with healthy, captive-bred companions that are handled, socialized, and eating reliably before they ever leave our shop.
                </p>
                <p>
                  Too many big-box pet stores sell stressed, wild-caught animals with undersized glass tanks and incorrect lighting. At our Fostoria shop, every single setup is designed to mirror natural biotopes, and every customer receives direct, honest advice for the entire lifetime of their pet.
                </p>
              </div>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-forest-900 p-4 rounded-xl border border-forest-800 space-y-1">
                  <span className="font-mono text-copper-400 font-bold text-lg">A+ Accredited</span>
                  <p className="text-xs text-stone-300 font-sans">
                    Better Business Bureau recognized for transparent, honest customer service.
                  </p>
                </div>
                <div className="bg-forest-900 p-4 rounded-xl border border-forest-800 space-y-1">
                  <span className="font-mono text-moss-400 font-bold text-lg">AfterPay Financing</span>
                  <p className="text-xs text-stone-300 font-sans">
                    Split large 4x2x2 enclosure and habitat builds into 4 interest-free payments.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiry('Visiting the Shop')}
                  className="px-6 py-3 rounded-xl text-xs font-mono font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow transition-all"
                >
                  Plan Your Visit to Meet Brian & Angel →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer & Keeper Reviews Wall */}
      <section className="py-20 bg-forest-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-copper-400 font-semibold block mb-2">
              Verified Keeper Testimonials
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-100 font-bold">
              Trusted by Ohio Herpetologists & Families
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-forest-950 p-6 rounded-2xl border border-copper-500/20 shadow-botanical space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed italic">
                "Brian and Angel are phenomenal. We drove an hour from Toledo for our custom bearded dragon bioactive setup. Everything was healthy, clean, and perfectly explained."
              </p>
              <div className="pt-2 border-t border-forest-850 font-mono text-xs text-stone-400">
                <span className="text-stone-100 font-bold block">Rachel M.</span>
                <span>Toledo, OH • Bearded Dragon Keeper</span>
              </div>
            </div>

            <div className="bg-forest-950 p-6 rounded-2xl border border-copper-500/20 shadow-botanical space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed italic">
                "The live feeders here are ten times healthier than any pet chain. Dubias are fat and gut-loaded, and their frozen mice are lab-grade clean. Weekly customer for life."
              </p>
              <div className="pt-2 border-t border-forest-850 font-mono text-xs text-stone-400">
                <span className="text-stone-100 font-bold block">Derek K.</span>
                <span>Findlay, OH • Ball Python & Colubrid Breeder</span>
              </div>
            </div>

            <div className="bg-forest-950 p-6 rounded-2xl border border-copper-500/20 shadow-botanical space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed italic">
                "Angel took 45 minutes to teach my 10-year-old daughter proper crested gecko humidity cycles. You simply cannot get this level of care anywhere else."
              </p>
              <div className="pt-2 border-t border-forest-850 font-mono text-xs text-stone-400">
                <span className="text-stone-100 font-bold block">Jason & Chloe T.</span>
                <span>Tiffin, OH • Crested Gecko Family</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final Expedition CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 border-t border-copper-500/30 text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="font-mono text-xs text-copper-400 uppercase tracking-widest font-semibold block">
            Visit the Fostoria Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 font-bold">
            Ready to Build Your Dream Vivarium?
          </h2>
          <p className="text-sm sm:text-base text-stone-300 max-w-xl mx-auto font-sans">
            Stop by 610 Plaza Drive in Fostoria, Ohio or browse our full live inventory and feeders on Square.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenInquiry('Custom Bioactive Setup')}
              className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow transition-all"
            >
              Consult with Brian & Angel
            </button>
            <a
              href={`tel:${STORE_META_B.phoneRaw}`}
              className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold bg-forest-850 hover:bg-forest-800 text-stone-200 border border-copper-500/30 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-copper-400" />
              <span>Call (419) 701-7101</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
