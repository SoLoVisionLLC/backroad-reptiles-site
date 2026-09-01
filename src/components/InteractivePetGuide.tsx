import React, { useState } from 'react';
import { SPECIES_CARE_DATABASE } from '../data/siteData';
import { 
  Thermometer, 
  Droplets, 
  Sun, 
  Utensils, 
  Maximize2, 
  Clock, 
  CheckCircle2, 
  HelpCircle,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface InteractivePetGuideProps {
  onOpenInquiry: (topic?: string) => void;
  onNavigateCare: () => void;
}

export const InteractivePetGuide: React.FC<InteractivePetGuideProps> = ({
  onOpenInquiry,
  onNavigateCare
}) => {
  const [selectedId, setSelectedId] = useState<string>(SPECIES_CARE_DATABASE[0].id);
  const selectedSpecies = SPECIES_CARE_DATABASE.find(s => s.id === selectedId) || SPECIES_CARE_DATABASE[0];

  return (
    <div className="glass-card rounded-2xl border border-slate-700/70 p-6 sm:p-8 relative overflow-hidden">
      {/* Glow backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-reptile-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-reptile-950 text-reptile-300 border border-reptile-500/30 font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-reptile-400" />
            <span>Interactive Husbandry Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
            The Keeper's Habitat & Care Selector
          </h2>
          <p className="text-sm text-slate-300 mt-1 max-w-xl">
            Select an animal to instantly view ideal temperature gradients, humidity parameters, UVB requirements, and feeding schedules before you build.
          </p>
        </div>

        <button
          onClick={onNavigateCare}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-reptile-400 hover:text-reptile-300 font-mono transition-colors self-start md:self-auto"
        >
          <span>View All Species Care Guides</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Species Quick Selector Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {SPECIES_CARE_DATABASE.map((sp) => {
          const isSelected = sp.id === selectedId;
          return (
            <button
              key={sp.id}
              onClick={() => setSelectedId(sp.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
                isSelected
                  ? 'bg-gradient-to-r from-reptile-600 to-reptile-500 text-white shadow-glow-green border border-reptile-400/50 scale-[1.02]'
                  : 'bg-jungle-850 text-slate-300 hover:text-white hover:bg-jungle-800 border border-slate-800'
              }`}
            >
              <span>{sp.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                isSelected ? 'bg-black/30 text-white' : 'bg-slate-900 text-slate-400'
              }`}>
                {sp.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Species Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Image & Quick Badge Summary */}
        <div className="lg:col-span-4 space-y-4">
          <div className="relative rounded-xl overflow-hidden border border-slate-700 bg-jungle-900 aspect-video lg:aspect-square group">
            <img 
              src={selectedSpecies.image} 
              alt={selectedSpecies.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-jungle-950 via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-reptile-400 font-bold">
                {selectedSpecies.scientificName}
              </span>
              <h3 className="text-lg font-bold text-white leading-tight">
                {selectedSpecies.name}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-3 rounded-lg bg-jungle-900/90 border border-slate-800">
              <div className="text-slate-400 font-mono text-[10px] uppercase">Keeper Level</div>
              <div className="text-slate-100 font-semibold mt-0.5">{selectedSpecies.experienceLevel}</div>
            </div>
            <div className="p-3 rounded-lg bg-jungle-900/90 border border-slate-800">
              <div className="text-slate-400 font-mono text-[10px] uppercase">Average Lifespan</div>
              <div className="text-slate-100 font-semibold mt-0.5">{selectedSpecies.lifespan}</div>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry(`Setup Guidance for ${selectedSpecies.name}`)}
            className="w-full py-2.5 rounded-lg bg-jungle-800 hover:bg-jungle-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-reptile-400" />
            <span>Ask Brian & Angel About This Setup</span>
          </button>
        </div>

        {/* Right Column: Key Parameter Cards & Husbandry Rules */}
        <div className="lg:col-span-8 space-y-4">
          {/* 4 Core Parameter Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Heat Gradient */}
            <div className="p-4 rounded-xl bg-jungle-900/90 border border-slate-800 hover:border-amber-500/30 transition-colors">
              <div className="flex items-center gap-2 text-amber-400 mb-1">
                <Thermometer className="w-4 h-4" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider">Thermal Gradient</span>
              </div>
              <div className="text-sm font-semibold text-slate-100">
                Basking: {selectedSpecies.tempBasking}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Cool Side: {selectedSpecies.tempAmbient}
              </div>
            </div>

            {/* Humidity */}
            <div className="p-4 rounded-xl bg-jungle-900/90 border border-slate-800 hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Droplets className="w-4 h-4" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider">Humidity Zone</span>
              </div>
              <div className="text-sm font-semibold text-slate-100">
                {selectedSpecies.humidity}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Substrate: {selectedSpecies.substrate}
              </div>
            </div>

            {/* UVB Lighting */}
            <div className="p-4 rounded-xl bg-jungle-900/90 border border-slate-800 hover:border-reptile-500/30 transition-colors">
              <div className="flex items-center gap-2 text-reptile-400 mb-1">
                <Sun className="w-4 h-4" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider">UVB Lighting</span>
              </div>
              <div className="text-sm font-semibold text-slate-100">
                {selectedSpecies.uvbRequired ? 'Mandatory Linear UVB Tube' : 'Optional / Beneficial ShadeDweller'}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {selectedSpecies.uvbDetails}
              </div>
            </div>

            {/* Enclosure Dimensions */}
            <div className="p-4 rounded-xl bg-jungle-900/90 border border-slate-800 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-2 text-emerald-400 mb-1">
                <Maximize2 className="w-4 h-4" />
                <span className="text-xs font-bold font-mono uppercase tracking-wider">Habitat Size</span>
              </div>
              <div className="text-sm font-semibold text-slate-100">
                {selectedSpecies.enclosureSize}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                Adult Size: {selectedSpecies.adultSize}
              </div>
            </div>
          </div>

          {/* Diet & Feeding Schedule */}
          <div className="p-4 rounded-xl bg-jungle-900/70 border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-reptile-400">
              <Utensils className="w-4 h-4" />
              <span className="text-xs font-bold font-mono uppercase tracking-wider">Diet & Nutrition</span>
            </div>
            <p className="text-sm text-slate-200 font-medium">
              {selectedSpecies.diet}
            </p>
            <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-reptile-400" />
              <span>Feeding Cadence: {selectedSpecies.feedingSchedule}</span>
            </div>
          </div>

          {/* Pro Keeper Tips */}
          <div className="p-4 rounded-xl bg-reptile-950/60 border border-reptile-500/20 space-y-2">
            <div className="text-xs font-bold text-reptile-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-reptile-400" />
              <span>Brian & Angel’s Husbandry Rule</span>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {selectedSpecies.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-reptile-400 shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
