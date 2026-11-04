import React from 'react';
import { SketchStar } from '../Doodles';

/**
 * GitCommitDoodle Component
 * Left margin doodle beside the contact form:
 * - Curved arrow
 * - Vertical commit node line with "git commit"
 * - Brackets doodle "{ } ... ]"
 */
export const GitCommitDoodle = ({ className = "" }) => {
  return (
    <div className={`relative flex flex-col items-center text-[#1D1C1A] select-none pointer-events-none ${className}`}>
      {/* Top curved dashed arrow */}
      <svg viewBox="0 0 32 30" fill="none" className="w-8 h-7 text-[#1D1C1A]">
        <path d="M 26 24 C 26 12 18 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 2" strokeLinecap="round" />
        <path d="M 12 2 L 5 6 L 12 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="24" r="2" fill="currentColor" />
      </svg>

      {/* Vertical commit node line */}
      <div className="relative py-2 flex flex-col items-center">
        <svg viewBox="0 0 16 60" fill="none" className="w-4 h-14">
          <line x1="8" y1="2" x2="8" y2="58" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 2" />
          <circle cx="8" cy="14" r="3.5" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="8" cy="14" r="1.5" fill="currentColor" />
          <circle cx="8" cy="46" r="3.5" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="8" cy="46" r="1.5" fill="currentColor" />
        </svg>
        <span className="font-hand font-extrabold text-[10px] sm:text-[11px] text-[#1D1C1A] whitespace-nowrap mt-0.5">
          git commit
        </span>
      </div>

      {/* Bottom curved arrow & brackets doodle */}
      <div className="mt-1 flex flex-col items-center">
        <svg viewBox="0 0 24 20" fill="none" className="w-6 h-5 text-[#1D1C1A]">
          <path d="M 6 4 C 6 12 14 16 20 16" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 2" strokeLinecap="round" />
          <path d="M 16 12 L 20 16 L 16 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-mono font-bold text-[10px] text-[#554D40] mt-0.5">
          {'{ } ... ]'}
        </span>
      </div>
    </div>
  );
};

/**
 * PencilDoodle Component
 * Hand-drawn pencil illustration near the bottom-left edge
 */
export const PencilDoodle = ({ className = "" }) => {
  return (
    <div className={`relative pointer-events-none select-none ${className}`}>
      <svg viewBox="0 0 35 120" fill="none" className="w-6 sm:w-7 h-20 sm:h-24 text-[#1D1C1A]">
        {/* Pencil lead */}
        <polygon points="17,5 11,24 23,24" fill="#1D1C1A" />
        {/* Wood section */}
        <polygon points="11,24 7,42 27,42 23,24" fill="#EDE4CE" stroke="#1D1C1A" strokeWidth="1.8" />
        {/* Pencil body */}
        <rect x="7" y="42" width="20" height="60" fill="#FAF6EE" stroke="#1D1C1A" strokeWidth="1.8" />
        <line x1="14" y1="42" x2="14" y2="102" stroke="#1D1C1A" strokeWidth="1.2" />
        <line x1="20" y1="42" x2="20" y2="102" stroke="#1D1C1A" strokeWidth="1.2" />
        {/* Metal ferrule */}
        <rect x="7" y="102" width="20" height="8" fill="#D8CFBD" stroke="#1D1C1A" strokeWidth="1.8" />
        {/* Eraser */}
        <rect x="8" y="110" width="18" height="8" rx="2" fill="#E8B4B8" stroke="#1D1C1A" strokeWidth="1.8" />
      </svg>
    </div>
  );
};

/**
 * LowerGitBranchDoodle Component
 * Git branch illustration near lower middle matching reference:
 * - "git branch" with curved dashed arrow
 * - commit nodes connected by branch lines
 * - "git merge checkout main" handwritten annotation
 * - "tiny" doodle with squiggle
 */
