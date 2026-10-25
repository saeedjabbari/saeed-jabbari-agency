import React from 'react';
import { Quote, Star } from 'lucide-react';

export const TestimonialsWall: React.FC = () => {
  const reviews = [
    {
      headline: 'The closest thing to having an elite design & web partner on demand',
      quote:
        'From brand identity to our full responsive web launch, Saeed integrated effortlessly into our workflow. His technical rigor and clean execution brought total clarity to every step.',
      author: 'Alex Morgan',
      role: 'CEO & Founder',
      company: 'Diasporart Global',
      sector: 'B2B & Digital'
    },
    {
      headline: 'Finally found a designer who understands both aesthetics and commercial conversion',
      quote:
        'He didn’t just make our products look incredible on the shelf and screen—he made sure every typography, color, and UI decision was aligned with buyer psychology and search visibility.',
      author: 'Taylor Reed',
      role: 'Director of Product',
      company: 'The Nuvé Skincare',
      sector: 'Luxury Cosmetics'
    },
    {
      headline: 'Fast turnaround times without compromising on technical craft or depth',
      quote:
        'Our 40-page industrial technical catalog and B2B web portal were handled with surgical precision. Every dieline tolerance, 3D render, and responsive breakpoint was flawless.',
      author: 'Jordan Blake',
      role: 'Head of International Trade',
      company: 'RST Heavy Vehicles',
      sector: 'Automotive & Heavy B2B'
    },
    {
      headline: 'A process that is as thoughtful and disciplined as the final product',
      quote:
        'Saeed guided our team with quiet confidence. He turned a messy brief into a razor-sharp brand identity and digital presence that helped us close major retail distribution deals.',
      author: 'Casey Quinn',
      role: 'Brand Director',
      company: 'MOOD MINT Co.',
      sector: 'FMCG & Confectionery'
    }
  ];

  return (
    <section className="bg-[#EBECE7] text-[#0E1318] py-20 sm:py-28 border-y border-[#D2D5CC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0E1318] text-[#D8FF38] font-mono text-[10px] font-bold tracking-[0.22em] uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D8FF38]" />
              <span>CLIENT WORDS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-[#0E1318] leading-[1.06]">
              Real feedback from the brands<br className="hidden sm:inline" />
              <span className="text-[#1A3828] font-medium italic">we’ve helped grow and dominate.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#49515C] max-w-sm font-normal leading-relaxed">
            Honest feedback from founders, product leaders, and marketing executives across 4 continents.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FCFCFA] rounded-2xl p-7 sm:p-9 border border-[#CCD0C5] hover:border-[#0E1318] transition-all duration-300 flex flex-col justify-between group shadow-[0_12px_32px_-8px_rgba(20,28,36,0.07)] hover:shadow-xl hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D97706] text-[#D97706]" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] font-bold text-[#1E242B] uppercase tracking-wider bg-[#DFE2D8] px-2.5 py-0.5 rounded border border-[#CCD0C5]">
                    {item.sector}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#1A3828]/25 mb-3" />

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0E1318] mb-3 leading-snug group-hover:text-[#1A3828] transition-colors">
                  &ldquo;{item.headline}&rdquo;
                </h3>

                <p className="text-xs sm:text-[14px] text-[#3F4752] leading-relaxed font-normal mb-8">
                  {item.quote}
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-[#DFE2D8] flex items-center justify-between">
                <div>
                  <div className="font-serif font-bold text-sm text-[#0E1318]">{item.author}</div>
                  <div className="font-mono text-[11px] text-[#5D6672]">
                    {item.role} · <span className="text-[#0E1318] font-medium">{item.company}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#0E1318] text-[#D8FF38] font-mono font-bold text-xs flex items-center justify-center shadow-sm">
                  SJ
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
