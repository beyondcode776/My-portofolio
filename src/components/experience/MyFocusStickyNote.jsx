import React from 'react';
import { MaskingTape } from '../Doodles';

/**
 * MyFocusStickyNote Component
 * Bright mustard-yellow sticky note on the right side of the experience page:
 * - MY FOCUS
 * - 1. Hands-on IoT
 * - 2. No boilerplate
 * - 3. Fast solutions
 */
export const MyFocusStickyNote = ({ className = "", style = {}, isAnimated = false }) => {
  return (
    <div
      className={`relative inline-block select-none ${className}`}
      style={style}
    >
      {/* Yellow Sticky Note Paper with hover lift */}
      <div
        className="relative w-36 sm:w-42 p-3 sm:p-3.5 bg-[#F7D560] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform rotate-1 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-2xl hover:border-black active:translate-y-0 transition-all duration-250 cursor-default"
        style={{
          boxShadow: '3px 6px 14px rgba(50, 40, 10, 0.18), 2px 2px 0px #1D1C1A',
          clipPath: 'polygon(1% 0%, 99% 1%, 100% 98%, 0% 99%)',
          backgroundColor: '#F7D560',
        }}
      >
        {/* Masking tape centered at the top edge */}
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 pointer-events-none z-20">
          <MaskingTape width="w-16" height="h-4" angle="-rotate-1" />
        </div>

        {/* Heading: MY FOCUS */}
        <h4 className="font-hand font-extrabold text-base sm:text-lg text-[#1D1C1A] tracking-wider mb-1.5 border-b-2 border-dashed border-[#1D1C1A]/25 pb-0.5">
          MY FOCUS
        </h4>

        {/* Numbered focus items */}
        <ol className="font-hand font-bold text-xs sm:text-[13px] text-[#1D1C1A] space-y-1 leading-snug">
          <li className="flex items-center gap-1.5">
            <span className="font-mono text-[10px] text-[#524419] font-extrabold">1.</span>
            <span>Hands-on IoT</span>
          </li>
          <li className="flex items-center gap-1.5">
            <span className="font-mono text-[10px] text-[#524419] font-extrabold">2.</span>
            <span>No boilerplate</span>
          </li>
          <li className="flex items-center gap-1.5">
            <span className="font-mono text-[10px] text-[#524419] font-extrabold">3.</span>
            <span>Fast solutions</span>
          </li>
        </ol>

        {/* Subtle curled bottom paper corner highlight */}
        <div
          className="absolute bottom-0 right-0 w-4 h-4 bg-black/10 pointer-events-none"
          style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
        />
      </div>
    </div>
  );
};