export const LowerGitBranchDoodle = ({ className = "" }) => {
  return (
    <div className={`relative flex flex-col items-center select-none pointer-events-none ${className}`}>
      {/* Top curved branch line */}
      <div className="relative flex items-center gap-1.5">
        <svg viewBox="0 0 160 50" fill="none" className="w-36 sm:w-44 h-12 text-[#1D1C1A]">
          {/* Label git branch */}
          <text x="35" y="12" fill="#1D1C1A" fontFamily="Kalam, Caveat, cursive" fontSize="11" fontWeight="bold">
            git branch
          </text>
          {/* Main branch line */}
          <line x1="10" y1="36" x2="150" y2="36" stroke="#1D1C1A" strokeWidth="1.8" strokeDasharray="3 2" />
          {/* Curved branch */}
          <path d="M 40 36 C 45 18 75 16 100 16 C 120 16 128 26 132 36" stroke="#1D1C1A" strokeWidth="1.6" strokeDasharray="3 2" strokeLinecap="round" />
          {/* Branch nodes */}
          <circle cx="40" cy="36" r="4.5" fill="#FAF6EE" stroke="#1D1C1A" strokeWidth="1.8" />
          <circle cx="40" cy="36" r="2" fill="#1D1C1A" />
          <circle cx="85" cy="16" r="4.5" fill="#FAF6EE" stroke="#1D1C1A" strokeWidth="1.8" />
          <circle cx="85" cy="16" r="2" fill="#1D1C1A" />
          <circle cx="132" cy="36" r="4.5" fill="#FAF6EE" stroke="#1D1C1A" strokeWidth="1.8" />
          <circle cx="132" cy="36" r="2" fill="#1D1C1A" />
        </svg>
      </div>

      {/* Annotations below branch: "tiny" squiggle + "git merge checkout main" */}
      <div className="flex items-center gap-3 mt-1">
        {/* Tiny doodle annotation */}
        <div className="flex items-center gap-1 text-[#1D1C1A]">
          <svg viewBox="0 0 30 18" fill="none" className="w-6 h-4 text-[#8C7E6A]">
            <path d="M 2 8 C 8 2 12 16 18 6 C 22 14 26 4 28 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span className="font-hand font-bold text-[11px] text-[#554D40]">
            tiny
          </span>
        </div>

        {/* git merge checkout main */}
        <div className="flex items-center gap-1">
          <span className="font-hand font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wide">
            git merge checkout main
          </span>
          <SketchStar className="w-3.5 h-3.5 text-[#1D1C1A]" />
        </div>
      </div>
    </div>
  );
};

/**
 * PaperClipsAndStamp Component
 * Lower right area doodles:
 * - Two angled metal paper clips
 * - "Hand-Engineered" double-oval outline stamp
 */
export const PaperClipsAndStamp = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center gap-3 select-none pointer-events-none ${className}`}>
      {/* Two Hand-Drawn Paperclips */}
      <div className="flex items-center gap-1 transform rotate-12">
        {/* Paper clip 1 */}
        <svg viewBox="0 0 20 36" fill="none" className="w-4 sm:w-5 h-7 sm:h-8">
          <path d="M 5 12 L 5 26 C 5 31 15 31 15 26 L 15 7 C 15 2 8 2 8 7 L 8 22 C 8 25 12 25 12 22 L 12 10" stroke="#4A453C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* Paper clip 2 */}
        <svg viewBox="0 0 20 36" fill="none" className="w-4 sm:w-5 h-7 sm:h-8 transform -rotate-15 -ml-1">
          <path d="M 5 12 L 5 26 C 5 31 15 31 15 26 L 15 7 C 15 2 8 2 8 7 L 8 22 C 8 25 12 25 12 22 L 12 10" stroke="#4A453C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* "Hand-Engineered" Double-Border Oval Stamp */}
      <div
        className="px-3 py-1 border-2 border-[#1D1C1A] rounded-full transform -rotate-2 bg-[#FAF6EE] shadow-2xs relative"
        style={{
          borderRadius: '50% 50% 48% 52% / 52% 48% 52% 48%',
        }}
      >
        {/* Inner thin border */}
        <span
          className="absolute inset-0.5 border border-[#1D1C1A]/40 rounded-full pointer-events-none"
          style={{
            borderRadius: '50% 50% 48% 52% / 52% 48% 52% 48%',
          }}
        />
        <span className="font-condensed font-extrabold text-[10px] sm:text-[11px] text-[#1D1C1A] tracking-widest uppercase whitespace-nowrap">
          Hand-Engineered
        </span>
      </div>
    </div>
  );
};