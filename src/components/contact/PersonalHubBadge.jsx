import React from 'react';
import { MaskingTape } from '../Doodles';
import { portfolioConfig } from '../../config/portfolioConfig';

/**
 * PersonalHubBadge Component
 * Circular hand-drawn seal / stamp badge matching the exact reference:
 * - Masking tape at top and bottom-right
 * - Text following circular path: "CLICK TO VISIT MY HUB" with stars & rockets
 * - Circular double-arrow illustration ↷ ↶
 * - Large handwritten letter "K" in the center
 * - Pointing hand doodle below & left
 * - "CLICK TO VIEW ALL LINKS →" label below
 */
export const PersonalHubBadge = ({ className = "" }) => {
  const hubUrl = portfolioConfig.personal.hubUrl || "https://github.com/beyondcode776";

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Pointing hand from the left/bottom pointing at the hub */}
      <div className="absolute -left-6 bottom-10 sm:-left-8 sm:bottom-12 pointer-events-none z-20">
        <svg viewBox="0 0 36 36" fill="none" className="w-8 h-8 text-[#1D1C1A] transform -rotate-12">
          {/* Hand pointing right-up */}
          <path d="M 6 24 C 6 18 10 14 16 14 L 28 14 C 30 14 32 16 32 18 C 32 20 30 22 26 22 L 20 22 C 20 24 20 26 18 28 C 16 30 10 30 6 24 Z" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M 28 14 L 32 18 L 26 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Extended index finger */}
          <line x1="22" y1="14" x2="32" y2="14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Another small pointing hand on the right pointing to "ALL LINKS" */}
      <div className="absolute -right-4 -bottom-1 pointer-events-none z-20">
        <svg viewBox="0 0 36 36" fill="none" className="w-6 h-6 text-[#1D1C1A] transform rotate-180">
          <path d="M 6 24 C 6 18 10 14 16 14 L 28 14 C 30 14 32 16 32 18 C 32 20 30 22 26 22 L 20 22 C 20 24 20 26 18 28 C 16 30 10 30 6 24 Z" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Circular Badge Button / Link */}
      <a
        href={hubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-hidden"
        title="Visit Kishlay's Personal Links Hub"
        aria-label="Open Personal Links Hub"
      >
        {/* Masking tape on top-center of circle */}
        <div className="absolute -top-3 left-1/4 pointer-events-none z-20">
          <MaskingTape width="w-14 sm:w-16" height="h-4 sm:h-4.5" angle="-rotate-6" />
        </div>

        {/* Masking tape on bottom-right of circle */}
        <div className="absolute -bottom-2 -right-3 pointer-events-none z-20">
          <MaskingTape width="w-12 sm:w-14" height="h-3.5 sm:h-4" angle="rotate-12" />
        </div>

        {/* The Circular Stamp Badge */}
        <div
          className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-38 md:h-38 rounded-full bg-[#FAF6EE] border-2 border-[#1D1C1A] flex items-center justify-center shadow-sketch"
          style={{
            boxShadow: '3px 4px 10px rgba(45, 35, 20, 0.15), 2px 2px 0px #1D1C1A',
          }}
        >
          {/* Inner dashed ring */}
          <div className="absolute inset-2 rounded-full border border-dashed border-[#1D1C1A]/60 pointer-events-none" />

          {/* SVG Circular Text Path & Curved Arrows */}
          <svg viewBox="0 0 200 200" className="w-full h-full p-1 overflow-visible">
            <defs>
              {/* Upper semicircle path for text */}
              <path
                id="hub-text-path-top"
                d="M 28 100 A 72 72 0 1 1 172 100"
                fill="none"
              />
              {/* Lower semicircle path for text */}
              <path
                id="hub-text-path-bottom"
                d="M 172 100 A 72 72 0 1 1 28 100"
                fill="none"
              />
            </defs>

            {/* Circular Text: Upper */}
            <text
              fill="#1D1C1A"
              fontFamily="monospace"
              fontSize="12.5"
              fontWeight="900"
              letterSpacing="2.5"
            >
              <textPath href="#hub-text-path-top" startOffset="50%" textAnchor="middle">
                CLICK TO VISIT MY HUB 🚀
              </textPath>
            </text>

            {/* Circular Text: Lower */}
            <text
              fill="#1D1C1A"
              fontFamily="monospace"
              fontSize="12.5"
              fontWeight="900"
              letterSpacing="2.5"
            >
              <textPath href="#hub-text-path-bottom" startOffset="50%" textAnchor="middle">
                CLICK TO VISIT MY HUB ✦
              </textPath>
            </text>

            {/* Inner ring */}
            <circle cx="100" cy="100" r="54" fill="none" stroke="#1D1C1A" strokeWidth="1.8" />

            {/* Circular Double-Arrow Illustration around center */}
            {/* Top clockwise arrow */}
            <path
              d="M 68 70 A 42 42 0 0 1 132 70"
              fill="none"
              stroke="#1D1C1A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M 126 62 L 134 70 L 126 78" fill="none" stroke="#1D1C1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Bottom counter-clockwise arrow */}
            <path
              d="M 132 130 A 42 42 0 0 1 68 130"
              fill="none"
              stroke="#1D1C1A"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path d="M 74 138 L 66 130 L 74 122" fill="none" stroke="#1D1C1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Large Handwritten Letter "K" in exact center */}
            <text
              x="100"
              y="114"
              fill="#1D1C1A"
              fontFamily="Kalam, Caveat, cursive"
              fontSize="56"
              fontWeight="900"
              textAnchor="middle"
              className="select-none"
            >
              K
            </text>
          </svg>
        </div>
      </a>

      {/* Underneath: "CLICK TO VIEW ALL LINKS →" Link */}
      <a
        href={hubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1.5 group/link inline-flex flex-col items-center text-center cursor-pointer focus:outline-hidden"
      >
        <span className="font-condensed font-extrabold text-xs sm:text-sm text-[#1D1C1A] uppercase tracking-wider group-hover/link:underline underline-offset-2">
          CLICK TO VIEW
        </span>
        <span className="font-condensed font-extrabold text-xs sm:text-sm text-[#1D1C1A] uppercase tracking-wider flex items-center gap-1 group-hover/link:underline underline-offset-2">
          ALL LINKS ➔
        </span>
      </a>
    </div>
  );
};