import React, { useEffect } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import { MaskingTape, SketchStar, UnderlineScribble } from './Doodles';

/**
 * ResumeModal Component
 * Emergent paper sheet displaying Kishlay Kumar's Developer Resume
 * with one-click PDF download, printable styling, and keyboard accessible close.
 */
export const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs select-none animate-fadeIn"
      onClick={onClose}
    >
      {/* Emergent Paper Sheet */}
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#FFFDF8] border-2 border-[#1D1C1A] rounded-sm p-6 sm:p-10 shadow-2xl transform transition-transform"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '10px 20px 50px rgba(0,0,0,0.35), 0 4px 12px rgba(0,0,0,0.15)',
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(200, 185, 155, 0.15) 0px, rgba(200, 185, 155, 0.15) 1px, transparent 1px, transparent 24px)
          `,
        }}
      >
        {/* Top Center Masking Tape */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 pointer-events-none">
          <MaskingTape width="w-32 sm:w-40" height="h-7" angle="-rotate-1" />
        </div>

        {/* Close Button (top-right sketch button) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-[#1D1C1A] bg-[#FAF3E0] hover:bg-[#F2C66D] text-[#1D1C1A] font-bold text-sm flex items-center justify-center shadow-sketch-sm hover:scale-105 transition-transform cursor-pointer"
          aria-label="Close Resume"
        >
          ✕
        </button>

        {/* Resume Header */}
        <div className="text-center pb-4 border-b-2 border-dashed border-[#DDD0B4]">
          <div className="inline-flex items-center gap-2">
            <h2 id="resume-title" className="font-hand font-extrabold text-3xl sm:text-4xl text-[#1D1C1A]">
              {portfolioConfig.personal.name}
            </h2>
            <SketchStar className="w-5 h-5 text-[#1D1C1A]" />
          </div>
          <div className="flex justify-center -mt-1 mb-2">
            <UnderlineScribble className="w-48 h-2.5 text-[#1D1C1A]" />
          </div>
          <p className="font-body font-semibold text-sm sm:text-base text-[#4A4235]">
            {portfolioConfig.personal.currentStatus} · Developer & UI Designer
          </p>
          <p className="font-hand text-base text-[#756A56] mt-0.5">
            "{portfolioConfig.personal.tagline}"
          </p>
        </div>

        {/* Resume Content Sections */}
        <div className="py-5 space-y-5 font-body text-sm sm:text-base text-[#2E281F]">
          
          {/* Section: Education */}
          <div>
            <h3 className="font-hand font-bold text-xl text-[#1D1C1A] border-b border-[#E8DFCA] pb-1 flex items-center gap-2">
              <span>🎓 Education</span>
            </h3>
            <div className="mt-2 pl-2 border-l-2 border-[#F2C66D]">
              <div className="font-bold text-[#1D1C1A]">Bachelor of Technology (B.Tech)</div>
              <div className="text-[#4E4638]">Computer Science & Engineering (CSE)</div>
              <div className="text-xs text-[#7A705E] font-mono mt-0.5">Based in: {portfolioConfig.personal.location}</div>
            </div>
          </div>

          {/* Section: Core Competencies */}
          <div>
            <h3 className="font-hand font-bold text-xl text-[#1D1C1A] border-b border-[#E8DFCA] pb-1 flex items-center gap-2">
              <span>⚡ Core Competencies</span>
            </h3>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div className="p-2.5 bg-[#FAF4E5] rounded-xs border border-[#E0D4BA]">
                <span className="font-bold text-[#1D1C1A] block">🎨 UI Design & Systems</span>
                <span className="text-xs text-[#5C5343]">Design systems, wireframes, interaction design & responsive layout principles.</span>
              </div>
              <div className="p-2.5 bg-[#FAF4E5] rounded-xs border border-[#E0D4BA]">
                <span className="font-bold text-[#1D1C1A] block">💻 Frontend Development</span>
                <span className="text-xs text-[#5C5343]">React, JavaScript, HTML5/CSS3, Tailwind CSS, component architecture.</span>
              </div>
              <div className="p-2.5 bg-[#FAF4E5] rounded-xs border border-[#E0D4BA]">
                <span className="font-bold text-[#1D1C1A] block">⚙️ Backend Development</span>
                <span className="text-xs text-[#5C5343]">Node.js, Express, REST APIs, databases & server-side logic.</span>
              </div>
              <div className="p-2.5 bg-[#FAF4E5] rounded-xs border border-[#E0D4BA]">
                <span className="font-bold text-[#1D1C1A] block">📡 IoT & Full Stack Builds</span>
                <span className="text-xs text-[#5C5343]">IoT-powered devices, hardware-software integration, creative prototyping.</span>
              </div>
            </div>
          </div>

          {/* Section: Philosophy */}
          <div>
            <h3 className="font-hand font-bold text-xl text-[#1D1C1A] border-b border-[#E8DFCA] pb-1 flex items-center gap-2">
              <span>💡 Approach & Philosophy</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#443D32]">
              Focus on creating future-ready digital experiences by combining aesthetic clarity with robust code.
              Committed to clean architecture, fast load times, and delivering practical solutions from scratch.
            </p>
          </div>

        </div>

        {/* Download & Action Bar */}
        <div className="pt-4 border-t-2 border-[#1D1C1A] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-mono text-xs text-[#7A705E]">
            📄 FILE: Kishlay_Resume.pdf
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={portfolioConfig.personal.resumePdfUrl}
              download="Kishlay_Resume.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F2C66D] hover:bg-[#E5B856] text-[#1D1C1A] font-hand font-bold text-base rounded-xs border-2 border-[#1D1C1A] shadow-sketch hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Download PDF</span>
              <span>⬇️</span>
            </a>

            <a
              href={portfolioConfig.personal.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2.5 bg-[#FAF5E6] hover:bg-[#ECE2C8] text-[#1D1C1A] font-hand font-bold text-base rounded-xs border-2 border-[#1D1C1A] shadow-sketch-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              title="Open PDF in new tab"
            >
              <span>View ↗</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
