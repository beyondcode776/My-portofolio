import React from 'react';

/**
 * Hand-drawn Megaphone / Loudspeaker Doodle for Campus Ambassador card
 */
export const MegaphoneDoodle = ({ className = "w-14 h-12", color = "#1D1C1A" }) => {
  return (
    <svg
      viewBox="0 0 60 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Megaphone Cone */}
      <path
        d="M 16 20 L 38 12 L 38 36 L 16 28 Z"
        fill="#FAF5E8"
        stroke={color}
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Front Bell Opening Oval */}
      <ellipse
        cx="38"
        cy="24"
        rx="3.5"
        ry="12"
        fill="#F2C66D"
        stroke={color}
        strokeWidth="2.2"
      />

      {/* Rear Mouthpiece */}
      <rect
        x="9"
        y="21"
        width="7"
        height="6"
        rx="1.5"
        fill="#E2D4B7"
        stroke={color}
        strokeWidth="2"
      />
      <path d="M 6 22 L 9 21 L 9 27 L 6 26 Z" fill={color} stroke={color} strokeWidth="1.5" />

      {/* Handle */}
      <path
        d="M 22 26 L 22 38 C 22 41 18 41 18 38 L 18 27"
        fill="#FAF5E8"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sound Waves emitting to the right */}
      <path
        d="M 45 18 C 47 22 47 26 45 30"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 50 14 C 54 20 54 28 50 34"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 55 10 C 60 18 60 30 55 38"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="2 1"
      />
    </svg>
  );
};
