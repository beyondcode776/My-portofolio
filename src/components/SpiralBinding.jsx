import React from 'react';

/**
 * Realistic Spiral Wire Binding component inspired by the reference image
 * Features authentic paper punch holes, metallic dual-wire loops, and perforation fold line.
 */
export const SpiralBinding = ({ count = 28, className = "" }) => {
  // Generate rings
  const rings = Array.from({ length: count }, (_, i) => i);

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 w-11 sm:w-14 md:w-16 z-30 pointer-events-none select-none flex flex-col justify-between py-3 overflow-hidden bg-gradient-to-r from-[#DFD5BE] via-[#EADBCA] to-transparent ${className}`}
      aria-hidden="true"
    >
      {/* Perforation vertical seam */}
      <div className="absolute right-0 top-0 bottom-0 w-px border-r border-dashed border-[#C8BA9E]/60" />

      {/* Repeating spiral loops */}
      <div className="flex flex-col justify-between h-full w-full py-1">
        {rings.map((idx) => (
          <div key={idx} className="relative w-full h-5 flex items-center">
            {/* Paper Punch Hole */}
            <div
              className="absolute left-6 sm:left-7 md:left-8 w-2.5 sm:w-3.5 h-3.5 sm:h-4 rounded-full bg-[#2A231C]"
              style={{
                boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.8), inset -1px -1px 2px rgba(255,255,255,0.1), 0 1px 2px rgba(255,255,255,0.4)',
              }}
            />

            {/* Wire Spiral Loop */}
            <svg
              className="absolute left-0 w-10 sm:w-12 md:w-14 h-5 overflow-visible"
              viewBox="0 0 54 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Metallic Wire Gradient */}
                <linearGradient id={`wireGrad-${idx}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8A8275" />
                  <stop offset="25%" stopColor="#FFFFFF" />
                  <stop offset="50%" stopColor="#3E3832" />
                  <stop offset="85%" stopColor="#1E1C1A" />
                  <stop offset="100%" stopColor="#0F0E0C" />
                </linearGradient>
                <filter id={`wireShadow-${idx}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="1" dy="2" stdDeviation="1.2" floodColor="#1a140e" floodOpacity="0.45" />
                </filter>
              </defs>

              {/* Wire shadow on paper */}
              <path
                d="M -4 9 C 8 2, 22 2, 34 8"
                stroke="rgba(40, 30, 20, 0.35)"
                strokeWidth="4"
                strokeLinecap="round"
                transform="translate(1, 3)"
              />

              {/* Top loop going around the edge into the hole */}
              <path
                d="M -6 10 C 2 0, 22 0, 36 9 C 39 11, 41 12, 38 13 C 32 14, 18 10, -4 14"
                stroke={`url(#wireGrad-${idx})`}
                strokeWidth="3.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter={`url(#wireShadow-${idx})`}
              />

              {/* Highlight gleam on top of wire */}
              <path
                d="M 2 4 C 12 1, 24 1, 32 6"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};
