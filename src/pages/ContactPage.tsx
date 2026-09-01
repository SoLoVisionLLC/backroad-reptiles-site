import React, { useState } from 'react';
import { PageRoute } from '../types';
import { STORE_INFO } from '../data/siteData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Facebook, 
  Instagram, 
  ExternalLink,
  Sparkles
} from 'lucide-react';

interface ContactPageProps {
  onNavigate?: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [topic, setTopic] = useState('Animal Availability');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 pb-24">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-jungle-900 border border-reptile-500/30 text-xs font-semibold text-slate-200">
          <MessageSquare className="w-3.5 h-3.5 text-reptile-400" />
          <span>Direct Shop Communication</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
          Contact Brian & Angel
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Whether you need to check current animal morph availability, reserve weekly feeder shipments, ask a husbandry question, or schedule a custom bioactive tank consultation, we're here to help.
        </p>
      </div>

      {/* Main Grid: Form + Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Col: Contact Form */}
        <div className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border border-slate-800 bg-jungle-950/90 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-reptile-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="space-y-1">
                <h3 className="text-2xl font-display font-bold text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400">
                  Messages are sent directly to Brian & Angel's shop inbox.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-reptile-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Marcus Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-jungle-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-reptile-500 focus:ring-1 focus:ring-reptile-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone or Email <span className="text-reptile-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. (419) 555-0199"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-jungle-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-reptile-500 focus:ring-1 focus:ring-reptile-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Topic of Inquiry
                </label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-jungle-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-reptile-500 focus:ring-1 focus:ring-reptile-500 transition-all"
                >
                  <option value="Animal Availability">Animal Availability & Morph Details</option>
                  <option value="Feeder Reserving">Weekly Feeder Insect / Rodent Orders</option>
                  <option value="Custom Habitat">Custom Bioactive Enclosure Setup</option>
                  <option value="Husbandry Question">Husbandry, Lighting & Health Advice</option>
                  <option value="Store Visit">Planning an In-Store Visit or Appointment</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                  Message Details <span className="text-reptile-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Include animal species, feeder counts, or setup dimensions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-jungle-900 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-reptile-500 focus:ring-1 focus:ring-reptile-500 transition-all resize-none"
                ></textarea>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-200">Note:</span> We do not ship live animals. All animal purchases must be finalized and picked up in person at our Fostoria store.
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-reptile-600 to-reptile-500 hover:from-reptile-500 hover:to-reptile-400 text-white font-bold text-sm shadow-xl shadow-reptile-950/60 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Keepers</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4 animate-fadeIn relative z-10">
              <div className="w-16 h-16 bg-reptile-500/20 text-reptile-400 rounded-full flex items-center justify-center mx-auto border border-reptile-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Message Sent!</h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto">
                Thank you, <span className="text-white font-semibold">{name}</span>. Brian & Angel have received your inquiry regarding <span className="text-reptile-400 font-semibold">{topic}</span> and will get back to you shortly.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setName('');
                    setContact('');
                    setMessage('');
                    setSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-jungle-850 hover:bg-jungle-800 text-slate-200 font-semibold text-xs border border-slate-700"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Col: Direct Channels & Socials */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Direct Cards */}
          <div className="glass-panel p-6 rounded-3xl border border-slate-800 space-y-5 bg-jungle-950/90">
            <h3 className="text-xs font-bold font-mono text-reptile-400 uppercase tracking-wider">
              Direct Contact Channels
            </h3>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${STORE_INFO.contact.phoneRaw}`}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-jungle-900 hover:bg-jungle-850 border border-slate-800 hover:border-reptile-500/40 transition-all group"
              >
                <div className="p-2 rounded-lg bg-reptile-950 text-reptile-400 border border-reptile-500/30 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Store Phone</div>
                  <div className="text-sm font-bold text-white font-mono group-hover:text-reptile-400 transition-colors">
                    {STORE_INFO.contact.phone}
                  </div>
                  <div className="text-[11px] text-slate-400">Tue–Thu 4–8 PM or leave a voicemail</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${STORE_INFO.contact.email}`}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-jungle-900 hover:bg-jungle-850 border border-slate-800 hover:border-reptile-500/40 transition-all group"
              >
                <div className="p-2 rounded-lg bg-reptile-950 text-reptile-400 border border-reptile-500/30 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Public Email</div>
                  <div className="text-sm font-bold text-white group-hover:text-reptile-400 transition-colors truncate max-w-[220px]">
                    {STORE_INFO.contact.email}
                  </div>
                  <div className="text-[11px] text-slate-400">Monitored daily for keeper inquiries</div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-jungle-900 border border-slate-800">
                <div className="p-2 rounded-lg bg-reptile-950 text-reptile-400 border border-reptile-500/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Storefront</div>
                  <div className="text-sm font-bold text-white">
                    {STORE_INFO.address.street}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {STORE_INFO.address.city}, {STORE_INFO.address.state} {STORE_INFO.address.zip}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Chat */}
            <div className="pt-3 border-t border-slate-800 space-y-2">
              <div className="text-[11px] font-mono text-slate-400 font-semibold uppercase">
                Direct Message on Socials
              </div>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={STORE_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-jungle-900 hover:bg-jungle-850 text-slate-200 hover:text-white border border-slate-800 flex items-center justify-center gap-2 text-xs font-semibold transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-400" />
                  <span>Facebook DM</span>
                </a>
                <a
                  href={STORE_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-jungle-900 hover:bg-jungle-850 text-slate-200 hover:text-white border border-slate-800 flex items-center justify-center gap-2 text-xs font-semibold transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram DM</span>
                </a>
              </div>
            </div>
          </div>

          {/* Square Appointments Link */}
          <div className="glass-panel p-6 rounded-3xl border border-reptile-500/30 bg-gradient-to-br from-reptile-950/40 to-jungle-950 space-y-3">
            <div className="flex items-center gap-2 text-reptile-400 font-mono text-xs font-bold uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Square Appointments</span>
            </div>
            <h4 className="text-base font-bold text-white">
              Need a 1-on-1 Enclosure Setup Session?
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Book a dedicated private consultation slot with Brian & Angel to build or troubleshoot complex reptile environments.
            </p>
            <a
              href={STORE_INFO.square.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-reptile-300 hover:text-white underline pt-1 font-mono"
            >
              <span>Book Appointment on Official Square Store</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
