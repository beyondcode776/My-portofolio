import React, { useState, useEffect } from 'react';
import { ProjectsLedgerBadge } from './ProjectsLedgerBadge';
import { DevSprintChecklist } from './DevSprintChecklist';
import { GitWorkflowSketch } from './GitWorkflowSketch';
import { UserFlowDiagram } from './UserFlowDiagram';
import { CyberShieldCard } from './CyberShieldCard';
import { SavoraCard } from './SavoraCard';
import { MediaOnStakeCard } from './MediaOnStakeCard';
import { AgriOrbitCard } from './AgriOrbitCard';
import { SketchStar, PenDoodle } from '../Doodles';

/**
 * ProjectsPage Component — The Living Developer's Notebook (Page 04)
 * 
 * Recreates the exact technical notebook showcase matching the reference image:
 * - Header: 04 // TECHNICAL SHOWCASE + mustard underline + subtitle
 * - Top Badge: "PROJECTS LEDGER" clipped with a paperclip
 * - Top Right: DEV SPRINT checklist + Git workflow diagram ('ui-tuning')
 * - Left Column: User Flow Mapping diagram, CyberShield card, Savora card with coffee stain & backlog notes
 * - Right Column: MediaOnStake torn sheet, QA & Optimization note, Tech & Builds sticky note, AgriOrbit card
 * - Bottom CTA: "WANT TO BUILD SOMETHING? → CONTACT PAGE →"
 * - Coordinated entrance animations after notebook page turn finishes
 * - Byte companion is strictly excluded from Projects page
 */
