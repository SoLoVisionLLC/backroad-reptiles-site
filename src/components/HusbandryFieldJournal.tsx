import React, { useState } from 'react';
import { HUSBANDRY_FIELD_JOURNAL, HusbandryFieldEntry } from '../data/siteDataB';
import { BookOpen, Thermometer, Droplets, Sun, Sparkles, ShoppingBag } from 'lucide-react';

interface HusbandryFieldJournalProps {
  onOpenInquiry: (topic: string, details?: string) => void;
}

export const HusbandryFieldJournal: React.FC<HusbandryFieldJournalProps> = ({ onOpenInquiry }) => {
  const [selectedSpecies, setSelectedSpecies] = useState<HusbandryFieldEntry>(HUSBANDRY_FIELD_JOURNAL[0]);

  return (
    <section className="py-20 bg-forest-900 border-b border-copper-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-850 border border-copper-500/30 text-copper-400 font-mono text-xs mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Seneca County Field Husbandry Guide</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 font-bold tracking-tight">
            Species Husbandry Encyclopedia
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-300 font-sans">
            Scientific, evidence-based care sheets verified by Brian & Angel. Calibrated for Ohio seasonal humidity swings and proper captive longevity.
          </p>
        </div>

        {/* Species Tab Bar */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {HUSBANDRY_FIELD_JOURNAL.map((spec) => {
            const isSelected = selectedSpecies.speciesId === spec.speciesId;
            return (
              <button
                key={spec.speciesId}
                onClick={() => setSelectedSpecies(spec)}
                className={`px-5 py-3 rounded-xl font-serif text-sm transition-all border ${
                  isSelected
                    ? 'bg-copper-500 text-forest-950 font-bold border-copper-400 shadow-copper-glow'
                    : 'bg-forest-950 text-stone-300 border-forest-800 hover:border-copper-500/30'
                }`}
              >
                <span>{spec.commonName}</span>
                <span className="block text-[10px] font-mono opacity-80 italic font-normal">
                  {spec.scientificName}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Field Entry Display */}
        <div className="bg-forest-950 border border-copper-500/25 rounded-3xl p-6 sm:p-10 shadow-botanical">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-forest-850">
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-forest-850 text-copper-400 border border-copper-500/30">
                  {selectedSpecies.difficulty} Difficulty
                </span>
                <span className="text-xs font-mono text-stone-400">
                  Origin: {selectedSpecies.originBiotope}
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-100 font-bold">
                {selectedSpecies.commonName}
              </h3>
              <p className="font-serif italic text-copper-400/90 text-sm mt-0.5">
                {selectedSpecies.scientificName} • Expected Lifespan: {selectedSpecies.lifespan} • Adult Size: {selectedSpecies.adultLength}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenInquiry('Husbandry Question', `Care question regarding ${selectedSpecies.commonName}`)}
                className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-forest-850 text-stone-200 border border-copper-500/30 hover:border-copper-400 transition-all"
              >
                Ask Keeper a Question
              </button>
              <a
                href={`https://store.backroadreptiles.com/s/shop?search=${encodeURIComponent(selectedSpecies.squareSearchTerm)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl text-xs font-mono font-semibold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow transition-all flex items-center gap-1.5"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Shop Supplies on Square</span>
              </a>
            </div>
          </div>

          {/* 4 Core Parameter Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            <div className="bg-forest-900/80 p-4 rounded-2xl border border-forest-800 space-y-1.5">
              <div className="flex items-center gap-2 text-copper-400 font-mono text-xs font-semibold">
                <Thermometer className="w-4 h-4" />
                <span>Basking Hot Spot</span>
              </div>
              <p className="font-mono text-lg text-stone-100 font-bold">{selectedSpecies.baskingTemp}</p>
              <p className="text-[11px] text-stone-400">Ambient Day: {selectedSpecies.ambientDayTemp}</p>
            </div>

            <div className="bg-forest-900/80 p-4 rounded-2xl border border-forest-800 space-y-1.5">
              <div className="flex items-center gap-2 text-moss-400 font-mono text-xs font-semibold">
                <Droplets className="w-4 h-4" />
                <span>Humidity Range</span>
              </div>
              <p className="font-mono text-lg text-stone-100 font-bold">{selectedSpecies.humidityLevel.split('(')[0]}</p>
              <p className="text-[11px] text-stone-400">{selectedSpecies.humidityLevel.split('(')[1]?.replace(')', '') || 'Maintain steady moisture'}</p>
            </div>

            <div className="bg-forest-900/80 p-4 rounded-2xl border border-forest-800 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-semibold">
                <Sun className="w-4 h-4" />
                <span>UVB Lighting Index</span>
              </div>
              <p className="font-mono text-base text-stone-100 font-bold">{selectedSpecies.uvbIndex}</p>
              <p className="text-[11px] text-stone-400">Linear T5 linear fixture mandatory</p>
            </div>

            <div className="bg-forest-900/80 p-4 rounded-2xl border border-forest-800 space-y-1.5">
              <div className="flex items-center gap-2 text-copper-300 font-mono text-xs font-semibold">
                <Sparkles className="w-4 h-4" />
                <span>Substrate Biome</span>
              </div>
              <p className="text-xs font-mono text-stone-200 font-medium line-clamp-2">{selectedSpecies.substrateFormula}</p>
              <p className="text-[11px] text-moss-400">Bioactive ready</p>
            </div>
          </div>

          {/* Feeding Cadence & Keeper Field Notes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            <div className="bg-forest-900/60 p-6 rounded-2xl border border-forest-800 space-y-3">
              <h4 className="font-serif font-bold text-stone-100 text-lg flex items-center gap-2">
                <span>Feeding Protocol & Cadence</span>
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                {selectedSpecies.feedingCadence}
              </p>
            </div>

            <div className="bg-forest-900/60 p-6 rounded-2xl border border-forest-800 space-y-3">
              <h4 className="font-serif font-bold text-stone-100 text-lg flex items-center gap-2">
                <span>Field Notes from Brian & Angel</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
                {selectedSpecies.keeperTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-copper-400 font-mono font-bold mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
