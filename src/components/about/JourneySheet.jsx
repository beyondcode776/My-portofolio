import React from 'react';
import { MaskingTape } from '../Doodles';

/**
 * JourneySheet Component
 * Recreates the hand-drawn torn-paper sheet for "THE JOURNEY" with:
 * - Rough black ink outline and torn paper edges
 * - 4 beige masking tape strips on corners
 * - Dark filmstrip ticker strip with continuous right-to-left animation
 */
export const JourneySheet = ({ className = '', style = {} }) => {
  const tickerItems = [
    "WEB DESIGN",
    "FULL-STACK FUNDAMENTALS",
    "IoT",
    "ROBOTICS",
    "GAME TECHNOLOGY",
    "QUALITY TESTING",
    "PROBLEM SOLVING",
  ];

  return (
    <div
      className={`relative w-full max-w-xl p-4 sm:p-5 bg-[#FAF6ED] border-2 border-[#1D1C1A] shadow-paper rounded-xs select-none ${className}`}
      style={{
        clipPath: 'polygon(0% 1%, 98% 0%, 100% 98%, 98% 100%, 2% 99%, 0% 98%)',
        boxShadow: '4px 10px 24px rgba(45, 35, 20, 0.12), 0 2px 6px rgba(45, 35, 20, 0.08)',
        ...style,
      }}
    >
      {/* 4 Corner Masking Tape Strips */}
      <div className="absolute -top-3 -left-2.5 pointer-events-none z-20">
        <MaskingTape width="w-16 sm:w-20" height="h-5" angle="-rotate-12" />
      </div>
      <div className="absolute -top-3 -right-2.5 pointer-events-none z-20">
        <MaskingTape width="w-16 sm:w-20" height="h-5" angle="rotate-12" />
      </div>
      <div className="absolute -bottom-3 -left-2.5 pointer-events-none z-20">
        <MaskingTape width="w-16 sm:w-20" height="h-5" angle="rotate-6" />
      </div>
      <div className="absolute -bottom-3 -right-2.5 pointer-events-none z-20">
        <MaskingTape width="w-16 sm:w-20" height="h-5" angle="-rotate-6" />
      </div>

      {/* Heading */}
      <h3 className="font-hand font-extrabold text-xl sm:text-2xl text-[#1D1C1A] tracking-wide mb-2">
        THE JOURNEY
      </h3>

      {/* Body Text */}
      <p className="font-body text-xs sm:text-sm leading-relaxed text-[#353028] font-normal">
        I am building practical projects across web development, full-stack engineering, IoT, robotics, game technology, and quality testing. My approach is to understand the user's problem, design the clearest path to a solution, and polish the details until the experience feels effortless. I aim to combine a developer's mindset, a designer's eye, and a builder's energy.
      </p>

      {/* Bottom Black Ticker Ribbon with Perforations */}
      <div
        className="relative mt-3.5 -mx-4 sm:-mx-5 py-1.5 bg-[#1D1C1A] text-[#FAF5E8] overflow-hidden select-none border-y border-[#3A352C]"
        style={{
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        }}
      >
        {/* Filmstrip perforation dots top and bottom */}
        <div className="absolute top-0.5 left-0 right-0 flex justify-between px-2 overflow-hidden pointer-events-none opacity-40">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-white inline-block mx-1" />
          ))}
        </div>
        <div className="absolute bottom-0.5 left-0 right-0 flex justify-between px-2 overflow-hidden pointer-events-none opacity-40">
          {Array.from({ length: 30 }).map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-white inline-block mx-1" />
          ))}
        </div>

        {/* Continuous Marquee Loop */}
        <div className="flex w-max marquee-track hover:pause-animation py-0.5">
          {[0, 1, 2].map((setIndex) => (
            <div key={setIndex} className="flex items-center space-x-3 px-2 whitespace-nowrap font-mono text-[10px] sm:text-[11px] tracking-widest uppercase">
              <span className="text-[#F2C66D]">«</span>
              {tickerItems.map((item, idx) => (
                <React.Fragment key={`${setIndex}-${idx}`}>
                  <span>{item}</span>
                  <span className="text-[#F2C66D]">•</span>
                </React.Fragment>
              ))}
              <span className="text-[#F2C66D]">«</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
