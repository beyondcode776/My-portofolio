import React from 'react';
import { MaskingTape } from '../Doodles';
import { ProjectCard, NotebookPreviewPanel } from './ProjectCard';

const AGRIORBIT_URL = 'https://agriorbit-nine.vercel.app/';

/**
 * AgriOrbitCard Component (Project 04)
 * Torn paper notebook sheet with binder perforations:
 * - Interactive ProjectCard wrapper with hover lift/tilt and link opening
 * - Title: "Project 04: AGRIORBIT"
 * - Description: "A smart geo-spatial and agriculture platform for crop insights, weather tracking, and resource management."
 * - Visual preview: Agricultural fields, satellite/drone geospatial terrain, wheat sketch
 * - Annotation: "New build! 🌾" with hand-drawn arrow
 * - Badges: [AGRI-TECH] [GEO-SPATIAL] [WEB]
 * - Button: LIVE ↗ linking to https://agriorbit-nine.vercel.app/
 */
export const AgriOrbitCard = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <ProjectCard href={AGRIORBIT_URL} rotation="0.5deg">
        {/* Torn-Paper Notebook Sheet with Binder Perforations */}
        <div
          className="relative w-full p-3 sm:p-4 pl-7 sm:pl-8 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs"
          style={{
            boxShadow: '3px 4px 0px #1D1C1A',
            clipPath: 'polygon(1% 0%, 100% 1%, 99% 99%, 0% 98%)',
          }}
        >
          {/* Binder Perforation Holes Along Left Edge */}
          <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-around py-3 pointer-events-none z-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-2 sm:w-2.5 h-3 sm:h-3.5 rounded-full border border-[#1D1C1A] bg-[#F7F3E8] shadow-inner opacity-80"
              />
            ))}
          </div>

          {/* Masking tape on top center */}
          <div className="absolute -top-2.5 left-1/3 pointer-events-none z-20">
            <MaskingTape width="w-16 sm:w-20" height="h-4 sm:h-4.5" angle="-rotate-1" />
          </div>

          {/* Card Header */}
          <div className="mb-2">
            <h3 className="font-condensed font-extrabold text-base sm:text-lg md:text-xl text-[#1D1C1A] uppercase tracking-wide">
              Project 04: <span className="underline decoration-[#1D1C1A] decoration-2 underline-offset-3">AGRIORBIT</span>
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#2D2820] mt-1 leading-relaxed">
              A smart geo-spatial and precision agriculture platform for satellite crop insights, weather tracking, and telemetry dispatch.
            </p>
          </div>

          {/* Feature Showcase Panel with Words instead of command prompt box */}
          <NotebookPreviewPanel
            title="Geospatial Telemetry &amp; Crop Intelligence"
            tag="SATELLITE + RTK PILOT"
            href={AGRIORBIT_URL}
          >
            <div className="flex items-center justify-between pb-1 border-b border-[#DDD2BA] mb-1">
              <span className="font-mono text-[10px] sm:text-[11px] text-[#2E7D32] font-bold">
                ● SPACE WEATHER &amp; RTK DISPATCH
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#6E6352] font-bold">
                GNSS SENSOR LOCK
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              {/* Left: Hand-drawn field furrows & drone telemetry grid */}
              <div className="flex-1">
                <svg viewBox="0 0 160 52" fill="none" className="w-full h-12">
                  <path d="M 5 42 C 35 22 75 36 155 14" stroke="#8C7952" strokeWidth="1.4" strokeDasharray="3 2" />
                  <path d="M 5 48 C 40 28 85 42 155 20" stroke="#8C7952" strokeWidth="1.4" strokeDasharray="3 2" />

                  {/* Drone / Satellite radar scan cone */}
                  <polygon points="80,4 56,38 104,38" fill="#E7BD58" fillOpacity="0.25" stroke="#1D1C1A" strokeWidth="0.8" strokeDasharray="2 2" />
                  <circle cx="80" cy="4" r="3" fill="#1D1C1A" />
                  <line x1="72" y1="4" x2="88" y2="4" stroke="#1D1C1A" strokeWidth="1.4" />
                  <circle cx="72" cy="4" r="1.5" fill="#FAF6EE" stroke="#1D1C1A" />
                  <circle cx="88" cy="4" r="1.5" fill="#FAF6EE" stroke="#1D1C1A" />

                  {/* Geographic sensor coordinates */}
                  <text x="4" y="14" fill="#1D1C1A" fontFamily="monospace" fontSize="8.5" fontWeight="bold">
                    RTK: LOCK (98.4%)
                  </text>
                  <text x="4" y="24" fill="#5A503C" fontFamily="monospace" fontSize="8">
                    Solar Flux: Active
                  </text>
                </svg>
              </div>

              {/* Right: Botanical wheat icon */}
              <div className="w-14 h-12 flex items-center justify-center shrink-0 border-l border-[#DDD2BA] pl-2">
                <svg viewBox="0 0 40 45" fill="none" className="w-8 h-10 text-[#1D1C1A]">
                  <path d="M 20 42 C 20 25 20 10 20 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <ellipse cx="15" cy="10" rx="3.5" ry="2" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.4" transform="rotate(-30 15 10)" />
                  <ellipse cx="25" cy="10" rx="3.5" ry="2" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.4" transform="rotate(30 25 10)" />
                  <ellipse cx="14" cy="17" rx="4" ry="2.2" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.4" transform="rotate(-35 14 17)" />
                  <ellipse cx="26" cy="17" rx="4" ry="2.2" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.4" transform="rotate(35 26 17)" />
                  <ellipse cx="15" cy="25" rx="4.5" ry="2.5" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.4" transform="rotate(-35 15 25)" />
                  <ellipse cx="25" cy="25" rx="4.5" ry="2.5" fill="#FAF6EE" stroke="currentColor" strokeWidth="1.4" transform="rotate(35 25 25)" />
                </svg>
              </div>
            </div>
          </NotebookPreviewPanel>

          {/* Badges + LIVE Button */}
          <div className="flex items-center justify-between gap-2 pt-1 flex-wrap">
            <div className="flex items-center gap-1.5 flex-wrap">
              {['AGRI-TECH', 'GEO-SPATIAL', 'WEB'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] sm:text-xs font-bold text-[#1D1C1A] bg-[#E7BD58] px-2 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs group-hover:bg-[#F2C66D] transition-colors"
                >
                  [{t}]
                </span>
              ))}
            </div>

            <a
              href={AGRIORBIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 sm:px-4 py-1 bg-[#FAF6EE] hover:bg-[#E7BD58] text-[#1D1C1A] font-condensed font-extrabold text-xs sm:text-sm rounded-xs border-2 border-[#1D1C1A] shadow-sketch hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer focus:outline-hidden"
              style={{ borderRadius: '3px 6px 3px 5px' }}
              title="Visit AgriOrbit live"
              aria-label="Open AgriOrbit website in a new tab"
            >
              LIVE ↗
            </a>
          </div>
        </div>
      </ProjectCard>

      {/* NEW BUILD! HAND-DRAWN ANNOTATION */}
      <div className="absolute -right-3 -bottom-4 sm:-right-4 sm:-bottom-3.5 flex items-center gap-1.5 pointer-events-none">
        <svg viewBox="0 0 28 20" fill="none" className="w-5 sm:w-6 h-4 text-[#1D1C1A]">
          <path d="M 2 12 C 10 18 18 18 24 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 18 4 L 24 4 L 25 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-hand font-extrabold text-xs sm:text-sm text-[#1D1C1A] whitespace-nowrap">
          New build! 🌾
        </span>
      </div>
    </div>
  );
};