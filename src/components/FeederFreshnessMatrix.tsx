import React, { useState } from 'react';
import { FEEDER_FRESHNESS_DATA, FeederFreshnessItem } from '../data/siteDataB';
import { Leaf, Sparkles, ShoppingBag, Info, ShieldCheck } from 'lucide-react';

interface FeederFreshnessMatrixProps {
  onOpenInquiry: (topic: string, details?: string) => void;
}

export const FeederFreshnessMatrix: React.FC<FeederFreshnessMatrixProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeFeeder, setActiveFeeder] = useState<FeederFreshnessItem | null>(FEEDER_FRESHNESS_DATA[0]);

  const categories = [
    { id: 'all', label: 'All Feeder Colonies' },
    { id: 'insects', label: 'Live Roaches & Crickets' },
    { id: 'worms', label: 'High-Calcium Worms' },
    { id: 'rodents', label: 'Frozen-Thawed Rodents' },
  ];

  const filteredFeeders = selectedCategory === 'all'
    ? FEEDER_FRESHNESS_DATA
    : FEEDER_FRESHNESS_DATA.filter(f => f.category === selectedCategory);

  return (
    <section id="feeder-matrix" className="py-20 bg-forest-950 relative overflow-hidden border-b border-copper-500/20">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-copper-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-850 border border-copper-500/30 text-copper-400 font-mono text-xs mb-3">
              <Leaf className="w-3.5 h-3.5" />
              <span>Live Sanctuary Feeder Radar</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 font-bold tracking-tight">
              Feeder Freshness & Nutrition Matrix
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-300 font-sans max-w-2xl">
              Clean feeders mean healthy animals. Every insect colony in our Fostoria depot is gut-loaded daily with organic bee pollen, dark greens, and calcium.
            </p>
          </div>

          {/* Weekly Schedule Badge */}
          <div className="bg-forest-900 border border-moss-500/30 rounded-xl p-4 shrink-0 font-mono text-xs space-y-1 shadow-botanical">
            <div className="flex items-center gap-2 text-moss-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-moss-400 animate-pulse"></span>
              <span>Weekly Standing Deliveries</span>
            </div>
            <div className="text-stone-300">
              <span className="text-copper-400">Mon/Tue/Fri:</span> Fresh Insect & Worm Restocks
            </div>
            <div className="text-stone-400 text-[11px]">
              Available for immediate pickup at 610 Plaza Drive
            </div>
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wide whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-copper-500 text-forest-950 font-bold shadow-copper-glow'
                  : 'bg-forest-900 text-stone-300 hover:text-stone-100 hover:bg-forest-850 border border-forest-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid: Feeder Cards (8 cols) + Nutritional Focus Panel (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Feeders Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFeeders.map((feeder) => {
              const isSelected = activeFeeder?.id === feeder.id;

              return (
                <div
                  key={feeder.id}
                  onClick={() => setActiveFeeder(feeder)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-forest-900/90 border-copper-400 shadow-botanical ring-1 ring-copper-400/50'
                      : 'bg-forest-900/50 border-forest-850 hover:border-copper-500/30 hover:bg-forest-900/70'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="space-y-1">
                      {feeder.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-moss-950 text-moss-300 border border-moss-500/30 inline-block">
                          {feeder.badge}
                        </span>
                      )}
                      <h3 className="font-serif font-bold text-stone-100 text-lg">
                        {feeder.name}
                      </h3>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center gap-1 text-moss-400 font-mono text-xs font-bold">
                        <Sparkles className="w-3 h-3" />
                        <span>{feeder.freshnessScore}% Fresh</span>
                      </div>
                      <span className="text-xs font-mono text-copper-400">{feeder.priceRange}</span>
                    </div>
                  </div>

                  {/* Stock status & arrival */}
                  <div className="space-y-1 text-xs font-mono text-stone-400 mb-4 bg-forest-950/60 p-2.5 rounded-lg border border-forest-850">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Inventory Status:</span>
                      <span className="text-stone-200 font-semibold">{feeder.inStockCount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Restock Cadence:</span>
                      <span className="text-moss-400">{feeder.lastArrival}</span>
                    </div>
                  </div>

                  {/* Sizing tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {feeder.sizes.map((s, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-forest-850 border border-forest-700 text-stone-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center justify-between pt-3 border-t border-forest-850/80 text-xs">
                    <span className="text-copper-400 font-mono flex items-center gap-1 hover:underline">
                      <Info className="w-3.5 h-3.5" />
                      <span>Click to view nutrition & gut-load</span>
                    </span>
                    <a
                      href={feeder.squareUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-forest-850 hover:bg-copper-500 hover:text-forest-950 text-stone-300 border border-copper-500/20 transition-all"
                      title="Reserve on Square"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Nutritional Profile Sidebar */}
          {activeFeeder && (
            <div className="lg:col-span-4 bg-forest-900 border border-copper-500/30 rounded-2xl p-6 sm:p-7 shadow-botanical space-y-6 sticky top-24">
              <div className="border-b border-copper-500/20 pb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-copper-400 block font-semibold">
                  Field Husbandry Breakdown
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-100 mt-1">
                  {activeFeeder.name}
                </h3>
              </div>

              {/* Nutrition Bars */}
              <div className="space-y-3 font-mono text-xs">
                <span className="text-stone-400 uppercase tracking-wider text-[10px] block font-semibold">
                  Nutritional Composition
                </span>

                <div className="bg-forest-950/80 p-3 rounded-xl border border-forest-800 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-stone-400">Crude Protein:</span>
                    <span className="text-stone-100 font-bold">{activeFeeder.nutrition.protein}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-400">Crude Fat:</span>
                    <span className="text-stone-100 font-bold">{activeFeeder.nutrition.fat}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-400">Calcium to Phosphorus:</span>
                    <span className="text-copper-400 font-bold">{activeFeeder.nutrition.calciumToPhos}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-stone-400">Moisture Content:</span>
                    <span className="text-moss-400 font-bold">{activeFeeder.nutrition.moisture}</span>
                  </div>
                </div>
              </div>

              {/* Gut-loading Protocol */}
              <div className="space-y-2 font-mono text-xs">
                <span className="text-stone-400 uppercase tracking-wider text-[10px] block font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-moss-400" />
                  <span>Sanctuary Gut-Loading Protocol</span>
                </span>
                <p className="font-sans text-xs text-stone-300 leading-relaxed bg-forest-950/80 p-3.5 rounded-xl border border-forest-800">
                  {activeFeeder.gutLoadingProtocol}
                </p>
              </div>

              {/* Reserve Feeder Order CTAs */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={activeFeeder.squareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl text-xs font-mono font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Reserve on Square Online</span>
                </a>

                <button
                  onClick={() => onOpenInquiry('Bulk Feeder Order', `Requesting bulk reservation for ${activeFeeder.name}`)}
                  className="w-full py-3 px-4 rounded-xl text-xs font-mono font-bold bg-forest-850 hover:bg-forest-800 text-stone-200 border border-copper-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Request Weekly Standing Bulk Box</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
