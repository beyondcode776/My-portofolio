import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import { MaskingTape, AnnotationArrow } from './Doodles';

/**
 * PolaroidFrame Component
 * Authentic tilted Polaroid frame using ONLY Kishlay's verified photo.
 * Features:
 * - 4 Hand-drawn taped annotations:
 *   1. "UI Designer"
 *   2. "Frontend Developer"
 *   3. "Backend Developer"
 *   4. "Delivering concepts into real world"
 * - Hand-lettered chin caption
 * - Masking tape anchors top and bottom
 * - Smooth interactive hover tilt
 */
export const PolaroidFrame = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full max-w-[420px] sm:max-w-[460px] mx-auto select-none py-6 px-4">
      
      {/* ================= ANNOTATION 1: TOP-LEFT ("UI Designer") ================= */}
      <div className="absolute -top-1 -left-2 sm:-left-6 z-20 flex flex-col items-end">
        <div className="relative px-3 py-1 bg-[#FAF4E6] border border-[#D5C9AE] rounded-xs shadow-xs transform -rotate-3 text-xs sm:text-sm font-hand font-bold text-[#1D1C1A]">
          {/* Tape snippet */}
          <div className="absolute -top-2 left-3 w-8 h-3.5 bg-[#EFE5CD] opacity-90 -rotate-6 pointer-events-none" />
          <span>UI Designer</span>
        </div>
        <div className="mt-1 mr-2 text-[#2A261F]">
          <AnnotationArrow direction="to-right-down" className="w-9 h-8 sm:w-11 sm:h-9" />
        </div>
      </div>

      {/* ================= ANNOTATION 2: TOP-RIGHT ("Frontend Developer") ================= */}
      <div className="absolute top-8 -right-2 sm:-right-8 z-20 flex flex-col items-start">
        <div className="relative px-3 py-1 bg-[#FAF4E6] border border-[#D5C9AE] rounded-xs shadow-xs transform rotate-2 text-xs sm:text-sm font-hand font-bold text-[#1D1C1A]">
          {/* Tape snippet */}
          <div className="absolute -top-2 right-3 w-8 h-3.5 bg-[#EFE5CD] opacity-90 rotate-6 pointer-events-none" />
          <span>Frontend Developer</span>
        </div>
        <div className="mt-1 ml-2 text-[#2A261F]">
          <AnnotationArrow direction="to-left-down" className="w-9 h-8 sm:w-11 sm:h-9" />
        </div>
      </div>

      {/* ================= ANNOTATION 3: MID-LEFT ("Backend Developer") ================= */}
      <div className="absolute top-1/2 -left-3 sm:-left-8 -translate-y-2 z-20 flex flex-col items-end">
        <div className="relative px-3 py-1 bg-[#FAF4E6] border border-[#D5C9AE] rounded-xs shadow-xs transform -rotate-2 text-xs sm:text-sm font-hand font-bold text-[#1D1C1A]">
          {/* Tape snippet */}
          <div className="absolute -top-2 left-2 w-7 h-3 bg-[#EFE5CD] opacity-90 -rotate-12 pointer-events-none" />
          <span>Backend Developer</span>
        </div>
        <div className="mt-0 mr-3 text-[#2A261F]">
          <AnnotationArrow direction="to-right-up" className="w-8 h-8 sm:w-10 sm:h-9" />
        </div>
      </div>

      {/* ================= ANNOTATION 4: BOTTOM-RIGHT ("Delivering concepts into real world") ================= */}
      <div className="absolute bottom-20 -right-4 sm:-right-12 z-20 flex flex-col items-start max-w-[170px] sm:max-w-[200px]">
        <div className="relative px-2.5 py-1.5 bg-[#F6ECCF] border border-[#D5C599] rounded-xs shadow-xs transform rotate-2 text-[11px] sm:text-xs font-hand font-extrabold text-[#1D1C1A] leading-tight text-center">
          {/* Tape snippet */}
          <div className="absolute -top-2.5 right-4 w-9 h-3.5 bg-[#EFE5CD] opacity-90 rotate-6 pointer-events-none" />
          <span>Delivering concepts into real world ✨</span>
        </div>
        <div className="mt-0 ml-4 text-[#2A261F]">
          <AnnotationArrow direction="to-left-up" className="w-8 h-8 sm:w-10 sm:h-9" />
        </div>
      </div>

      {/* ================= THE POLAROID FRAME ================= */}
      <div
        className={`relative bg-[#FFFFFF] p-3 sm:p-4 pb-7 sm:pb-8 rounded-sm shadow-polaroid border border-[#DDD5BF] transition-all duration-300 transform ${
          isHovered ? 'rotate-0 scale-[1.02]' : 'rotate-2 sm:rotate-2.5'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          boxShadow: '8px 18px 36px rgba(45, 35, 20, 0.22), 0 3px 10px rgba(45, 35, 20, 0.1)',
        }}
      >
        {/* Top Masking Tape Strip */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
          <MaskingTape width="w-28 sm:w-36" height="h-7 sm:h-8" angle="-rotate-1" />
        </div>

        {/* Bottom Masking Tape Strip */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30">
          <MaskingTape width="w-28 sm:w-36" height="h-7 sm:h-8" angle="rotate-1" />
        </div>

        {/* Photo Container with Kishlay's Real Photo */}
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-xs bg-[#E8E1CE] border border-[#DCD3BE]/70">
          <img
            src={portfolioConfig.polaroid.actualPortrait}
            alt={portfolioConfig.polaroid.altText}
            className="w-full h-full object-cover object-center filter contrast-[1.03] transition-transform duration-500 hover:scale-105"
            loading="eager"
          />
        </div>

        {/* Polaroid Chin / Caption */}
        <div className="pt-3 sm:pt-4 px-1 flex items-baseline justify-between">
          <p className="font-hand font-bold text-base sm:text-lg text-[#1D1C1A] tracking-wide">
            {portfolioConfig.polaroid.caption}
          </p>
          <span className="text-xs font-hand text-[#827763] select-none">
            📍 India
          </span>
        </div>
      </div>
    </div>
  );
};
