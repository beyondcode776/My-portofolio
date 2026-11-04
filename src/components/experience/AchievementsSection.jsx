import React from 'react';
import { MaskingTape, SketchStar } from '../Doodles';
import { RoboticsLabIllustration } from './RoboticsLabIllustration';
import { MegaphoneDoodle } from './MegaphoneDoodle';
import { MyFocusStickyNote } from './MyFocusStickyNote';

/**
 * AchievementsSection Component
 * Right column of the Experience page:
 * - ACHIEVEMENTS & AWARDS heading with mustard underline and doodle stars
 * - Compact torn-paper Technoxian sheet with spiral perforations & scaled Robotics Lab illustration
 * - 2025 Hackathon paper strip
 * - Campus Ambassador card with Megaphone doodle
 * - My Focus yellow sticky note nestled on the right
 */
export const AchievementsSection = ({ entrancePhase = 5, prefersReducedMotion = false }) => {
  // Staggered visibility based on entrance phase
  const showHeading = prefersReducedMotion || entrancePhase >= 3;
  const showTechnoxian = prefersReducedMotion || entrancePhase >= 3;
  const showHackathon = prefersReducedMotion || entrancePhase >= 3;
  const showAmbassador = prefersReducedMotion || entrancePhase >= 4;
  const showStickyNote = prefersReducedMotion || entrancePhase >= 4;

  return (
    <div className="relative flex flex-col select-none">
      
      {/* ================= 1. HEADING WITH DOODLE STARS ================= */}
      <div className={`relative mb-4 sm:mb-5 transition-opacity duration-300 ${showHeading ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Decorative sketch stars around heading */}
        <div className="absolute -top-3 right-4 sm:right-10 text-[#1D1C1A] pointer-events-none flex items-center gap-1.5">
          <SketchStar className="w-4 sm:w-5 h-4 sm:h-5 transform rotate-12" />
          <SketchStar className="w-3.5 h-3.5 transform -rotate-12" />
        </div>

        {/* ACHIEVEMENTS & AWARDS Title */}
        <div className="relative inline-block">
          <h2 className="font-condensed font-extrabold text-2xl sm:text-3xl md:text-[34px] lg:text-[36px] text-[#1D1C1A] tracking-wider uppercase leading-none">
            ACHIEVEMENTS & AWARDS
          </h2>
          {/* Mustard-yellow hand-drawn underline */}
          <div
            className="w-full h-2 sm:h-2.5 bg-[#E7BD58] opacity-90 mt-1 rounded-xs transform rotate-0.5 pointer-events-none"
            style={{
              clipPath: 'polygon(0% 10%, 2% 0%, 98% 5%, 100% 90%, 97% 100%, 3% 95%)',
              boxShadow: '0 1px 3px rgba(231, 189, 88, 0.4)',
            }}
          />
        </div>
      </div>

      {/* ================= 2. CARDS CONTAINER ================= */}
      <div className="flex flex-col space-y-4 sm:space-y-5">
        
        {/* ================= CARD 1: COMPACT TORN-PAPER TECHNOXIAN SHEET ================= */}
        <div
          className={`relative transition-all duration-500 ${
            showTechnoxian
              ? 'opacity-100 translate-y-0 animate-paper-drop'
              : 'opacity-0 -translate-y-4'
          }`}
          style={{ '--target-rotate': '-0.5deg' }}
        >
          {/* Torn-paper sheet with binder perforations on left edge and hover popup interaction */}
          <div
            className="relative w-full p-3 sm:p-4 pl-7 sm:pl-8 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform -rotate-0.5 hover:-translate-y-1.5 sm:hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl hover:border-black active:translate-y-0 active:scale-[0.99] transition-all duration-250 cursor-default"
            style={{
              boxShadow: '3px 6px 16px rgba(45, 35, 20, 0.12), 2px 2px 0px #1D1C1A',
              clipPath: 'polygon(0% 1%, 99% 0%, 100% 98%, 1% 100%)',
            }}
          >
            {/* Perforated spiral holes along left edge */}
            <div className="absolute left-2 top-0 bottom-0 flex flex-col justify-around py-3 pointer-events-none z-10">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 sm:w-2.5 h-3 sm:h-3.5 rounded-full border border-[#1D1C1A] bg-[#F7F3E8] shadow-inner opacity-80"
                />
              ))}
            </div>

            {/* Masking tape top-left & top-right */}
            <div className="absolute -top-2.5 left-8 pointer-events-none z-20">
              <MaskingTape width="w-14 sm:w-18" height="h-4.5" angle="-rotate-3" />
            </div>
            <div className="absolute -top-2.5 right-6 pointer-events-none z-20">
              <MaskingTape width="w-14 sm:w-18" height="h-4.5" angle="rotate-4" />
            </div>

            {/* Header: WORLD-CLASS TECHNOXIAN */}
            <div className="mb-1.5 border-b border-[#E0D5BD] pb-1">
              <h3 className="font-condensed font-extrabold text-lg sm:text-xl md:text-2xl text-[#1D1C1A] uppercase tracking-wide leading-tight">
                WORLD-CLASS TECHNOXIAN
              </h3>
              <p className="font-hand font-bold text-xs sm:text-[13px] text-[#463F32]">
                (World Robotics Championship)
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-xs sm:text-[13px] text-[#2D2820] leading-relaxed mb-2">
              Represented team in Technoxian World Robotics Championship.
            </p>

            {/* Scaled Hand-Drawn Ink Robotics Lab Illustration */}
            <div className="w-full max-w-[340px] sm:max-w-[370px] mx-auto pt-1">
              <RoboticsLabIllustration />
            </div>
          </div>
        </div>

        {/* ================= CARD 2: 2025 HACKATHON PAPER STRIP ================= */}
        <div
          className={`relative transition-all duration-500 delay-100 ${
            showHackathon
              ? 'opacity-100 translate-y-0 animate-paper-drop'
              : 'opacity-0 -translate-y-4'
          }`}
          style={{ '--target-rotate': '0.5deg' }}
        >
          {/* Paper strip with hover popup interaction */}
          <div
            className="relative w-full p-2.5 sm:p-3 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform rotate-0.5 hover:-translate-y-1.5 sm:hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl hover:border-black active:translate-y-0 active:scale-[0.99] transition-all duration-250 cursor-default"
            style={{
              boxShadow: '3px 4px 12px rgba(45, 35, 20, 0.1), 2px 2px 0px #1D1C1A',
              clipPath: 'polygon(1% 0%, 100% 2%, 99% 98%, 0% 100%)',
            }}
          >
            {/* Masking tape on top-left and top-right */}
            <div className="absolute -top-2 left-6 pointer-events-none z-20">
              <MaskingTape width="w-12 sm:w-14" height="h-4" angle="-rotate-4" />
            </div>
            <div className="absolute -top-2 right-6 pointer-events-none z-20">
              <MaskingTape width="w-12 sm:w-14" height="h-4" angle="rotate-6" />
            </div>

            <h3 className="font-condensed font-extrabold text-base sm:text-lg md:text-[19px] text-[#1D1C1A] uppercase tracking-wide mb-0.5">
              2025 HACKATHON
            </h3>
            <p className="font-body text-xs sm:text-[13px] text-[#2D2820] leading-relaxed">
              Team-driven prototyping, automation, and problem-solving.
            </p>
          </div>
        </div>

        {/* ================= CARD 3 + MY FOCUS STICKY NOTE ROW ================= */}
        <div className="relative flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
          
          {/* CAMPUS AMBASSADOR / UNLOX ACADEMY CARD */}
          <div
            className={`flex-1 w-full transition-all duration-500 delay-200 ${
              showAmbassador
                ? 'opacity-100 translate-y-0 animate-paper-drop'
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ '--target-rotate': '-0.5deg' }}
          >
            <div
              className="relative w-full p-3 sm:p-3.5 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform -rotate-0.5 hover:-translate-y-1.5 sm:hover:-translate-y-2 hover:rotate-0 hover:shadow-2xl hover:border-black active:translate-y-0 active:scale-[0.99] transition-all duration-250 cursor-default"
              style={{
                boxShadow: '3px 5px 14px rgba(45, 35, 20, 0.12), 2px 2px 0px #1D1C1A',
                clipPath: 'polygon(0% 1%, 99% 0%, 100% 98%, 1% 99%)',
              }}
            >
              {/* Masking tape on corners */}
              <div className="absolute -top-2.5 left-5 pointer-events-none z-20">
                <MaskingTape width="w-14 sm:w-16" height="h-4.5" angle="-rotate-6" />
              </div>
              <div className="absolute -top-2.5 right-5 pointer-events-none z-20">
                <MaskingTape width="w-14 sm:w-16" height="h-4.5" angle="rotate-8" />
              </div>

              {/* Title & Date */}
              <div className="flex items-start justify-between gap-2 mb-1.5 border-b border-[#E0D5BD] pb-1">
                <div>
                  <h3 className="font-condensed font-extrabold text-base sm:text-lg md:text-[19px] text-[#1D1C1A] uppercase tracking-wide leading-tight">
                    CAMPUS AMBASSADOR /<br />
                    UNLOX ACADEMY
                  </h3>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-condensed font-extrabold text-base sm:text-lg text-[#1D1C1A]">
                    2025
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-1 font-body text-xs sm:text-[13px] text-[#2D2820] leading-relaxed mb-2">
                <li className="flex items-start gap-1.5">
                  <span className="text-[#1D1C1A] mt-0.5 select-none font-bold">●</span>
                  <span>Representing organization on campus & promoting programs/events.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-[#1D1C1A] mt-0.5 select-none font-bold">●</span>
                  <span>Conducting outreach & engaging students through campaigns.</span>
                </li>
              </ul>

              {/* Tags & Megaphone Doodle on the right */}
              <div className="flex items-center justify-between gap-2 pt-0.5">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1D1C1A] bg-[#E7BD58] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs">
                    [LEADERSHIP]
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-[#1D1C1A] bg-[#E7BD58] px-1.5 py-0.5 rounded-xs border border-[#1D1C1A] shadow-2xs">
                    [OUTREACH]
                  </span>
                </div>

                {/* Hand-drawn Megaphone Doodle */}
                <div className="shrink-0 pointer-events-none">
                  <MegaphoneDoodle className="w-10 sm:w-11 h-8 sm:h-9" />
                </div>
              </div>
            </div>
          </div>

          {/* MY FOCUS STICKY NOTE — Beside Campus Ambassador card */}
          <div
            className={`self-center sm:self-start shrink-0 transition-all duration-500 delay-300 ${
              showStickyNote
                ? 'opacity-100 translate-y-0 animate-paper-drop'
                : 'opacity-0 -translate-y-4'
            }`}
            style={{ '--target-rotate': '2deg' }}
          >
            <MyFocusStickyNote />
          </div>

        </div>

      </div>

    </div>
  );
};
