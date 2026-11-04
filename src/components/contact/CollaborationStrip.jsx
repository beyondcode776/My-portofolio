import React from 'react';
import { MaskingTape } from '../Doodles';

/**
 * CollaborationStrip Component
 * Horizontal torn-paper notebook strip matching the exact reference:
 * - Cream graph-paper texture & subtle paper shadow
 * - Masking tape pieces at the corners
 * - Left: "LET'S BUILD" / "TOGETHER" (highlighted in mustard yellow)
 * - Middle: Hand-drawn handshake with radiating sparks and curved arrow
 * - Divider line
 * - Right: 3 checklist items (Web Apps, IoT Solutions, Full-Stack Projects) + hand-drawn laptop with </>
 */
export const CollaborationStrip = ({ className = "" }) => {
  return (
    <div className={`relative select-none ${className}`}>
      {/* Torn-Paper Notebook Strip */}
      <div
        className="relative p-2.5 sm:p-3 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform -rotate-0.5"
        style={{
          boxShadow: '3px 4px 10px rgba(45, 35, 20, 0.12), 2px 2px 0px #1D1C1A',
          backgroundImage: `
            linear-gradient(to right, rgba(29, 28, 26, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(29, 28, 26, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '16px 16px',
        }}
      >
        {/* 4 Corner Masking Tapes */}
        <div className="absolute -top-2.5 -left-3 pointer-events-none z-20">
          <MaskingTape width="w-10 sm:w-12" height="h-3.5 sm:h-4" angle="-rotate-12" />
        </div>
        <div className="absolute -top-2.5 -right-3 pointer-events-none z-20">
          <MaskingTape width="w-10 sm:w-12" height="h-3.5 sm:h-4" angle="rotate-15" />
        </div>
        <div className="absolute -bottom-2.5 -left-3 pointer-events-none z-20">
          <MaskingTape width="w-10 sm:w-12" height="h-3.5 sm:h-4" angle="rotate-6" />
        </div>
        <div className="absolute -bottom-2.5 -right-3 pointer-events-none z-20">
          <MaskingTape width="w-10 sm:w-12" height="h-3.5 sm:h-4" angle="-rotate-12" />
        </div>

        {/* Content Layout: Left, Middle, Right */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          
          {/* ================= LEFT SECTION: LET'S BUILD / TOGETHER ================= */}
          <div className="flex flex-col items-start leading-none shrink-0">
            <span className="font-condensed font-extrabold text-sm sm:text-base md:text-[17px] text-[#1D1C1A] tracking-wider uppercase">
              LET'S BUILD
            </span>
            {/* TOGETHER with Mustard-Yellow Marker Highlight */}
            <span
              className="mt-0.5 px-2 py-0.5 bg-[#F2C66D] border border-[#1D1C1A] rounded-2xs font-condensed font-extrabold text-sm sm:text-base md:text-[17px] text-[#1D1C1A] tracking-wider uppercase transform -rotate-1 shadow-2xs"
              style={{
                boxShadow: '1px 1.5px 0px #1D1C1A',
              }}
            >
              TOGETHER
            </span>
          </div>

          {/* ================= MIDDLE SECTION: HANDSHAKE + CURVED ARROW ================= */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex flex-col items-center">
              {/* Handshake Illustration with Radiating Sparklines */}
              <svg viewBox="0 0 54 36" fill="none" className="w-11 sm:w-13 h-7 sm:h-8 text-[#1D1C1A]">
                {/* 5 Radiating Sparks above handshake */}
                <line x1="16" y1="6" x2="14" y2="1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="22" y1="5" x2="21" y2="1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="27" y1="4" x2="27" y2="0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <line x1="32" y1="5" x2="33" y2="1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="38" y1="6" x2="40" y2="1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />

                {/* Left hand & sleeve */}
                <path d="M 2 24 L 14 18 L 22 22 L 20 28 L 10 30 L 2 24 Z" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                {/* Right hand & sleeve */}
                <path d="M 52 24 L 40 18 L 32 22 L 34 28 L 44 30 L 52 24 Z" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                
                {/* Clasped fingers */}
                <path d="M 20 18 C 24 14 30 14 34 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M 22 21 C 25 18 29 18 32 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 24 24 C 26 22 28 22 30 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <circle cx="27" cy="22" r="1.5" fill="currentColor" />
              </svg>

              {/* Curved arrow pointing down-right toward checklist */}
              <svg viewBox="0 0 32 16" fill="none" className="w-6 h-3 text-[#1D1C1A] -mt-0.5">
                <path d="M 4 2 C 12 12 20 12 28 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M 22 4 L 28 4 L 27 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Sketched Vertical Divider Line */}
            <div className="h-10 w-px bg-[#1D1C1A]/30 border-r border-dashed border-[#1D1C1A]/50 mx-1 hidden sm:block" />
          </div>

          {/* ================= RIGHT SECTION: CHECKLIST + LAPTOP ================= */}
          <div className="flex items-center justify-between gap-3 sm:gap-4 flex-1">
            {/* Checklist items */}
            <div className="space-y-0.5 font-hand font-extrabold text-[11px] sm:text-xs md:text-[13px] text-[#1D1C1A]">
              {/* Item 1: Web Apps (Checked) */}
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 border-1.5 border-[#1D1C1A] bg-[#FAF6EE] rounded-2xs flex items-center justify-center">
                  <span className="text-[#2E7D32] text-xs font-black leading-none">✓</span>
                </div>
                <span>Web Apps</span>
              </div>

              {/* Item 2: IoT Solutions */}
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 border-1.5 border-[#1D1C1A] bg-[#FAF6EE] rounded-2xs" />
                <span>IoT Solutions</span>
              </div>

              {/* Item 3: Full-Stack Projects */}
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 border-1.5 border-[#1D1C1A] bg-[#FAF6EE] rounded-2xs" />
                <span>Full-Stack Projects</span>
              </div>
            </div>

            {/* Far Right: Hand-drawn laptop illustration with </> */}
            <div className="shrink-0 flex items-center justify-center pl-1">
              <svg viewBox="0 0 40 32" fill="none" className="w-10 sm:w-12 h-8 sm:h-9 text-[#1D1C1A]">
                {/* Laptop Screen Body */}
                <rect x="6" y="3" width="28" height="19" rx="1.5" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.8" />
                {/* Inner Screen Display */}
                <rect x="8.5" y="5.5" width="23" height="14" rx="0.5" fill="#FAF6EE" stroke="currentColor" strokeWidth="1" strokeDasharray="2 1" />
                {/* Code symbol </> inside screen */}
                <text x="20" y="15.5" fill="#1D1C1A" fontFamily="monospace" fontSize="8.5" fontWeight="bold" textAnchor="middle">
                  {'</>'}
                </text>
                {/* Laptop Base / Keyboard */}
                <path d="M 2 23 L 38 23 C 38 26 35 27 32 27 L 8 27 C 5 27 2 26 2 23 Z" fill="#EDE4CE" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                {/* Trackpad notch */}
                <line x1="16" y1="24.5" x2="24" y2="24.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};