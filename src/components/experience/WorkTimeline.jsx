import React from 'react';
import { MaskingTape, SketchStar } from '../Doodles';
import { PencilSketchDoodle } from './PencilSketchDoodle';

/**
 * WorkTimeline Component
 * Left column of the Experience page:
 * - WORK EXPERIENCE heading with mustard highlight and git annotations (unobstructed)
 * - Compact hand-drawn vertical timeline with milestone nodes and dotted connectors
 * - 3 scaled-down paper cards: Freelance Developer, Mawai Infotech, Cybershield
 * - Pencil sketch and notebook doodles at bottom
 */
export const WorkTimeline = ({ entrancePhase = 5, prefersReducedMotion = false }) => {
  // Staggered visibility based on entrance phase
  const showHeading = prefersReducedMotion || entrancePhase >= 2;
  const showCard1 = prefersReducedMotion || entrancePhase >= 2;
  const showCard2 = prefersReducedMotion || entrancePhase >= 2;
  const showCard3 = prefersReducedMotion || entrancePhase >= 3;
  const showDoodles = prefersReducedMotion || entrancePhase >= 4;

  return (
    <div className="relative flex flex-col select-none">
      
      {/* ================= 1. HEADING WITH UNOBSTRUCTED GIT ANNOTATION ================= */}
      <div className={`relative mb-4 sm:mb-5 transition-opacity duration-300 ${showHeading ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-wrap items-end gap-3 sm:gap-5">
          {/* WORK EXPERIENCE Main Heading */}
          <div className="relative inline-block">
            <h2 className="font-condensed font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-[36px] text-[#1D1C1A] tracking-wider uppercase leading-none">
              WORK EXPERIENCE
            </h2>
            {/* Mustard-yellow hand-drawn underline */}
            <div
              className="w-full h-2 sm:h-2.5 bg-[#E7BD58] opacity-90 mt-1 rounded-xs transform -rotate-0.5 pointer-events-none"
              style={{
                clipPath: 'polygon(0% 15%, 2% 0%, 98% 5%, 100% 85%, 97% 100%, 3% 90%)',
                boxShadow: '0 1px 3px rgba(231, 189, 88, 0.4)',
              }}
            />
          </div>

          {/* Top git annotation with curved arrow (completely unobstructed) */}
          <div className="flex items-center gap-1.5 pb-1">
            <svg viewBox="0 0 32 20" fill="none" className="w-5 sm:w-6 h-4 text-[#1D1C1A]" aria-hidden="true">
              <path d="M 28 4 C 18 2 8 6 4 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M 10 14 L 3 15 L 5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="font-hand font-bold text-xs sm:text-[13px] text-[#1D1C1A] leading-tight select-none">
              <span>git merge</span><br />
              <span>checkout main</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. TIMELINE + COMPACT CARDS CONTAINER ================= */}
      <div className="relative flex items-start">
        
        {/* Left Hand-Drawn Timeline Line with Git Commit Label & Nodes */}
        <div className="relative w-10 sm:w-14 shrink-0 flex flex-col items-center pt-1">
          
          {/* "git commit" label above timeline */}
          <span className="font-hand font-bold text-xs sm:text-[13px] text-[#1D1C1A] whitespace-nowrap -ml-2 mb-1 select-none pointer-events-none">
            git commit
          </span>

          {/* SVG Compact Timeline Spine */}
          <div className="relative w-8 flex flex-col items-center">
            
            {/* The vertical drawn line */}
            <svg
              viewBox="0 0 20 460"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-[430px] sm:h-[460px] overflow-visible"
              aria-hidden="true"
            >
              {/* Vertical line with hand-drawn subtle wobble */}
              <path
                d="M 10 0 C 9.5 110 10.5 220 9.8 330 C 9.5 380 10.2 430 10 445"
                stroke="#1D1C1A"
                strokeWidth="2.2"
                strokeLinecap="round"
                className={prefersReducedMotion ? '' : 'animate-timeline-draw'}
              />
              {/* Bottom arrow tip ↓ */}
              <path
                d="M 5 435 L 10 448 L 15 435"
                stroke="#1D1C1A"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Milestone Node 1 (Freelance Developer) at cy=38 */}
              <circle cx="10" cy="38" r="6" fill="#EDE4CE" stroke="#1D1C1A" strokeWidth="2" />
              <circle cx="10" cy="38" r="2.5" fill="#1D1C1A" />

              {/* Milestone Node 2 (Mawai Infotech) at cy=180 */}
              <circle cx="10" cy="180" r="6" fill="#EDE4CE" stroke="#1D1C1A" strokeWidth="2" />
              <circle cx="10" cy="180" r="2.5" fill="#1D1C1A" />

              {/* Milestone Node 3 (Cybershield) at cy=330 */}
              <circle cx="10" cy="330" r="6" fill="#EDE4CE" stroke="#1D1C1A" strokeWidth="2" />
              <circle cx="10" cy="330" r="2.5" fill="#1D1C1A" />
            </svg>

            {/* Vertical annotation along timeline: "git merge checkout main" */}
            <div
              className="absolute top-36 -left-3.5 sm:-left-2.5 font-hand font-bold text-[11px] sm:text-xs text-[#1D1C1A] whitespace-nowrap transform -rotate-90 origin-top-left pointer-events-none select-none opacity-80"
            >
              git merge checkout main
            </div>
          </div>
        </div>

        {/* Right Cards Column */}
        <div className="flex-1 flex flex-col space-y-4 sm:space-y-5 pl-1 sm:pl-2">
          
          {/* ================= CARD 1: FREELANCE DEVELOPER ================= */}
          <div
            className={`relative flex items-center transition-all duration-500 ${
              showCard1
                ? 'opacity-100 translate-y-0 animate-paper-drop'
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ '--target-rotate': '-0.5deg' }}
          >
            {/* Dotted horizontal connector line from milestone node */}
            <div className="absolute -left-5 sm:-left-7 top-6 w-5 sm:w-7 border-b-2 border-dotted border-[#1D1C1A] pointer-events-none" />

            {/* The Paper Card with hover popup interaction */}
            <div
              className="relative w-full p-3 sm:p-3.5 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform -rotate-0.5 hover:-translate-y-1.5 sm:hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl hover:border-black active:translate-y-0 active:scale-[0.99] transition-all duration-250 cursor-default"
              style={{
                boxShadow: '3px 5px 14px rgba(45, 35, 20, 0.12), 2px 2px 0px #1D1C1A',
                clipPath: 'polygon(0% 1%, 99% 0%, 100% 98%, 1% 100%)',
              }}
            >
              {/* Masking tape top-left & top-right */}
              <div className="absolute -top-2.5 left-6 pointer-events-none z-20">
                <MaskingTape width="w-14 sm:w-16" height="h-4.5" angle="-rotate-6" />
              </div>
              <div className="absolute -top-2.5 right-6 pointer-events-none z-20">
                <MaskingTape width="w-14 sm:w-16" height="h-4.5" angle="rotate-8" />
              </div>

              {/* Title & Date */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5 border-b border-[#E0D5BD] pb-1">
                <h3 className="font-condensed font-extrabold text-base sm:text-lg md:text-[19px] text-[#1D1C1A] uppercase tracking-wide leading-tight">
                  FREELANCE DEVELOPER
                </h3>
                <span className="font-hand font-bold text-xs sm:text-[13px] text-[#463F32]">
                  (Feb 2026 – Present)
                </span>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-1 font-body text-xs sm:text-[13px] text-[#2D2820] leading-relaxed mb-2.5">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#1D1C1A] mt-0.5 select-none font-bold">●</span>
                  <span>Delivering bespoke web solutions & full-stack apps for clients.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#1D1C1A] mt-0.5 select-none font-bold">●</span>
                  <span>Translating user needs into responsive frontends & robust database APIs.</span>
                </li>
              </ul>

              {/* Technology Tags in Mustard Yellow Badges */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1D1C1A] bg-[#E7BD58] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs">
                  [REACT]
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1D1C1A] bg-[#E7BD58] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs">
                  [NODE.JS]
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1D1C1A] bg-[#E7BD58] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs">
                  [APIs]
                </span>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: FULL STACK DEV INTERN (MAWAI INFOTECH) ================= */}
          <div
            className={`relative flex items-center transition-all duration-500 delay-100 ${
              showCard2
                ? 'opacity-100 translate-y-0 animate-paper-drop'
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ '--target-rotate': '0.5deg' }}
          >
            {/* Dotted horizontal connector line */}
            <div className="absolute -left-5 sm:-left-7 top-6 w-5 sm:w-7 border-b-2 border-dotted border-[#1D1C1A] pointer-events-none" />

            {/* The Paper Card with hover popup interaction */}
            <div
              className="relative w-full p-3 sm:p-3.5 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform rotate-0.5 hover:-translate-y-1.5 sm:hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl hover:border-black active:translate-y-0 active:scale-[0.99] transition-all duration-250 cursor-default"
              style={{
                boxShadow: '3px 5px 14px rgba(45, 35, 20, 0.12), 2px 2px 0px #1D1C1A',
                clipPath: 'polygon(1% 0%, 100% 1%, 99% 99%, 0% 98%)',
              }}
            >
              {/* Masking tape on corners */}
              <div className="absolute -top-2.5 left-8 pointer-events-none z-20">
                <MaskingTape width="w-14 sm:w-16" height="h-4.5" angle="-rotate-3" />
              </div>
              <div className="absolute -top-2.5 right-8 pointer-events-none z-20">
                <MaskingTape width="w-14 sm:w-16" height="h-4.5" angle="rotate-4" />
              </div>

              {/* Title & Dates */}
              <div className="flex items-start justify-between gap-2 mb-1.5 border-b border-[#E0D5BD] pb-1">
                <div>
                  <h3 className="font-condensed font-extrabold text-base sm:text-lg md:text-[19px] text-[#1D1C1A] uppercase tracking-wide leading-tight">
                    FULL STACK DEV INTERN /<br />
                    MAWAI INFOTECH LIMITED
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-hand font-bold text-xs sm:text-[13px] text-[#463F32] block leading-tight">
                    May 2026<br />– July 2026
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-1 font-body text-xs sm:text-[13px] text-[#2D2820] leading-relaxed mb-2.5">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#1D1C1A] mt-0.5 select-none font-bold">●</span>
                  <span>Worked on frontend and backend development tasks.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#1D1C1A] mt-0.5 select-none font-bold">●</span>
                  <span>Gained hands-on experience in full-stack application development.</span>
                </li>
              </ul>

              {/* Tags & Annotation: Shipped 10+ builds! */}
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1D1C1A] bg-[#E7BD58] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs">
                    [NODEJS]
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1D1C1A] bg-[#E7BD58] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs">
                    [SQL]
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1D1C1A] bg-[#E7BD58] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs">
                    [FULL-STACK]
                  </span>
                </div>

                {/* Hand-drawn note: Shipped 10+ builds! */}
                <div className="flex items-center gap-1 text-[#1D1C1A] pointer-events-none">
                  <svg viewBox="0 0 24 14" fill="none" className="w-5 h-3 text-[#1D1C1A]" aria-hidden="true">
                    <path d="M 2 4 C 8 1 16 2 20 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M 16 9 L 21 9 L 20 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-hand font-bold text-xs sm:text-[13px] text-[#1D1C1A] whitespace-nowrap">
                    Shipped 10+ builds!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CARD 3: REACT DEV INTERN (CYBERSHIELD) ================= */}
          <div
            className={`relative flex items-center transition-all duration-500 delay-200 ${
              showCard3
                ? 'opacity-100 translate-y-0 animate-paper-drop'
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ '--target-rotate': '-0.5deg' }}
          >
            {/* Dotted horizontal connector line */}
            <div className="absolute -left-5 sm:-left-7 top-6 w-5 sm:w-7 border-b-2 border-dotted border-[#1D1C1A] pointer-events-none" />

            {/* The Paper Card with hover popup interaction */}
            <div
              className="relative w-full p-3 sm:p-3.5 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform -rotate-0.5 hover:-translate-y-1.5 sm:hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl hover:border-black active:translate-y-0 active:scale-[0.99] transition-all duration-250 cursor-default"
              style={{
                boxShadow: '3px 5px 14px rgba(45, 35, 20, 0.12), 2px 2px 0px #1D1C1A',
                clipPath: 'polygon(0% 1%, 99% 0%, 100% 98%, 1% 100%)',
              }}
            >
              {/* Masking tape on corners */}
              <div className="absolute -top-2.5 left-6 pointer-events-none z-20">
                <MaskingTape width="w-14 sm:w-16" height="h-4.5" angle="-rotate-5" />
              </div>
              <div className="absolute -top-2.5 right-6 pointer-events-none z-20">
                <MaskingTape width="w-14 sm:w-16" height="h-4.5" angle="rotate-6" />
              </div>

              {/* Title & Dates */}
              <div className="flex items-start justify-between gap-2 mb-1.5 border-b border-[#E0D5BD] pb-1">
                <div>
                  <h3 className="font-condensed font-extrabold text-base sm:text-lg md:text-[19px] text-[#1D1C1A] uppercase tracking-wide leading-tight">
                    REACT DEV INTERN<br />
                    CYBERSHIELD PVT LTD
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-hand font-bold text-xs sm:text-[13px] text-[#463F32] block leading-tight">
                    July 2025<br />– Oct 2025
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-1 font-body text-xs sm:text-[13px] text-[#2D2820] leading-relaxed mb-2.5">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#1D1C1A] mt-0.5 select-none font-bold">●</span>
                  <span>Customized existing React.js components, page layouts, and UI elements based on project requirements.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#1D1C1A] mt-0.5 select-none font-bold">●</span>
                  <span>Worked on frontend improvements, styling adjustments, and responsive UI.</span>
                </li>
              </ul>

              {/* Technology Badges */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1D1C1A] bg-[#E7BD58] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs">
                  [REACT]
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1D1C1A] bg-[#E7BD58] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs">
                  [TAILWIND CSS]
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1D1C1A] bg-[#E7BD58] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs">
                  [UX/UI]
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= 3. BOTTOM DOODLES & PENCIL SKETCH ================= */}
      <div
        className={`relative mt-4 sm:mt-5 flex items-center justify-between pointer-events-none transition-opacity duration-300 ${
          showDoodles ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Pencil illustration positioned at bottom left */}
        <div className="ml-2 sm:ml-4 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
          <PencilSketchDoodle className="w-6 sm:w-7 h-16 sm:h-20" />
        </div>

        {/* Small hand-drawn star */}
        <div className="mr-8 text-[#1D1C1A] opacity-75">
          <SketchStar className="w-5 h-5 transform rotate-6" />
        </div>
      </div>

    </div>
  );
};
