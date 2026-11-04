import React from 'react';
import { MaskingTape } from '../Doodles';
import { ProjectCard, NotebookPreviewPanel } from './ProjectCard';

const SAVORA_URL = 'https://savora-kohl.vercel.app/';

export const SavoraCard = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <ProjectCard href={SAVORA_URL} rotation="0.5deg">
        <div
          className="relative w-full p-3 sm:p-4 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs"
          style={{
            boxShadow: '3px 4px 0px #1D1C1A',
            clipPath: 'polygon(1% 0%, 100% 1%, 99% 99%, 0% 98%)',
          }}
        >
          {/* Paperclip */}
          <div className="absolute -top-3.5 right-8 z-20 pointer-events-none">
            <svg viewBox="0 0 20 30" fill="none" className="w-4 h-7">
              <path d="M 5 9 L 5 21 C 5 25 14 25 14 21 L 14 6 C 14 2 8 2 8 6 L 8 18 C 8 20 11 20 11 18 L 11 8" stroke="#4A453C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Masking tape */}
          <div className="absolute -top-2.5 left-6 pointer-events-none z-20">
            <MaskingTape width="w-14 sm:w-16" height="h-4 sm:h-4.5" angle="-rotate-3" />
          </div>

          {/* Header */}
          <div className="mb-2">
            <h3 className="font-condensed font-extrabold text-base sm:text-lg md:text-xl text-[#1D1C1A] uppercase tracking-wide">
              Project 02: <span className="underline decoration-[#1D1C1A] decoration-2 underline-offset-3">SAVORA</span>
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#2D2820] mt-1 leading-relaxed">
              Developed a responsive restaurant showcase &amp; table reservation system.
            </p>
            <p className="font-body text-xs sm:text-sm text-[#2D2820] leading-relaxed">
              • Integrated table bookings with date, time, and guest selection.
            </p>
          </div>

          {/* Feature Showcase Panel with Words instead of command prompt box */}
          <NotebookPreviewPanel
            title="Table Reservation Engine"
            tag="HTML5 + JAVASCRIPT"
            href={SAVORA_URL}
          >
            <div className="flex items-center justify-between gap-3">
              {/* Left: Café details & booking status */}
              <div className="flex-1">
                <div className="font-condensed font-extrabold text-xs sm:text-sm text-[#1D1C1A] uppercase tracking-wide">
                  SAVORA — Artisanal Café &amp; Dining
                </div>
                <div className="font-hand font-bold text-xs sm:text-[13px] text-[#5A4F3E] mt-0.5">
                  "Good Food. Slow Moments."
                </div>
                <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#1D1C1A] bg-[#FAF6EE] px-1.5 py-0.5 rounded-2xs border border-[#CFC0A4]">
                    Interactive Booking Engine
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#2E7D32] font-bold">
                    ● Real-Time Sync
                  </span>
                </div>
              </div>

              {/* Right: Calendar + Clock */}
              <div className="flex items-center gap-2 shrink-0">
                <div className="w-12 h-12 bg-[#FAF6EE] border border-[#1D1C1A] rounded-xs p-1 flex flex-col justify-between shadow-2xs">
                  <div className="h-2 bg-[#E7BD58] border-b border-[#1D1C1A] rounded-t-2xs flex items-center justify-around">
                    <span className="w-1 h-1 rounded-full bg-[#1D1C1A]" />
                    <span className="w-1 h-1 rounded-full bg-[#1D1C1A]" />
                  </div>
                  <div className="grid grid-cols-4 gap-0.5 pt-0.5 text-center">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-[7px] font-mono leading-none ${
                          i === 4 ? 'bg-[#1D1C1A] text-white rounded-2xs font-bold' : 'text-[#5C5240]'
                        }`}
                      >
                        {i + 1}
                      </span>
                    ))}
                  </div>
                </div>

                <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5 text-[#1D1C1A]">
                  <path d="M 2 10 C 6 4 14 4 18 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  <path d="M 14 9 L 18 10 L 15 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <div className="w-9 h-9 rounded-full border border-[#1D1C1A] bg-[#FAF6EE] flex items-center justify-center shadow-2xs">
                  <svg viewBox="0 0 32 32" className="w-full h-full p-0.5">
                    <line x1="16" y1="16" x2="16" y2="7" stroke="#1D1C1A" strokeWidth="1.6" strokeLinecap="round" />
                    <line x1="16" y1="16" x2="23" y2="16" stroke="#1D1C1A" strokeWidth="1.6" strokeLinecap="round" />
                    <circle cx="16" cy="16" r="1.5" fill="#1D1C1A" />
                  </svg>
                </div>
              </div>
            </div>
          </NotebookPreviewPanel>

          {/* Badges + LIVE Button */}
          <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
            <div className="flex items-center gap-1.5 flex-wrap">
              {['HTML/CSS', 'JAVASCRIPT'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] sm:text-xs font-bold text-[#1D1C1A] bg-[#E7BD58] px-2 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs group-hover:bg-[#F2C66D] transition-colors"
                >
                  [{t}]
                </span>
              ))}
            </div>

            <a
              href={SAVORA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 sm:px-4 py-1 bg-[#FAF6EE] hover:bg-[#E7BD58] text-[#1D1C1A] font-condensed font-extrabold text-xs sm:text-sm rounded-xs border-2 border-[#1D1C1A] shadow-sketch hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer focus:outline-hidden"
              style={{ borderRadius: '3px 6px 3px 5px' }}
              title="Visit Savora live"
            >
              LIVE ↗
            </a>
          </div>
        </div>
      </ProjectCard>

      {/* Below-card doodles */}
      <div className="relative mt-2.5 flex items-center justify-between gap-2">
        {/* IDEAS / BACKLOG note */}
        <div className="relative z-10 p-2 bg-[#FAF6EE] border border-[#1D1C1A] rounded-xs shadow-2xs transform -rotate-1">
          <div className="flex items-center gap-1 font-condensed font-extrabold text-xs text-[#1D1C1A] border-b border-[#E0D5BD] pb-0.5 mb-1">
            <span>IDEAS / BACKLOG</span><span>💡</span>
          </div>
          <div className="font-hand font-bold text-[11px] sm:text-xs text-[#4A4335] leading-tight space-y-0.5">
            <div>• Table multi-slot lock</div>
            <div>• Offline cache sync</div>
          </div>
        </div>

        {/* Design System Sketch */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-12 h-10 bg-[#FAF6EE] border border-[#1D1C1A] rounded-xs p-1 shadow-2xs">
            <div className="flex items-center gap-0.5 pb-0.5 border-b border-[#DDD2BA]">
              <span className="w-1 h-1 rounded-full bg-[#1D1C1A]" />
              <span className="w-1 h-1 rounded-full bg-[#1D1C1A]" />
            </div>
            <div className="grid grid-cols-2 gap-1 pt-1">
              <div className="h-2.5 bg-[#E8DFCA] rounded-2xs" />
              <div className="h-2.5 bg-[#E8DFCA] rounded-2xs" />
            </div>
          </div>
          <span className="font-hand font-bold text-[10px] sm:text-[11px] text-[#1D1C1A] mt-0.5">
            Design System 🎨
          </span>
        </div>

        {/* BUILD #04 */}
        <div className="relative z-10 border-2 border-[#1D1C1A] px-2 py-1 bg-[#FAF6EE] shadow-2xs transform rotate-2">
          <span className="font-condensed font-extrabold text-[11px] sm:text-xs text-[#1D1C1A] tracking-widest uppercase">
            BUILD #04
          </span>
        </div>
      </div>
    </div>
  );
};