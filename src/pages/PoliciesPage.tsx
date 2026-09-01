import React from 'react';
import { PageRoute } from '../types';
import { STORE_INFO } from '../data/siteData';
import { 
  ShieldCheck, 
  Truck, 
  AlertTriangle, 
  CreditCard, 
  Heart, 
  CheckCircle2
} from 'lucide-react';

interface PoliciesPageProps {
  onNavigate: (route: PageRoute) => void;
  onOpenInquiry: (topic?: string) => void;
}

export const PoliciesPage: React.FC<PoliciesPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 pb-24">
      
      {/* Header Banner */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jungle-900 border border-reptile-500/30 text-xs font-semibold text-slate-200">
          <ShieldCheck className="w-3.5 h-3.5 text-reptile-400" />
          <span>Welfare & Commercial Transparency</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Store & Animal Welfare Policies
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
          At Back Road Reptiles and Exotics LLC, ethical husbandry, transparent policies, and animal welfare come first. Please review our operating standards.
        </p>
      </div>

      {/* Main Policy Cards */}
      <div className="space-y-6">
        
        {/* 1. Animal Welfare & Health Guarantee */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 bg-jungle-950/90">
          <div className="flex items-center gap-3 text-reptile-400 font-display font-bold text-xl text-white">
            <div className="p-2.5 rounded-xl bg-reptile-950 border border-reptile-500/30 text-reptile-400">
              <Heart className="w-5 h-5" />
            </div>
            <span>1. Animal Welfare & Husbandry Vetting</span>
          </div>

          <div className="space-y-3 text-sm text-slate-300 leading-relaxed pl-2 sm:pl-12">
            <p>
              Every captive-bred reptile, amphibian, and exotic companion in our care is raised, quarantined, and monitored under species-appropriate thermal gradients, humidity cycles, and veterinary-grade sanitary protocols.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-reptile-400 shrink-0 mt-0.5" />
                <span>Animals are only released once they are fully established and feeding consistently on species-appropriate diets.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-reptile-400 shrink-0 mt-0.5" />
                <span>We reserve the right to decline any sale if the recipient's habitat setup does not meet essential thermal, UVB, or enclosure parameters.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-reptile-400 shrink-0 mt-0.5" />
                <span>Full care sheets and husbandry walkthroughs are provided free of charge with every companion.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 2. No Shipping / In-Store Pickup Policy */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 bg-jungle-950/90">
          <div className="flex items-center gap-3 text-cyan-400 font-display font-bold text-xl text-white">
            <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
              <Truck className="w-5 h-5" />
            </div>
            <span>2. In-Store Pickup Only (No Shipping)</span>
          </div>

          <div className="space-y-3 text-sm text-slate-300 leading-relaxed pl-2 sm:pl-12">
            <p className="font-semibold text-white">
              Official Store Policy: "No Shipping offered at this time."
            </p>
            <p>
              To protect the health, welfare, and stress-free transition of our animals, all live animal purchases and perishable feeder orders must be picked up in person at our storefront located at <strong>610 Plaza Drive, Fostoria, Ohio 44830</strong>.
            </p>
            <p className="text-xs text-slate-400">
              Orders placed through our online Square store will be packaged and prepared for fast in-store or curbside pickup during our public hours (Tuesday – Thursday 4:00 PM – 8:00 PM) or by prior appointment.
            </p>
          </div>
        </div>

        {/* 3. Returns & All-Sales-Final Terms */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 bg-jungle-950/90">
          <div className="flex items-center gap-3 text-amber-400 font-display font-bold text-xl text-white">
            <div className="p-2.5 rounded-xl bg-amber-950 border border-amber-500/30 text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <span>3. Return & Refund Policy (All Sales Final)</span>
          </div>

          <div className="space-y-3 text-sm text-slate-300 leading-relaxed pl-2 sm:pl-12">
            <p className="font-semibold text-white">
              Official Store Policy: "All Sales Final due to nature of product. No returns accepted."
            </p>
            <p>
              Due to strict biosecurity, pathogen prevention, and the delicate biological nature of live animals and live feeder cultures (insects, worms, and rodents), we cannot accept returns, exchanges, or returns-to-stock once an item has left our facility.
            </p>
            <p className="text-xs text-slate-400">
              Please inspect your animal and feeder quantities thoroughly at the counter before departing. If you experience any husbandry concerns post-purchase, contact Brian & Angel immediately for guidance.
            </p>
          </div>
        </div>

        {/* 4. Payment Methods & AfterPay Financing */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4 bg-jungle-950/90">
          <div className="flex items-center gap-3 text-reptile-400 font-display font-bold text-xl text-white">
            <div className="p-2.5 rounded-xl bg-reptile-950 border border-reptile-500/30 text-reptile-400">
              <CreditCard className="w-5 h-5" />
            </div>
            <span>4. Payments & AfterPay Split-Financing</span>
          </div>

          <div className="space-y-3 text-sm text-slate-300 leading-relaxed pl-2 sm:pl-12">
            <p>
              We accept all major payment methods powered by Square:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-200 font-mono pt-1">
              <div className="p-2 rounded bg-jungle-900 border border-slate-800 text-center">Visa / Mastercard</div>
              <div className="p-2 rounded bg-jungle-900 border border-slate-800 text-center">Apple / Google Pay</div>
              <div className="p-2 rounded bg-jungle-900 border border-slate-800 text-center">Cash App Pay</div>
              <div className="p-2 rounded bg-jungle-900 border border-slate-800 text-center">AfterPay (4 Splits)</div>
            </div>
            <div className="pt-2">
              <p className="text-xs text-slate-400">
                <strong>AfterPay Terms:</strong> Split your total habitat or exotic animal order into 4 equal interest-free installments paid every 2 weeks. Download the AfterPay app or select AfterPay at checkout.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Support Callout */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-jungle-900 via-reptile-950 to-jungle-900 border border-reptile-500/30 text-center space-y-4">
        <h3 className="text-xl font-display font-bold text-white">
          Have Questions About Policies or Pickups?
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
          Contact Brian & Angel directly at (419) 701-7101 or send a note through our keeper message portal.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onOpenInquiry('Policy Question')}
            className="px-6 py-2.5 rounded-xl bg-reptile-600 hover:bg-reptile-500 text-white font-bold text-xs shadow transition-all"
          >
            Ask a Policy Question
          </button>
          <a
            href={STORE_INFO.square.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl bg-jungle-850 hover:bg-jungle-800 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
          >
            Visit Square Store
          </a>
        </div>
      </div>

    </div>
  );
};
