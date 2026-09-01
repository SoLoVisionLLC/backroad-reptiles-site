import React, { useState } from 'react';
import { STORE_INFO } from '../data/siteData';
import { X, Send, CheckCircle2, Phone, MessageSquare, AlertCircle } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialTopic = 'Animal Availability'
}) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setName('');
    setContact('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg glass-panel rounded-2xl border border-slate-700/80 shadow-2xl p-6 sm:p-8 bg-jungle-950/95 overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-reptile-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-reptile-400 text-xs font-bold uppercase tracking-wider mb-1 font-mono">
              <MessageSquare className="w-4 h-4" />
              <span>Direct Keeper Inquiry</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
              Ask Brian & Angel
            </h2>
            <p className="text-sm text-slate-300 mb-6">
              Have questions about current animal morphs, weekly feeder sizes, or custom terrarium builds? Send us a quick note or call directly at <a href={`tel:${STORE_INFO.contact.phoneRaw}`} className="text-reptile-400 font-mono font-semibold underline">{STORE_INFO.contact.phone}</a>.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                  Your Name <span className="text-reptile-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Marcus Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-jungle-900/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-reptile-500 focus:ring-1 focus:ring-reptile-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                  Phone Number or Email <span className="text-reptile-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. (419) 555-0199 or name@example.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-jungle-900/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-reptile-500 focus:ring-1 focus:ring-reptile-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                  Inquiry Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-jungle-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-reptile-500 focus:ring-1 focus:ring-reptile-500 transition-all"
                >
                  <option value="Animal Availability">Animal Availability & Morphs</option>
                  <option value="Feeder Orders">Weekly Feeder Insects / Rodents</option>
                  <option value="Custom Habitat Build">Custom Enclosure / Bioactive Setup</option>
                  <option value="Private Consultation">Private Consultation / Appointment</option>
                  <option value="General Husbandry">General Husbandry & Care Question</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5 font-mono">
                  How can we help? <span className="text-reptile-400">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us what species you're keeping, what sizes of feeders you need, or what setup you're building..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-jungle-900/80 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-reptile-500 focus:ring-1 focus:ring-reptile-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Reminder: All animal purchases require in-store pickup at 610 Plaza Dr, Fostoria. We do not ship live animals to protect their welfare.
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-reptile-600 to-reptile-500 text-white font-bold text-sm shadow-lg shadow-reptile-900/50 hover:from-reptile-500 hover:to-reptile-400 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to Keepers</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 bg-reptile-500/20 text-reptile-400 rounded-full flex items-center justify-center mx-auto border border-reptile-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">Inquiry Received!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Thank you, <span className="text-white font-semibold">{name}</span>. Brian & Angel will review your inquiry regarding <span className="text-reptile-400 font-semibold">{topic}</span> and reach out shortly via {contact}.
            </p>
            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-lg bg-jungle-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700 transition-colors"
              >
                Done
              </button>
              <a
                href={`tel:${STORE_INFO.contact.phoneRaw}`}
                className="px-6 py-2.5 rounded-lg bg-reptile-600 text-white font-semibold text-sm hover:bg-reptile-500 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
