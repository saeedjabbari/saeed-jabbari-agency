import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

interface TalkShopSectionProps {
  onOpenBrief: () => void;
  onRequestAudit?: () => void;
}

export const TalkShopSection: React.FC<TalkShopSectionProps> = ({ onOpenBrief, onRequestAudit }) => {
  const [quickEmail, setQuickEmail] = useState('');
  const [selectedService, setSelectedService] = useState('Website Design');
  const [sent, setSent] = useState(false);

  const services = [
    'Website Design',
    'Brand Identity',
    'Product Packaging',
    'Technical Catalog',
    'Monthly Retainer'
  ];

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail || !quickEmail.includes('@')) return;
    setSent(true);
    setTimeout(() => {
      onOpenBrief();
      setSent(false);
      setQuickEmail('');
    }, 1200);
  };

  return (
    <section className="bg-gradient-to-b from-[#080C14] to-[#04060A] text-white py-24 sm:py-32 border-t border-white/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-[#D4FF00]/10 via-[#0F3E6D]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Let's talk shop text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D4FF00]/10 border border-[#D4FF00]/30 text-[#D4FF00] font-mono text-[10px] font-bold tracking-[0.24em] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
              <span>LET&apos;S TALK SHOP</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-[70px] font-semibold tracking-[-0.035em] text-white leading-[1.02] mb-6">
              Have an ambitious vision?<br />
              <span className="text-[#D4FF00]">Make it happen.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl mb-10">
              We partner with founders and commercial directors to craft websites and brand systems that drive conversion, command respect, and turn products into category leaders.
            </p>

            {/* Direct Studio Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mb-8">
              <a
                href="mailto:hello@saeedjabbari.com"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#D4FF00]/50 hover:bg-white/[0.06] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4FF00] text-[#080C14] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">STUDIO INQUIRIES</div>
                  <div className="font-mono text-xs sm:text-[13px] text-white font-semibold group-hover:text-[#D4FF00] transition-colors flex items-center gap-1.5">
                    <span>Send Direct Email</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#D4FF00]" />
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-white/10 text-[#D4FF00] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">STUDIO PRESENCE</div>
                  <div className="font-mono text-xs sm:text-[13px] text-white font-semibold">
                    Istanbul &amp; Worldwide Remote
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
              <span>Currently accepting commissions for Q3/Q4</span>
            </div>
          </div>

          {/* Right Column: Interactive Fast Inquiry Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#0D131F] rounded-3xl p-8 sm:p-10 border border-white/15 shadow-2xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white">Start a Conversation</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">Direct 24h response from Saeed Jabbari</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#D4FF00] text-[#080C14] flex items-center justify-center font-serif font-black text-xs">
                  SJ
                </div>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-5">
                <div>
                  <label className="block font-mono text-[11px] text-neutral-400 uppercase tracking-wider mb-2.5">
                    What are you looking to build?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => setSelectedService(svc)}
                        className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all cursor-pointer ${
                          selectedService === svc
                            ? 'bg-[#D4FF00] text-[#080C14] font-bold shadow-md shadow-[#D4FF00]/20'
                            : 'bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/10'
                        }`}
                      >
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] text-neutral-400 uppercase tracking-wider mb-2">
                    Your Business Email
                  </label>
                  <input
                    type="email"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    placeholder="founder@company.com"
                    required
                    className="w-full bg-[#05080E] border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4FF00] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] font-mono text-xs font-black tracking-[0.16em] uppercase rounded-lg transition-all shadow-xl shadow-[#D4FF00]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {sent ? (
                    <>
                      <Check className="w-4 h-4 text-[#080C14]" />
                      <span>Opening Project Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Make It Happen</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>Fast 48-hour proposal</span>
                  <button
                    type="button"
                    onClick={onOpenBrief}
                    className="text-[#D4FF00] hover:underline cursor-pointer flex items-center gap-1"
                  >
                    <span>Detailed Brief Form</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
