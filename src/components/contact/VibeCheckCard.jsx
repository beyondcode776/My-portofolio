import React, { useState } from 'react';
import { MaskingTape } from '../Doodles';

/**
 * VibeCheckCard Component — VIBE CHECK
 * Reproduces the compact notebook card below FAQ matching the exact reference:
 * - Warm cream paper card (#FAF6EE) with 2px ink border
 * - Masking tape at top
 * - Heading: "VIBE CHECK" with monochrome sketch lightning accent
 * - Subtitle: "(Your project/connection vibe)"
 * - 4 interactive notebook checkboxes:
 *   1. Web App
 *   2. IoT & Robotics Hardware
 *   3. Freelance / Collab
 *   4. Just saying hi
 * - Bottom note: "Check what applies!" with small hand-drawn arrow
 * - Strictly NO decorative emojis. All monochrome hand-drawn ink styling.
 */
export const VibeCheckCard = ({ className = "", onSelectionChange }) => {
  const [selectedVibes, setSelectedVibes] = useState({
    webApp: true,
    iotHardware: false,
    freelanceCollab: false,
    justHi: false,
  });

  const options = [
    { id: 'webApp', label: 'Web App' },
    { id: 'iotHardware', label: 'IoT & Robotics Hardware' },
    { id: 'freelanceCollab', label: 'Freelance / Collab' },
    { id: 'justHi', label: 'Just saying hi' },
  ];

  const handleToggle = (id) => {
    setSelectedVibes((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      if (onSelectionChange) {
        onSelectionChange(next);
      }
      return next;
    });
  };

  return (
    <div className={`relative ${className} select-none`}>
      {/* Masking tape on top */}
      <div className="absolute -top-3 left-1/4 pointer-events-none z-20">
        <MaskingTape width="w-14 sm:w-16" height="h-3.5 sm:h-4" angle="rotate-2" />
      </div>

      {/* Cream Notebook Paper Card */}
      <div
        className="relative p-3.5 sm:p-4 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform rotate-0.5 hover:rotate-0 transition-transform duration-200"
        style={{
          boxShadow: '3px 4px 10px rgba(45, 35, 20, 0.12), 2px 2px 0px #1D1C1A',
        }}
      >
        {/* Header: VIBE CHECK + Subtitle */}
        <div className="mb-2 pb-1.5 border-b-2 border-[#1D1C1A]/70 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <h3 className="font-condensed font-extrabold text-sm sm:text-base md:text-[17px] text-[#1D1C1A] uppercase tracking-wide">
              VIBE CHECK
            </h3>
            {/* Hand-Drawn Monochrome Lightning Sketch Doodle */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5 text-[#1D1C1A]"
              aria-hidden="true"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <span className="font-hand font-bold text-[10.5px] sm:text-xs text-[#5C5240]">
            (Your project/connection vibe)
          </span>
        </div>

        {/* 4 Interactive Checkbox Items */}
        <div className="space-y-1.5 py-1">
          {options.map((opt) => {
            const isChecked = !!selectedVibes[opt.id];
            return (
              <label
                key={opt.id}
                onClick={() => handleToggle(opt.id)}
                className="flex items-center gap-2 cursor-pointer group py-0.5"
              >
                {/* Hand-drawn checkbox square */}
                <div
                  className={`w-4 h-4 rounded-xs border-2 border-[#1D1C1A] flex items-center justify-center transition-all ${
                    isChecked ? 'bg-[#E7BD58]' : 'bg-[#FFFDF9] group-hover:bg-[#FAF0D4]'
                  }`}
                  style={{
                    borderRadius: '2px 4px 3px 3px',
                  }}
                >
                  {isChecked && (
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="w-3 h-3 text-[#1D1C1A]"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 8 7 12 13 4" />
                    </svg>
                  )}
                </div>

                {/* Option text */}
                <span className="font-hand font-bold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wide group-hover:text-black">
                  {opt.label}
                </span>
              </label>
            );
          })}
        </div>

        {/* Footer: Check what applies! with hand-drawn arrow */}
        <div className="pt-1.5 border-t border-dashed border-[#1D1C1A]/25 flex items-center justify-end gap-1.5 text-right">
          {/* Small hand-drawn curved arrow pointing to checklist */}
          <svg
            viewBox="0 0 28 14"
            fill="none"
            className="w-5 h-2.5 text-[#1D1C1A]"
            aria-hidden="true"
          >
            <path
              d="M 26 10 C 18 12, 10 10, 4 4 M 4 4 L 9 3 M 4 4 L 5 9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-hand font-bold text-[11px] sm:text-xs text-[#524632]">
            Check what applies!
          </span>
        </div>
      </div>
    </div>
  );
};
