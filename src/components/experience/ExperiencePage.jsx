import React, { useState, useEffect } from 'react';
import { WorkTimeline } from './WorkTimeline';
import { AchievementsSection } from './AchievementsSection';
import { SketchStar, PenDoodle } from '../Doodles';

/**
 * ExperiencePage Component — The Living Developer's Notebook (Page 03)
 * 
 * Recreates the exact composition, typography, and paper aesthetic of the reference image:
 * - Two-column scrapbooking composition aligned at the top
 * - Left: WORK EXPERIENCE timeline with git annotations and 3 paper cards
 * - Right: ACHIEVEMENTS & AWARDS with Technoxian robotics lab sheet, Hackathon, Campus Ambassador, and My Focus note
 * - Coordinated entrance animations after notebook page-turn finishes
 * - Byte robot companion is strictly removed from Experience page (reserved exclusively for About page)
 * - Bottom CTA: WANT TO SEE WHAT I BUILT? → PROJECTS PAGE →
 */
export const ExperiencePage = ({ onNavigate, pageReady = true }) => {
  const [entrancePhase, setEntrancePhase] = useState(1);

  // Check user preference for reduced motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Coordinate entrance animation phases after pageReady triggers
  useEffect(() => {
    if (!pageReady) {
      setEntrancePhase(1);
      return;
    }

    if (prefersReducedMotion) {
      setEntrancePhase(5);
      return;
    }

    // Phase 1 is initial render
    setEntrancePhase(1);

    // Phase 2: Work Experience heading & timeline draw
    const timer2 = setTimeout(() => setEntrancePhase(2), 100);
    // Phase 3: Achievements heading & Technoxian sheet drop
    const timer3 = setTimeout(() => setEntrancePhase(3), 250);
    // Phase 4: Ambassador card & My Focus note settle
    const timer4 = setTimeout(() => setEntrancePhase(4), 400);
    // Phase 5: Bottom CTA and annotations settle into place
    const timer5 = setTimeout(() => setEntrancePhase(5), 550);

    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [pageReady, prefersReducedMotion]);

  const showBottomCTA = prefersReducedMotion || entrancePhase >= 5;

  return (
    <div className="relative w-full pt-2 sm:pt-4 pb-4 sm:pb-6 px-4 sm:px-8 md:px-12 select-none overflow-x-hidden min-h-[auto]">
      
      {/* ================= MAIN TWO-COLUMN CONTENT GRID ================= */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
        style={{
          gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
        }}
      >
        
        {/* ================= LEFT COLUMN: WORK EXPERIENCE ================= */}
        <div className="lg:col-span-1">
          <WorkTimeline
            entrancePhase={entrancePhase}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>

        {/* ================= RIGHT COLUMN: ACHIEVEMENTS & AWARDS ================= */}
        <div className="lg:col-span-1">
          <AchievementsSection
            entrancePhase={entrancePhase}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>

      </div>

      {/* ================= BOTTOM ANNOTATIONS & PROJECTS CTA ================= */}
      <div
        className={`max-w-7xl mx-auto mt-6 sm:mt-8 pt-3 sm:pt-4 border-t-2 border-dashed border-[#DDD2BA] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 transition-all duration-500 ${
          showBottomCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {/* Left Bottom Doodles & "git merge checkout main" */}
        <div className="flex items-center gap-3 sm:gap-4 text-[#1D1C1A]">
          {/* Note pad doodle with checkmark */}
          <svg viewBox="0 0 35 40" fill="none" className="w-6 sm:w-7 h-7 sm:h-8 text-[#1D1C1A]" aria-hidden="true">
            <rect x="2" y="2" width="28" height="34" rx="2" fill="#FAF5E8" stroke="currentColor" strokeWidth="2" />
            <path d="M 22 2 L 30 10 L 22 10 Z" fill="#E2D4B7" stroke="currentColor" strokeWidth="1.5" />
            <line x1="7" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.6" />
            <line x1="7" y1="20" x2="23" y2="20" stroke="currentColor" strokeWidth="1.6" />
            {/* Checkmark */}
            <path d="M 7 28 L 11 32 L 20 23" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Scribble lines */}
          <svg viewBox="0 0 70 20" fill="none" className="w-14 sm:w-16 h-4 sm:h-5 text-[#8C7F6A]" aria-hidden="true">
            <path d="M 2 12 C 15 2 25 18 40 8 C 55 18 65 4 68 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>

          {/* Hand-drawn annotation: git merge checkout main */}
          <span className="font-hand font-bold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wide">
            git merge checkout main
          </span>
          <SketchStar className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#1D1C1A]" />
        </div>

        {/* Right Bottom CTA: WANT TO SEE WHAT I BUILT? → PROJECTS PAGE → */}
        <div className="flex items-center gap-2.5 sm:gap-4 flex-wrap justify-end">
          <span className="font-condensed font-extrabold text-sm sm:text-base md:text-lg text-[#1D1C1A] uppercase tracking-wide">
            WANT TO SEE WHAT I BUILT?
          </span>

          <a
            href="#projects"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('projects');
              }
            }}
            className="group relative inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-[#FAF6EE] hover:bg-[#E7BD58] text-[#1D1C1A] font-condensed font-extrabold text-sm sm:text-base rounded-xs border-2 border-[#1D1C1A] shadow-sketch hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer focus:outline-hidden"
            style={{
              borderRadius: '4px 8px 3px 6px',
            }}
            title="Proceed to projects and builds"
          >
            <span>→ PROJECTS PAGE →</span>
          </a>

          {/* Pencil doodle near button */}
          <div className="hidden sm:block pointer-events-none text-[#1D1C1A] opacity-75">
            <PenDoodle className="w-4 sm:w-5 h-4 sm:h-5 transform rotate-45" />
          </div>
        </div>

      </div>

    </div>
  );
};
