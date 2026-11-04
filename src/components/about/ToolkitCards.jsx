import React from 'react';
import { MaskingTape, SketchStar } from '../Doodles';

/**
 * Hand-drawn SVG Database Cylinder illustration for Backend Card
 */
export const DatabaseDoodle = ({ className = "w-9 h-11" }) => (
  <svg viewBox="0 0 40 50" fill="none" className={className} aria-hidden="true">
    <ellipse cx="20" cy="10" rx="16" ry="6" stroke="#1D1C1A" strokeWidth="2.2" fill="#FAF5E8" />
    <path d="M 4 10 L 4 24 C 4 30 36 30 36 24 L 36 10" stroke="#1D1C1A" strokeWidth="2.2" fill="none" />
    <path d="M 4 24 C 4 30 36 30 36 24" stroke="#1D1C1A" strokeWidth="2.2" strokeDasharray="3 2" fill="none" />
    <path d="M 4 24 L 4 38 C 4 44 36 44 36 38 L 36 24" stroke="#1D1C1A" strokeWidth="2.2" fill="none" />
    <circle cx="10" cy="24" r="1.5" fill="#1D1C1A" />
    <circle cx="15" cy="24" r="1.5" fill="#1D1C1A" />
    <circle cx="10" cy="38" r="1.5" fill="#1D1C1A" />
    <circle cx="15" cy="38" r="1.5" fill="#1D1C1A" />
  </svg>
);

/**
 * Hand-drawn SVG Gear illustration for Other Gears Card
 */
export const GearDoodle = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 50 50" fill="none" className={className} aria-hidden="true">
    <path
      d="M22 4h6l2 5 5 2 5-3 5 4-2 6 3 5 6 1v6l-6 2-3 5 2 6-5 4-5-3-5 2-2 5h-6l-2-5-5-2-5 3-5-4 2-6-3-5-6-1v-6l6-2 3-5-2-6 5-4 5 3 5-2z"
      stroke="#1D1C1A"
      strokeWidth="2.2"
      strokeLinejoin="round"
      fill="#FAF5E8"
    />
    <circle cx="25" cy="25" r="7" stroke="#1D1C1A" strokeWidth="2" fill="#FAF5E8" />
  </svg>
);

/**
 * Hand-drawn Pencil Illustration in bottom-left
 */
export const PencilDoodle = ({ className = "w-7 h-24" }) => (
  <svg viewBox="0 0 30 100" fill="none" className={className} aria-hidden="true">
    <polygon points="8,30 22,30 22,95 8,95" fill="#E8D2A0" stroke="#1D1C1A" strokeWidth="2" />
    <polygon points="8,30 22,30 15,10" fill="#D4B67D" stroke="#1D1C1A" strokeWidth="2" />
    <polygon points="12,18 18,18 15,10" fill="#1D1C1A" />
    <rect x="8" y="85" width="14" height="6" fill="#C5B294" stroke="#1D1C1A" strokeWidth="1.5" />
    <rect x="8" y="91" width="14" height="7" fill="#E58B8B" stroke="#1D1C1A" strokeWidth="1.8" rx="2" />
  </svg>
);

/**
 * ToolkitCards Component
 * Renders the 3 overlapping torn paper cards snugly fitted inside the backing pad.
 * ⚠️ CRITICAL REQUIREMENT MET: Linux, Linux/Shell, and Shell are COMPLETELY ABSENT.
 */
