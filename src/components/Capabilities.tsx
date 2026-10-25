import React from 'react';
import { CAPABILITIES } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

interface CapabilitiesProps {
  onSelectCapability?: (id: string) => void;
}

export const Capabilities: React.FC<CapabilitiesProps> = ({ onSelectCapability }) => {
  return (
    <section id="capabilities" className="bg-[#F8F9FA] text-[#080C14] py-20 sm:py-28 overflow-hidden border-y border-[#E2E6EC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.24em] text-[#080C14] uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#080C14]" aria-hidden="true" />
              <span>CORE CAPABILITIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-tight text-[#080C14] tracking-tight">
              Branding Solutions Built for Commercial Growth
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base leading-relaxed text-neutral-600 font-normal">
              From brand identity and packaging to technical catalogs and launch campaigns — strategic design systems that make your products easier to notice, understand, and buy.
            </p>
          </div>
        </div>

        {/* All Cards in a Single Row on Desktop, 2 Columns on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-3.5 xl:gap-4">
          {CAPABILITIES.map((cap, idx) => (
            <div
              key={cap.id}
              onClick={() => onSelectCapability && onSelectCapability(cap.id)}
              className={`bg-white hover:bg-neutral-50/90 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 lg:p-4 xl:p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-sm hover:shadow-xl border border-neutral-200/90 hover:border-[#080C14] hover:-translate-y-1 ${
                idx === 4 ? 'col-span-2 lg:col-span-1' : 'col-span-1'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5 sm:mb-3.5">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#080C14] bg-[#D4FF00] px-1.5 sm:px-2 py-0.5 rounded-sm">
                    0{idx + 1}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#080C14] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="font-serif text-sm sm:text-base lg:text-[15px] xl:text-[17px] font-semibold text-[#080C14] mb-1.5 sm:mb-2 leading-snug group-hover:text-black transition-colors">
                  {cap.title}
                </h3>
                <p className="text-[11px] sm:text-xs leading-relaxed text-neutral-600 font-normal mb-3 sm:mb-4">
                  {cap.description}
                </p>
              </div>

              {/* Clean tags */}
              <div className="pt-2 sm:pt-3 text-[10px] sm:text-[11px] font-mono text-neutral-500 border-t border-neutral-100">
                <span className="truncate block">{cap.tags.join(' · ')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
