import React, { useState } from 'react';
import { STORE_META_B } from '../data/siteDataB';
import { MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';

export const ContactPageB: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Custom Bioactive Setup');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-forest-950 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900 border border-copper-500/30 text-copper-400 font-mono text-xs">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Sanctuary Communications</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl text-stone-100 font-bold">
            Connect with Brian & Angel
          </h1>
          <p className="text-sm sm:text-base text-stone-300 font-sans">
            Reach out directly for custom vivarium planning, living animal inquiries, or weekly standing feeder reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-forest-900 border border-copper-500/30 rounded-3xl p-6 sm:p-8 shadow-botanical space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-100 pb-3 border-b border-forest-800">
                Direct Contact Channels
              </h3>

              <div className="space-y-4 font-sans text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-copper-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-100 font-semibold block text-sm">Fostoria Sanctuary:</strong>
                    <span className="text-stone-300">
                      {STORE_META_B.address.street}<br />
                      {STORE_META_B.address.city}, {STORE_META_B.address.state} {STORE_META_B.address.zip}<br />
                      <span className="text-copper-400 font-mono text-[11px] mt-0.5 block">{STORE_META_B.address.landmark}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-copper-400 shrink-0" />
                  <div>
                    <strong className="text-stone-100 font-semibold block text-sm">Direct Phone / SMS:</strong>
                    <a href={`tel:${STORE_META_B.phoneRaw}`} className="font-mono text-copper-400 hover:underline">
                      {STORE_META_B.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-copper-400 shrink-0" />
                  <div>
                    <strong className="text-stone-100 font-semibold block text-sm">Direct Email:</strong>
                    <a href={`mailto:${STORE_META_B.email}`} className="font-mono text-copper-400 hover:underline">
                      {STORE_META_B.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours summary */}
              <div className="pt-4 border-t border-forest-800 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400 block font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-copper-400" />
                  <span>Sanctuary Hours</span>
                </span>
                <p className="text-xs font-mono text-stone-300">
                  Mon – Fri: 12:00 PM – 7:00 PM<br />
                  Sat: 11:00 AM – 7:00 PM<br />
                  Sun: 12:00 PM – 5:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-forest-900 border border-copper-500/25 rounded-3xl p-6 sm:p-10 shadow-botanical">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-moss-500/20 text-moss-400 border border-moss-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-stone-100 font-bold">
                  Inquiry Dispatched to Brian & Angel
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, {name || 'Keeper'}. We review every message personally and will reply via text or email during shop hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl font-mono text-xs font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-2xl text-stone-100 font-bold mb-2">
                  Send a Direct Message
                </h3>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rachel Miller"
                    className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 focus:border-copper-400 focus:outline-none text-stone-100 text-sm font-sans"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 focus:border-copper-400 focus:outline-none text-stone-100 text-sm font-mono"
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
                      className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 focus:border-copper-400 focus:outline-none text-stone-100 text-sm font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1">
                    Topic of Discussion
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 focus:border-copper-400 focus:outline-none text-stone-100 text-sm font-sans"
                  >
                    <option value="Custom Bioactive Setup">Custom Bioactive Vivarium Build</option>
                    <option value="Animal Availability">Animal Availability & Morph Inquiries</option>
                    <option value="Bulk Feeder Subscription">Bulk Feeder Standing Order</option>
                    <option value="Care / Husbandry Advice">Husbandry & Care Questions</option>
                    <option value="General Store Visit">General Store Visit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-300 mb-1">
                    Detailed Notes or Questions
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about the setup, animal species, or products you need..."
                    className="w-full px-4 py-3 rounded-xl bg-forest-950 border border-forest-800 focus:border-copper-400 focus:outline-none text-stone-100 text-sm font-sans resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold bg-copper-500 hover:bg-copper-400 text-forest-950 shadow-copper-glow transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message Directly to Sanctuary</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
