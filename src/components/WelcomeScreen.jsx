import React, { useState, useEffect, useRef } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import { SketchStar, SparkleBurst, CodeBracketDoodle, UnderlineScribble, MaskingTape } from './Doodles';

/**
 * WelcomeScreen Component
 * Eye-catching tactile Developer Diary Cover.
 * Features:
 * - Rich vintage kraft/leatherette diary cover texture
 * - Notebook elastic closure band & red ribbon bookmark
 * - Taped sticky note with developer field checklist
 * - Coffee mug stain ring doodle
 * - Big hand-stamped title: "DEVELOPER'S DIARY"
 * - Removed Vol. 2026 and Archive bar as requested
 * - 3D page turning transition with keyboard and reduced motion support
 */
export const WelcomeScreen = ({ isOpen, onOpen }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(!isOpen);
  const buttonRef = useRef(null);

  const prefersReducedMotion = typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => {
        buttonRef.current?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleOpen = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (prefersReducedMotion) {
      setTimeout(() => {
        setIsAnimating(false);
        setShouldRender(false);
        onOpen();
      }, 150);
    } else {
      setTimeout(() => {
        setIsAnimating(false);
        setShouldRender(false);
        onOpen();
      }, 950);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleOpen();
    }
  };

  if (!shouldRender && isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Developer Diary Cover Welcome Screen"
      className={`fixed inset-0 z-50 overflow-hidden flex items-center justify-center select-none transition-opacity duration-300 ${
        isAnimating && prefersReducedMotion ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        perspective: '2000px',
        backgroundColor: '#1E1914', // Deep studio desk wood behind diary
      }}
    >
      {/* Skip Intro button in top right */}
      <button
        onClick={handleOpen}
        className="absolute top-4 right-6 z-50 text-xs sm:text-sm font-hand text-[#DFCFA8] hover:text-[#F2C66D] underline tracking-wide transition-colors py-1 px-3 rounded-sm focus:outline-hidden focus:ring-2 focus:ring-[#F2C66D] cursor-pointer"
        aria-label="Skip introduction and open diary"
      >
        {portfolioConfig.welcomeScreen.skipText} ⏭
      </button>

      {/* The 3D Turning Developer's Diary Cover */}
      <div
        className={`relative w-full h-full max-w-5xl max-h-[92vh] sm:max-h-[88vh] mx-3 sm:mx-6 rounded-r-2xl overflow-hidden transition-transform ease-in-out shadow-2xl ${
          isAnimating && !prefersReducedMotion ? 'cover-turning' : ''
        }`}
        style={{
          transformOrigin: 'left center',
          transitionDuration: '950ms',
          backgroundColor: '#44372C', // Deep rich kraft moleskine diary cover
          backgroundImage: `
            radial-gradient(circle at 50% 40%, rgba(255, 230, 180, 0.08) 0%, rgba(0, 0, 0, 0.35) 100%),
            repeating-linear-gradient(45deg, rgba(0,0,0,0.03) 0px, rgba(0,0,0,0.03) 2px, transparent 2px, transparent 4px)
          `,
          boxShadow: '20px 30px 70px rgba(0,0,0,0.7), inset -6px 0 16px rgba(0,0,0,0.4), inset 12px 0 24px rgba(0,0,0,0.5)',
        }}
      >
        {/* Left Spiral Spine */}
        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-16 bg-[#2F251E] border-r-2 border-[#1E1712] flex flex-col justify-between py-4 z-20">
          {Array.from({ length: 18 }).map((_, i) => (
            <div key={i} className="relative flex items-center h-4">
              <div className="w-4 h-3 bg-[#110D0A] rounded-full ml-4 sm:ml-6 shadow-inner" />
              <div
                className="absolute left-0 w-10 sm:w-12 h-3 rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #F0EAD6 0%, #7A6F5D 60%, #1A1612 100%)',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.6)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Notebook Elastic Closure Band (authentic diary look) */}
        <div
          className="absolute top-0 bottom-0 right-10 sm:right-14 w-4 sm:w-5 bg-[#221B15] border-x border-[#15110D] z-15 pointer-events-none shadow-lg"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 2px, transparent 2px, transparent 4px)',
          }}
        />

        {/* Red Ribbon Bookmark peeking from bottom */}
        <div
          className="absolute -bottom-3 right-24 sm:right-32 w-5 h-14 bg-[#B83333] rounded-b-sm shadow-md z-15 pointer-events-none transform -rotate-3"
          style={{
            boxShadow: '2px 4px 6px rgba(0,0,0,0.4)',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)',
          }}
        />

        {/* Decorative Coffee Ring Stain on top right */}
        <div
          className="absolute top-8 right-20 sm:right-28 w-28 h-28 rounded-full border-4 border-[#30241A] opacity-35 pointer-events-none transform rotate-12"
          style={{
            boxShadow: 'inset 0 0 10px rgba(48, 36, 26, 0.4)',
            filter: 'blur(0.5px)',
          }}
        />

        {/* Taped Sticky Note on Top Left: Developer Checklist */}
        <div
          className="absolute top-6 left-16 sm:left-24 z-15 p-3.5 bg-[#FFF9D2] border border-[#DCD096] rounded-xs shadow-md transform -rotate-4 max-w-[150px] sm:max-w-[170px] hidden sm:block pointer-events-none"
        >
          <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
            <MaskingTape width="w-16" height="h-5" angle="rotate-2" />
          </div>
          <div className="font-hand font-bold text-xs text-[#2A2318] space-y-1 pt-1">
            <div className="text-[10px] uppercase tracking-wider text-[#736440] font-mono">// LOG 01</div>
            <div>☑ UI Design</div>
            <div>☑ Frontend Code</div>
            <div>☑ Backend APIs</div>
            <div>☑ Shipped Ideas</div>
          </div>
        </div>

        {/* Diary Cover Content Area */}
        <div className="relative pl-14 sm:pl-24 pr-16 sm:pr-24 py-8 sm:py-10 h-full flex flex-col justify-center items-center text-center z-20">
          
          {/* Center Embossed Kraft/Paper Bookplate Badge */}
          <div
            className="relative my-auto max-w-lg w-full p-6 sm:p-9 bg-[#FAF5E8] rounded-md shadow-2xl transform -rotate-0.5 border-2 border-[#1D1C1A]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, rgba(200, 180, 150, 0.14) 0px, rgba(200, 180, 150, 0.14) 1px, transparent 1px, transparent 24px)
              `,
              boxShadow: '8px 16px 36px rgba(0,0,0,0.45)',
            }}
          >
            {/* Top and Bottom Masking Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <MaskingTape width="w-32 sm:w-40" height="h-7" angle="rotate-1" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <MaskingTape width="w-32 sm:w-40" height="h-7" angle="-rotate-1" />
            </div>

            {/* Corner Doodles */}
            <div className="absolute top-3 left-4 text-[#4A3F30]">
              <SparkleBurst className="w-5 h-5 text-[#4A3F30]" />
            </div>
            <div className="absolute top-3 right-4 text-[#4A3F30]">
              <SketchStar className="w-5 h-5 text-[#4A3F30]" />
            </div>

            {/* Diary Header Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 bg-[#EFE5CC] border border-[#C5B796] rounded-full text-xs font-mono font-bold tracking-widest text-[#5C4F3B] mb-2 uppercase">
              <span>📖</span>
              <span>PERSONAL WORK JOURNAL</span>
            </div>

            {/* Main Title: DEVELOPER'S DIARY */}
            <h1 className="font-hand font-extrabold text-3xl sm:text-5xl md:text-5xl text-[#1D1C1A] tracking-tight mt-1 mb-1">
              {portfolioConfig.welcomeScreen.coverTitle}
            </h1>

            {/* Underline Scribble */}
            <div className="flex justify-center my-1">
              <UnderlineScribble className="w-52 sm:w-64 h-3.5 text-[#1D1C1A]" />
            </div>

            {/* Subtitle */}
            <h2 className="font-body font-bold text-base sm:text-lg text-[#3E362A] mt-2.5">
              {portfolioConfig.welcomeScreen.subtitle}
            </h2>

            {/* Tagline */}
            <p className="font-hand text-base sm:text-lg text-[#6E614C] mt-1.5 italic">
              "{portfolioConfig.personal.tagline}"
            </p>

            {/* Interactive Open Diary Button */}
            <div className="mt-7 flex flex-col items-center">
              <button
                ref={buttonRef}
                onClick={handleOpen}
                onKeyDown={handleKeyDown}
                className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-3 sm:py-3.5 text-lg sm:text-xl font-hand font-extrabold text-[#1D1C1A] bg-[#F2C66D] hover:bg-[#E5B856] rounded-xs transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0.5 cursor-pointer focus:outline-hidden focus:ring-3 focus:ring-[#1D1C1A]"
                style={{
                  border: '2.5px solid #1D1C1A',
                  boxShadow: '4px 5px 0px #1D1C1A',
                  borderRadius: '5px 10px 6px 8px',
                }}
                aria-label="Open Kishlay's developer diary"
              >
                <span>{portfolioConfig.welcomeScreen.buttonText}</span>
                <span className="transform transition-transform duration-200 group-hover:translate-x-1.5">→</span>
              </button>

              <span className="font-hand text-sm text-[#7D705B] mt-2">
                {portfolioConfig.welcomeScreen.buttonHint}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