export const ProjectsPage = ({ onNavigate, pageReady = true }) => {
  const [entrancePhase, setEntrancePhase] = useState(1);

  // Check user preference for reduced motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Coordinate entrance animation phases
  useEffect(() => {
    if (!pageReady) {
      setEntrancePhase(1);
      return;
    }

    if (prefersReducedMotion) {
      setEntrancePhase(6);
      return;
    }

    // Phase 1: Initial render
    setEntrancePhase(1);

    // Phase 2: Main heading + Dev Sprint & Git workflow
    const timer2 = setTimeout(() => setEntrancePhase(2), 100);
    // Phase 3: Project 01 (CyberShield) + User flow diagram
    const timer3 = setTimeout(() => setEntrancePhase(3), 250);
    // Phase 4: Project 03 (MediaOnStake) + Tech sticky note
    const timer4 = setTimeout(() => setEntrancePhase(4), 400);
    // Phase 5: Project 02 (Savora) + Project 04 (AgriOrbit)
    const timer5 = setTimeout(() => setEntrancePhase(5), 550);
    // Phase 6: Bottom annotations & Contact CTA settle
    const timer6 = setTimeout(() => setEntrancePhase(6), 700);

    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, [pageReady, prefersReducedMotion]);

  const showHeading = prefersReducedMotion || entrancePhase >= 2;
  const showTopRight = prefersReducedMotion || entrancePhase >= 2;
  const showProject1 = prefersReducedMotion || entrancePhase >= 3;
  const showProject3 = prefersReducedMotion || entrancePhase >= 4;
  const showProject2 = prefersReducedMotion || entrancePhase >= 5;
  const showProject4 = prefersReducedMotion || entrancePhase >= 5;
  const showBottomCTA = prefersReducedMotion || entrancePhase >= 6;

  return (
    <div className="relative w-full pt-1 sm:pt-2 pb-5 px-3 sm:px-6 md:px-10 select-none overflow-x-hidden min-h-[auto]">
      
      {/* ================= TOP SECTION: HEADING + PROJECTS LEDGER + DEV SPRINT & GIT WORKFLOW ================= */}
      <div className="max-w-6xl mx-auto mb-3 sm:mb-4">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3">
          
          {/* Left Heading Block */}
          <div className="relative flex-1">
            
            {/* PROJECTS LEDGER Badge clipped at the top */}
            <div className="mb-1.5">
              <ProjectsLedgerBadge />
            </div>

            {/* Main Title: 04 // TECHNICAL SHOWCASE */}
            <div className={`transition-opacity duration-300 ${showHeading ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative inline-block">
                <h2 className="font-condensed font-extrabold text-2xl sm:text-3xl md:text-[34px] text-[#1D1C1A] tracking-wider uppercase leading-none">
                  TECHNICAL SHOWCASE
                </h2>
                {/* Mustard-yellow hand-drawn underline */}
                <div
                  className="w-full h-2 sm:h-2.5 bg-[#E7BD58] opacity-90 mt-0.5 rounded-xs transform -rotate-0.5 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0% 15%, 2% 0%, 98% 5%, 100% 85%, 97% 100%, 3% 90%)',
                    boxShadow: '0 1px 3px rgba(231, 189, 88, 0.4)',
                  }}
                />
              </div>

              {/* Subtitle */}
              <p className="font-body text-xs sm:text-sm text-[#463F32] mt-1.5 font-medium max-w-xl leading-relaxed">
                A curated collection of digital interfaces, practical builds, and interactive experiences.
              </p>
            </div>

          </div>

          {/* Right Header Area: DEV SPRINT checklist + Git workflow diagram */}
          <div
            className={`flex flex-col sm:flex-row items-center sm:items-start gap-3 transition-all duration-500 ${
              showTopRight ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
            }`}
          >
            {/* Dev Sprint Checklist */}
            <DevSprintChecklist className="w-40 shrink-0" />

            {/* Git Workflow Branch Diagram */}
            <GitWorkflowSketch className="shrink-0 hidden md:block" />
          </div>

        </div>
      </div>

      {/* ================= MAIN TWO-COLUMN CONTENT GRID ================= */}
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-start"
        style={{
          gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)',
        }}
      >
        
        {/* ================= LEFT COLUMN: PROJECT 01 + PROJECT 02 ================= */}
        <div className="lg:col-span-1 space-y-4 sm:space-y-5">
          
          {/* Row with User Flow Diagram on left + CyberShield Card on right */}
          <div className="flex items-start gap-2.5 sm:gap-3">
            
            {/* Vertical User Flow Mapping Diagram in left margin */}
            <div className="hidden sm:block shrink-0 pt-1">
              <UserFlowDiagram />
            </div>

            {/* Project 01: CyberShield */}
            <div
              className={`flex-1 transition-all duration-500 ${
                showProject1 ? 'opacity-100 translate-y-0 animate-paper-drop' : 'opacity-0 -translate-y-4'
              }`}
              style={{ '--target-rotate': '-0.5deg' }}
            >
              <CyberShieldCard />
            </div>

          </div>

          {/* Project 02: Savora */}
          <div
            className={`transition-all duration-500 ${
              showProject2 ? 'opacity-100 translate-y-0 animate-paper-drop' : 'opacity-0 -translate-y-4'
            }`}
            style={{ '--target-rotate': '0.5deg' }}
          >
            <SavoraCard />
          </div>

        </div>

        {/* ================= RIGHT COLUMN: PROJECT 03 + PROJECT 04 ================= */}
        <div className="lg:col-span-1 space-y-4 sm:space-y-5">
          
          {/* Project 03: MediaOnStake */}
          <div
            className={`transition-all duration-500 ${
              showProject3 ? 'opacity-100 translate-y-0 animate-paper-drop' : 'opacity-0 -translate-y-4'
            }`}
            style={{ '--target-rotate': '-0.5deg' }}
          >
            <MediaOnStakeCard />
          </div>

          {/* Project 04: AgriOrbit */}
          <div
            className={`transition-all duration-500 ${
              showProject4 ? 'opacity-100 translate-y-0 animate-paper-drop' : 'opacity-0 -translate-y-4'
            }`}
            style={{ '--target-rotate': '0.5deg' }}
          >
            <AgriOrbitCard />
          </div>

        </div>

      </div>

      {/* ================= BOTTOM ANNOTATIONS & CONTACT CTA ================= */}
      <div
        className={`max-w-6xl mx-auto mt-5 sm:mt-6 pt-2.5 sm:pt-3 border-t-2 border-dashed border-[#DDD2BA] flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 transition-all duration-500 ${
          showBottomCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
        }`}
      >
        {/* Left Bottom Doodles & "git merge checkout main" */}
        <div className="flex items-center gap-2.5 sm:gap-3 text-[#1D1C1A]">
          {/* Note pad doodle with checkmark */}
          <svg viewBox="0 0 35 40" fill="none" className="w-5 sm:w-6 h-6 sm:h-7 text-[#1D1C1A]" aria-hidden="true">
            <rect x="2" y="2" width="28" height="34" rx="2" fill="#FAF5E8" stroke="currentColor" strokeWidth="2" />
            <path d="M 22 2 L 30 10 L 22 10 Z" fill="#E2D4B7" stroke="currentColor" strokeWidth="1.5" />
            <line x1="7" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.6" />
            <line x1="7" y1="20" x2="23" y2="20" stroke="currentColor" strokeWidth="1.6" />
            <path d="M 7 28 L 11 32 L 20 23" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          {/* Scribble lines */}
          <svg viewBox="0 0 70 20" fill="none" className="w-12 sm:w-14 h-3.5 sm:h-4 text-[#8C7F6A]" aria-hidden="true">
            <path d="M 2 12 C 15 2 25 18 40 8 C 55 18 65 4 68 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>

          {/* Hand-drawn annotation: git merge checkout main */}
          <span className="font-hand font-bold text-xs sm:text-[12px] text-[#1D1C1A] tracking-wide">
            git merge checkout main
          </span>
          <SketchStar className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#1D1C1A]" />
        </div>

        {/* Right Bottom CTA: WANT TO BUILD SOMETHING? → CONTACT PAGE → */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-end">
          <span className="font-condensed font-extrabold text-xs sm:text-sm md:text-base text-[#1D1C1A] uppercase tracking-wide">
            WANT TO BUILD SOMETHING?
          </span>

          <a
            href="#contact"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('contact');
              }
            }}
            className="group relative inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 bg-[#FAF6EE] hover:bg-[#E7BD58] text-[#1D1C1A] font-condensed font-extrabold text-xs sm:text-sm rounded-xs border-2 border-[#1D1C1A] shadow-sketch hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer focus:outline-hidden"
            style={{
              borderRadius: '4px 7px 3px 5px',
            }}
            title="Get in touch with Kishlay"
          >
            <span>→ CONTACT PAGE →</span>
          </a>

          {/* Pencil doodle near button */}
          <div className="hidden sm:block pointer-events-none text-[#1D1C1A] opacity-75">
            <PenDoodle className="w-3.5 sm:w-4 h-3.5 sm:h-4 transform rotate-45" />
          </div>
        </div>

      </div>

    </div>
  );
};