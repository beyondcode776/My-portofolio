import React from 'react';
import { portfolioConfig } from '../config/portfolioConfig';

/**
 * MarqueeStrip Component
 * Continuous, seamless horizontal marquee strip styled like a handwritten ink paper ribbon.
 * Features:
 * - Hand-drawn stars / asterisks between items
 * - Occasional mustard highlights
 * - Pause on hover
 * - Reduced motion support (falls back to static wrap or gentle scroll)
 * - Seamless loop duplication
 */
export const MarqueeStrip = () => {
  const items = portfolioConfig.marquee;

  return (
    <div
      className="relative w-full mt-4 sm:mt-5 mb-2 sm:mb-3 overflow-hidden py-2 sm:py-2.5 bg-[#F2ECD8] border-y-2 border-[#1D1C1A] select-none"
      style={{
        boxShadow: 'inset 0 2px 4px rgba(50, 40, 25, 0.08), inset 0 -2px 4px rgba(50, 40, 25, 0.08)',
        transform: 'rotate(-0.4deg)',
      }}
      aria-label="Professional titles marquee"
    >
      {/* Paper tape end accents */}
      <div className="absolute -left-2 top-0 bottom-0 w-6 bg-[#E5DCBE] border-r border-[#D0C5A3] pointer-events-none z-10" />
      <div className="absolute -right-2 top-0 bottom-0 w-6 bg-[#E5DCBE] border-l border-[#D0C5A3] pointer-events-none z-10" />

      {/* Marquee Track */}
      <div className="flex w-max marquee-track hover:pause-animation">
        {/* Render 3 identical sets to ensure infinite smooth seamless looping on all screen widths */}
        {[0, 1, 2].map((setIndex) => (
          <div key={setIndex} className="flex items-center space-x-6 sm:space-x-8 px-4" aria-hidden={setIndex > 0}>
            {items.map((title, idx) => {
              // Highlight every 3rd item with a subtle mustard badge
              const isHighlighted = idx % 2 === 1;

              return (
                <div key={`${setIndex}-${idx}`} className="flex items-center space-x-6 sm:space-x-8 whitespace-nowrap">
                  <span
                    className={`font-hand font-bold text-lg sm:text-xl md:text-2xl tracking-wider transition-colors ${
                      isHighlighted
                        ? 'text-[#1D1C1A] bg-[#F2C66D] px-2.5 py-0.5 rounded-sm shadow-2xs -rotate-1 border border-[#1D1C1A]/20'
                        : 'text-[#2D2820] hover:text-[#000000]'
                    }`}
                  >
                    {title}
                  </span>
                  
                  {/* Hand-drawn star / asterisk separator */}
                  <span className="font-hand font-bold text-xl sm:text-2xl text-[#8E8069] select-none">
                    ✳
                  </span>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
