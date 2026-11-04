import React, { useState, useCallback } from 'react';

/**
 * ProjectCard — Reusable interactive wrapper for all four project cards.
 * Provides:
 * - Clickable card that opens project URL in new tab
 * - Hover lift + shadow + slight tilt + "OPEN PROJECT ↗" reveal
 * - Keyboard focus states
 * - Prevents nested clicks from opening duplicate tabs
 * - Touch-friendly (LIVE button always visible)
 */
export const ProjectCard = ({ href, children, className = '', rotation = '-0.5deg' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = useCallback((e) => {
    // Don't open if clicking on the LIVE button (it has its own handler)
    if (e.target.closest('a[target="_blank"]')) return;
    window.open(href, '_blank', 'noopener,noreferrer');
  }, [href]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  }, [href]);

  return (
    <div
      role="link"
      tabIndex={0}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative cursor-pointer outline-hidden group transition-all duration-250 ease-out select-none
        focus-visible:ring-2 focus-visible:ring-[#E7BD58] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F3E8]
        ${isHovered ? 'z-10' : 'z-0'}
        ${className}`}
      style={{
        transform: isHovered
          ? `translateY(-5px) rotate(calc(${rotation} + 0.3deg))`
          : `rotate(${rotation})`,
        filter: isHovered
          ? 'drop-shadow(4px 8px 16px rgba(40, 30, 15, 0.18))'
          : 'drop-shadow(2px 4px 8px rgba(40, 30, 15, 0.08))',
      }}
      aria-label={`Open project at ${href}`}
    >
      {/* "OPEN PROJECT ↗" reveal label on hover */}
      <div
        className={`absolute -top-3.5 right-4 z-30 px-2 py-0.5 bg-[#E7BD58] border border-[#1D1C1A] rounded-xs shadow-2xs
          font-hand font-extrabold text-[11px] sm:text-xs text-[#1D1C1A] tracking-wider whitespace-nowrap pointer-events-none
          transition-all duration-200 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'}`}
      >
        OPEN PROJECT ↗
      </div>

      {children}
    </div>
  );
};

/**
 * NotebookPreviewPanel — A warm, hand-drawn developer notebook feature showcase.
 * Replaces rigid command prompt / URL address bars with descriptive word headers,
 * clean technical callouts, and readable handwritten & monospace notes.
 */
export const NotebookPreviewPanel = ({ title, tag = "FEATURE SHOWCASE", children, href }) => {
  const handlePreviewClick = useCallback((e) => {
    if (href) {
      e.stopPropagation();
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  }, [href]);

  return (
    <div
      className="my-2 bg-[#F6EFE0] border border-[#1D1C1A] rounded-xs shadow-2xs overflow-hidden group/preview transition-colors duration-200"
      onClick={handlePreviewClick}
      title={href ? `Click to visit project` : undefined}
    >
      {/* Notebook Feature Title Banner (Replaces rigid command prompt box with words!) */}
      <div className="flex items-center justify-between px-2.5 py-1.5 bg-[#EFE6CE] border-b border-[#DDD0B5]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E7BD58] border border-[#1D1C1A]" />
          <span className="font-condensed font-extrabold text-xs sm:text-[13px] text-[#1D1C1A] tracking-wide uppercase">
            {title}
          </span>
        </div>
        <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#635540] bg-[#FAF5E8] px-1.5 py-0.5 rounded-2xs border border-[#D5C6A3]">
          {tag}
        </span>
      </div>

      {/* Preview content area with bigger typography */}
      <div className="p-2 sm:p-2.5">
        {children}
      </div>
    </div>
  );
};

// Backwards-compatible export for any components referencing MiniatureBrowser
export const MiniatureBrowser = NotebookPreviewPanel;
