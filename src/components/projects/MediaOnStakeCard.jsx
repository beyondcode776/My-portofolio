import React from 'react';
import { MaskingTape } from '../Doodles';
import { ProjectCard, NotebookPreviewPanel } from './ProjectCard';

const MEDIAONSTAKE_URL = 'https://www.mediaonstake.com/';

/**
 * MediaOnStakeCard Component (Project 03)
 * Torn paper notebook sheet with binder perforations along left edge:
 * - Interactive ProjectCard wrapper with hover lift/tilt and link opening
 * - Title: "Project 03: MEDIAONSTAKE"
 * - Description: "Developed digital marketing sites with fundamentals."
 *   "Optimized UI/UX for better performance & responsiveness."
 * - Visual preview: Digital marketing agency analytics & growth engine
 * - Badges: [HTML] [SEO] [UI/UX]
 * - Button: LIVE ↗ linking to https://www.mediaonstake.com/
 * - Attached notes: QA & OPTIMIZATION + TECH & BUILDS yellow sticky note
 */
export const MediaOnStakeCard = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <ProjectCard href={MEDIAONSTAKE_URL} rotation="-0.5deg">
        {/* Torn-Paper Notebook Sheet with Binder Perforations */}
        <div
          className="relative w-full p-3 sm:p-4 pl-7 sm:pl-8 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs"
          style={{
            boxShadow: '3px 4px 0px #1D1C1A',
            clipPath: 'polygon(0% 1%, 99% 0%, 100% 98%, 1% 100%)',
          }}
        >
          {/* Binder Perforation Holes Along Left Edge */}
          <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-around py-3 pointer-events-none z-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-2 sm:w-2.5 h-3 sm:h-3.5 rounded-full border border-[#1D1C1A] bg-[#F7F3E8] shadow-inner opacity-80"
              />
            ))}
          </div>

          {/* Masking tape on top-left and top-right */}
          <div className="absolute -top-2.5 left-7 pointer-events-none z-20">
            <MaskingTape width="w-14 sm:w-16" height="h-4 sm:h-4.5" angle="-rotate-3" />
          </div>
          <div className="absolute -top-2.5 right-6 pointer-events-none z-20">
            <MaskingTape width="w-14 sm:w-16" height="h-4.5" angle="rotate-4" />
          </div>

          {/* Card Header */}
          <div className="mb-2">
            <h3 className="font-condensed font-extrabold text-base sm:text-lg md:text-xl text-[#1D1C1A] uppercase tracking-wide">
              Project 03: <span className="underline decoration-[#1D1C1A] decoration-2 underline-offset-3">MEDIAONSTAKE</span>
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#2D2820] mt-1 leading-relaxed">
              Developed digital marketing platforms focused on web fundamentals &amp; fast loading speeds.
            </p>
            <p className="font-body text-xs sm:text-sm text-[#2D2820] leading-relaxed">
              Optimized UI/UX architecture for conversion rate growth &amp; responsiveness.
            </p>
          </div>

          {/* Feature Showcase Panel with Words instead of command prompt box */}
          <NotebookPreviewPanel
            title="Agency Analytics &amp; Conversion Suite"
            tag="SEO + UI/UX PERFORMANCE"
            href={MEDIAONSTAKE_URL}
          >
            <div className="grid grid-cols-12 gap-2 items-center">
              {/* Left sidebar nav & services wireframe */}
              <div className="col-span-4 bg-[#FAF6EE] p-1.5 border border-[#CFC0A4] rounded-xs flex flex-col gap-1">
                <div className="h-2 bg-[#1D1C1A] w-4/5 rounded-2xs" />
                <div className="text-[10px] sm:text-[11px] font-condensed font-bold text-[#1D1C1A]">
                  Digital Agency UI
                </div>
                <div className="h-1 bg-[#D6CAA7] rounded-2xs" />
                <div className="h-1 bg-[#D6CAA7] rounded-2xs" />
                <div className="text-[9px] font-mono text-[#2E7D32] font-bold">
                  SEO Architecture ✓
                </div>
              </div>

              {/* Center line chart */}
              <div className="col-span-5 bg-[#FAF6EE] p-1.5 border border-[#CFC0A4] rounded-xs">
                <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-[#6E6352] pb-0.5">
                  <span className="font-bold text-[#1D1C1A]">Traffic &amp; Reach</span>
                  <span className="text-[#2E7D32] font-bold">+142%</span>
                </div>
                <svg viewBox="0 0 100 36" fill="none" className="w-full h-8">
                  <line x1="0" y1="9" x2="100" y2="9" stroke="#EAE0CC" strokeWidth="0.8" strokeDasharray="2 2" />
                  <line x1="0" y1="18" x2="100" y2="18" stroke="#EAE0CC" strokeWidth="0.8" strokeDasharray="2 2" />
                  <line x1="0" y1="27" x2="100" y2="27" stroke="#EAE0CC" strokeWidth="0.8" strokeDasharray="2 2" />
                  <path
                    d="M 5 28 Q 25 24 45 15 T 75 10 T 95 4"
                    stroke="#1D1C1A"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 5 28 Q 25 24 45 15 T 75 10 T 95 4 L 95 34 L 5 34 Z"
                    fill="#E7BD58"
                    fillOpacity="0.25"
                  />
                </svg>
              </div>

              {/* Right speedometer gauge */}
              <div className="col-span-3 bg-[#FAF6EE] p-1.5 border border-[#CFC0A4] rounded-xs flex flex-col items-center justify-center">
                <svg viewBox="0 0 40 25" className="w-9 h-6">
                  <path d="M 5 22 A 15 15 0 0 1 35 22" stroke="#E0D5BD" strokeWidth="3" fill="none" />
                  <path d="M 5 22 A 15 15 0 0 1 30 11" stroke="#2E7D32" strokeWidth="3" fill="none" />
                  <line x1="20" y1="22" x2="27" y2="13" stroke="#1D1C1A" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="20" cy="22" r="2" fill="#1D1C1A" />
                </svg>
                <span className="font-mono text-[9px] font-bold text-[#1D1C1A] mt-0.5">HIGH SPEED</span>
              </div>
            </div>
          </NotebookPreviewPanel>

          {/* Badges + LIVE Button */}
          <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
            <div className="flex items-center gap-1.5 flex-wrap">
              {['HTML', 'SEO', 'UI/UX'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] sm:text-xs font-bold text-[#1D1C1A] bg-[#E7BD58] px-2 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs group-hover:bg-[#F2C66D] transition-colors"
                >
                  [{t}]
                </span>
              ))}
            </div>

            <a
              href={MEDIAONSTAKE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 sm:px-4 py-1 bg-[#FAF6EE] hover:bg-[#E7BD58] text-[#1D1C1A] font-condensed font-extrabold text-xs sm:text-sm rounded-xs border-2 border-[#1D1C1A] shadow-sketch hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer focus:outline-hidden"
              style={{ borderRadius: '3px 6px 3px 5px' }}
              title="Visit MediaOnStake live"
              aria-label="Open MediaOnStake website in a new tab"
            >
              LIVE ↗
            </a>
          </div>
        </div>
      </ProjectCard>

      {/* Surrounding Notes: QA & OPTIMIZATION + TECH & BUILDS */}
      <div className="relative mt-2.5 flex flex-col sm:flex-row items-start justify-between gap-2.5">
        {/* QA & OPTIMIZATION Note with bigger text */}
        <div
          className="flex-1 p-2 sm:p-2.5 bg-[#FAF6EE] border border-[#1D1C1A] rounded-xs shadow-2xs transform rotate-0.5"
          style={{
            clipPath: 'polygon(0% 2%, 99% 0%, 100% 98%, 1% 100%)',
          }}
        >
          <div className="flex items-center justify-between border-b border-[#E0D5BD] pb-1 mb-1">
            <span className="font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wider uppercase">
              QA &amp; OPTIMIZATION ⚡
            </span>
            <span className="font-mono font-bold text-[9px] sm:text-[10px] text-[#2E7D32] bg-[#E8F5E9] px-1.5 py-0.5 rounded-2xs border border-[#A5D6A7]">
              VERIFIED
            </span>
          </div>
          <ul className="space-y-0.5 font-hand font-bold text-[11px] sm:text-xs text-[#2D2820]">
            <li className="flex items-center gap-1.5">
              <span className="text-[#2E7D32]">✓</span>
              <span>Performance Optimized</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-[#2E7D32]">✓</span>
              <span>W3C Standards Validated</span>
            </li>
            <li className="flex items-center gap-1.5">
              <span className="text-[#2E7D32]">✓</span>
              <span>Cross-browser responsive check</span>
            </li>
          </ul>
        </div>

        {/* TECH & BUILDS Sticky Note (Mustard Yellow with hand-drawn gears and wrench) */}
        <div
          className="w-32 sm:w-36 shrink-0 p-2 sm:p-2.5 bg-[#F2C66D] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform -rotate-1 self-center sm:self-start"
          style={{
            boxShadow: '3px 4px 0px #1D1C1A',
          }}
        >
          <div className="flex items-center justify-between border-b border-[#1D1C1A]/20 pb-1 mb-1">
            <span className="font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wider uppercase">
              TECH &amp; BUILDS
            </span>
            <span className="text-xs">🛠️</span>
          </div>

          {/* Hand-drawn gears, wrench & brackets icon cluster */}
          <div className="flex items-center justify-around py-1 text-[#1D1C1A]">
            {/* Gear */}
            <svg viewBox="0 0 32 32" className="w-5 h-5 animate-spin" style={{ animationDuration: '14s' }}>
              <path
                d="M 16 11 A 5 5 0 1 0 16 21 A 5 5 0 1 0 16 11 M 14 3 L 18 3 L 19 6 L 22 7 L 25 5 L 27 7 L 25 10 L 26 13 L 29 14 L 29 18 L 26 19 L 25 22 L 27 25 L 25 27 L 22 25 L 19 26 L 18 29 L 14 29 L 13 26 L 10 25 L 7 27 L 5 25 L 7 22 L 6 19 L 3 18 L 3 14 L 6 13 L 7 10 L 5 7 L 7 5 L 10 7 L 13 6 Z"
                fill="none"
                stroke="#1D1C1A"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            </svg>
            {/* Wrench */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 transform rotate-45">
              <path
                d="M 18 2 C 16 2 14.5 3 13.8 4.5 L 15.5 6.2 C 15.8 5.8 16.5 5.8 16.8 6.2 L 17.8 7.2 C 18.2 7.5 18.2 8.2 17.8 8.5 L 16.1 10.2 C 17.6 9.5 18.6 8 18.6 6 C 18.6 4.5 17.5 3.5 18 2 M 13.5 6.5 L 4 16 L 4 20 L 8 20 L 17.5 10.5 Z"
                fill="#1D1C1A"
              />
            </svg>
            {/* Code Brackets */}
            <span className="font-mono font-bold text-xs">{'</>'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};