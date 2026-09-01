import { HusbandryFieldJournal } from '../components/HusbandryFieldJournal';
import { BookOpen } from 'lucide-react';

interface CareJournalPageBProps {
  onOpenInquiry: (topic?: string, details?: string) => void;
}

export const CareJournalPageB = ({ onOpenInquiry }: CareJournalPageBProps) => {
  return (
    <div className="py-16 bg-forest-950 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-copper-500/30 text-copper-400 font-mono text-xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Field Notes & Husbandry Protocols</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-stone-100 font-bold">
            The Seneca County Field Journal
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-sans">
            Scientific, experience-proven care standards. Written by Brian and Angel Johnson for Northwest Ohio reptile keepers.
          </p>
        </div>

        {/* Embedded Interactive Journal */}
        <HusbandryFieldJournal onOpenInquiry={onOpenInquiry} />

        {/* Common Ohio Seasonal Pitfalls Strip */}
        <div className="bg-forest-900 border border-copper-500/20 rounded-3xl p-8 shadow-botanical space-y-6">
          <h3 className="font-serif text-2xl text-stone-100 font-bold">
            Navigating Ohio Winter Humidity & Thermal Swings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs text-stone-300">
            <div className="bg-forest-950 p-5 rounded-2xl border border-forest-850 space-y-2">
              <span className="font-mono text-copper-400 font-bold block text-sm">Winter Dry Air Protection</span>
              <p className="leading-relaxed">
                Furnace heat in Ohio can crash household humidity below 20%. For tropical geckos and pythons, transition to solid PVC enclosures or cover 75% of screen tops with damp towels or plexiglass.
              </p>
            </div>
            <div className="bg-forest-950 p-5 rounded-2xl border border-forest-850 space-y-2">
              <span className="font-mono text-copper-400 font-bold block text-sm">Deep Tissue Infrared</span>
              <p className="leading-relaxed">
                Ceramic Heat Emitters (CHEs) only emit surface heat (IR-C). Replace with Arcadia Deep Heat Projectors (DHP) to penetrate muscular tissue with IR-A and IR-B rays without light pollution.
              </p>
            </div>
            <div className="bg-forest-950 p-5 rounded-2xl border border-forest-850 space-y-2">
              <span className="font-mono text-copper-400 font-bold block text-sm">Live Bioactive Micro-Fauna</span>
              <p className="leading-relaxed">
                Springtails and Isopods thrive in winter terrariums when fed fresh organic squash slices and kept in deep moisture-holding ABG substrate layers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
