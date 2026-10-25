import React from 'react';
import { ArrowUpRight, TrendingUp, CheckCircle, Shield, Award } from 'lucide-react';

interface StatsAndFactsProps {
  onOpenBrief?: () => void;
  onExploreProcess?: () => void;
}

export const StatsAndFacts: React.FC<StatsAndFactsProps> = ({ onOpenBrief, onExploreProcess }) => {
  const stats = [
    {
      num: '10',
      suffix: '+',
      label: 'Years in Practice',
      desc: 'Over a decade of senior commercial branding, certified packaging engineering, technical catalogs, and digital design.',
      icon: Award
    },
    {
      num: '150',
      suffix: '+',
      label: 'Completed Projects',
      desc: 'Proven commercial solutions delivered across tech startups, FMCG brands, luxury cosmetics, and industrial exporters.',
      icon: CheckCircle
    }
  ];

  return (
    <section className="bg-[#080C14] text-white py-20 sm:py-28 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#0F3E6D]/20 via-[#D4FF00]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/5 border border-white/10 text-[#D4FF00] font-mono text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
              <span>STATS &amp; FACTS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-white leading-[1.05]">
              Proof in numbers.<br />
              <span className="text-[#D4FF00]">Because good design should perform.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-normal leading-relaxed">
            We transform underwhelming brands and static sites into standout commercial engines, built to reflect the ambition and quality of your business.
          </p>
        </div>

        {/* 2 Focused Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-[#0D131F]/90 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/10 hover:border-[#D4FF00]/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-2xl hover:shadow-[#D4FF00]/5 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-neutral-500 font-bold tracking-widest uppercase">
                      0{idx + 1} // METRIC
                    </span>
                    <Icon className="w-5 h-5 text-neutral-500 group-hover:text-[#D4FF00] transition-colors" />
                  </div>

                  <div className="flex items-baseline gap-1 font-serif text-4xl sm:text-5xl lg:text-[54px] font-semibold text-white tracking-tight tabular-nums mb-3 group-hover:text-[#D4FF00] transition-colors">
                    <span>{stat.num}</span>
                    <span className="text-[#D4FF00] font-bold">{stat.suffix}</span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-white mb-2">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed font-normal pt-4 border-t border-white/5">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Lovera Signature Dual Fact Cards: Timeline + Commercial Guarantee */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Fact 01: Timeline Sprint */}
          <div className="lg:col-span-7 bg-[#0D131F] rounded-2xl p-7 sm:p-9 border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-2.5 py-1 bg-white/5 text-[#D4FF00] font-mono text-[10px] font-bold tracking-[0.2em] uppercase rounded">
                  FACT 01 // A STREAMLINED SPRINT
                </span>
                <span className="font-mono text-xs text-neutral-400">Total: 4–6 WEEKS</span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-3">
                Timeline: Brand Identity, Website &amp; Packaging Sprint
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-8">
                A streamlined, battle-tested process executed with methodical care. Clear milestones, no surprise delays, direct founder communication.
              </p>

              {/* Step Flow */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-2">
                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                  <div className="font-mono text-[10px] text-[#D4FF00] font-bold uppercase mb-1">01 DISCOVERY</div>
                  <div className="font-serif text-lg font-semibold text-white mb-1">1 Week</div>
                  <div className="text-[11px] text-neutral-400 leading-snug">Market audit, user interviews, challenge definition</div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                  <div className="font-mono text-[10px] text-[#D4FF00] font-bold uppercase mb-1">02 CONCEPT</div>
                  <div className="font-serif text-lg font-semibold text-white mb-1">2 Weeks</div>
                  <div className="text-[11px] text-neutral-400 leading-snug">Design direction, wireframes, 3D explorations</div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                  <div className="font-mono text-[10px] text-[#D4FF00] font-bold uppercase mb-1">03 EXECUTION</div>
                  <div className="font-serif text-lg font-semibold text-white mb-1">2–3 Weeks</div>
                  <div className="text-[11px] text-neutral-400 leading-snug">Figma UI, Framer/React code, print dielines</div>
                </div>

                <div className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                  <div className="font-mono text-[10px] text-[#D4FF00] font-bold uppercase mb-1">04 LAUNCH</div>
                  <div className="font-serif text-lg font-semibold text-white mb-1">1 Week</div>
                  <div className="text-[11px] text-neutral-400 leading-snug">Clean handoff, live deployment, QA testing</div>
                </div>
              </div>
            </div>

            {onExploreProcess && (
              <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-6">
                <span className="text-xs text-neutral-400">Want to see our granular blueprint specifications?</span>
                <button
                  onClick={onExploreProcess}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#D4FF00] hover:underline uppercase tracking-wider cursor-pointer"
                >
                  <span>Learn about our process</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Fact 02: Real Commercial Guarantee */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#121B2C] to-[#0A0F1A] rounded-2xl p-7 sm:p-9 border border-white/15 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4FF00]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="inline-block px-2.5 py-1 bg-[#D4FF00] text-[#080C14] font-mono text-[10px] font-black tracking-[0.2em] uppercase rounded mb-4">
                FACT 02 // ZERO TEMPLATES
              </span>

              <h4 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-3">
                Built to Make You Hard to Replace
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                Every website, packaging dieline, and brand architecture is 100% custom-crafted. No pre-bought themes, no bloated templates, no outsourced juniors.
              </p>

              <ul className="space-y-2.5 text-xs text-neutral-300 font-mono">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
                  <span>Sub-second page speeds &amp; clean component code</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
                  <span>Industrial tolerances &amp; certified print-ready dielines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
                  <span>Direct founder collaboration from day 1 to launch</span>
                </li>
              </ul>
            </div>

            {onOpenBrief && (
              <button
                onClick={onOpenBrief}
                className="mt-8 w-full py-3.5 bg-[#D4FF00] hover:bg-[#c2eb00] text-[#080C14] font-mono text-xs font-black tracking-[0.16em] uppercase rounded-lg transition-colors cursor-pointer shadow-lg shadow-[#D4FF00]/15"
              >
                Discuss Your Scope With Saeed
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