export const ToolkitCards = ({
  activeCard = null, // 'frontend' | 'backend' | 'otherGears' | null
  frontendCardRef,
  backendCardRef,
  otherGearsCardRef,
  className = '',
}) => {
  return (
    <div className={`relative w-full max-w-xl select-none ${className}`}>
      
      {/* Section Heading */}
      <div className="flex items-center gap-2 mb-2.5">
        <h3 className="font-hand font-extrabold text-xl sm:text-2xl text-[#1D1C1A] tracking-wide">
          MY TOOLKIT / TECH ARSENAL
        </h3>
        <SketchStar className="w-5 h-5 text-[#1D1C1A] transform rotate-12" />
      </div>

      {/* Underlying Grid/Cardboard backing pad - Snug fit without empty bottom void */}
      <div
        className="relative p-2.5 sm:p-4 pb-3 sm:pb-3.5 bg-[#EAE0CA] border-2 border-[#1D1C1A] rounded-sm shadow-sketch-sm"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(160, 140, 100, 0.22) 0px, rgba(160, 140, 100, 0.22) 1px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, rgba(160, 140, 100, 0.22) 0px, rgba(160, 140, 100, 0.22) 1px, transparent 1px, transparent 20px)
          `,
          transform: 'rotate(-0.6deg)',
        }}
      >
        {/* Pencil doodle on bottom-left corner */}
        <div className="absolute -bottom-6 -left-6 hidden sm:block pointer-events-none z-30 transform -rotate-25">
          <PencilDoodle className="w-6 h-20" />
        </div>

        {/* 3 Overlapping Paper Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-2 items-start relative z-10">
          
          {/* ================= CARD 1: FRONTEND ================= */}
          <div
            ref={frontendCardRef}
            className={`relative p-3 sm:p-3.5 bg-[#FFFDF9] border-2 border-[#1D1C1A] rounded-xs shadow-paper transform -rotate-1.5 hover:rotate-0 transition-all duration-300 ${
              activeCard === 'frontend'
                ? 'ring-3 ring-[#F2C66D] scale-105 z-20 shadow-xl'
                : 'hover:scale-[1.02]'
            }`}
            style={{
              clipPath: 'polygon(0% 2%, 97% 0%, 100% 96%, 96% 100%, 3% 97%, 0% 94%)',
            }}
          >
            {/* Masking tape on top */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 pointer-events-none z-20">
              <MaskingTape width="w-14" height="h-4.5" angle="-rotate-3" />
            </div>

            <h4 className="font-hand font-extrabold text-base text-[#1D1C1A] border-b-2 border-dashed border-[#DDD0B8] pb-1 mb-1.5">
              Frontend
            </h4>

            <ul className="font-mono text-[11px] sm:text-[10.5px] font-bold text-[#2C2720] space-y-1 uppercase">
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>REACT</span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>NEXT.JS</span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>TAILWIND CSS</span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>HTML / CSS / JS</span>
              </li>
            </ul>

            {/* Doodle Star in card corner */}
            <div className="absolute bottom-1.5 right-1.5 text-[#9A8F76] pointer-events-none">
              <SketchStar className="w-3.5 h-3.5 text-[#7A7058]" />
            </div>
          </div>

          {/* ================= CARD 2: BACKEND & INFRA ================= */}
          <div
            ref={backendCardRef}
            className={`relative p-3 sm:p-3.5 bg-[#FFFDF9] border-2 border-[#1D1C1A] rounded-xs shadow-paper transform rotate-1 hover:rotate-0 transition-all duration-300 z-10 ${
              activeCard === 'backend'
                ? 'ring-3 ring-[#F2C66D] scale-105 z-20 shadow-xl'
                : 'hover:scale-[1.02]'
            }`}
            style={{
              clipPath: 'polygon(2% 0%, 100% 2%, 98% 98%, 95% 100%, 0% 96%, 0% 2%)',
            }}
          >
            {/* Masking tape on top */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 pointer-events-none z-20">
              <MaskingTape width="w-14" height="h-4.5" angle="rotate-2" />
            </div>

            <h4 className="font-hand font-extrabold text-base text-[#1D1C1A] border-b-2 border-dashed border-[#DDD0B8] pb-1 mb-1.5">
              Backend & Infra
            </h4>

            <ul className="font-mono text-[11px] sm:text-[10.5px] font-bold text-[#2C2720] space-y-1 uppercase">
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>NODE.JS</span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>EXPRESS</span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>POSTGRESQL</span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>MONGODB</span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>APIs / REST</span>
              </li>
            </ul>

            {/* Database Cylinder Doodle */}
            <div className="absolute bottom-1 right-1 opacity-70 pointer-events-none">
              <DatabaseDoodle className="w-6 h-8" />
            </div>
          </div>

          {/* ================= CARD 3: OTHER GEARS ================= */}
          {/* ⚠️ CRITICAL: Linux, Linux/Shell, and Shell are COMPLETELY EXCLUDED */}
          <div
            ref={otherGearsCardRef}
            className={`relative p-3 sm:p-3.5 bg-[#FFFDF9] border-2 border-[#1D1C1A] rounded-xs shadow-paper transform -rotate-1 hover:rotate-0 transition-all duration-300 ${
              activeCard === 'otherGears'
                ? 'ring-3 ring-[#F2C66D] scale-105 z-20 shadow-xl'
                : 'hover:scale-[1.02]'
            }`}
            style={{
              clipPath: 'polygon(0% 1%, 98% 0%, 100% 97%, 97% 100%, 1% 98%)',
            }}
          >
            {/* Masking tape on top */}
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 pointer-events-none z-20">
              <MaskingTape width="w-14" height="h-4.5" angle="-rotate-2" />
            </div>

            <h4 className="font-hand font-extrabold text-base text-[#1D1C1A] border-b-2 border-dashed border-[#DDD0B8] pb-1 mb-1.5">
              Other Gears
            </h4>

            <ul className="font-mono text-[11px] sm:text-[10.5px] font-bold text-[#2C2720] space-y-1 uppercase">
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>GIT / GITHUB</span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>DOCKER</span>
              </li>
              <li className="flex items-center gap-1">
                <span className="text-[#F2C66D]">●</span>
                <span>UI DESIGN (FIGMA)</span>
              </li>
            </ul>

            {/* Gear Doodle */}
            <div className="absolute bottom-1 right-1 opacity-70 pointer-events-none">
              <GearDoodle className="w-7 h-7" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
