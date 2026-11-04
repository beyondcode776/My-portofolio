import React from 'react';
import { MaskingTape } from '../Doodles';

/**
 * EducationSheet Component
 * Upper-right column taped sheet presenting Kishlay's verified educational background:
 * - High School (CBSE, India)
 * - B.Tech in CSE at GLA University, Mathura
 * - Realistic torn paper edges and masking tape corners
 */
export const EducationSheet = ({ className = '', style = {} }) => {
  return (
    <div
      className={`relative w-full max-w-lg p-4 sm:p-5 bg-[#FFFDF8] border-2 border-[#1D1C1A] shadow-paper rounded-xs select-none ${className}`}
      style={{
        transform: 'rotate(-1deg)',
        clipPath: 'polygon(0% 1%, 98% 0%, 100% 96%, 98% 99%, 3% 98%, 0% 96%)',
        boxShadow: '4px 10px 24px rgba(45, 35, 20, 0.12), 0 2px 6px rgba(45, 35, 20, 0.08)',
        ...style,
      }}
    >
      {/* Masking tape on corners */}
      <div className="absolute -top-3 left-4 pointer-events-none z-20">
        <MaskingTape width="w-16 sm:w-20" height="h-5" angle="-rotate-6" />
      </div>
      <div className="absolute -top-3 right-4 pointer-events-none z-20">
        <MaskingTape width="w-16 sm:w-20" height="h-5" angle="rotate-8" />
      </div>

      {/* Heading */}
      <h3 className="font-hand font-extrabold text-xl sm:text-2xl text-[#1D1C1A] tracking-wide mb-2 border-b-2 border-dashed border-[#E2D6C0] pb-1">
        EDUCATION
      </h3>

      {/* Education Entries */}
      <div className="space-y-2 sm:space-y-2.5 font-body text-xs sm:text-sm text-[#302B23]">
        {/* Entry 1: High School */}
        <div className="relative pl-2.5 border-l-2 border-[#F2C66D]">
          <p className="leading-snug">
            <span className="font-mono font-bold text-[#1D1C1A]">● 2023 — High School (CBSE, India):</span>{' '}
            <span className="text-[#4A4235]">
              Focus on Science, Mathematics, Social Studies, and English.
            </span>
          </p>
        </div>

        {/* Entry 2: University */}
        <div className="relative pl-2.5 border-l-2 border-[#1D1C1A]">
          <p className="leading-snug">
            <span className="font-mono font-bold text-[#1D1C1A]">● 2024–2028 — B.Tech in CSE:</span>{' '}
            <span className="text-[#4A4235]">
              GLA University, Mathura. Exploring web development, IoT, robotics, game technology, and software engineering.
            </span>
          </p>
        </div>
      </div>

      {/* Verification stamp */}
      <div className="mt-2 pt-1 text-right">
        <span className="font-mono text-[9px] sm:text-[10px] text-[#8C7F6A] uppercase tracking-widest bg-[#F5EED9] px-2 py-0.5 rounded-xs border border-[#DFD3BA]">
          VERIFIED RECORD
        </span>
      </div>
    </div>
  );
};
