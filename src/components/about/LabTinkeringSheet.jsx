import React from 'react';
import { MaskingTape } from '../Doodles';

/**
 * Hand-drawn technical SVG engineering workbench illustration
 */
export const WorkbenchIllustration = ({ className = "w-full h-auto" }) => (
  <svg
    viewBox="0 0 420 165"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Background workbench grid paper subtle patch */}
    <rect x="5" y="5" width="410" height="155" rx="3" fill="#FBF8EF" stroke="#1D1C1A" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />

    {/* Subheading in top left: "My Workspace" */}
    <text x="15" y="22" fontFamily="Kalam, Caveat, cursive" fontSize="12" fontWeight="bold" fill="#1D1C1A">
      My Workspace
    </text>

    {/* ================= 1. CIRCUIT WAVEFORMS & SENSOR (Far Left) ================= */}
    <g transform="translate(14, 28)">
      <path
        d="M 2 26 Q 12 8, 20 26 T 36 26"
        stroke="#1D1C1A"
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="2" cy="26" r="2.2" fill="#1D1C1A" />
      <circle cx="36" cy="26" r="2.2" fill="#1D1C1A" />

      {/* LED & Lightning doodle */}
      <path
        d="M 20 54 L 18 45 L 24 45 L 20 34 L 22 43 L 16 43 Z"
        fill="#F2C66D"
        stroke="#1D1C1A"
        strokeWidth="1.2"
      />
      <circle cx="20" cy="64" r="4" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="1.5" />
      <line x1="20" y1="68" x2="20" y2="78" stroke="#1D1C1A" strokeWidth="1.5" />
      <text x="5" y="88" fontFamily="Kalam, Caveat, cursive" fontSize="10.5" fontWeight="bold" fill="#1D1C1A">
        LED Blink ⚡
      </text>
    </g>

    {/* Traces connecting Sensor to MCU */}
    <path
      d="M 50 56 H 80 V 72 H 98"
      stroke="#1D1C1A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 2"
    />

    {/* ================= 2. MICROCONTROLLER BOARD (Center Left) ================= */}
    <g transform="translate(98, 32)">
      {/* Board PCB */}
      <rect
        x="0"
        y="0"
        width="118"
        height="86"
        rx="5"
        fill="#FAF5E8"
        stroke="#1D1C1A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* USB Connector */}
      <rect x="-8" y="10" width="12" height="16" rx="2" fill="#EAE2CC" stroke="#1D1C1A" strokeWidth="1.8" />
      <line x1="-3" y1="13" x2="-3" y2="23" stroke="#1D1C1A" strokeWidth="1.2" />

      {/* DC Barrel Jack */}
      <rect x="-6" y="54" width="10" height="18" rx="1" fill="#EAE2CC" stroke="#1D1C1A" strokeWidth="1.8" />

      {/* Top Header Pins */}
      <rect x="22" y="4" width="76" height="6.5" rx="1" fill="#DDD0B8" stroke="#1D1C1A" strokeWidth="1.4" />
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={i} cx={26 + i * 6} cy="7" r="1.2" fill="#1D1C1A" />
      ))}

      {/* Bottom Header Pins */}
      <rect x="22" y="75" width="76" height="6.5" rx="1" fill="#DDD0B8" stroke="#1D1C1A" strokeWidth="1.4" />
      {Array.from({ length: 12 }).map((_, i) => (
        <circle key={i} cx={26 + i * 6} cy="78" r="1.2" fill="#1D1C1A" />
      ))}

      {/* Main Microcontroller IC Chip */}
      <rect
        x="42"
        y="26"
        width="36"
        height="36"
        rx="2"
        fill="#1D1C1A"
      />
      <circle cx="48" cy="32" r="1.6" fill="#F2C66D" />
      <text x="49" y="47" fontFamily="Space Mono, monospace" fontSize="8" fill="#FAF5E8" fontWeight="bold">
        MCU
      </text>

      {/* IC Pins */}
      {Array.from({ length: 5 }).map((_, i) => (
        <React.Fragment key={i}>
          <line x1="38" y1={31 + i * 6} x2="42" y2={31 + i * 6} stroke="#1D1C1A" strokeWidth="1.4" />
          <line x1="78" y1={31 + i * 6} x2="82" y2={31 + i * 6} stroke="#1D1C1A" strokeWidth="1.4" />
        </React.Fragment>
      ))}

      {/* Crystal Oscillator */}
      <ellipse cx="26" cy="42" rx="5.5" ry="3" fill="#E6DAC0" stroke="#1D1C1A" strokeWidth="1.3" />

      {/* Reset button */}
      <rect x="94" y="20" width="6.5" height="6.5" rx="1" fill="#D45A5A" stroke="#1D1C1A" strokeWidth="1.2" />

      {/* Label under MCU */}
      <text x="32" y="72" fontFamily="Kalam, Caveat, cursive" fontSize="10" fontWeight="bold" fill="#1D1C1A">
        ⚙ robotics test
      </text>
    </g>

    {/* Wiring Bus connecting MCU to Robot Arm */}
    <path
      d="M 216 70 C 238 70, 248 102, 275 102"
      stroke="#1D1C1A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M 216 76 C 236 76, 244 108, 275 108"
      stroke="#1D1C1A"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeDasharray="2 2"
      fill="none"
    />

    {/* ================= 3. ROBOTIC ARM (Right Side) ================= */}
    <g transform="translate(280, 36)">
      {/* Robot Base Stand */}
      <path
        d="M 20 86 L 62 86 L 54 75 L 28 75 Z"
        fill="#FAF5E8"
        stroke="#1D1C1A"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="41" cy="75" r="4.2" fill="#DCD0B8" stroke="#1D1C1A" strokeWidth="1.8" />

      {/* Joint 1 Arm link */}
      <line x1="41" y1="75" x2="52" y2="40" stroke="#1D1C1A" strokeWidth="4" strokeLinecap="round" />
      <circle cx="52" cy="40" r="4.5" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />

      {/* Joint 2 Arm link */}
      <line x1="52" y1="40" x2="22" y2="22" stroke="#1D1C1A" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="22" cy="22" r="4.2" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />

      {/* Gripper Claw */}
      <path
        d="M 22 22 L 10 13 M 22 22 L 10 29"
        stroke="#1D1C1A"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="10" cy="13" r="1.8" fill="#F2C66D" stroke="#1D1C1A" strokeWidth="1.2" />
      <circle cx="10" cy="29" r="1.8" fill="#F2C66D" stroke="#1D1C1A" strokeWidth="1.2" />

      {/* Label: robotics test */}
      <text x="2" y="82" fontFamily="Kalam, Caveat, cursive" fontSize="10" fontWeight="bold" fill="#1D1C1A">
        robotics test
      </text>
    </g>

    {/* ================= 4. LABELS & GEARS (Top Right) ================= */}
    <g transform="translate(362, 22)">
      <rect x="0" y="0" width="34" height="22" rx="3" fill="#FFFDF9" stroke="#1D1C1A" strokeWidth="1.6" />
      <text x="7" y="15" fontFamily="Space Mono, monospace" fontSize="11" fontWeight="bold" fill="#1D1C1A">
        IoT
      </text>
      <line x1="6" y1="-2" x2="6" y2="0" stroke="#1D1C1A" strokeWidth="1.4" />
      <line x1="17" y1="-2" x2="17" y2="0" stroke="#1D1C1A" strokeWidth="1.4" />
      <line x1="28" y1="-2" x2="28" y2="0" stroke="#1D1C1A" strokeWidth="1.4" />
      <line x1="6" y1="22" x2="6" y2="24" stroke="#1D1C1A" strokeWidth="1.4" />
      <line x1="17" y1="22" x2="17" y2="24" stroke="#1D1C1A" strokeWidth="1.4" />
      <line x1="28" y1="22" x2="28" y2="24" stroke="#1D1C1A" strokeWidth="1.4" />
    </g>

    {/* Gears Doodle */}
    <g transform="translate(254, 16)">
      <circle cx="10" cy="10" r="6.5" stroke="#1D1C1A" strokeWidth="1.5" fill="#FAF5E8" />
      <circle cx="10" cy="10" r="2.2" fill="#1D1C1A" />
      <line x1="10" y1="1" x2="10" y2="3" stroke="#1D1C1A" strokeWidth="2" />
      <line x1="10" y1="17" x2="10" y2="19" stroke="#1D1C1A" strokeWidth="2" />
      <line x1="1" y1="10" x2="3" y2="10" stroke="#1D1C1A" strokeWidth="2" />
      <line x1="17" y1="10" x2="19" y2="10" stroke="#1D1C1A" strokeWidth="2" />
    </g>
  </svg>
);

