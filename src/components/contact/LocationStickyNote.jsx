import React from 'react';
import { MaskingTape } from '../Doodles';

/**
 * LocationStickyNote Component
 * Yellow tilted sticky note on the lower-right matching the exact reference:
 * - Based in: Noida / Mathura, IN 📍
 * - Timezone: IST (UTC+5:30)
 * - 🟢 Status: Open to collaborate & builds
 */
export const LocationStickyNote = ({ className = "" }) => {
  return (
    <div className={`relative ${className} select-none`}>
      {/* Masking tape on top center */}
      <div className="absolute -top-3 left-1/4 pointer-events-none z-20">
        <MaskingTape width="w-16 sm:w-18" height="h-4 sm:h-4.5" angle="rotate-2" />
      </div>

      {/* Yellow Sticky Note */}
      <div
        className="relative p-3.5 sm:p-4 bg-[#F5D76E] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform -rotate-1 hover:rotate-0 transition-transform duration-200"
        style={{
          boxShadow: '3px 5px 12px rgba(45, 35, 20, 0.15), 2px 3px 0px #1D1C1A',
        }}
      >
        <div className="space-y-2 text-[#1D1C1A] font-hand leading-snug">
          {/* Based in */}
          <div>
            <span className="block font-extrabold text-xs sm:text-[13px] text-[#1D1C1A]">
              Based in:
            </span>
            <span className="block font-bold text-xs sm:text-[13px] text-[#3A3226]">
              Noida / Mathura, IN 📍
            </span>
          </div>

          {/* Timezone */}
          <div>
            <span className="block font-extrabold text-xs sm:text-[13px] text-[#1D1C1A]">
              Timezone: IST
            </span>
            <span className="block font-bold text-xs sm:text-[13px] text-[#3A3226]">
              (UTC+5:30)
            </span>
          </div>

          {/* Status */}
          <div>
            <span className="block font-bold text-xs sm:text-[13px] text-[#1D1C1A]">
              🟢 <span className="font-extrabold">Status:</span> Open to
            </span>
            <span className="block font-bold text-xs sm:text-[13px] text-[#3A3226] pl-5">
              collaborate &amp; builds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};