import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import {
  SparkleBurst,
  SketchStar,
  CodeBracketDoodle,
  MarkerHighlight,
  MaskingTape,
  CurvedArrowDown,
  PenDoodle,
} from './Doodles';
import { PolaroidFrame } from './PolaroidFrame';

/**
 * Hero Component
 * Recreates the two-column notebook layout from the reference image:
 * - Left column:
 *   - Sparkle bursts and handwritten headline with mustard highlighter on "FUTURE-READY"
 *   - Dynamic rotating title ticker with pen accent and zero layout shift
 *   - Introductory paragraph
 *   - 3D sketch buttons ("EXPLORE WORK ↗" & "HIRE ME") with pointing hand-drawn arrow
 *   - Taped Personal Information Field Note
 * - Right column:
 *   - Dominant Polaroid frame with tape & doodle annotations
 */
export const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = portfolioConfig.hero.rotatingTitles;

  // Title ticker auto-rotate every 3 seconds
  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [titles.length]);

  return (
    <section id="home" className="relative w-full pt-4 sm:pt-6 pb-6 px-4 sm:px-8 md:px-12 select-none">
      
      {/* Decorative top-right code bracket doodle */}
      <div className="absolute top-2 right-8 sm:right-16 text-[#353026] hidden sm:block opacity-85">
        <CodeBracketDoodle className="w-12 h-8" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
        
        {/* ================= LEFT COLUMN: INTRODUCTION & CALL TO ACTIONS ================= */}
        <div className="lg:col-span-7 flex flex-col justify-start pt-2 sm:pt-4">
          
          {/* Top Hand-drawn Star Burst */}
          <div className="flex items-center gap-2 mb-2 text-[#2A251E]">
            <SparkleBurst className="w-8 h-8 sm:w-10 sm:h-10 transform -rotate-6" />
          </div>

          {/* Main Headline */}
          <h1 className="font-hand font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] text-[#1D1C1A] leading-[1.08] tracking-tight">
            <span>{portfolioConfig.hero.headline.line1}</span>
            <br />
            <MarkerHighlight>
              <span className="text-[#1D1C1A] tracking-normal">
                {portfolioConfig.hero.headline.highlight}
              </span>
            </MarkerHighlight>
            <br />
            <span>{portfolioConfig.hero.headline.line3}</span>
          </h1>

          {/* Dynamic Rotating Title Ticker */}
          <div className="mt-5 sm:mt-6 flex items-center flex-wrap gap-2 text-xl sm:text-2xl md:text-3xl font-hand font-bold text-[#1D1C1A]">
            <span className="text-[#3A3328]">I'm a</span>
            
            {/* Smooth Vertical Ticker Container with Fixed Height to Prevent Jumps */}
            <div className="relative inline-block h-9 sm:h-10 overflow-hidden min-w-[240px] sm:min-w-[280px] align-middle">
              <div
                className="transition-transform duration-500 ease-out flex flex-col"
                style={{
                  transform: `translateY(-${currentTitleIndex * 2.5}rem)`,
                }}
              >
                {titles.map((title, idx) => (
                  <div
                    key={title}
                    className="h-10 flex items-center text-[#1D1C1A] underline decoration-wavy decoration-[#F2C66D] underline-offset-4"
                  >
                    <span>{title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Doodle Pen Icon */}
            <span className="inline-flex items-center text-[#1D1C1A] transform -rotate-12 hover:rotate-12 transition-transform cursor-pointer">
              <PenDoodle className="w-7 h-7 sm:w-8 sm:h-8" />
            </span>
          </div>

          {/* Introductory Paragraph */}
          <p className="mt-4 sm:mt-5 text-[#3A352C] font-body text-base sm:text-lg leading-relaxed max-w-xl font-normal">
            {portfolioConfig.hero.summary}
          </p>

          {/* Primary Action Buttons with Doodle Arrow */}
          <div className="relative mt-8 sm:mt-9 flex flex-wrap items-center gap-4 sm:gap-6">
            
            {/* Curved arrow pointing down to the primary button */}
            <div className="absolute -top-10 -left-6 text-[#1D1C1A] hidden sm:block pointer-events-none">
              <CurvedArrowDown className="w-12 h-12 transform -rotate-6" />
            </div>

            {/* BUTTON 1: EXPLORE WORK ↗ (3D Sketched Ink Box with Hatching) */}
            <a
              href={portfolioConfig.hero.buttons.primary.href}
              className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#FFFDF9] hover:bg-[#FDF9F0] text-[#1D1C1A] font-hand font-extrabold text-lg sm:text-xl rounded-xs transition-all duration-150 transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1 cursor-pointer focus:outline-hidden"
              style={{
                border: '2.5px solid #1D1C1A',
                boxShadow: '4px 5px 0px #1D1C1A',
                borderRadius: '4px 8px 3px 6px',
              }}
              title={portfolioConfig.hero.buttons.primary.description}
            >
              <span>{portfolioConfig.hero.buttons.primary.text}</span>
            
            </a>

            {/* BUTTON 2: HIRE ME (Outlined Paper Button with Masking Tape Detail) */}
            <a
              href={portfolioConfig.hero.buttons.secondary.href}
              className="relative inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-[#FFFDF9] hover:bg-[#F6EED8] text-[#1D1C1A] font-hand font-bold text-lg sm:text-xl rounded-xs transition-all duration-150 border-2 border-[#1D1C1A] shadow-sketch-sm hover:shadow-sketch transform hover:-rotate-1 active:scale-95 cursor-pointer focus:outline-hidden"
              style={{
                borderRadius: '5px 3px 6px 4px',
              }}
              title={portfolioConfig.hero.buttons.secondary.description}
            >
              {/* Masking tape on top border */}
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 pointer-events-none">
                <MaskingTape width="w-14 sm:w-16" height="h-4" angle="rotate-2" />
              </div>
              <span>{portfolioConfig.hero.buttons.secondary.text}</span>
            </a>

            {/* Extra doodle star near buttons */}
            <div className="text-[#3A3328] ml-2 hidden sm:block">
              <SketchStar className="w-6 h-6 transform rotate-12" />
            </div>
          </div>


        </div>

        {/* ================= RIGHT COLUMN: DOMINANT POLAROID PORTRAIT ================= */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:pt-2">
          <PolaroidFrame />
        </div>

      </div>
    </section>
  );
};
