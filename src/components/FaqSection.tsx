import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

interface FaqItem {
  id: string;
  number: string;
  question: string;
  answer: string;
  category: string;
}

interface FaqSectionProps {
  onOpenBrief?: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBrief }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      id: 'web-stack',
      number: '01',
      question: 'What is your stack and process for Website Design & Development?',
      category: 'WEB DESIGN & CODE',
      answer:
        'We design bespoke, responsive user interfaces in Figma with high-fidelity interactive prototypes. For development, we build using React 19, TypeScript, and Tailwind CSS (or production Framer & Webflow if you prefer client-editable no-code). Every build includes mobile optimization, clean semantic code, sub-second load times, Core Web Vitals compliance, and search engine optimization (SEO).'
    },
    {
      id: 'retainer-included',
      number: '02',
      question: 'What is included in a Monthly Creative Retainer?',
      category: 'RETAINER & CADENCE',
      answer:
        'Each retainer includes ongoing design and development support: website updates, landing pages, new packaging SKUs, sales collateral, social content carousels, and 3D product visuals. We typically handle up to two active requests at a time with rapid 48–72 hour turnarounds. You can pause or cancel anytime with zero lock-in.'
    },
    {
      id: 'one-off-vs-retainer',
      number: '03',
      question: 'Is a one-off project commission better than a retainer?',
      category: 'ENGAGEMENT MODELS',
      answer:
        'If you have a clear, distinct milestone—such as a complete new website launch, a full brand identity overhaul, or a 40-page technical industrial catalog—a one-off fixed-price project is best. If you need steady, iterative design outputs and on-demand digital support, a monthly retainer offers faster turnarounds and predictable costs.'
    },
    {
      id: 'who-works',
      number: '04',
      question: 'Who will I be working with directly throughout the engagement?',
      category: 'DIRECT COLLABORATION',
      answer:
        'You collaborate directly with Saeed Jabbari on every strategic, visual, and architectural decision. There are zero junior account intermediaries or layers of telephone games—just 10+ years of senior design direction and precise technical execution.'
    },
    {
      id: 'deliverables-handoff',
      number: '05',
      question: 'What final files and production assets do I receive upon completion?',
      category: 'PRODUCTION ASSETS',
      answer:
        'For websites: clean GitHub repository / live hosting deployment, complete Figma component library, and responsive assets. For packaging: 1:1 scale CAD dielines (AI, PDF, EPS), CMYK/Pantone separations, and factory-ready specifications. For branding: master vector logos, brand guidelines codex, and web fonts.'
    },
    {
      id: 'international-remote',
      number: '06',
      question: 'Do you work with international remote clients across different time zones?',
      category: 'REMOTE COLLABORATION',
      answer:
        'Yes. More than 80% of our clients are remote—spanning North America, Europe, Turkey, and the Middle East. We operate with asynchronous efficiency via Slack, Figma, and scheduled video sessions to accommodate your schedule.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-[#F6F7FA] text-[#080C14] py-20 sm:py-28 border-t border-[#E2E6EC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#080C14] text-[#D4FF00] font-mono text-[10px] font-bold tracking-[0.22em] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#080C14] leading-[1.05]">
              Everything you need to know<br />
              <span className="text-neutral-500">about partnering with our studio.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm text-neutral-600 font-normal max-w-xs leading-relaxed">
              Have a custom request or specific RFP? Let’s answer it directly.
            </p>
            {onOpenBrief && (
              <button
                onClick={onOpenBrief}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#080C14] hover:bg-neutral-800 text-white hover:text-[#D4FF00] text-xs font-mono font-bold tracking-widest uppercase rounded-lg transition-colors cursor-pointer shrink-0 shadow-md shadow-black/5"
              >
                <span>Ask a question</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* High-Contrast Light Accordion List */}
        <div className="divide-y divide-neutral-200/90 border-y border-neutral-200/90">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.id}
                className="py-6 sm:py-8 transition-colors hover:bg-white/60"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-start sm:items-center justify-between gap-4 text-left cursor-pointer group focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#080C14] bg-[#D4FF00] px-2 py-0.5 rounded-sm shrink-0 pt-0.5 sm:pt-0">
                      {faq.number}
                    </span>
                    <div>
                      <span className="block sm:inline font-mono text-[10px] text-neutral-500 uppercase tracking-widest mr-3 font-semibold">
                        [{faq.category}]
                      </span>
                      <span className="font-serif text-lg sm:text-xl md:text-2xl font-semibold text-[#080C14] group-hover:text-black transition-colors leading-snug">
                        {faq.question}
                      </span>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-neutral-200/80 group-hover:bg-[#080C14] group-hover:text-[#D4FF00] text-neutral-700 flex items-center justify-center shrink-0 transition-colors mt-1 sm:mt-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 sm:mt-6 pl-8 sm:pl-14 pr-4 sm:pr-8 animate-fadeIn">
                    <div className="bg-white p-5 sm:p-7 rounded-xl border border-neutral-200/90 shadow-sm text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                      <p className="max-w-4xl">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
