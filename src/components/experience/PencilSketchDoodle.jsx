import React from 'react';

/**
 * Hand-drawn Wooden Sketch Pencil illustration (bottom left corner of experience page)
 */
export const PencilSketchDoodle = ({ className = "w-10 h-28" }) => {
  return (
    <svg
      viewBox="0 0 50 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Pencil Body Shaft */}
      <polygon
        points="15,40 35,40 35,120 15,120"
        fill="#EFE4C8"
        stroke="#1D1C1A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Pencil Flute center line */}
      <line x1="25" y1="40" x2="25" y2="120" stroke="#1D1C1A" strokeWidth="1.8" />

      {/* Sharpened Wood Tip Cone */}
      <polygon
        points="15,40 35,40 25,12"
        fill="#FAF5E8"
        stroke="#1D1C1A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Graphite Lead Point */}
      <polygon
        points="22,23 28,23 25,12"
        fill="#1D1C1A"
        stroke="#1D1C1A"
        strokeWidth="1.5"
      />

      {/* Metal Ferrule Collar */}
      <rect
        x="15"
        y="120"
        width="20"
        height="8"
        fill="#DDD1B5"
        stroke="#1D1C1A"
        strokeWidth="1.8"
      />
      <line x1="15" y1="124" x2="35" y2="124" stroke="#1D1C1A" strokeWidth="1.2" />

      {/* Eraser Top */}
      <path
        d="M 15 128 C 15 135 35 135 35 128 Z"
        fill="#E89B9B"
        stroke="#1D1C1A"
        strokeWidth="2"
      />
    </svg>
  );
};
