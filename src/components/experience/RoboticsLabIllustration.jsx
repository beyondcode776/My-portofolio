import React from 'react';

/**
 * Hand-drawn ink illustration of The Robotics Lab
 * Features:
 * - 4-axis articulated robotic arm with gripper claw
 * - Microcontroller / sensor board with jumper wires
 * - Mechanical gears & circuit traces
 * - Hand-lettered "THE ROBOTICS LAB" label with underline scribble
 */
export const RoboticsLabIllustration = ({ className = "w-full h-auto" }) => {
  return (
    <div className={`relative ${className} select-none`}>
      <svg
        viewBox="0 0 380 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        aria-label="The Robotics Lab hand-drawn illustration"
      >
        {/* Curved arrow from description pointing to the lab */}
        <path
          d="M 50 15 C 90 8 135 15 155 35"
          stroke="#1D1C1A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="3 2"
        />
        <path
          d="M 152 25 L 157 37 L 144 35"
          stroke="#1D1C1A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* ================= 1. ARTICULATED ROBOTIC ARM ================= */}
        <g id="robotic-arm" transform="translate(60, 15)">
          {/* Circular base stand */}
          <ellipse cx="45" cy="110" rx="26" ry="8" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2.2" />
          <ellipse cx="45" cy="107" rx="22" ry="6" fill="#EDE4CE" stroke="#1D1C1A" strokeWidth="1.6" />
          {/* Base joint pillar */}
          <path
            d="M 32 108 L 35 90 C 35 85 55 85 55 90 L 58 108"
            fill="#FAF5E8"
            stroke="#1D1C1A"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Base pivot bolt */}
          <circle cx="45" cy="90" r="5" fill="#E2D4B7" stroke="#1D1C1A" strokeWidth="2" />
          <circle cx="45" cy="90" r="2" fill="#1D1C1A" />

          {/* Lower arm segment */}
          <path
            d="M 42 88 L 32 55 C 32 50 48 48 50 54 L 48 88"
            fill="#FAF5E8"
            stroke="#1D1C1A"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          {/* Mechanical ribbing lines */}
          <line x1="38" y1="75" x2="45" y2="76" stroke="#1D1C1A" strokeWidth="1.4" />
          <line x1="36" y1="65" x2="44" y2="66" stroke="#1D1C1A" strokeWidth="1.4" />

          {/* Elbow Joint */}
          <circle cx="42" cy="50" r="6" fill="#F2C66D" stroke="#1D1C1A" strokeWidth="2" />
          <circle cx="42" cy="50" r="2.5" fill="#1D1C1A" />

          {/* Upper forearm segment extending right */}
          <path
            d="M 44 46 L 75 32 C 78 30 84 40 78 44 L 44 54"
            fill="#FAF5E8"
            stroke="#1D1C1A"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <line x1="55" y1="42" x2="57" y2="48" stroke="#1D1C1A" strokeWidth="1.4" />
          <line x1="65" y1="38" x2="67" y2="44" stroke="#1D1C1A" strokeWidth="1.4" />

          {/* Wrist Joint */}
          <circle cx="80" cy="38" r="4.5" fill="#E2D4B7" stroke="#1D1C1A" strokeWidth="1.8" />

          {/* Gripper Wrist Extension */}
          <rect
            x="84"
            y="34"
            width="8"
            height="8"
            rx="2"
            fill="#FAF5E8"
            stroke="#1D1C1A"
            strokeWidth="1.8"
            transform="rotate(15, 84, 34)"
          />

          {/* Gripper Claw Fingers (open grip) */}
          {/* Upper claw */}
          <path
            d="M 92 34 C 98 32 105 35 106 40 C 104 41 100 40 96 39"
            fill="#F2C66D"
            stroke="#1D1C1A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Lower claw */}
          <path
            d="M 91 44 C 97 47 103 48 106 43 C 103 43 99 44 95 43"
            fill="#F2C66D"
            stroke="#1D1C1A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Small spark / electricity near gripper */}
          <path
            d="M 108 36 L 114 38 L 110 42 L 116 44"
            stroke="#1D1C1A"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* ================= 2. MICROCONTROLLER BOARD & WIRES ================= */}
        <g id="microcontroller" transform="translate(195, 30)">
          {/* Board PCB with rounded corners */}
          <rect
            x="0"
            y="10"
            width="55"
            height="65"
            rx="4"
            fill="#FAF5E8"
            stroke="#1D1C1A"
            strokeWidth="2.2"
            transform="rotate(18, 25, 40)"
          />

          {/* Inner IC chip on rotated board */}
          <g transform="rotate(18, 25, 40)">
            {/* IC Chip */}
            <rect x="15" y="26" width="24" height="24" rx="2" fill="#1D1C1A" />
            <circle cx="20" cy="31" r="1.5" fill="#F2C66D" />
            <text x="21" y="42" fontFamily="Space Mono, monospace" fontSize="6.5" fill="#FAF5E8" fontWeight="bold">
              MCU
            </text>
            {/* IC Pins */}
            <line x1="11" y1="30" x2="15" y2="30" stroke="#1D1C1A" strokeWidth="1.4" />
            <line x1="11" y1="36" x2="15" y2="36" stroke="#1D1C1A" strokeWidth="1.4" />
            <line x1="11" y1="42" x2="15" y2="42" stroke="#1D1C1A" strokeWidth="1.4" />
            <line x1="39" y1="30" x2="43" y2="30" stroke="#1D1C1A" strokeWidth="1.4" />
            <line x1="39" y1="36" x2="43" y2="36" stroke="#1D1C1A" strokeWidth="1.4" />
            <line x1="39" y1="42" x2="43" y2="42" stroke="#1D1C1A" strokeWidth="1.4" />

            {/* Header pin row */}
            <rect x="4" y="14" width="46" height="5" rx="1" fill="#E2D4B7" stroke="#1D1C1A" strokeWidth="1.2" />
            {Array.from({ length: 7 }).map((_, i) => (
              <circle key={i} cx={8 + i * 6} cy="16.5" r="1.2" fill="#1D1C1A" />
            ))}
          </g>

          {/* Jumper wires curving out of the board */}
          <path
            d="M 12 12 C 5 -10 35 -15 48 5"
            stroke="#1D1C1A"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 22 10 C 15 -8 50 -12 60 12"
            stroke="#1D1C1A"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 32 8 C 30 -5 65 -6 68 22"
            stroke="#1D1C1A"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 40 14 C 45 2 75 8 72 32"
            stroke="#1D1C1A"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* ================= 3. MECHANICAL GEARS & CIRCUIT SENSOR ================= */}
        <g id="gears" transform="translate(290, 40)">
          {/* Top small gear */}
          <g transform="translate(10, 0)">
            <circle cx="14" cy="14" r="8" stroke="#1D1C1A" strokeWidth="1.8" fill="#FAF5E8" />
            <circle cx="14" cy="14" r="3" fill="#1D1C1A" />
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i * 60 * Math.PI) / 180;
              const x1 = 14 + Math.cos(angle) * 8;
              const y1 = 14 + Math.sin(angle) * 8;
              const x2 = 14 + Math.cos(angle) * 12;
              const y2 = 14 + Math.sin(angle) * 12;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1D1C1A" strokeWidth="2.2" strokeLinecap="round" />;
            })}
          </g>

          {/* Bottom larger gear meshed */}
          <g transform="translate(14, 32)">
            <circle cx="18" cy="18" r="12" stroke="#1D1C1A" strokeWidth="2" fill="#FAF5E8" />
            <circle cx="18" cy="18" r="4.5" fill="#F2C66D" stroke="#1D1C1A" strokeWidth="1.5" />
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 45 * Math.PI) / 180;
              const x1 = 18 + Math.cos(angle) * 12;
              const y1 = 18 + Math.sin(angle) * 12;
              const x2 = 18 + Math.cos(angle) * 17;
              const y2 = 18 + Math.sin(angle) * 17;
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1D1C1A" strokeWidth="2.4" strokeLinecap="round" />;
            })}
          </g>
        </g>

        {/* Small circuit trace accent */}
        <path
          d="M 270 115 L 295 115 L 305 105"
          stroke="#1D1C1A"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="305" cy="105" r="2.2" fill="#1D1C1A" />

        {/* ================= 4. "THE ROBOTICS LAB" HAND-LETTERED LABEL ================= */}
        <g id="lab-label" transform="translate(180, 126)">
          <text
            x="0"
            y="0"
            fontFamily="'Oswald', sans-serif"
            fontSize="18"
            fontWeight="bold"
            letterSpacing="1.2"
            fill="#1D1C1A"
          >
            THE ROBOTICS LAB
          </text>
          {/* Hand-drawn underline */}
          <path
            d="M -2 6 C 45 4 100 8 145 5"
            stroke="#1D1C1A"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M 5 8 C 50 6 95 9 135 7"
            stroke="#1D1C1A"
            strokeWidth="1"
            opacity="0.4"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
