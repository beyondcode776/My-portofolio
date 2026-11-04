import React from 'react';
import { MaskingTape, SketchStar } from '../Doodles';
import { ProjectCard, NotebookPreviewPanel } from './ProjectCard';

const CYBERSHIELD_URL = 'https://cybershields.vercel.app/';

export const CyberShieldCard = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <ProjectCard href={CYBERSHIELD_URL} rotation="-0.5deg">
        <div
          className="relative w-full p-3 sm:p-4 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs"
          style={{
            boxShadow: '3px 4px 0px #1D1C1A',
            clipPath: 'polygon(0% 1%, 99% 0%, 100% 99%, 1% 100%)',
          }}
        >
          {/* Masking tape */}
          <div className="absolute -top-2.5 left-6 pointer-events-none z-20">
            <MaskingTape width="w-14 sm:w-16" height="h-4 sm:h-4.5" angle="-rotate-4" />
          </div>
          <div className="absolute -top-2.5 right-6 pointer-events-none z-20">
            <MaskingTape width="w-14 sm:w-16" height="h-4.5" angle="rotate-5" />
          </div>

          {/* Header */}
          <div className="mb-2">
            <h3 className="font-condensed font-extrabold text-base sm:text-lg md:text-xl text-[#1D1C1A] uppercase tracking-wide">
              Project 01: <span className="underline decoration-[#1D1C1A] decoration-2 underline-offset-3">CYBERSHIELD</span>
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#2D2820] mt-1 leading-relaxed">
              Built responsive, accessible &amp; interactive cybersecurity UI using React.js &amp; Tailwind CSS.
            </p>
          </div>

          {/* Feature Showcase Panel with Words instead of command prompt box */}
          <NotebookPreviewPanel
            title="Interactive Security Architecture"
            tag="REACT + TAILWIND"
            href={CYBERSHIELD_URL}
          >
            <div className="grid grid-cols-12 gap-2 items-center">
              {/* Left: AES Encryption Engine */}
              <div className="col-span-6 bg-[#FAF6EE] p-2 border border-[#CFC0A4] rounded-xs">
                <div className="flex items-center justify-between text-xs font-condensed font-extrabold text-[#1D1C1A] border-b border-[#E0D5BD] pb-1">
                  <span>VIRTUAL AES-256</span>
                  <span className="font-mono text-[10px] text-[#2E7D32] font-bold">ONLINE ●</span>
                </div>
                <div className="mt-1.5 flex items-center justify-around gap-1 py-1">
                  <div className="px-1.5 py-0.5 bg-[#E7BD58]/40 border border-[#1D1C1A] rounded-2xs text-[10px] sm:text-[11px] font-mono font-bold">
                    React.js UI
                  </div>
                  <svg viewBox="0 0 20 16" fill="none" className="w-4 h-3.5 text-[#1D1C1A]">
                    <path d="M 2 5 C 6 2 14 2 18 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M 15 3 L 18 5 L 16 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M 18 11 C 14 14 6 14 2 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M 5 13 L 2 11 L 4 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="px-1.5 py-0.5 bg-[#FAF6EE] border border-[#1D1C1A] rounded-2xs text-[10px] sm:text-[11px] font-mono font-bold">
                    Tailwind CSS
                  </div>
                </div>
                <div className="w-full bg-[#E5DBC5] h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-[#1D1C1A] h-full w-4/5 rounded-full" />
                </div>
              </div>

              {/* Right: Security Course Modules */}
              <div className="col-span-6 bg-[#FAF6EE] p-2 border border-[#CFC0A4] rounded-xs">
                <div className="flex items-center justify-between text-xs font-condensed font-extrabold text-[#1D1C1A] border-b border-[#E0D5BD] pb-1 mb-1">
                  <span>COURSE MODULES</span>
                  <span className="font-mono text-[10px] text-[#6E6352]">3 ACTIVE</span>
                </div>
                <div className="grid grid-cols-3 gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex flex-col gap-0.5">
                      <div className="h-6 bg-[#EFE7D5] border border-[#C8B89A] flex items-center justify-center rounded-2xs">
                        <svg viewBox="0 0 16 16" className="w-3 h-3 text-[#7A6A4E]">
                          <rect x="2" y="2" width="12" height="12" rx="1" fill="none" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M 5 8 L 7 10 L 11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="h-1 bg-[#D6CAA7] rounded-full" />
                      <div className="h-1 bg-[#E2D8B9] w-3/4 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </NotebookPreviewPanel>

          {/* Badges + LIVE Button */}
          <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
            <div className="flex items-center gap-1.5 flex-wrap">
              {['REACT', 'TAILWIND CSS', 'UI/UX'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] sm:text-xs font-bold text-[#1D1C1A] bg-[#E7BD58] px-2 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs group-hover:bg-[#F2C66D] transition-colors"
                >
                  [{t}]
                </span>
              ))}
            </div>

            <a
              href={CYBERSHIELD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 sm:px-4 py-1 bg-[#FAF6EE] hover:bg-[#E7BD58] text-[#1D1C1A] font-condensed font-extrabold text-xs sm:text-sm rounded-xs border-2 border-[#1D1C1A] shadow-sketch hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer focus:outline-hidden"
              style={{ borderRadius: '3px 6px 3px 5px' }}
              title="Visit CyberShield live"
            >
              LIVE ↗
            </a>
          </div>
        </div>
      </ProjectCard>

      {/* Stamps below card */}
      <div className="flex items-center justify-between gap-1.5 mt-2 px-1">
        <div className="border border-[#1D1C1A] px-2 py-0.5 transform -rotate-2 bg-[#FAF6EE] shadow-2xs">
          <span className="font-condensed font-extrabold text-[10px] sm:text-[11px] tracking-widest text-[#1D1C1A] uppercase">
            PRODUCTION READY
          </span>
        </div>
        <div className="border border-[#1D1C1A] px-2 py-0.5 transform rotate-1 bg-[#FAF6EE] shadow-2xs flex items-center gap-1">
          <span className="font-condensed font-extrabold text-[10px] sm:text-[11px] tracking-wider text-[#1D1C1A] uppercase">
            100% RESPONSIVE
          </span>
          <SketchStar className="w-3 h-3 text-[#1D1C1A]" />
        </div>
      </div>
    </div>
  );
};