import React from 'react';

export const TickerMarquee: React.FC = () => {
  const items = [
    'Website Design & Front-End',
    'Brand Identity & Systems',
    'Product Packaging Design',
    'Technical Catalogs & Print',
    'UI/UX & Design Tokens',
    'Framer & React Builds',
    'E-Commerce & Digital Storefronts',
    '3D Product Visualization',
    'Commercial Sales Strategy',
    'Conversion Optimization'
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#0A0F1B] border-y border-white/10 py-3.5 select-none z-20">
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0A0F1B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0A0F1B] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-[marquee_32s_linear_infinite] hover:[animation-play-state:paused]">
        {/* Loop twice for seamless infinite scrolling */}
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 sm:mx-6 shrink-0">
            <span className="font-mono text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-neutral-300 hover:text-[#D4FF00] transition-colors">
              {item}
            </span>
            <span className="ml-4 sm:ml-6 text-[#D4FF00] text-xs" aria-hidden="true">
              ⊹
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
