import React, { useState } from 'react';
import { STORE_META_B } from '../data/siteDataB';
import { X, Send, Phone, CheckCircle, ShieldCheck } from 'lucide-react';

interface InquiryDrawerBProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
  initialDetails?: string;
}

export const InquiryDrawerB: React.FC<InquiryDrawerBProps> = ({
  isOpen,
  onClose,
  initialTopic = "General Keeper Question",
  initialDetails = ""
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState(initialTopic);
  const [message, setMessage] = useState(initialDetails);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      ></div>

      {/* Modal Dialog */}
      <div className="relative bg-forest-950 border border-copper-500/30 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-botanical z-10 animate-scaleUp">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-forest-900 text-stone-400 hover:text-stone-100 hover:bg-forest-850 border border-forest-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-moss-500/20 text-moss-400 border border-moss-500/40 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-stone-100 font-bold">
              Inquiry Dispatched to Brian & Angel
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed max-w-sm mx-auto">
              Thank you, {name || 'Keeper'}. We review inquiries personally and will respond promptly via text/email during shop hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow"
              >
                Return to Sanctuary
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-forest-900 text-copper-400 border border-copper-500/30 mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Direct Keeper Consultation</span>
              </div>
              <h3 className="font-serif text-2xl text-stone-100 font-bold">
                Consult with Brian & Angel
              </h3>
              <p className="text-xs text-stone-400 font-sans mt-1">
                Have a question about animal availability, custom bioactive terrariums, or bulk feeder subscriptions? We are here to help.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1">
                  Your Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Marcus Vance"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-800 focus:border-copper-400 focus:outline-none text-stone-100 text-sm font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1">
                    Phone Number (SMS) *
                  </label>
                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(419) 555-0199"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-800 focus:border-copper-400 focus:outline-none text-stone-100 text-sm font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="keeper@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-800 focus:border-copper-400 focus:outline-none text-stone-100 text-sm font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1">
                  Inquiry Topic
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-800 focus:border-copper-400 focus:outline-none text-stone-100 text-sm font-sans"
                >
                  <option value="Custom Bioactive Setup">Custom Bioactive Habitat Build</option>
                  <option value="Living Animal Availability">Living Animal Availability / Reserve</option>
                  <option value="Bulk Feeder Standing Order">Bulk Feeder Standing Subscription</option>
                  <option value="Husbandry Question">Care / Husbandry Verification</option>
                  <option value="Other / Store Visit">Store Visit & General Inquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1">
                  Inquiry Details / Habitat Notes
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what species or setup you're looking for..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-forest-900 border border-forest-800 focus:border-copper-400 focus:outline-none text-stone-100 text-sm font-sans resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-xs font-mono font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Message to Brian & Angel</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <a
                  href={`tel:${STORE_META_B.phoneRaw}`}
                  className="text-stone-400 hover:text-copper-400 text-xs font-mono inline-flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Or call directly: {STORE_META_B.phone}</span>
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
