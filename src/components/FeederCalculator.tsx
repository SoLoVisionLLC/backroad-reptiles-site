import React, { useState } from 'react';
import { STORE_INFO } from '../data/siteData';
import { Calculator, ExternalLink, Sparkles } from 'lucide-react';

interface FeederCalculation {
  species: string;
  age: 'Juvenile' | 'Adult';
  stapleFeeder: string;
  weeklyQty: string;
  monthlyQty: string;
  frequency: string;
  calciumNotes: string;
  categoryLink: string;
}

const FEEDER_PRESETS: Record<string, { juvenile: FeederCalculation; adult: FeederCalculation }> = {
  'bearded-dragon': {
    juvenile: {
      species: 'Bearded Dragon',
      age: 'Juvenile',
      stapleFeeder: 'Small/Medium Dubia Roaches & Crickets + Fresh Greens',
      weeklyQty: '60 – 100 insects / week',
      monthlyQty: '250 – 400 insects / month',
      frequency: '2-3x daily feeding',
      calciumNotes: 'Calcium + D3 5x/week; Multivitamin 2x/week',
      categoryLink: STORE_INFO.square.insectsCategoryUrl
    },
    adult: {
      species: 'Bearded Dragon',
      age: 'Adult',
      stapleFeeder: 'Large Dubia Roaches & Superworms + 80% Salads',
      weeklyQty: '10 – 15 insects / week + Daily salads',
      monthlyQty: '40 – 60 insects / month',
      frequency: 'Insects 2-3x weekly; Daily fresh greens',
      calciumNotes: 'Calcium + D3 2x/week; Multivitamin 1x/week',
      categoryLink: STORE_INFO.square.insectsCategoryUrl
    }
  },
  'leopard-gecko': {
    juvenile: {
      species: 'Leopard Gecko',
      age: 'Juvenile',
      stapleFeeder: 'Small Mealworms & Small Crickets',
      weeklyQty: '25 – 35 insects / week',
      monthlyQty: '100 – 140 insects / month',
      frequency: 'Daily feeding',
      calciumNotes: 'Dust every feeding; keep pure calcium dish in tank',
      categoryLink: STORE_INFO.square.insectsCategoryUrl
    },
    adult: {
      species: 'Leopard Gecko',
      age: 'Adult',
      stapleFeeder: 'Medium Dubia Roaches, Mealworms & Hornworms',
      weeklyQty: '10 – 14 insects / week',
      monthlyQty: '40 – 60 insects / month',
      frequency: 'Every 3–4 days',
      calciumNotes: 'Dust with Calcium/D3 alternate feedings',
      categoryLink: STORE_INFO.square.insectsCategoryUrl
    }
  },
  'ball-python': {
    juvenile: {
      species: 'Ball Python',
      age: 'Juvenile',
      stapleFeeder: 'Rat Pups / Weanling Rats (Frozen/Thawed)',
      weeklyQty: '1 appropriate size rat / week',
      monthlyQty: '4 – 5 rats / month',
      frequency: 'Every 7 days',
      calciumNotes: 'Whole prey provides complete calcium & vitamins',
      categoryLink: STORE_INFO.square.rodentsCategoryUrl
    },
    adult: {
      species: 'Ball Python',
      age: 'Adult',
      stapleFeeder: 'Medium / Large Rats (Frozen/Thawed)',
      weeklyQty: '1 rat every 14–21 days',
      monthlyQty: '2 rats / month',
      frequency: 'Every 2 to 3 weeks',
      calciumNotes: 'Whole prey; avoid power feeding',
      categoryLink: STORE_INFO.square.rodentsCategoryUrl
    }
  },
  'axolotl': {
    juvenile: {
      species: 'Axolotl',
      age: 'Juvenile',
      stapleFeeder: 'Cut Nightcrawlers & Live Blackworms',
      weeklyQty: '4 – 7 earthworms / week',
      monthlyQty: '20 – 30 worms / month',
      frequency: 'Daily to every other day',
      calciumNotes: 'Earthworms provide ideal balanced calcium-to-phosphorus ratio',
      categoryLink: STORE_INFO.square.insectsCategoryUrl
    },
    adult: {
      species: 'Axolotl',
      age: 'Adult',
      stapleFeeder: 'Whole Canadian Nightcrawlers & Axolotl Pellets',
      weeklyQty: '2 – 3 whole nightcrawlers / week',
      monthlyQty: '8 – 12 worms / month',
      frequency: 'Every 2 to 3 days',
      calciumNotes: 'No supplement dusting needed for aquatic earthworm diet',
      categoryLink: STORE_INFO.square.insectsCategoryUrl
    }
  }
};

export const FeederCalculator: React.FC = () => {
  const [speciesKey, setSpeciesKey] = useState<string>('bearded-dragon');
  const [age, setAge] = useState<'Juvenile' | 'Adult'>('Adult');

  const calc = FEEDER_PRESETS[speciesKey][age.toLowerCase() as 'juvenile' | 'adult'];

  return (
    <div className="glass-card rounded-2xl border border-slate-700/70 p-6 sm:p-8 relative overflow-hidden">
      <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
        <Calculator className="w-4 h-4" />
        <span>Restock Planning Tool</span>
      </div>
      <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
        Weekly Feeder & Schedule Calculator
      </h3>
      <p className="text-sm text-slate-300 mb-6">
        Calculate your animal’s exact weekly feeder volume to streamline your Tuesday–Thursday in-store pickups in Fostoria.
      </p>

      {/* Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
            Select Companion Species
          </label>
          <select
            value={speciesKey}
            onChange={(e) => setSpeciesKey(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg bg-jungle-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors"
          >
            <option value="bearded-dragon">Bearded Dragon</option>
            <option value="leopard-gecko">Leopard Gecko</option>
            <option value="ball-python">Ball Python</option>
            <option value="axolotl">Mexican Axolotl</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-1.5 font-semibold">
            Life Stage / Size
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => setAge('Juvenile')}
              className={`py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                age === 'Juvenile'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-jungle-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              Growing / Juvenile
            </button>
            <button
              onClick={() => setAge('Adult')}
              className={`py-2.5 rounded-lg text-xs font-semibold border transition-all ${
                age === 'Adult'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-jungle-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              Established Adult
            </button>
          </div>
        </div>
      </div>

      {/* Calculation Output Box */}
      <div className="p-5 rounded-xl bg-jungle-900/90 border border-slate-700/80 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-slate-800">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Weekly Target</span>
            <div className="text-base font-bold text-amber-400 font-mono mt-0.5">{calc.weeklyQty}</div>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Monthly Restock</span>
            <div className="text-base font-bold text-slate-100 font-mono mt-0.5">{calc.monthlyQty}</div>
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">Feeding Rhythm</span>
            <div className="text-xs font-semibold text-slate-200 mt-1">{calc.frequency}</div>
          </div>
        </div>

        <div className="space-y-1.5 text-xs">
          <div className="text-slate-300">
            <span className="font-semibold text-white">Recommended Staple:</span> {calc.stapleFeeder}
          </div>
          <div className="text-slate-400">
            <span className="font-semibold text-slate-300">Supplements:</span> {calc.calciumNotes}
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-reptile-400 shrink-0" />
            <span>Weekly fresh shipments arrive every week in Fostoria!</span>
          </div>

          <a
            href={calc.categoryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-950/40 transition-all flex items-center justify-center gap-1.5 shrink-0 active:scale-95"
          >
            <span>Order Feeder Restock</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
