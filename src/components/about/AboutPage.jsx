import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SparkleBurst, SketchStar, UnderlineScribble } from '../Doodles';
import { JourneySheet } from './JourneySheet';
import { ToolkitCards } from './ToolkitCards';
import { EducationSheet } from './EducationSheet';
import { LabTinkeringSheet } from './LabTinkeringSheet';
import { ByteCompanion } from '../ByteCompanion';

/**
 * AboutPage Component — The Living Developer's Notebook
 *
 * KEY BEHAVIOR:
 * - Byte is position:fixed on the right side of the viewport
 * - As the page scrolls, Byte's vertical position continuously tracks the active target element
 * - This means Byte always appears beside the current section, no matter where the user scrolls
 * - Automatic viewport scrolling brings each section into view
 * - Pause/Resume and Restart are the only controls
 */
export const AboutPage = ({ onNavigate, pageReady = true }) => {
  const notebookContainerRef = useRef(null);

  // Section Refs for targeting
  const introHeadingRef = useRef(null);
  const journeyRef = useRef(null);
  const educationRef = useRef(null);
  const labRef = useRef(null);
  const toolkitRef = useRef(null);
  const frontendCardRef = useRef(null);
  const backendCardRef = useRef(null);
  const otherGearsCardRef = useRef(null);
  const ctaRef = useRef(null);

  // The 7 Guided Tour Stages
  const stages = [
    {
      id: 'journey',
      stepNumber: 1,
      title: '1/7: THE JOURNEY',
      speech: "Every great project starts with understanding the problem! Let's explore your journey.",
      targetRef: journeyRef,
      armPose: 'point-left',
      lookDirection: 'left',
      headTilt: -4,
      activeSection: 'journey',
      activeToolkitCard: null,
      duration: 5200,
    },
    {
      id: 'education',
      stepNumber: 2,
      title: '2/7: EDUCATION',
      speech: "Learning is where every great build begins!",
      targetRef: educationRef,
      armPose: 'point-left',
      lookDirection: 'left',
      headTilt: -4,
      activeSection: 'education',
      activeToolkitCard: null,
      duration: 4400,
    },
    {
      id: 'lab',
      stepNumber: 3,
      title: '3/7: WORKSPACE',
      speech: "Circuits, sensors, robots... now we're talking!",
      targetRef: labRef,
      armPose: 'point-left',
      lookDirection: 'left',
      headTilt: -4,
      activeSection: 'lab',
      activeToolkitCard: null,
      duration: 4400,
    },
    {
      id: 'frontend',
      stepNumber: 4,
      title: '4/7: FRONTEND',
      speech: "Here's where the interfaces come to life!",
      targetRef: frontendCardRef,
      armPose: 'point-left',
      lookDirection: 'left',
      headTilt: -4,
      activeSection: 'toolkit',
      activeToolkitCard: 'frontend',
      duration: 4200,
    },
    {
      id: 'backend',
      stepNumber: 5,
      title: '5/7: BACKEND',
      speech: "Behind every great interface is a system that works!",
      targetRef: backendCardRef,
      armPose: 'point-left',
      lookDirection: 'left',
      headTilt: -4,
      activeSection: 'toolkit',
      activeToolkitCard: 'backend',
      duration: 4200,
    },
    {
      id: 'otherGears',
      stepNumber: 6,
      title: '6/7: OTHER GEARS',
      speech: "Different tools, one goal: building something useful!",
      targetRef: otherGearsCardRef,
      armPose: 'point-left',
      lookDirection: 'left',
      headTilt: -4,
      activeSection: 'toolkit',
      activeToolkitCard: 'otherGears',
      duration: 4200,
    },
    {
      id: 'philosophy',
      stepNumber: 7,
      title: '7/7: PHILOSOPHY',
      speech: "One last thing, Kishlay: build with purpose, keep it simple, and make it useful.",
      targetRef: ctaRef,
      armPose: 'thumbs-up',
      lookDirection: 'center',
      headTilt: 0,
      activeSection: 'philosophy',
      activeToolkitCard: null,
      duration: 8500,
    },
  ];

  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const currentStage = stages[currentStageIndex];

  // Byte is FIXED to the viewport right side.
  // byteY is the viewport Y coordinate (top offset in px)
  const [byteY, setByteY] = useState(120);
  const [isTraveling, setIsTraveling] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const isAutoScrollingRef = useRef(false);
  const rafRef = useRef(null);
  const currentStageRef = useRef(currentStageIndex);
  currentStageRef.current = currentStageIndex;

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // -----------------------------------------------------------------------
  // CORE: Calculate Byte's container-relative Y position from the active target
  // element. Byte is absolute inside the notebook container so it synchronizes
  // with the page content and scrolls naturally with the notebook.
  // -----------------------------------------------------------------------
  const syncByteYToTarget = useCallback((targetIndex) => {
    const stage = stages[targetIndex];
    const targetEl = stage?.targetRef?.current;
    const container = notebookContainerRef.current;

    if (!targetEl || !container) {
      setByteY(120);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();
    const relativeY = targetRect.top - containerRect.top + 10;
    setByteY(Math.max(20, relativeY));
  }, []);

  // Update Byte position on window resize
  useEffect(() => {
    if (!hasStarted) return;

    const onResize = () => {
      syncByteYToTarget(currentStageRef.current);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [hasStarted, syncByteYToTarget]);

  // -----------------------------------------------------------------------
  // Auto-scroll viewport to bring active section into comfortable view
  // -----------------------------------------------------------------------
  const autoScrollToTarget = useCallback((targetIndex) => {
    if (prefersReducedMotion) return;
    const stage = stages[targetIndex];
    const targetEl = stage?.targetRef?.current;
    if (!targetEl) return;

    const rect = targetEl.getBoundingClientRect();
    const HEADER_H = 80;

    // Already well visible? Skip.
    if (rect.top >= HEADER_H + 20 && rect.bottom <= window.innerHeight - 40) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const targetScrollY = Math.max(0, rect.top + scrollY - HEADER_H - 20);

    isAutoScrollingRef.current = true;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' });

    setTimeout(() => {
      isAutoScrollingRef.current = false;
    }, 900);
  }, [prefersReducedMotion]);

  // -----------------------------------------------------------------------
  // Initialize tour once page is ready
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (!pageReady) return;

    setCurrentStageIndex(0);
    setIsPaused(false);
    setHasStarted(false);

    const initTimer = setTimeout(() => {
      setHasStarted(true);
      syncByteYToTarget(0);
      autoScrollToTarget(0);
    }, 200);

    return () => clearTimeout(initTimer);
  }, [pageReady]);

  // -----------------------------------------------------------------------
  // When stage changes: update Byte Y, scroll viewport, animate travel
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (!hasStarted) return;

    setIsTraveling(true);
    syncByteYToTarget(currentStageIndex);
    autoScrollToTarget(currentStageIndex);

    const travelTimer = setTimeout(() => setIsTraveling(false), 700);
    return () => clearTimeout(travelTimer);
  }, [currentStageIndex, hasStarted, syncByteYToTarget, autoScrollToTarget]);

  // -----------------------------------------------------------------------
  // Auto-advance timer
  // -----------------------------------------------------------------------
  useEffect(() => {
    if (!pageReady || !hasStarted || isPaused) return;

    const stepDuration = stages[currentStageIndex].duration || 4500;
    const timer = setTimeout(() => {
      if (currentStageIndex < stages.length - 1) {
        setCurrentStageIndex((prev) => prev + 1);
      } else {
        // Step 7 complete: auto-reset progress to Step 1 in PAUSED state
        setCurrentStageIndex(0);
        setIsPaused(true);
        syncByteYToTarget(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, stepDuration);

    return () => clearTimeout(timer);
  }, [pageReady, hasStarted, isPaused, currentStageIndex]);

  // Pause on manual user scroll (but not during programmatic scroll)
  useEffect(() => {
    const handleUserScroll = () => {
      if (!isAutoScrollingRef.current && !isPaused && hasStarted) {
        setIsPaused(true);
      }
    };
    window.addEventListener('wheel', handleUserScroll, { passive: true });
    window.addEventListener('touchmove', handleUserScroll, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleUserScroll);
      window.removeEventListener('touchmove', handleUserScroll);
    };
  }, [isPaused, hasStarted]);

  // Tour Controls
  const handleTogglePause = () => setIsPaused((prev) => !prev);

  const handleRestart = () => {
    setCurrentStageIndex(0);
    setIsPaused(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => syncByteYToTarget(0), 300);
  };

  // -----------------------------------------------------------------------
  // RENDER
  // -----------------------------------------------------------------------
  return (
    <div
      ref={notebookContainerRef}
      className={`relative w-full pt-3 sm:pt-5 pb-5 px-4 sm:px-8 md:px-12 select-none overflow-x-hidden min-h-[auto] transition-opacity duration-300 ${
        pageReady ? 'opacity-100' : 'opacity-0'
      }`}
    >

      {/* ================= BYTE COMPANION — SYNCHRONIZED WITH NOTEBOOK ================= */}
      {/* Absolute positioning inside the notebook container means Byte travels naturally
          with page scrolling while smoothly animating to active sections. */}
      {hasStarted && (
        <div
          className={`absolute right-2 sm:right-5 md:right-8 z-40 pointer-events-none ${
            prefersReducedMotion ? '' : 'transition-[top] duration-500 ease-out'
          }`}
          style={{ top: `${byteY}px` }}
          aria-hidden="false"
        >
          <div className="pointer-events-auto">
            <ByteCompanion
              state="idle"
              speechText={currentStage.speech}
              speechVisible={true}
              stepLabel={currentStage.title}
              currentStep={currentStage.stepNumber}
              totalSteps={stages.length}
              isPhilosophyStep={currentStage.id === 'philosophy'}
              isPaused={isPaused}
              onTogglePause={handleTogglePause}
              onRestart={handleRestart}
              onClick={handleTogglePause}
              armPose={currentStage.armPose}
              lookDirection={currentStage.lookDirection}
              headTilt={currentStage.headTilt}
              bounce={isTraveling}
            />
          </div>
        </div>
      )}

      {/* ================= MAIN HEADING: 02 / ABOUT ME ================= */}
      <div
        ref={introHeadingRef}
        className="max-w-6xl mx-auto mb-4 sm:mb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-3"
      >
        <div>
          <div className="flex items-center gap-2 mb-0.5 text-[#1D1C1A]">
            <SparkleBurst className="w-7 h-7 sm:w-8 sm:h-8 transform -rotate-12" />
          </div>

          <h1 className="font-hand font-extrabold text-3xl sm:text-5xl md:text-6xl text-[#1D1C1A] tracking-tight leading-none">
             ABOUT ME
          </h1>

          <p className="mt-1 font-body text-sm sm:text-base md:text-lg font-medium text-[#383329]">
            Designing custom systems and writing real code, the raw way.
          </p>

          <div className="mt-0.5">
            <UnderlineScribble className="w-48 sm:w-64 h-2.5 text-[#1D1C1A]" />
          </div>
        </div>

        {/* Live tour status badge */}
        <div className="flex items-center gap-2 self-start sm:self-end pt-1">
          <div className="px-2.5 py-1 text-xs font-hand font-bold bg-[#FAF4E5] border border-[#1D1C1A] rounded-xs shadow-2xs flex items-center gap-1.5 text-[#2C2720]">
            <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'}`} />
            <span>{isPaused ? 'Tour Paused' : `Auto-Tour (${currentStage.stepNumber}/7)`}</span>
          </div>
        </div>
      </div>

      {/* ================= TWO-COLUMN NOTEBOOK COMPOSITION ================= */}
      {/* RIGHT side has extra padding to prevent Byte (fixed right:16px) from
          overlapping the card content. Byte is ~140px wide.                   */}
      <div
        className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start"
        style={{ gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 1fr)' }}
      >

        {/* ====== LEFT COLUMN: THE JOURNEY & TOOLKIT ====== */}
        <div className="lg:col-span-1 flex flex-col space-y-4 sm:space-y-5">

          {/* Stage 1: The Journey */}
          <div
            ref={journeyRef}
            id="section-journey"
            className={`transition-all duration-300 ${
              currentStage.activeSection === 'journey'
                ? 'ring-3 ring-[#F2C66D] rounded-xs shadow-2xl scale-[1.01]'
                : ''
            }`}
          >
            <JourneySheet />
          </div>

          {/* Stages 4-6: Tech Arsenal */}
          <div
            ref={toolkitRef}
            id="section-toolkit"
            className={`transition-all duration-300 ${
              currentStage.activeSection === 'toolkit'
                ? 'ring-3 ring-[#F2C66D] rounded-xs shadow-2xl scale-[1.01]'
                : ''
            }`}
          >
            <ToolkitCards
              activeCard={currentStage.activeToolkitCard}
              frontendCardRef={frontendCardRef}
              backendCardRef={backendCardRef}
              otherGearsCardRef={otherGearsCardRef}
            />
          </div>

        </div>

        {/* ====== RIGHT COLUMN: EDUCATION & LAB ====== */}
        {/* pr-40 reserves space so Byte (fixed right:16px) doesn't cover text */}
        <div className="lg:col-span-1 flex flex-col space-y-4 sm:space-y-5 lg:pr-40">

          {/* Stage 2: Education */}
          <div
            ref={educationRef}
            id="section-education"
            className={`transition-all duration-300 ${
              currentStage.activeSection === 'education'
                ? 'ring-3 ring-[#F2C66D] rounded-xs shadow-2xl scale-[1.01]'
                : ''
            }`}
          >
            <EducationSheet />
          </div>

          {/* Stage 3: Lab Tinkering */}
          <div
            ref={labRef}
            id="section-lab"
            className={`transition-all duration-300 ${
              currentStage.activeSection === 'lab'
                ? 'ring-3 ring-[#F2C66D] rounded-xs shadow-2xl scale-[1.01]'
                : ''
            }`}
          >
            <LabTinkeringSheet />
          </div>

        </div>

      </div>

      {/* ====== BOTTOM CTA ====== */}
      <div
        ref={ctaRef}
        id="section-cta"
        className={`max-w-6xl mx-auto mt-6 sm:mt-8 pt-4 border-t-2 border-dashed border-[#DDD2BA] flex flex-col sm:flex-row items-center justify-between gap-3 transition-all duration-300 pr-2 ${
          currentStage.id === 'philosophy'
            ? 'bg-[#FAF3DE]/70 px-3.5 py-2.5 rounded-xs ring-2 ring-[#F2C66D]'
            : ''
        }`}
      >
        <div className="flex items-center gap-2.5">
          <span className="font-hand font-extrabold text-lg sm:text-xl text-[#1D1C1A]">
            SEE MY WORK?
          </span>
          <svg viewBox="0 0 40 20" fill="none" className="w-7 h-3.5 text-[#1D1C1A]" aria-hidden="true">
            <path
              d="M 2 10 L 34 10 M 26 4 L 35 10 L 26 16"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <a
          href="#experience"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate('experience');
            }
          }}
          className="group relative inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 bg-[#FFFDF9] hover:bg-[#FDF8EE] text-[#1D1C1A] font-hand font-extrabold text-base sm:text-lg rounded-xs border-2 border-[#1D1C1A] shadow-sketch hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer focus:outline-hidden"
          style={{ borderRadius: '4px 8px 3px 6px' }}
          title="Proceed to experience & projects"
        >
          <span>EXPERIENCE PAGE →</span>
        </a>
      </div>

    </div>
  );
};
