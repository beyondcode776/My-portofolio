import React, { useState } from 'react';
import { MaskingTape } from '../Doodles';
import { portfolioConfig } from '../../config/portfolioConfig';

/**
 * DirectContactNote Component
 * Tilted lined-paper note matching the exact reference image:
 * - Masking tape at top center
 * - Heading: "DIRECT CONTACT" with red line / underline
 * - EMAIL: kishlaykumar.mail@gmail.com
 * - Mustard-yellow "COPY TO CLIPBOARD" button with copy action & confirmation
 * - "Response time: < 24 hours" with hand-drawn clock doodle
 */
export const DirectContactNote = ({ className = "" }) => {
  const [copied, setCopied] = useState(false);
  const email = portfolioConfig.personal.email || 'kishlaykumar.mail@gmail.com';

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className={`relative ${className} select-none`}>
      {/* Masking tape on top center */}
      <div className="absolute -top-3 left-1/3 pointer-events-none z-20">
        <MaskingTape width="w-16 sm:w-20" height="h-4 sm:h-4.5" angle="-rotate-1" />
      </div>

      {/* Lined Paper Note */}
      <div
        className="relative p-3.5 sm:p-4 bg-[#FAF6EE] border-2 border-[#1D1C1A] rounded-xs shadow-sketch transform rotate-1 hover:rotate-0 transition-transform duration-200"
        style={{
          boxShadow: '3px 4px 10px rgba(45, 35, 20, 0.12), 2px 2px 0px #1D1C1A',
          backgroundImage: `
            linear-gradient(to bottom, transparent 23px, rgba(160, 150, 130, 0.25) 24px)
          `,
          backgroundSize: '100% 24px',
        }}
      >
        {/* Note Heading */}
        <div className="mb-2 pb-1 border-b-2 border-[#C0392B]/70">
          <h4 className="font-condensed font-extrabold text-sm sm:text-base text-[#1D1C1A] tracking-wider uppercase">
            DIRECT CONTACT
          </h4>
        </div>

        {/* EMAIL Label & Address */}
        <div className="space-y-0.5 mb-2.5">
          <span className="block font-condensed font-extrabold text-[11px] sm:text-xs text-[#554D40] uppercase tracking-wider">
            EMAIL:
          </span>
          <a
            href={`mailto:${email}`}
            className="block font-mono font-bold text-xs sm:text-[13px] text-[#1D1C1A] hover:underline underline-offset-2 break-all"
            title="Click to write an email"
          >
            {email}
          </a>
        </div>

        {/* Mustard-Yellow Copy Button */}
        <div className="mb-2">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-[#F2C66D] hover:bg-[#E7BD58] text-[#1D1C1A] font-condensed font-extrabold text-xs sm:text-[13px] rounded-xs border-2 border-[#1D1C1A] shadow-2xs hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer focus:outline-hidden"
            style={{
              borderRadius: '3px 5px 3px 4px',
            }}
            title="Copy email address to clipboard"
          >
            <span>📋</span>
            <span>{copied ? 'COPIED TO CLIPBOARD! ✓' : 'COPY TO CLIPBOARD'}</span>
          </button>
        </div>

        {/* Response time + Clock Doodle */}
        <div className="flex items-center justify-between text-[#1D1C1A] pt-0.5">
          <span className="font-hand font-bold text-xs sm:text-[13px] text-[#2D2820]">
            Response time: &lt; 24 hours
          </span>
          {/* Hand-drawn alarm clock icon */}
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#1D1C1A] shrink-0">
            <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.8" />
            <line x1="12" y1="13" x2="12" y2="8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="12" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            {/* Clock bells / feet */}
            <path d="M 5 6 L 3 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 19 6 L 21 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 6 20 L 4 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 18 20 L 20 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};