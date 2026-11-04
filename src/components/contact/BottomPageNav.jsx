import React from 'react';

/**
 * BottomPageNav Component
 * Bottom navigation strip matching the exact reference:
 * - 01 / HOME
 * - ← 02 / ABOUT
 * - ← 03 / EXPERIENCE
 * - ← 04 / PROJECTS
 * - [BACK TO START ↥] (returns to the opening diary cover intro)
 */
export const BottomPageNav = ({ onNavigate, className = "" }) => {
  const handleBackToStart = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('start');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: '01 / HOME', id: 'home', prefix: '' },
    { label: '02 / ABOUT', id: 'about', prefix: '← ' },
    { label: '03 / EXPERIENCE', id: 'experience', prefix: '← ' },
    { label: '04 / PROJECTS', id: 'projects', prefix: '← ' },
  ];

  return (
    <div className={`w-full py-2.5 sm:py-3 border-t-2 border-dashed border-[#DDD2BA] flex flex-wrap items-center justify-between gap-2.5 text-[#1D1C1A] select-none ${className}`}>
      {/* Numbered Page Links */}
      <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate && onNavigate(item.id)}
            className="group inline-flex items-center gap-1 font-condensed font-extrabold text-xs sm:text-sm text-[#1D1C1A] uppercase tracking-wider hover:underline underline-offset-4 cursor-pointer focus:outline-hidden"
          >
            <span>{item.prefix}{item.label}</span>
          </button>
        ))}
      </div>

      {/* [BACK TO START ↥] — returns to diary cover intro */}
      <div>
        <button
          type="button"
          onClick={handleBackToStart}
          className="inline-flex items-center gap-1 px-3 py-1 font-condensed font-extrabold text-xs sm:text-sm text-[#1D1C1A] uppercase tracking-wider hover:bg-[#E7BD58]/30 rounded-xs border border-[#1D1C1A]/40 transition-colors cursor-pointer focus:outline-hidden"
          title="Return to the opening diary cover intro"
        >
          <span>[BACK TO START ↥]</span>
        </button>
      </div>
    </div>
  );
};