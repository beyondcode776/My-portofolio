import React from 'react';
import { MaskingTape, SparkleBurst } from '../Doodles';

/**
 * Signature Scribble Doodle
 */
export const ScribbleSignature = ({ className = "w-24 h-12" }) => (
  <svg viewBox="0 0 120 70" fill="none" className={className} aria-hidden="true">
    <path
      d="M 10 50 C 25 20, 35 15, 45 40 C 50 10, 60 25, 70 55 C 75 35, 85 20, 95 45 C 100 25, 110 50, 115 40"
      stroke="#1D1C1A"
      strokeWidth="1.6"
      strokeLinecap="round"
      opacity="0.65"
    />
    <path
      d="M 20 60 C 50 55, 80 62, 110 50"
      stroke="#1D1C1A"
      strokeWidth="1.8"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

/**
 * PhilosophyNote Component
 * Bright mustard-yellow sticky note presented at Byte's final notebook presentation area.
 * Features:
 * - Mustard-yellow paper (#FFE66D)
 * - Black handwritten typography (Kalam / Caveat)
 * - Subtle masking tape on top
 * - Irregular hand-cut paper outline
 * - Soft physical paper shadow
 * - Exact text required by Kishlay
 */
export const PhilosophyNote = ({
  className = '',
  style = {},
  isHighlighted = false,
}) => {
  return (
    <div
      className={`relative inline-flex items-center gap-3 select-none transition-all duration-300 ${
        isHighlighted ? 'scale-105' : ''
      } ${className}`}
      style={style}
    >
      {/* Decorative scribble signature next to sticky note on desktop */}
      <div className="hidden sm:block pointer-events-none opacity-80">
        <ScribbleSignature className="w-20 sm:w-24 h-10 sm:h-12" />
      </div>

      {/* Yellow Sticky Note */}
      <div
        className={`relative w-full max-w-[250px] sm:max-w-[280px] p-4 sm:p-5 bg-[#FFE66D] border-2 border-[#1D1C1A] rounded-xs transform -rotate-1 hover:rotate-0 transition-transform duration-200 ${
          isHighlighted ? 'ring-3 ring-[#1D1C1A] shadow-2xl' : 'shadow-sketch'
        }`}
        style={{
          boxShadow: isHighlighted
            ? '6px 12px 28px rgba(50, 40, 10, 0.28), 3px 4px 0px #1D1C1A'
            : '4px 6px 14px rgba(50, 40, 10, 0.16), 2px 3px 0px #1D1C1A',
          clipPath: 'polygon(1% 0%, 100% 1%, 99% 99%, 0% 98%)',
        }}
      >
        {/* Sparkle burst doodle near corner */}
        <div className="absolute -top-3.5 -right-2.5 text-[#1D1C1A] pointer-events-none z-20">
          <SparkleBurst className="w-5 h-5 text-[#1D1C1A]" />
        </div>

        {/* Subtle masking tape on top center */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none z-20">
          <MaskingTape width="w-16" height="h-5" angle="rotate-2" />
        </div>

        {/* Heading: Exact match "PHILOSOPHY" */}
        <h4 className="font-hand font-extrabold text-base sm:text-lg text-[#1D1C1A] tracking-wider mb-1.5">
          PHILOSOPHY
        </h4>

        {/* Exact Quote */}
        <p className="font-hand font-bold text-xs sm:text-sm leading-snug text-[#1D1C1A]">
          “If it's worth building, it's worth building from scratch. Keep it fast, keep it accessible.”
        </p>

        {/* Note signature: Exact match "— Kishlay" */}
        <div className="mt-2 text-right">
          <span className="font-hand text-xs sm:text-sm text-[#382F10] font-extrabold tracking-wide">
            — Kishlay
          </span>
        </div>
      </div>
    </div>
  );
};
