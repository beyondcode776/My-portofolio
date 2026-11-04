import React from 'react';
import { MaskingTape } from '../Doodles';

/**
 * FaqCard Component — FAQ / ASK ME ANYTHING
 * Middle notebook card matching the exact reference image:
 * - Light cream paper background with subtle paper shadow
 * - Small masking tape at top center
 * - Heading: FAQ / ASK ME ANYTHING with speech-bubble icon & underline
 * - 3 exact Q&A pairs:
 *   1. Q: Remote-ready? -> A: Yes, global! 🌐
 *   2. Q: Start timeline? -> A: Let's discuss! ⚡
 *   3. Q: Areas of interest? -> A: Web, IoT, & Dev 🛠️
 */
export const FaqCard = ({ className = "" }) => {
  const faqs = [
    {
      q: "Q: Remote-ready?",
      a: "A: Yes, global!",
    },
    {
      q: "Q: Start timeline?",
      a: "A: Let's discuss!",
    },
    {
      q: "Q: Areas of interest?",
      a: "A: Web, IoT, & Dev",
    },
  ];

  return (
    <div className={`relative ${className} select-none`}>
      {/* Masking tape at top center */}
      <div className="absolute -top-3 left-1/3 pointer-events-none z-20">
        <MaskingTape width="w-14 sm:w-16" height="h-3.5 sm:h-4" angle="-rotate-1" />
      </div>

      {/* Cream Notebook Paper Card */}
      <div
        className="relative p-3.5 sm:p-4.5 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform -rotate-0.5 hover:rotate-0 hover:-translate-y-0.5 transition-all duration-200"
        style={{
          boxShadow: '3px 4px 10px rgba(45, 35, 20, 0.12), 2px 2px 0px #1D1C1A',
        }}
      >
        {/* Heading: FAQ / ASK ME ANYTHING with Speech Bubble */}
        <div className="mb-3 pb-1 border-b-2 border-[#1D1C1A]/70 flex items-center justify-between">
          <h3 className="font-condensed font-extrabold text-sm sm:text-base md:text-[17px] text-[#1D1C1A] uppercase tracking-wide">
            FAQ / ASK ME ANYTHING
          </h3>
          {/* Small Hand-Drawn Speech Bubble Icon */}
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1D1C1A] shrink-0">
            <path
              d="M 4 4 L 20 4 C 21.1 4 22 4.9 22 6 L 22 14 C 22 15.1 21.1 16 20 16 L 8 16 L 3 20 L 4 14 C 3 13.5 2 12.3 2 11 L 2 6 C 2 4.9 2.9 4 4 4 Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
              fill="#FAF6EE"
            />
            {/* Small dots inside bubble */}
            <circle cx="8" cy="10" r="1" fill="currentColor" />
            <circle cx="12" cy="10" r="1" fill="currentColor" />
            <circle cx="16" cy="10" r="1" fill="currentColor" />
          </svg>
        </div>

        {/* 3 Question & Answer Pairs */}
        <div className="space-y-3 font-hand text-xs sm:text-[13px]">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-0.5">
              <div className="flex items-center gap-1.5 font-extrabold text-[#1D1C1A]">
                <span className="text-[9px] text-[#1D1C1A] leading-none">●</span>
                <span>{faq.q}</span>
              </div>
              <div className="pl-3.5 font-bold text-[#3A3226]">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};