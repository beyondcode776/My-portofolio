import React, { useState, useEffect } from 'react';
import { MaskingTape } from './Doodles';

/**
 * ByteCompanion Component
 * An original, charming hand-drawn fictional robot character living inside the notebook.
 * 
 * Features:
 * - Hand-drawn ink aesthetic (#1D1C1A outlines, warm cream paper body #FAF5E8)
 * - Anatomically correct, articulated robot arms (upper arm, elbow hinge, forearm, pointing hand)
 * - Guaranteed horizontal pointing (dx straight right or straight left) when introducing side content
 * - Step 7 transforms the speech bubble into a compact, yellow sticky-note philosophy panel
 * - Streamlined controls: ONLY Pause/Resume and Restart (no duplicate buttons or Next Step required)
 * - Non-clipping SVG canvas with coordinated head tilt and eye pupil tracking
 */
export const ByteCompanion = ({
  state = 'idle',
  speechText = '',
  speechVisible = true,
  stepLabel = '',
  currentStep = 1,
  totalSteps = 7,
  isPhilosophyStep = false,
  isPaused = false,
  onTogglePause,
  onRestart,
  onClick,
  className = '',
  lookDirection = 'center', // 'left' | 'right' | 'up' | 'down' | 'center'
  armPose = 'neutral', // 'point-right' | 'point-left' | 'point-down' | 'thumbs-up' | 'wave' | 'neutral'
  headTilt = 0,
  bounce = false,
}) => {
  const [blink, setBlink] = useState(false);
  const [antennaPulse, setAntennaPulse] = useState(false);

  // Subtle natural blinking loop
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 180);
    }, 3800 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Subtle antenna glow pulse
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setAntennaPulse((p) => !p);
    }, 1500);
    return () => clearInterval(pulseInterval);
  }, []);

  // Determine eye pupil position based on lookDirection
  let pupilOffsetX = 0;
  let pupilOffsetY = 0;
  if (lookDirection === 'left' || armPose === 'point-left') {
    pupilOffsetX = -3.8;
  } else if (lookDirection === 'right' || armPose === 'point-right') {
    pupilOffsetX = 3.8;
  } else if (lookDirection === 'up') {
    pupilOffsetY = -3.5;
  } else if (lookDirection === 'down' || armPose === 'point-down') {
    pupilOffsetY = 3.5;
  }

  const isBouncing = bounce || state === 'celebrating';

  // Compute speech bubble position classes
  const bubblePositionClass = "sm:bottom-full sm:mb-3";
  const tailPositionClass = "-bottom-2 right-12 rotate-45 border-r-2 border-b-2";

  return (
    <div
      role="region"
      aria-label="Byte, interactive notebook tour guide"
      className={`relative inline-flex flex-col items-center select-none ${className}`}
    >
      {/* ================= SPEECH BUBBLE ================= */}
      {speechVisible && (
        isPhilosophyStep ? (
          /* ================= STEP 7: TRANSFORMED YELLOW STICKY NOTE PANEL ================= */
          <div
            className={`relative sm:absolute ${bubblePositionClass} sm:right-0 sm:left-auto sm:translate-x-0 w-76 sm:w-[340px] p-3.5 sm:p-4 bg-[#FFE66D] border-2 border-[#1D1C1A] rounded-xs shadow-sketch z-50 mb-2 sm:mb-0 transition-all duration-300 transform -rotate-1`}
            style={{
              boxShadow: '5px 8px 20px rgba(50, 40, 10, 0.22), 2px 3px 0px #1D1C1A',
              clipPath: 'polygon(1% 0%, 100% 1%, 99% 99%, 0% 98%)',
            }}
          >
            {/* Masking tape on top */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 pointer-events-none z-20">
              <MaskingTape width="w-18" height="h-4.5" angle="rotate-2" />
            </div>

            {/* Pointer tail on desktop pointing to Byte */}
            <div
              className="hidden sm:block absolute -bottom-2 right-10 rotate-45 border-r-2 border-b-2 w-3.5 h-3.5 bg-[#FFE66D] border-[#1D1C1A]"
              style={{ backgroundColor: '#FFE66D' }}
            />

            {/* Header */}
            <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-[#1D1C1A]/20">
              <span className="font-hand font-extrabold text-xs text-[#1D1C1A] flex items-center gap-1">
                <span>🤖 BYTE</span>
              </span>
              <span className="font-mono text-[9px] font-bold text-[#1D1C1A] bg-[#FFF8D6] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A]">
                FINAL NOTE · PHILOSOPHY
              </span>
            </div>

            {/* Byte's Personal Closing Dialogue */}
            <p className="font-hand font-bold text-xs sm:text-sm text-[#1D1C1A] leading-relaxed mb-2">
              “One last thing, Kishlay: build with purpose, keep it simple, and make it useful.”
            </p>

            {/* Embedded Philosophy Sticky Note Quote */}
            <div className="pt-2 border-t-2 border-dashed border-[#1D1C1A]/30 bg-[#FFF38C]/50 p-2.5 rounded-xs border border-[#1D1C1A]/20">
              <h4 className="font-hand font-extrabold text-sm sm:text-base text-[#1D1C1A] tracking-wider mb-0.5">
                PHILOSOPHY
              </h4>
              <p className="font-hand font-bold text-xs sm:text-sm leading-snug text-[#1D1C1A] break-words">
                “If it's worth building, it's worth building from scratch. Keep it fast, keep it accessible.”
              </p>
              <div className="mt-1 text-right">
                <span className="font-hand text-xs sm:text-sm font-extrabold text-[#3D3310]">
                  — Kishlay
                </span>
              </div>
            </div>

            {/* Compact Action Bar: ONLY Pause/Resume & Restart (redundant step counter removed) */}
            <div className="mt-2.5 pt-1.5 border-t border-dashed border-[#1D1C1A]/25 flex items-center justify-end gap-2">
              <div className="flex items-center gap-2">
                {onTogglePause && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTogglePause();
                    }}
                    className="px-2.5 py-0.5 bg-[#FFF8D6] hover:bg-[#FFF0B3] text-[#1D1C1A] text-xs font-hand font-bold rounded-xs border border-[#1D1C1A] shadow-2xs cursor-pointer transition-colors"
                  >
                    {isPaused ? '▶ Resume' : '⏸ Pause'}
                  </button>
                )}

                {onRestart && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRestart();
                    }}
                    className="px-2 py-0.5 bg-[#FFF8D6] hover:bg-[#FFF0B3] text-[#1D1C1A] text-xs font-hand font-bold rounded-xs border border-[#1D1C1A] shadow-2xs cursor-pointer"
                    title="Restart tour from beginning"
                  >
                    ↺ Restart
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* ================= STANDARD STEPS 1-6 SPEECH BUBBLE ================= */
          <div
            className={`relative sm:absolute ${bubblePositionClass} sm:right-0 sm:left-auto sm:translate-x-0 w-72 sm:w-80 p-3 sm:p-3.5 bg-[#FFFDF9] border-2 border-[#1D1C1A] rounded-xl shadow-sketch z-50 mb-2 sm:mb-0 transition-all duration-200`}
            style={{
              borderRadius: '16px 16px 4px 16px',
              backgroundColor: '#FFFDF9',
            }}
          >
            {/* Hand-drawn pointer tail pointing to Byte */}
            <div
              className="hidden sm:block absolute -bottom-2 right-10 rotate-45 border-r-2 border-b-2 w-3.5 h-3.5 bg-[#FFFDF9] border-[#1D1C1A]"
              style={{ backgroundColor: '#FFFDF9' }}
            />

            {/* Speech header */}
            <div className="flex items-center justify-between mb-1 pb-1 border-b border-[#EADFC7]">
              <div className="flex items-center gap-1.5">
                <span className="font-hand font-extrabold text-xs text-[#1D1C1A] flex items-center gap-1">
                  <span>🤖 BYTE</span>
                </span>
                {stepLabel && (
                  <span className="font-mono text-[9px] font-bold text-[#1D1C1A] bg-[#F2C66D] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A]">
                    {stepLabel}
                  </span>
                )}
              </div>
              <span className="text-[9.5px] font-mono text-[#8C7F6A]">
                Step {currentStep} of {totalSteps}
              </span>
            </div>

            {/* Speech dialogue text */}
            <p className="font-hand font-bold text-xs sm:text-sm text-[#1D1C1A] leading-relaxed">
              {speechText}
            </p>

            {/* Interactive Action Bar: ONLY Pause/Resume & Restart */}
            <div className="mt-2.5 pt-1.5 border-t border-dashed border-[#DDD0B8] flex items-center justify-between">
              <span className="text-[9px] font-mono text-[#786E5D] flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'}`} />
                {isPaused ? 'Paused' : 'Auto-touring'}
              </span>

              <div className="flex items-center gap-2">
                {onTogglePause && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onTogglePause();
                    }}
                    className={`px-2.5 py-0.5 text-xs font-hand font-extrabold rounded-xs border border-[#1D1C1A] shadow-2xs cursor-pointer transition-colors ${
                      isPaused
                        ? 'bg-[#F2C66D] text-[#1D1C1A] hover:bg-[#E5B856]'
                        : 'bg-[#FAF4E5] hover:bg-[#EFE5CC] text-[#3A3327]'
                    }`}
                    title={isPaused ? 'Resume automatic guided tour' : 'Pause tour to read'}
                  >
                    {isPaused ? '▶ Resume' : '⏸ Pause'}
                  </button>
                )}

                {onRestart && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onRestart();
                    }}
                    className="px-2 py-0.5 text-xs font-hand font-bold text-[#4A4031] bg-[#FAF4E5] hover:bg-[#EFE5CC] rounded-xs border border-[#1D1C1A] shadow-2xs cursor-pointer"
                    title="Restart tour from step 1"
                  >
                    ↺ Restart
                  </button>
                )}
              </div>
            </div>
          </div>
        )
      )}

      {/* ================= BYTE INTERACTIVE SVG AVATAR ================= */}
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick && onClick();
          }
        }}
        aria-label="Byte, Kishlay's notebook companion. Click to pause or resume tour."
        className="relative flex flex-col items-center cursor-pointer group focus:outline-hidden focus:ring-2 focus:ring-[#F2C66D] rounded-xl p-0.5 transition-transform"
        style={{
          transform: isBouncing ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'transform 250ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        title="Click Byte to pause or resume tour"
      >
        <div className="relative w-24 h-28 sm:w-28 sm:h-32">
          <svg
            viewBox="-24 -10 148 135"
            className="w-full h-full overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="mustardGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="0" stdDeviation="2.5" floodColor="#F2C66D" floodOpacity="0.9" />
              </filter>
            </defs>

            {/* Paper cutout ground shadow */}
            <ellipse
              cx="50"
              cy="114"
              rx="28"
              ry="5"
              fill="rgba(40, 30, 20, 0.22)"
            />

            {/* Spark doodle accent near head */}
            <path
              d="M 86 24 L 92 20 M 90 28 L 96 30"
              stroke="#1D1C1A"
              strokeWidth="1.8"
              strokeLinecap="round"
              opacity={antennaPulse ? '1' : '0.4'}
            />

            {/* Miniature Tool Backpack */}
            <g transform="translate(18, 52)">
              <rect
                x="0"
                y="0"
                width="14"
                height="26"
                rx="3"
                fill="#D6C6A5"
                stroke="#1D1C1A"
                strokeWidth="2.2"
                strokeLinejoin="round"
              />
              <path
                d="M 5 -6 L 5 2"
                stroke="#B84444"
                strokeWidth="3.2"
                strokeLinecap="round"
              />
              <circle cx="5" cy="-8" r="2.2" fill="#E5D64E" stroke="#1D1C1A" strokeWidth="1.5" />
            </g>

            {/* Legs */}
            <g>
              <rect
                x="36"
                y="94"
                width="9"
                height="16"
                rx="4"
                fill="#EADFC8"
                stroke="#1D1C1A"
                strokeWidth="2.2"
              />
              <rect
                x="55"
                y="94"
                width="9"
                height="16"
                rx="4"
                fill="#EADFC8"
                stroke="#1D1C1A"
                strokeWidth="2.2"
              />
            </g>

            {/* Torso */}
            <g>
              <rect
                x="28"
                y="48"
                width="44"
                height="48"
                rx="9"
                fill="#FAF5E8"
                stroke="#1D1C1A"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Tech screen */}
              <rect
                x="35"
                y="56"
                width="30"
                height="22"
                rx="4"
                fill="#EFE6CF"
                stroke="#1D1C1A"
                strokeWidth="1.8"
              />

              {/* Code symbol on screen: `</>` */}
              <path
                d="M 43 64 L 39 67 L 43 70 M 57 64 L 61 67 L 57 70 M 52 62 L 48 72"
                stroke="#1D1C1A"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Dials / screws */}
              <circle cx="38" cy="86" r="2" fill="#D2C3A3" stroke="#1D1C1A" strokeWidth="1.2" />
              <circle cx="50" cy="86" r="2.5" fill="#F2C66D" stroke="#1D1C1A" strokeWidth="1.4" />
              <circle cx="62" cy="86" r="2" fill="#D2C3A3" stroke="#1D1C1A" strokeWidth="1.2" />
            </g>

            {/* Head Group */}
            <g
              transform={`rotate(${headTilt}, 50, 48)`}
              style={{ transition: 'transform 300ms cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            >
              {/* Antenna */}
              <path
                d="M 50 18 L 50 8"
                stroke="#1D1C1A"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <circle
                cx="50"
                cy="6"
                r="4.5"
                fill="#F2C66D"
                stroke="#1D1C1A"
                strokeWidth="2"
                filter={antennaPulse ? 'url(#mustardGlow)' : 'none'}
              />

              {/* Head Box */}
              <rect
                x="26"
                y="18"
                width="48"
                height="30"
                rx="8"
                fill="#FAF5E8"
                stroke="#1D1C1A"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              {/* Ear bolts */}
              <rect x="22" y="27" width="4" height="12" rx="2" fill="#D8CAB0" stroke="#1D1C1A" strokeWidth="1.8" />
              <rect x="74" y="27" width="4" height="12" rx="2" fill="#D8CAB0" stroke="#1D1C1A" strokeWidth="1.8" />

              {/* Visor */}
              <rect
                x="32"
                y="23"
                width="36"
                height="18"
                rx="4"
                fill="#EFE7D2"
                stroke="#1D1C1A"
                strokeWidth="1.8"
              />

              {/* Eyes */}
              {blink ? (
                <g stroke="#1D1C1A" strokeWidth="2.4" strokeLinecap="round">
                  <line x1="37" y1="32" x2="46" y2="32" />
                  <line x1="54" y1="32" x2="63" y2="32" />
                </g>
              ) : (
                <g>
                  <circle cx="41.5" cy="32" r="5" fill="#FFFFFF" stroke="#1D1C1A" strokeWidth="1.8" />
                  <circle
                    cx={41.5 + pupilOffsetX}
                    cy={32 + pupilOffsetY}
                    r="2.6"
                    fill="#1D1C1A"
                  />
                  <circle
                    cx={40.5 + pupilOffsetX}
                    cy={30.5 + pupilOffsetY}
                    r="0.9"
                    fill="#FFFFFF"
                  />

                  <circle cx="58.5" cy="32" r="5" fill="#FFFFFF" stroke="#1D1C1A" strokeWidth="1.8" />
                  <circle
                    cx={58.5 + pupilOffsetX}
                    cy={32 + pupilOffsetY}
                    r="2.6"
                    fill="#1D1C1A"
                  />
                  <circle
                    cx={57.5 + pupilOffsetX}
                    cy={30.5 + pupilOffsetY}
                    r="0.9"
                    fill="#FFFFFF"
                  />
                </g>
              )}

              {/* Mouth */}
              <path
                d="M 47 42 C 49 44 51 44 53 42"
                stroke="#1D1C1A"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </g>

            {/* ================= LEFT ARM ================= */}
            {armPose === 'point-left' ? (
              /* Articulated horizontal left pointing arm */
              <g id="byte-arm-point-left">
                <circle cx="28" cy="58" r="3.5" fill="#E0D4BA" stroke="#1D1C1A" strokeWidth="2" />
                <rect x="12" y="55" width="16" height="6.5" rx="3.25" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
                <circle cx="12" cy="58.25" r="3" fill="#E0D4BA" stroke="#1D1C1A" strokeWidth="1.8" />
                <rect x="-4" y="55.25" width="16" height="6" rx="3" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
                <path d="M -4 57 C -6 59 -6 63 -4 64" stroke="#1D1C1A" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="-4" y1="58" x2="-19" y2="58" stroke="#1D1C1A" strokeWidth="3" strokeLinecap="round" />
                <circle cx="-19" cy="58" r="1.6" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="1.2" />
              </g>
            ) : armPose === 'point-down' && lookDirection === 'left' ? (
              <g id="byte-arm-point-down-left">
                <circle cx="28" cy="58" r="3.5" fill="#E0D4BA" stroke="#1D1C1A" strokeWidth="2" />
                <path d="M 28 58 L 18 70 L 8 84" stroke="#1D1C1A" strokeWidth="3.2" strokeLinecap="round" fill="none" />
                <circle cx="8" cy="84" r="3" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
                <line x1="8" y1="84" x2="0" y2="95" stroke="#1D1C1A" strokeWidth="2.8" strokeLinecap="round" />
              </g>
            ) : armPose === 'wave' ? (
              <g id="byte-arm-wave">
                <circle cx="28" cy="58" r="3.5" fill="#E0D4BA" stroke="#1D1C1A" strokeWidth="2" />
                <path
                  d="M 28 58 C 18 46 16 32 20 22"
                  stroke="#1D1C1A"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="21" cy="20" r="3.5" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
                <line x1="20" y1="18" x2="16" y2="12" stroke="#1D1C1A" strokeWidth="2" strokeLinecap="round" />
                <line x1="22" y1="17" x2="21" y2="10" stroke="#1D1C1A" strokeWidth="2" strokeLinecap="round" />
                <line x1="24" y1="18" x2="27" y2="12" stroke="#1D1C1A" strokeWidth="2" strokeLinecap="round" />
              </g>
            ) : (
              <g id="byte-arm-neutral-left">
                <circle cx="28" cy="58" r="3.5" fill="#E0D4BA" stroke="#1D1C1A" strokeWidth="2" />
                <path
                  d="M 28 58 C 22 66 22 78 24 84"
                  stroke="#1D1C1A"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="25" cy="85" r="3.5" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
              </g>
            )}

            {/* ================= RIGHT ARM ================= */}
            {armPose === 'point-right' ? (
              /* Articulated horizontal right pointing arm */
              <g id="byte-arm-point-right">
                <circle cx="72" cy="58" r="3.5" fill="#E0D4BA" stroke="#1D1C1A" strokeWidth="2" />
                <rect x="72" y="55" width="16" height="6.5" rx="3.25" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
                <circle cx="88" cy="58.25" r="3" fill="#E0D4BA" stroke="#1D1C1A" strokeWidth="1.8" />
                <rect x="88" y="55.25" width="16" height="6" rx="3" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
                <path d="M 104 57 C 106 59 106 63 104 64" stroke="#1D1C1A" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="104" y1="58" x2="119" y2="58" stroke="#1D1C1A" strokeWidth="3" strokeLinecap="round" />
                <circle cx="119" cy="58" r="1.6" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="1.2" />
              </g>
            ) : armPose === 'thumbs-up' ? (
              <g id="byte-arm-thumbs-up">
                <circle cx="72" cy="58" r="3.5" fill="#E0D4BA" stroke="#1D1C1A" strokeWidth="2" />
                <path
                  d="M 72 58 C 82 54 85 46 86 40"
                  stroke="#1D1C1A"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="86" cy="38" r="3.8" fill="#F2C66D" stroke="#1D1C1A" strokeWidth="2" />
                <line x1="86" y1="36" x2="86" y2="28" stroke="#1D1C1A" strokeWidth="2.8" strokeLinecap="round" />
              </g>
            ) : armPose === 'point-down' ? (
              <g id="byte-arm-point-down-right">
                <circle cx="72" cy="58" r="3.5" fill="#E0D4BA" stroke="#1D1C1A" strokeWidth="2" />
                <path d="M 72 58 L 82 70 L 92 84" stroke="#1D1C1A" strokeWidth="3.2" strokeLinecap="round" fill="none" />
                <circle cx="92" cy="84" r="3" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
                <line x1="92" y1="84" x2="100" y2="95" stroke="#1D1C1A" strokeWidth="2.8" strokeLinecap="round" />
              </g>
            ) : (
              <g id="byte-arm-neutral-right">
                <circle cx="72" cy="58" r="3.5" fill="#E0D4BA" stroke="#1D1C1A" strokeWidth="2" />
                <path
                  d="M 72 58 C 78 66 78 78 76 84"
                  stroke="#1D1C1A"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="75" cy="85" r="3.5" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
                <g transform="rotate(25, 75, 85)">
                  <rect x="73" y="78" width="4" height="14" fill="#F2C66D" stroke="#1D1C1A" strokeWidth="1.2" />
                  <polygon points="73,92 77,92 75,96" fill="#D4AF37" stroke="#1D1C1A" strokeWidth="1" />
                  <polygon points="74.5,95 75.5,95 75,97" fill="#1D1C1A" />
                </g>
              </g>
            )}
          </svg>
        </div>

        {/* Small pill badge underneath Byte */}
        <div className="mt-0.5 px-2 py-0.5 bg-[#FAF4E6] border border-[#DDD3BC] rounded-xs shadow-2xs text-[9px] font-mono text-[#5C5343] flex items-center gap-1 group-hover:border-[#1D1C1A] group-hover:bg-[#F2C66D] transition-all">
          <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-ping'} inline-block`} />
          <span className="font-bold">BYTE · GUIDE</span>
        </div>
      </div>
    </div>
  );
};
