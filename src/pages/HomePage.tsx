import React, { useState } from 'react';
import { PageRoute } from '../types';
import { STORE_INFO, FEATURED_CATEGORIES, PRODUCTS, REVIEWS, FAQS } from '../data/siteData';
import { getStoreStatus } from '../utils/hours';
import { InteractivePetGuide } from '../components/InteractivePetGuide';
import { FeederCalculator } from '../components/FeederCalculator';
import { 
  ShoppingBag, 
  MapPin, 
  Phone,
  Clock,
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Star,
  Heart,
  Truck,
  HelpCircle
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenInquiry: (topic?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenInquiry }) => {
  const status = getStoreStatus();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="space-y-20 sm:space-y-28 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 pb-10 sm:pb-16 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-reptile-600/15 via-reptile-900/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jungle-900/90 border border-reptile-500/30 text-xs font-semibold text-slate-200 shadow-md">
                <span className="flex h-2 w-2 relative">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                    status.statusType === 'open' ? 'bg-reptile-400' : 'bg-amber-400'
                  }`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${
                    status.statusType === 'open' ? 'bg-reptile-500' : 'bg-amber-500'
                  }`}></span>
                </span>
                <span className="text-reptile-300 font-mono font-bold">{status.statusText}</span>
                <span className="text-slate-500">|</span>
                <span>Fostoria, OH Storefront</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.1]">
                Your Next Curious <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-reptile-400 via-emerald-300 to-amber-300">
                  Companion Starts Here.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Fostoria’s hands-on specialty destination for healthy captive-bred reptiles, amphibians, weekly fresh live feeders, custom bioactive habitats, and practical keeper know-how.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href={STORE_INFO.square.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-reptile-600 to-reptile-500 hover:from-reptile-500 hover:to-reptile-400 text-white font-bold text-base shadow-xl shadow-reptile-950/60 transition-all flex items-center justify-center gap-2 active:scale-95 group"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Shop Current Stock</span>
                  <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <button
                  onClick={() => {
                    onNavigate('visit');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-jungle-850 hover:bg-jungle-800 text-slate-100 font-bold text-base border border-slate-700 hover:border-reptile-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <MapPin className="w-5 h-5 text-reptile-400" />
                  <span>Plan Your Visit</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-reptile-400" />
                  <span>BBB A+ Accredited (Est. 2017)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-amber-400" />
                  <span>20+ Years Husbandry Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-cyan-400" />
                  <span>Weekly Fresh Live Feeders</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Backdrop Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-reptile-600/30 to-amber-500/20 rounded-3xl blur-xl opacity-75"></div>
                
                <div className="relative glass-panel rounded-3xl p-6 border border-white/10 shadow-2xl overflow-hidden bg-jungle-950/90 space-y-6">
                  
                  {/* Store Emblem & Rating */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <img 
                        src="/assets/emblem.webp" 
                        alt="Emblem" 
                        className="w-12 h-12 rounded-full border border-reptile-500/30 shadow-md bg-black"
                      />
                      <div>
                        <div className="text-sm font-bold text-white font-display">Back Road Reptiles</div>
                        <div className="text-xs text-reptile-400 font-mono">Seneca County Keepers</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg text-xs font-bold text-amber-300 font-mono">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>5.0 Rating</span>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-jungle-900/90 border border-slate-800">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Weekly Feeder Days</div>
                      <div className="text-sm font-bold text-slate-100 mt-1">Tue – Thu Restocks</div>
                      <div className="text-[11px] text-reptile-400 mt-0.5">Crickets, Dubias, Worms</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-jungle-900/90 border border-slate-800">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Store Hours</div>
                      <div className="text-sm font-bold text-slate-100 mt-1">4:00 PM – 8:00 PM</div>
                      <div className="text-[11px] text-amber-400 mt-0.5">610 Plaza Dr, Fostoria</div>
                    </div>
                  </div>

                  {/* Quick Action Callout */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-reptile-950 to-jungle-900 border border-reptile-500/30 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-xs font-bold text-slate-200">Need specific morphs or bulk feeders?</div>
                      <div className="text-[11px] text-slate-400">Direct line to Brian & Angel</div>
                    </div>
                    <a
                      href={`tel:${STORE_INFO.contact.phoneRaw}`}
                      className="px-3.5 py-2 rounded-lg bg-reptile-600 hover:bg-reptile-500 text-white text-xs font-bold font-mono transition-colors shrink-0 shadow"
                    >
                      Call Shop
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WEEKLY FRESH FEEDER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl border border-reptile-500/30 p-6 sm:p-8 bg-gradient-to-r from-jungle-900 via-jungle-950 to-jungle-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-reptile-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-reptile-950 text-reptile-300 border border-reptile-500/30 font-mono">
                <Sparkles className="w-3.5 h-3.5 text-reptile-400" />
                <span>Weekly Fresh Shipments Guaranteed</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Weekly Supply of Fresh Feeders at the Best Rates
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Never risk dehydrated or dead pet-store bugs again. We receive weekly fresh deliveries of live crickets, high-protein Dubia roaches, gut-loaded mealworms, Canadian nightcrawlers, and clean live/frozen feeder rodents.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href={STORE_INFO.square.insectsCategoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-reptile-600 hover:bg-reptile-500 text-white font-bold text-sm text-center shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Order Live Feeder Insects</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={STORE_INFO.square.rodentsCategoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-jungle-850 hover:bg-jungle-800 text-slate-200 hover:text-white font-bold text-sm text-center border border-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <span>Order Frozen & Live Rodents</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold text-reptile-400 uppercase tracking-wider font-mono">
            Explore The Shop
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
            Specialized Categories for Serious Keepers
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Browse our core departments available in store and through our official Square Online store.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="glass-card glass-card-hover rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                {/* Image Header */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-jungle-900 border border-slate-700/60">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold font-mono uppercase bg-jungle-950/90 text-reptile-300 border border-reptile-500/30 backdrop-blur-sm">
                      {cat.badge}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-reptile-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {cat.subtitle}
                  </p>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              <a
                href={cat.squareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-jungle-850 hover:bg-reptile-600 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 hover:border-reptile-500 transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
              >
                <span>Shop Category on Square</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE PET HUSBANDRY ENGINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractivePetGuide 
          onOpenInquiry={onOpenInquiry}
          onNavigateCare={() => {
            onNavigate('care');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </section>

      {/* 5. MEET BRIAN & ANGEL (OWNER STORY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl border border-slate-800 p-8 sm:p-12 bg-jungle-950/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Real Owners Photo */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group">
                <img
                  src="/assets/owners.webp"
                  alt="Brian and Angel Johnson, owners of Back Road Reptiles and Exotics LLC"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jungle-950/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-center sm:text-left">
                  <div className="text-base font-bold text-white font-display">Brian & Angel Johnson</div>
                  <div className="text-xs text-reptile-400 font-mono">Founders & Husbandry Specialists</div>
                </div>
              </div>
            </div>

            {/* Story & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-950/60 text-amber-300 border border-amber-500/30 font-mono">
                <Heart className="w-3.5 h-3.5 text-amber-400" />
                <span>Locally Owned & Family Operated Since 2017</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Meet Your Local Keepers Behind the Counter
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  Back Road Reptiles and Exotics LLC was born from more than 20 years of hands-on reptile and amphibian keeping in Ohio. We aren't a corporate chain pushing commercial boxes — we are passionate breeders and keepers who believe that education comes before any sale.
                </p>
                <p>
                  Whether you are introducing your child to their very first docile leopard gecko, troubleshooting lighting parameters for an arboreal chameleon, or stocking weekly feeders for a collection of ball pythons, we provide straight, evidence-backed answers.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-jungle-900/80 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-reptile-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Full Setup Consultations</div>
                    <div className="text-xs text-slate-400 mt-0.5">We review heating, humidity & UVB with you before you take any animal home.</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-jungle-900/80 border border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-reptile-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-white">Healthy Captive-Bred Stock</div>
                    <div className="text-xs text-slate-400 mt-0.5">Fully established animals feeding consistently on species-appropriate diets.</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenInquiry('Consultation with Brian & Angel')}
                  className="px-6 py-3 rounded-xl bg-reptile-600 hover:bg-reptile-500 text-white font-bold text-sm transition-all shadow-md active:scale-95"
                >
                  Schedule Keeper Consultation
                </button>
                <button
                  onClick={() => {
                    onNavigate('visit');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3 rounded-xl bg-jungle-850 hover:bg-jungle-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-colors"
                >
                  Visit Our Fostoria Store
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. FEATURED PRODUCTS & LIVE CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-reptile-400 uppercase tracking-wider font-mono mb-1">
              Live Stock Preview
            </div>
            <h2 className="text-3xl font-display font-bold text-white">
              Featured Animals & Feeder Packs
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              Real inventory available for local in-store pickup in Fostoria, OH.
            </p>
          </div>

          <a
            href={STORE_INFO.square.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-reptile-400 hover:text-reptile-300 font-mono transition-colors shrink-0"
          >
            <span>View Full Square Store Catalog</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="glass-card glass-card-hover rounded-2xl border border-slate-800 p-5 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                {/* Product Image */}
                <div className="relative rounded-xl overflow-hidden aspect-video bg-jungle-900 border border-slate-700/60">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.badge && (
                    <div className="absolute top-2.5 left-2.5">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-black/80 text-amber-300 border border-amber-500/40 backdrop-blur-sm">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-2.5 right-2.5">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold font-mono bg-jungle-950/90 text-reptile-300 border border-reptile-500/40 shadow">
                      {product.price}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    {product.categoryLabel}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-reptile-400 transition-colors leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Quick Bullet Tags */}
                {product.features && (
                  <div className="space-y-1 pt-1">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-reptile-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2">
                <a
                  href={product.squareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-gradient-to-r from-reptile-600 to-reptile-500 hover:from-reptile-500 hover:to-reptile-400 text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Order on Square</span>
                  <ExternalLink className="w-3 h-3 opacity-75" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FEEDER RESTOCK CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeederCalculator />
      </section>

      {/* 8. AFTERPAY FINANCING STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cyan-950/70 via-jungle-950 to-reptile-950/70 border border-cyan-500/30 glass-panel flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <img 
              src="/assets/afterpay.gif" 
              alt="AfterPay logo" 
              className="h-10 sm:h-12 w-auto object-contain rounded-lg shadow"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                Build Your Dream Reptile Setup — Without the Upfront Sting.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Split your total purchase into 4 equal interest-free payments using AfterPay at checkout. Available online and in store.
              </p>
            </div>
          </div>

          <a
            href={STORE_INFO.square.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all shrink-0 active:scale-95"
          >
            Shop with AfterPay
          </a>
        </div>
      </section>

      {/* 9. REVIEWS & KEEPER TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider font-mono">
            Keeper Reputation
          </div>
          <h2 className="text-3xl font-display font-bold text-white">
            Trusted by Ohio's Exotic Community
          </h2>
          <p className="text-sm text-slate-300">
            Real feedback from local keepers, parents, and hobbyists across Fostoria, Findlay, and Tiffin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="glass-card rounded-2xl border border-slate-800 p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-xs font-bold text-reptile-300 font-mono">
                  "{rev.highlight}"
                </div>
                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="text-xs font-bold text-white">{rev.author}</div>
                <div className="text-[11px] text-slate-400">{rev.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. VISIT & MAP SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl border border-slate-800 p-8 sm:p-10 bg-jungle-950/90 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold font-mono text-reptile-400 uppercase tracking-wider">
                  Storefront Location
                </span>
                <h2 className="text-3xl font-display font-bold text-white mt-1">
                  Plan Your In-Store Visit
                </h2>
                <p className="text-sm text-slate-300 mt-2">
                  Visit us at 610 Plaza Drive in Fostoria. Ample free parking, live demo bioactive enclosures, and hands-on guidance for every keeper.
                </p>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-jungle-900/80 border border-slate-800">
                  <MapPin className="w-5 h-5 text-reptile-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">610 Plaza Drive</div>
                    <div className="text-xs text-slate-400">Fostoria, Ohio 44830-1354</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-jungle-900/80 border border-slate-800">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">Public Store Hours</div>
                    <div className="text-xs text-slate-400 font-mono">Tuesday – Thursday: 4:00 PM – 8:00 PM</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">Fri–Mon by appointment for pickups & setups</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={STORE_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-reptile-600 hover:bg-reptile-500 text-white font-bold text-sm transition-all flex items-center gap-2 shadow"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                </a>

                <a
                  href={`tel:${STORE_INFO.contact.phoneRaw}`}
                  className="px-6 py-3 rounded-xl bg-jungle-850 hover:bg-jungle-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-reptile-400" />
                  <span>{STORE_INFO.contact.phone}</span>
                </a>
              </div>
            </div>

            {/* Interactive Map Embed */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 aspect-[4/3] bg-jungle-900 shadow-xl">
                <iframe
                  title="Storefront Location Map"
                  src="https://maps.google.com/maps?q=610%20Plaza%20Dr,%20Fostoria,%20OH%2044830&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale-[20%] contrast-110"
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold text-reptile-400 uppercase tracking-wider font-mono">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-display font-bold text-white">
            Common Keeper Questions
          </h2>
          <p className="text-sm text-slate-300">
            Everything you need to know about our Fostoria shop, feeders, and care standards.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-xl border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-reptile-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => onOpenInquiry('General Question')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-reptile-400 hover:text-reptile-300 font-mono transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Have a different question? Send Brian & Angel a message</span>
          </button>
        </div>
      </section>

    </div>
  );
};
