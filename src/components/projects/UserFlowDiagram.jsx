import React from 'react';

/**
 * UserFlowDiagram Component
 * Left margin vertical user flow mapping matching the notebook theme:
 * - "USER FLOW MAPPING 🗺️"
 * - Step badges with clear readable text
 * - Connecting arrows and loop-back curve
 * - Mini wireframe sketch
 */
export const UserFlowDiagram = ({ className = "" }) => {
  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Title */}
      <div className="mb-2 text-center">
        <span className="font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] uppercase tracking-wider block leading-tight">
          USER FLOW
        </span>
        <span className="font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] uppercase tracking-wider flex items-center justify-center gap-1">
          MAPPING 🗺️
        </span>
      </div>

      {/* Vertical Steps with Arrows & Loopback */}
      <div className="relative flex flex-col items-center space-y-1.5 pl-3">
        {/* Loop-back arrow on left */}
        <div className="absolute left-0 top-6 bottom-4 w-3 pointer-events-none">
          <svg viewBox="0 0 16 160" fill="none" className="w-full h-full overflow-visible" aria-hidden="true">
            <path
              d="M 14 150 C 2 150 2 25 14 25"
              stroke="#1D1C1A"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            <path
              d="M 8 20 L 15 25 L 10 30"
              stroke="#1D1C1A"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Steps */}
        <div className="px-2 py-0.5 bg-[#FAF6EE] border border-[#1D1C1A] rounded-xs shadow-2xs font-condensed font-extrabold text-[10px] sm:text-[11px] text-[#1D1C1A]">
          Landing Page
        </div>

        <span className="text-[#1D1C1A] text-[10px] leading-none font-bold">↓</span>

        <div className="px-2 py-0.5 bg-[#FAF6EE] border border-[#1D1C1A] rounded-xs shadow-2xs font-condensed font-extrabold text-[10px] sm:text-[11px] text-[#1D1C1A]">
          Project Ledger
        </div>

        <span className="text-[#1D1C1A] text-[10px] leading-none font-bold">↓</span>

        <div className="px-2 py-0.5 bg-[#FAF6EE] border border-[#1D1C1A] rounded-xs shadow-2xs font-condensed font-extrabold text-[10px] sm:text-[11px] text-[#1D1C1A]">
          Feature Deep Dive
        </div>

        <span className="text-[#1D1C1A] text-[10px] leading-none font-bold">↓</span>

        <div className="px-2 py-0.5 bg-[#FAF6EE] border border-[#1D1C1A] rounded-xs shadow-2xs font-condensed font-extrabold text-[10px] sm:text-[11px] text-[#1D1C1A]">
          Live Preview
        </div>

        <span className="text-[#1D1C1A] text-[10px] leading-none font-bold">↓</span>

        <div className="px-2 py-0.5 bg-[#FAF6EE] border border-[#1D1C1A] rounded-xs shadow-2xs font-condensed font-extrabold text-[10px] sm:text-[11px] text-[#1D1C1A]">
          Interactive Demo
        </div>

        <span className="text-[#1D1C1A] text-[10px] leading-none font-bold">↓</span>

        <div className="px-2 py-0.5 bg-[#E7BD58] border border-[#1D1C1A] rounded-xs shadow-2xs font-condensed font-extrabold text-[10px] sm:text-[11px] text-[#1D1C1A]">
          Build Contact ↗
        </div>
      </div>

      {/* Mini wireframe sketch below */}
      <div className="mt-3 w-16 h-11 bg-[#FAF6EE] border border-[#1D1C1A] rounded-xs p-1 shadow-2xs">
        <div className="flex items-center gap-0.5 pb-0.5 border-b border-[#DDD2BA]">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1D1C1A]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#1D1C1A]" />
        </div>
        <div className="grid grid-cols-2 gap-1 pt-1">
          <div className="h-2.5 bg-[#E8DFCA] rounded-2xs" />
          <div className="h-2.5 bg-[#E8DFCA] rounded-2xs" />
        </div>
      </div>
    </div>
  );
};