/**
 * LabTinkeringSheet Component
 * Recreates the hand-drawn engineering workbench sheet
 */
export const LabTinkeringSheet = ({ className = '', style = {} }) => {
  return (
    <div
      className={`relative w-full max-w-lg p-3.5 sm:p-4.5 bg-[#FAF6EE] border-2 border-[#1D1C1A] shadow-paper rounded-xs select-none ${className}`}
      style={{
        clipPath: 'polygon(1% 0%, 99% 1%, 98% 99%, 0% 98%)',
        boxShadow: '4px 10px 24px rgba(45, 35, 20, 0.12), 0 2px 6px rgba(45, 35, 20, 0.08)',
        ...style,
      }}
    >
      {/* Masking tape on top-left and bottom-right */}
      <div className="absolute -top-3 left-6 pointer-events-none z-20">
        <MaskingTape width="w-18 sm:w-20" height="h-5" angle="-rotate-3" />
      </div>
      <div className="absolute -bottom-3 right-6 pointer-events-none z-20">
        <MaskingTape width="w-18 sm:w-20" height="h-5" angle="rotate-4" />
      </div>

      {/* Heading with Gear and Wrench Doodles */}
      <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-[#E0D5BD]">
        <h3 className="font-hand font-extrabold text-lg sm:text-xl text-[#1D1C1A] tracking-wide flex items-center gap-1.5">
          <span>LAB TINKERING / PROTOTYPING</span>
        </h3>
        <span className="text-sm select-none">⚙️ 🔧</span>
      </div>

      {/* Hand-drawn Workbench Illustration */}
      <div className="mt-1 w-full">
        <WorkbenchIllustration />
      </div>
    </div>
  );
};
