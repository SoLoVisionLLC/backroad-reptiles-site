import React, { useState } from 'react';
import { HABITAT_CONFIGURATOR_STEPS, STORE_META_B } from '../data/siteDataB';
import { Sparkles, Check, ChevronRight, RotateCcw, ShoppingBag, Send } from 'lucide-react';

interface HabitatConfiguratorProps {
  onOpenInquiry: (topic: string, details?: string) => void;
}

export const HabitatConfigurator: React.FC<HabitatConfiguratorProps> = ({ onOpenInquiry }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selections, setSelections] = useState<{ [step: number]: string }>({
    1: "bearded-dragon",
    2: "bio-complete-pvc",
    3: "pro-t5-deep-heat",
    4: "bioactive-super-kit"
  });

  const handleSelect = (stepNumber: number, optionId: string) => {
    setSelections(prev => ({ ...prev, [stepNumber]: optionId }));
    if (stepNumber < 4) {
      setCurrentStep(stepNumber + 1);
    }
  };

  const getSelectedItem = (stepNumber: number) => {
    const step = HABITAT_CONFIGURATOR_STEPS.find(s => s.stepNumber === stepNumber);
    const selectedId = selections[stepNumber];
    return step?.options.find(o => o.id === selectedId);
  };

  const calculateTotal = () => {
    let total = 0;
    for (let i = 1; i <= 4; i++) {
      const item = getSelectedItem(i);
      if (item) total += item.price;
    }
    return total;
  };

  const total = calculateTotal();
  const bundleDiscount = 25.00; // Bundle discount for buying complete ecosystem
  const finalPrice = Math.max(0, total - bundleDiscount);

  const generateSummaryText = () => {
    const s1 = getSelectedItem(1)?.name || 'Custom Species';
    const s2 = getSelectedItem(2)?.name || 'Standard Enclosure';
    const s3 = getSelectedItem(3)?.name || 'Standard Lighting';
    const s4 = getSelectedItem(4)?.name || 'Standard Substrate';
    return `Species: ${s1} | Tank: ${s2} | Lighting: ${s3} | Substrate: ${s4} (Estimated Total: $${finalPrice.toFixed(2)})`;
  };

  return (
    <section id="habitat-builder" className="py-20 bg-forest-900 relative overflow-hidden border-y border-copper-500/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-moss-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 border border-copper-500/30 text-copper-400 font-mono text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Bio-Configurator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-100 font-bold tracking-tight">
            Build Your Living Bioactive Terrarium
          </h2>
          <p className="mt-4 text-sm sm:text-base text-stone-300 font-sans">
            Customize a complete bioactive sanctuary calibrated to your reptile’s natural biotope. We assemble, pre-seed microfauna, and calibrate thermal gradients right here in Fostoria.
          </p>
        </div>

        {/* Step Progress Pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8">
          {HABITAT_CONFIGURATOR_STEPS.map((step) => {
            const isCompleted = selections[step.stepNumber] !== undefined;
            const isCurrent = currentStep === step.stepNumber;
            const selectedName = getSelectedItem(step.stepNumber)?.name.split('(')[0];

            return (
              <button
                key={step.stepNumber}
                onClick={() => setCurrentStep(step.stepNumber)}
                className={`p-3 rounded-xl text-left border transition-all ${
                  isCurrent
                    ? 'bg-copper-500/20 border-copper-400 text-stone-100 shadow-botanical'
                    : isCompleted
                    ? 'bg-forest-850 border-forest-700 text-stone-300 hover:border-copper-500/40'
                    : 'bg-forest-950/60 border-forest-850 text-stone-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-copper-400">
                    Step 0{step.stepNumber}
                  </span>
                  {isCompleted && (
                    <span className="w-4 h-4 rounded-full bg-moss-500/20 text-moss-400 flex items-center justify-center text-[10px]">
                      ✓
                    </span>
                  )}
                </div>
                <div className="font-serif text-xs sm:text-sm font-semibold truncate text-stone-100">
                  {step.stepTitle}
                </div>
                <div className="text-[11px] text-stone-400 truncate mt-0.5 font-mono">
                  {selectedName || 'Not Selected'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace: Options + Live Estimate Receipt */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Selector Panel (8 cols) */}
          <div className="lg:col-span-8 bg-forest-950/80 border border-copper-500/20 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex items-center justify-between pb-6 border-b border-forest-850 mb-6">
              <div>
                <span className="font-mono text-xs text-copper-400 uppercase tracking-widest font-semibold block">
                  Step 0{currentStep} of 04
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-stone-100 font-bold mt-1">
                  {HABITAT_CONFIGURATOR_STEPS.find(s => s.stepNumber === currentStep)?.stepTitle}
                </h3>
              </div>
              <button
                onClick={() => setSelections({ 1: "bearded-dragon", 2: "bio-complete-pvc", 3: "pro-t5-deep-heat", 4: "bioactive-super-kit" })}
                className="flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-copper-400 transition-colors"
                title="Reset to recommended baseline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Defaults</span>
              </button>
            </div>

            {/* Options List for Current Step */}
            <div className="space-y-4">
              {HABITAT_CONFIGURATOR_STEPS.find(s => s.stepNumber === currentStep)?.options.map((option) => {
                const isSelected = selections[currentStep] === option.id;

                return (
                  <div
                    key={option.id}
                    onClick={() => handleSelect(currentStep, option.id)}
                    className={`relative p-5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-copper-500/10 border-copper-400 shadow-botanical ring-1 ring-copper-400/50'
                        : 'bg-forest-850/60 border-forest-800 hover:border-copper-500/30 hover:bg-forest-850'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5 flex-1">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h4 className="font-serif font-bold text-stone-100 text-base sm:text-lg">
                            {option.name}
                          </h4>
                          {option.isPopular && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-copper-500 text-forest-950">
                              Keeper Choice
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                          {option.description}
                        </p>

                        {/* Specs badges */}
                        {option.specs && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {option.specs.map((spec, sIdx) => (
                              <span
                                key={sIdx}
                                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-forest-900 border border-forest-700 text-moss-300"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="text-right shrink-0 flex flex-col items-end justify-between self-stretch">
                        <span className="font-mono text-base font-bold text-copper-400">
                          {option.price === 0 ? 'Base Companion' : `+$${option.price.toFixed(2)}`}
                        </span>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-copper-500 border-copper-400 text-forest-950'
                            : 'border-forest-700 bg-forest-900 text-transparent'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Next / Prev Step Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-forest-850">
              <button
                disabled={currentStep === 1}
                onClick={() => setCurrentStep(currentStep - 1)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-colors ${
                  currentStep === 1
                    ? 'text-stone-400 cursor-not-allowed opacity-50'
                    : 'text-stone-300 bg-forest-850 hover:bg-forest-800 border border-forest-700'
                }`}
              >
                ← Previous Step
              </button>

              <button
                disabled={currentStep === 4}
                onClick={() => setCurrentStep(currentStep + 1)}
                className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                  currentStep === 4
                    ? 'text-stone-400 bg-forest-850 cursor-not-allowed opacity-50'
                    : 'bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow'
                }`}
              >
                <span>Continue to Step 0{currentStep + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Configuration Receipt & Reservation Box (4 cols) */}
          <div className="lg:col-span-4 bg-forest-950 border border-copper-500/30 rounded-2xl p-6 sm:p-7 shadow-botanical space-y-6">
            <div className="border-b border-copper-500/20 pb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-moss-400 block font-semibold">
                Living Ecosystem Manifest
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-100 mt-1">
                Your Sanctuary Package
              </h3>
            </div>

            {/* Selected Components Itemized */}
            <div className="space-y-3.5 text-xs font-mono">
              {[1, 2, 3, 4].map((stepNum) => {
                const item = getSelectedItem(stepNum);
                return (
                  <div key={stepNum} className="flex items-start justify-between gap-2 pb-2.5 border-b border-forest-850/80">
                    <div>
                      <span className="text-[10px] text-copper-400 uppercase block font-semibold">
                        Step 0{stepNum}: {HABITAT_CONFIGURATOR_STEPS[stepNum - 1].stepTitle}
                      </span>
                      <span className="text-stone-200 font-sans font-medium line-clamp-1">
                        {item?.name}
                      </span>
                    </div>
                    <span className="text-stone-300 shrink-0">
                      {item ? (item.price === 0 ? 'Included' : `$${item.price.toFixed(2)}`) : '—'}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Price Calculations */}
            <div className="bg-forest-900/90 rounded-xl p-4 border border-forest-800 space-y-2 font-mono text-xs">
              <div className="flex justify-between text-stone-400">
                <span>Hardware Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-moss-400">
                <span>Complete Habitat Discount:</span>
                <span>-${bundleDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Pre-Seeding Bio-Fauna:</span>
                <span className="text-moss-400">FREE IN-STORE</span>
              </div>
              <div className="pt-2 border-t border-forest-800 flex justify-between items-baseline">
                <span className="font-serif text-stone-100 font-bold text-base">Estimated Total:</span>
                <div className="text-right">
                  <span className="text-xl font-bold text-copper-400 font-mono">
                    ${finalPrice.toFixed(2)}
                  </span>
                  <span className="block text-[10px] text-stone-400">or 4 payments of ${(finalPrice / 4).toFixed(2)} w/ AfterPay</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                onClick={() => onOpenInquiry('Custom Bioactive Setup', generateSummaryText())}
                className="w-full py-3 px-4 rounded-xl text-xs font-mono font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Reserve Setup with Brian & Angel</span>
              </button>

              <a
                href={STORE_META_B.squareCatalog}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-mono font-bold bg-forest-850 hover:bg-forest-800 text-stone-200 border border-copper-500/30 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-copper-400" />
                <span>Order Ready Pieces on Square</span>
              </a>

              <p className="text-[11px] text-stone-400 text-center font-sans leading-tight pt-1">
                Zero commitment. We will verify terrarium dimensions, plant compatibility, and lighting safety prior to payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
