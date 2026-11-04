import React from 'react';
import { MaskingTape } from '../Doodles';

/**
 * WorkflowCard Component — MY WORKFLOW (HOW WE BUILD)
 * Taller notebook card in upper-right matching the exact reference:
 * - Masking tape at corners
 * - Heading: "MY WORKFLOW" with monochrome hand-drawn gear icon
 * - Subtitle: "(HOW WE BUILD)"
 * - 4 vertical steps connected by downward arrows with clean monochrome notebook icons:
 *   1. DISCOVER
 *   2. BLUEPRINT
 *   3. DEVELOP
 *   4. DEPLOY
 * - Footer note: "(Review, test, & live!)"
 * - All decorative emojis replaced with monochrome notebook marks / SVGs.
 */
export const WorkflowCard = ({ className = "" }) => {
  return (
    <div className={`relative ${className} select-none`}>
      {/* Corner Masking Tapes */}
      <div className="absolute -top-3 -left-3 pointer-events-none z-20">
        <MaskingTape width="w-12 sm:w-14" height="h-3.5 sm:h-4" angle="-rotate-12" />
      </div>
      <div className="absolute -top-3 -right-3 pointer-events-none z-20">
        <MaskingTape width="w-12 sm:w-14" height="h-3.5 sm:h-4" angle="rotate-12" />
      </div>

      {/* Cream Notebook Paper Card */}
      <div
        className="relative p-3.5 sm:p-4 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform rotate-0.5 hover:rotate-0 transition-transform duration-200"
        style={{
          boxShadow: '3px 4px 10px rgba(45, 35, 20, 0.12), 2px 2px 0px #1D1C1A',
        }}
      >
        {/* Header: MY WORKFLOW with monochrome gear */}
        <div className="mb-2 text-center border-b border-[#1D1C1A]/20 pb-1.5">
          <h3 className="font-condensed font-extrabold text-sm sm:text-base md:text-[17px] text-[#1D1C1A] uppercase tracking-wider flex items-center justify-center gap-1.5">
            <span>MY WORKFLOW</span>
            {/* Monochrome Hand-Drawn Gear Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 text-[#1D1C1A] shrink-0"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </h3>
          <p className="font-hand font-bold text-[11px] sm:text-xs text-[#5A4F3E] mt-0.5">
            (HOW WE BUILD)
          </p>
        </div>

        {/* 4 Steps with Downward Connecting Arrows */}
        <div className="flex flex-col items-center space-y-1 py-1">
          
          {/* Step 1: DISCOVER */}
          <div className="w-full flex items-center justify-between px-2 py-1 bg-[#FAF6EE] border border-[#1D1C1A]/30 rounded-xs shadow-2xs">
            {/* Left Icon: Monochrome Compass */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-[#1D1C1A] shrink-0"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>

            {/* Text */}
            <span className="font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wider uppercase">
              1. DISCOVER
            </span>

            {/* Right Icon: Monochrome Coffee Cup */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-[#1D1C1A] shrink-0"
              aria-hidden="true"
            >
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
          </div>

          {/* Downward Arrow */}
          <span className="text-[#1D1C1A] text-xs font-bold leading-none py-0.5">↓</span>

          {/* Step 2: BLUEPRINT */}
          <div className="w-full flex items-center justify-between px-2 py-1 bg-[#FAF6EE] border border-[#1D1C1A]/30 rounded-xs shadow-2xs">
            {/* Left Icon: Monochrome Map */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-[#1D1C1A] shrink-0"
              aria-hidden="true"
            >
              <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
              <line x1="8" y1="2" x2="8" y2="18" />
              <line x1="16" y1="6" x2="16" y2="22" />
            </svg>

            {/* Text */}
            <span className="font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wider uppercase">
              2. BLUEPRINT
            </span>

            {/* Right Icon: Monochrome Triangle Ruler */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-[#1D1C1A] shrink-0"
              aria-hidden="true"
            >
              <path d="M3 21h18L3 3v18z" />
              <path d="M7 17l2-2" />
              <path d="M11 17l2-2" />
              <path d="M15 17l2-2" />
            </svg>
          </div>

          {/* Downward Arrow */}
          <span className="text-[#1D1C1A] text-xs font-bold leading-none py-0.5">↓</span>

          {/* Step 3: DEVELOP */}
          <div className="w-full flex items-center justify-between px-2 py-1 bg-[#FAF6EE] border border-[#1D1C1A]/30 rounded-xs shadow-2xs">
            {/* Left Icon: Code */}
            <span className="font-mono font-bold text-[10px] text-[#1D1C1A]">{'</>'}</span>

            {/* Text */}
            <span className="font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wider uppercase">
              3. DEVELOP
            </span>

            {/* Right Icon: Monochrome Screen */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-[#1D1C1A] shrink-0"
              aria-hidden="true"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>

          {/* Downward Arrow */}
          <span className="text-[#1D1C1A] text-xs font-bold leading-none py-0.5">↓</span>

          {/* Step 4: DEPLOY */}
          <div className="w-full flex items-center justify-between px-2 py-1 bg-[#FAF6EE] border border-[#1D1C1A]/30 rounded-xs shadow-2xs">
            {/* Left Icon: Monochrome Rocket */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-[#1D1C1A] shrink-0"
              aria-hidden="true"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            </svg>

            {/* Text */}
            <span className="font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wider uppercase">
              4. DEPLOY
            </span>

            {/* Right Icon: Monochrome Checkmark */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-[#1D1C1A] shrink-0"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          {/* Review, test, & live! Note */}
          <div className="pt-1 text-center">
            <span className="font-hand font-bold text-[11px] sm:text-xs text-[#403828]">
              (Review, test, &amp; live!)
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};
