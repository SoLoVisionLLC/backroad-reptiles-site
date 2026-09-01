import React, { useState } from 'react';
import { PageRoute } from '../types';
import { SPECIES_CARE_DATABASE } from '../data/siteData';
import { 
  BookOpen, 
  Thermometer, 
  Droplets, 
  Sun, 
  Utensils, 
  Maximize2, 
  Clock, 
  CheckCircle2, 
  HelpCircle,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface CareGuidePageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenInquiry: (topic?: string) => void;
}

export const CareGuidePage: React.FC<CareGuidePageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeSpeciesId, setActiveSpeciesId] = useState<string>(SPECIES_CARE_DATABASE[0].id);

  const categories = ['All', 'Lizard', 'Gecko', 'Snake', 'Amphibian'];

  const filteredSpecies = SPECIES_CARE_DATABASE.filter(
    (sp) => selectedCategory === 'All' || sp.category === selectedCategory
  );

  const activeSpecies = SPECIES_CARE_DATABASE.find(s => s.id === activeSpeciesId) || SPECIES_CARE_DATABASE[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jungle-900 border border-reptile-500/30 text-xs font-semibold text-slate-200">
          <BookOpen className="w-3.5 h-3.5 text-reptile-400" />
          <span>Evidence-Based Husbandry Standards</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Species Husbandry & Care Guides
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Comprehensive, field-tested care parameters curated from over two decades of captive breeding and reptilekeeping. Learn exact thermal gradients, humidity targets, lighting requirements, and feeding schedules.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-reptile-600 text-white shadow-glow-green'
                : 'bg-jungle-900 text-slate-300 hover:text-white hover:bg-jungle-850 border border-slate-800'
            }`}
          >
            {cat === 'All' ? 'All Species' : `${cat}s`}
          </button>
        ))}
      </div>

      {/* Species Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {filteredSpecies.map((sp) => {
          const isActive = sp.id === activeSpeciesId;
          return (
            <button
              key={sp.id}
              onClick={() => setActiveSpeciesId(sp.id)}
              className={`p-3 rounded-xl text-left border transition-all flex flex-col justify-between space-y-2 ${
                isActive
                  ? 'bg-reptile-950 border-reptile-500/60 shadow-glow-green text-white'
                  : 'bg-jungle-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-jungle-850'
              }`}
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-reptile-400 font-bold block">{sp.category}</span>
                <span className="text-xs font-bold font-display block leading-snug">{sp.name}</span>
              </div>
              <span className={`text-[9px] px-1.5 py-0.5 rounded font-mono self-start ${
                sp.experienceLevel === 'Beginner' ? 'bg-emerald-950 text-emerald-300' : 'bg-amber-950 text-amber-300'
              }`}>
                {sp.experienceLevel}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Species Care Sheet Display */}
      <div className="glass-panel rounded-3xl border border-slate-700/80 p-6 sm:p-10 bg-jungle-950/95 space-y-8 shadow-2xl relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-reptile-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Species Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-reptile-400 font-bold uppercase tracking-wider">
                {activeSpecies.scientificName}
              </span>
              <span className="text-[11px] px-2.5 py-0.5 rounded-full font-mono bg-reptile-950 text-reptile-300 border border-reptile-500/30">
                {activeSpecies.experienceLevel} Keeper
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              {activeSpecies.name} Care Sheet
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              {activeSpecies.overview}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenInquiry(`Care Sheet Question: ${activeSpecies.name}`)}
              className="px-4 py-2.5 rounded-xl bg-jungle-850 hover:bg-jungle-800 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-colors flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-reptile-400" />
              <span>Ask Brian & Angel</span>
            </button>

            <button
              onClick={() => onNavigate('shop')}
              className="px-5 py-2.5 rounded-xl bg-reptile-600 hover:bg-reptile-500 text-white font-bold text-xs shadow transition-all active:scale-95 flex items-center gap-1.5"
            >
              <span>View Supplies in Shop</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Core Husbandry Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Thermal Gradient */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono uppercase">
              <Thermometer className="w-4 h-4" />
              <span>Thermal Gradient</span>
            </div>
            <div className="text-base font-bold text-white">
              Basking: {activeSpecies.tempBasking}
            </div>
            <div className="text-xs text-slate-400">
              Cool Ambient: {activeSpecies.tempAmbient}
            </div>
          </div>

          {/* Humidity & Hydration */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold font-mono uppercase">
              <Droplets className="w-4 h-4" />
              <span>Humidity Zone</span>
            </div>
            <div className="text-base font-bold text-white">
              {activeSpecies.humidity}
            </div>
            <div className="text-xs text-slate-400">
              Substrate: {activeSpecies.substrate}
            </div>
          </div>

          {/* UVB & Lighting */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-reptile-400 text-xs font-bold font-mono uppercase">
              <Sun className="w-4 h-4" />
              <span>UVB Requirement</span>
            </div>
            <div className="text-base font-bold text-white">
              {activeSpecies.uvbRequired ? 'Mandatory Linear Tube' : 'Beneficial Low Index'}
            </div>
            <div className="text-xs text-slate-400">
              {activeSpecies.uvbDetails}
            </div>
          </div>

          {/* Habitat Volume */}
          <div className="glass-card p-5 rounded-2xl border border-slate-800 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono uppercase">
              <Maximize2 className="w-4 h-4" />
              <span>Recommended Enclosure</span>
            </div>
            <div className="text-base font-bold text-white">
              {activeSpecies.enclosureSize}
            </div>
            <div className="text-xs text-slate-400">
              Adult Size: {activeSpecies.adultSize} · {activeSpecies.lifespan}
            </div>
          </div>

        </div>

        {/* Nutrition & Cadence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-6 p-6 rounded-2xl bg-jungle-900/90 border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-reptile-400 text-xs font-bold font-mono uppercase">
              <Utensils className="w-4 h-4" />
              <span>Species Nutrition & Staple Diet</span>
            </div>
            <p className="text-sm font-semibold text-white leading-relaxed">
              {activeSpecies.diet}
            </p>
            <div className="text-xs text-slate-400 flex items-center gap-2 pt-2 border-t border-slate-800 font-mono">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Feeding Cadence: {activeSpecies.feedingSchedule}</span>
            </div>
          </div>

          {/* Pro Husbandry Tips */}
          <div className="lg:col-span-6 p-6 rounded-2xl bg-reptile-950/70 border border-reptile-500/30 space-y-3">
            <div className="flex items-center gap-2 text-reptile-300 text-xs font-bold font-mono uppercase">
              <Sparkles className="w-4 h-4 text-reptile-400" />
              <span>Brian & Angel’s Golden Husbandry Rules</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-300">
              {activeSpecies.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-reptile-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};
