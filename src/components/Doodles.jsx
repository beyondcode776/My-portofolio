import React from 'react';

/**
 * Hand-drawn 5-point sketchy star (similar to the one next to the logo in the reference)
 */
export const SketchStar = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <path
      d="M20 3.5L24.8 14.8L37 16.2L27.9 24.5L30.3 36.8L19.8 30.5L9.1 36.5L11.8 24.3L2.9 15.8L15.1 14.7L20 3.5Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
    />
    <path
      d="M19.5 4.5L24.2 15L36 16.5L27.3 24.2L29.6 35.8L19.5 30L9.8 35.5L12.2 24L3.8 16.1L15.4 15.2L19.5 4.5"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.4"
    />
  </svg>
);

/**
 * 4-pointed Sparkle / Burst doodle (like the one above "BUILDING")
 */
export const SparkleBurst = ({ className = "w-8 h-8", color = "currentColor" }) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    {/* Main 4 points */}
    <path
      d="M25 3C25 15 15 25 3 25C15 25 25 35 25 47C25 35 35 25 47 25C35 25 25 15 25 3Z"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Small cross hatching / hand-drawn imperfect feel */}
    <path
      d="M25 9C24.5 17 17 24.5 9 25C17 25.5 24.5 33 25 41C25.5 33 33 25.5 41 25C33 24.5 25.5 17 25 9Z"
      stroke={color}
      strokeWidth="1.2"
      opacity="0.3"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Code Brackets `</>` hand-drawn doodle (like the one on the top right in the reference)
 */
export const CodeBracketDoodle = ({ className = "w-12 h-8", color = "currentColor" }) => (
  <svg
    viewBox="0 0 60 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    {/* Left bracket < */}
    <path
      d="M18 10L6 20L18 30"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17 11L7 20L17 29"
      stroke={color}
      strokeWidth="1.2"
      opacity="0.35"
      strokeLinecap="round"
    />
    {/* Slash / */}
    <path
      d="M34 8L26 32"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
    />
    {/* Right bracket > */}
    <path
      d="M42 10L54 20L42 30"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43 11L53 20L43 29"
      stroke={color}
      strokeWidth="1.2"
      opacity="0.35"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Signature underline scribble (under "Kishlay Kumar")
 */
export const UnderlineScribble = ({ className = "w-44 h-3", color = "#1D1C1A" }) => (
  <svg
    viewBox="0 0 200 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M3 10C35 4.5 85 13 140 7.5C165 5 185 8.5 197 11"
      stroke={color}
      strokeWidth="2.6"
      strokeLinecap="round"
    />
    <path
      d="M6 12C45 6.5 95 14 150 9C170 7 188 10 194 12"
      stroke={color}
      strokeWidth="1.2"
      opacity="0.4"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Mustard Yellow Marker Stroke Highlighter
 * Organic hand-drawn shape that sits behind text
 */
export const MarkerHighlight = ({ children, className = "" }) => (
  <span className={`relative inline-block px-2.5 py-0.5 mx-1 my-0.5 z-0 ${className}`}>
    <span
      className="absolute inset-0 bg-[#F2C66D] opacity-90 rounded-xs -rotate-0.5 pointer-events-none transform -skew-x-3 transition-transform duration-300 group-hover:scale-105"
      style={{
        zIndex: -1,
        borderRadius: '3px 8px 4px 6px',
        boxShadow: '0 1px 3px rgba(242, 198, 109, 0.4)',
        background: 'linear-gradient(100deg, rgba(242, 198, 109, 0.95) 0%, rgba(246, 212, 133, 0.9) 70%, rgba(239, 190, 88, 0.92) 100%)',
        clipPath: 'polygon(0% 12%, 2% 4%, 98% 2%, 100% 18%, 99% 88%, 97% 96%, 3% 98%, 0% 86%)'
      }}
      aria-hidden="true"
    />
    {children}
  </span>
);

/**
 * Masking Tape Strip with torn edges
 */
export const MaskingTape = ({
  className = "",
  width = "w-24",
  height = "h-7",
  angle = "-rotate-2",
  color = "bg-[#EDE2C8]"
}) => (
  <div
    className={`pointer-events-none select-none relative ${width} ${height} ${angle} ${className} shadow-xs`}
    style={{
      backgroundColor: 'rgba(238, 226, 198, 0.88)',
      backgroundImage: `
        repeating-linear-gradient(45deg, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 2px, transparent 2px, transparent 4px),
        linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(200,185,150,0.1) 100%)
      `,
      clipPath: 'polygon(0% 15%, 3% 5%, 5% 0%, 95% 2%, 98% 8%, 100% 14%, 98% 88%, 95% 98%, 4% 95%, 0% 86%)',
      boxShadow: '0 1px 4px rgba(60, 45, 25, 0.12), inset 0 0 3px rgba(255,255,255,0.4)',
      backdropFilter: 'blur(0.5px)',
    }}
    aria-hidden="true"
  />
);

/**
 * Hand-drawn arrow pointing down-right towards button
 */
export const CurvedArrowDown = ({ className = "w-14 h-14", color = "#1D1C1A" }) => (
  <svg
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M10 12C12 28 20 48 48 52"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Arrowhead */}
    <path
      d="M36 46L50 53L48 38"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Curved Arrow for Polaroid annotations
 */
export const AnnotationArrow = ({ direction = "to-right-down", className = "w-10 h-10", color = "#1D1C1A" }) => {
  if (direction === "to-right-down") {
    // Curves from label down-right toward subject
    return (
      <svg viewBox="0 0 50 40" fill="none" className={className} aria-hidden="true">
        <path d="M8 8C20 10 32 18 38 28" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M28 27L40 30L38 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (direction === "to-left-down") {
    // Curves from label down-left toward subject
    return (
      <svg viewBox="0 0 50 40" fill="none" className={className} aria-hidden="true">
        <path d="M42 8C30 10 18 18 12 28" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M22 27L10 30L12 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (direction === "to-right-up") {
    // Curves from label up-right toward subject
    return (
      <svg viewBox="0 0 50 40" fill="none" className={className} aria-hidden="true">
        <path d="M6 32C18 28 30 20 38 10" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M28 9L40 8L36 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // to-left-up
  return (
    <svg viewBox="0 0 50 40" fill="none" className={className} aria-hidden="true">
      <path d="M44 32C32 28 20 20 12 10" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M22 9L10 8L14 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

/**
 * Hand-drawn Pen icon for "I'm a UI Designer ✍️"
 */
export const PenDoodle = ({ className = "w-6 h-6", color = "currentColor" }) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`inline-block ${className}`}
    aria-hidden="true"
  >
    <path
      d="M5 27L9 25L25 9C26.5 7.5 26.5 5 25 3.5C23.5 2 21 2 19.5 3.5L3.5 19.5L1 27L5 27Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M18 5L23 10" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M4 24L7 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="2" cy="28" r="1.5" fill={color} />
  </svg>
);
