import React from 'react';

/**
 * ProjectsLedgerBadge Component
 * A tilted paper slip clipped to the top of the notebook page with a metallic paperclip.
 * Matches the reference image: "PROJECTS LEDGER"
 */
export const ProjectsLedgerBadge = ({ className = "" }) => {
  return (
    <div className={`relative inline-flex items-center select-none pointer-events-none ${className}`}>
      {/* Paperclip hanging from the top */}
      <div className="absolute -top-3.5 left-4 z-20 text-[#2D2820]">
        <svg viewBox="0 0 24 38" fill="none" className="w-5 h-8 drop-shadow-sm" aria-hidden="true">
          {/* Metallic wire loop */}
          <path
            d="M 6 12 L 6 28 C 6 33 16 33 16 28 L 16 8 C 16 2 9 2 9 8 L 9 24 C 9 27 13 27 13 24 L 13 11"
            stroke="#4A453C"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 6 12 L 6 28 C 6 33 16 33 16 28 L 16 8 C 16 2 9 2 9 8 L 9 24 C 9 27 13 27 13 24 L 13 11"
            stroke="#D6CCB6"
            strokeWidth="0.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* The paper slip */}
      <div
        className="relative px-3.5 py-1.5 pt-2 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch-sm transform -rotate-2"
        style={{
          boxShadow: '2px 3px 0px #1D1C1A',
          clipPath: 'polygon(0% 4%, 98% 0%, 100% 96%, 2% 100%)',
        }}
      >
        <span className="font-condensed font-extrabold text-xs sm:text-sm tracking-wider uppercase text-[#1D1C1A]">
          PROJECTS LEDGER
        </span>
      </div>
    </div>
  );
};
