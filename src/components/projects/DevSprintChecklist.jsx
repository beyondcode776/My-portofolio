import React from 'react';

/**
 * DevSprintChecklist Component
 * A pinned paper note near the top-right of the page:
 * - Hand-drawn pushpin at the top
 * - "DEV SPRINT checklist //" header with underline
 * - 4 checked items: SEO Optimization, Image Compression, Mobile responsiveness, 404 handler
 */
export const DevSprintChecklist = ({ className = "" }) => {
  return (
    <div className={`relative select-none ${className}`}>
      {/* Hand-drawn Pushpin at top center */}
      <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
        <svg viewBox="0 0 24 24" fill="none" className="w-5 sm:w-6 h-5 sm:h-6 drop-shadow-xs" aria-hidden="true">
          <ellipse cx="12" cy="7" rx="5" ry="3" fill="#D3A745" stroke="#1D1C1A" strokeWidth="1.6" />
          <path d="M 8 7 C 8 11 10 13 10 16 L 14 16 C 14 13 16 11 16 7 Z" fill="#E5BC58" stroke="#1D1C1A" strokeWidth="1.6" />
          <line x1="12" y1="16" x2="12" y2="21" stroke="#1D1C1A" strokeWidth="1.8" strokeLinecap="round" />
          <ellipse cx="11" cy="6" rx="2" ry="1" fill="#FFFDF8" opacity="0.8" />
        </svg>
      </div>

      {/* Paper Note */}
      <div
        className="relative p-2.5 sm:p-3 pt-3.5 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform -rotate-1 hover:rotate-0 transition-transform duration-200"
        style={{
          boxShadow: '2px 3px 8px rgba(45, 35, 20, 0.1), 2px 2px 0px #1D1C1A',
          clipPath: 'polygon(1% 0%, 99% 1%, 100% 99%, 0% 98%)',
        }}
      >
        {/* Title */}
        <div className="mb-1.5 pb-1 border-b border-[#E0D5BD]">
          <h4 className="font-hand font-extrabold text-xs sm:text-sm text-[#1D1C1A] tracking-wide">
            DEV SPRINT checklist //
          </h4>
        </div>

        {/* Checklist Items */}
        <ul className="space-y-1 font-hand font-bold text-xs sm:text-[13px] text-[#2D2820] leading-snug">
          <li className="flex items-center gap-1.5">
            <span className="text-[#2E7D32] text-xs font-black">✓</span>
            <span>SEO Optimization</span>
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-[#2E7D32] text-xs font-black">✓</span>
            <span>Image Compression</span>
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-[#2E7D32] text-xs font-black">✓</span>
            <span>Mobile responsiveness</span>
          </li>
          <li className="flex items-center gap-1.5">
            <span className="text-[#2E7D32] text-xs font-black">✓</span>
            <span>404 handler</span>
          </li>
        </ul>
      </div>
    </div>
  );
};