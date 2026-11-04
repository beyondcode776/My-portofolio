import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm';
import { FaqCard } from './FaqCard';
import { VibeCheckCard } from './VibeCheckCard';
import { WorkflowCard } from './WorkflowCard';
import { LocationStickyNote } from './LocationStickyNote';
import { SocialMediaStrip } from './SocialMediaStrip';
import { CollaborationStrip } from './CollaborationStrip';
import {
  GitCommitDoodle,
  PencilDoodle,
} from './ContactDoodles';
import { BottomPageNav } from './BottomPageNav';

/**
 * ContactPage Component — The Living Developer's Notebook (Page 05)
 * 
 * Recreates the exact contact notebook page matching the reference:
 * - 3-Area Balanced Composition:
 *   1. Left Area: Main heading (05 // LET'S TALK & COLLABORATE), subtitle, contact form with git commit doodle
 *   2. Middle Area: FAQ / ASK ME ANYTHING compact paper card
 *   3. Right Area: MY WORKFLOW ⚙️ card (upper-right) + Updated Location Sticky Note (lower-right)
 * - Lower Row: Social Media Strip (left) + LET'S BUILD TOGETHER Collaboration Strip (right)
 * - Bottom Navigation: Tucked directly below the content
 */
export const ContactPage = ({ onNavigate, pageReady = true }) => {
  const [entrancePhase, setEntrancePhase] = useState(1);
  const [selectedVibes, setSelectedVibes] = useState({
    webApp: true,
    iotHardware: false,
    freelanceCollab: false,
    justHi: false,
  });

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!pageReady) {
      setEntrancePhase(1);
      return;
    }

    if (prefersReducedMotion) {
      setEntrancePhase(5);
      return;
    }

    setEntrancePhase(1);
    const timer2 = setTimeout(() => setEntrancePhase(2), 100);
    const timer3 = setTimeout(() => setEntrancePhase(3), 250);
    const timer4 = setTimeout(() => setEntrancePhase(4), 400);
    const timer5 = setTimeout(() => setEntrancePhase(5), 550);

    return () => {
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [pageReady, prefersReducedMotion]);

  const showHeading = prefersReducedMotion || entrancePhase >= 2;
  const showForm = prefersReducedMotion || entrancePhase >= 3;
  const showFaqAndWorkflow = prefersReducedMotion || entrancePhase >= 4;
  const showBottom = prefersReducedMotion || entrancePhase >= 5;

  return (
    <div className="relative w-full pt-1 sm:pt-2 pb-4 px-3 sm:px-6 md:px-8 select-none overflow-x-hidden min-h-[auto]">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= THREE-AREA NOTEBOOK COMPOSITION ================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 xl:gap-5 items-start">
          
          {/* ================= 1. LEFT AREA: HEADING + CONTACT FORM ================= */}
          <div className="lg:col-span-5 flex flex-col space-y-2 sm:space-y-2.5">
            
            {/* Main Heading: 05 // LET'S TALK & COLLABORATE */}
            <div className={`transition-opacity duration-300 ${showHeading ? 'opacity-100' : 'opacity-0'}`}>
              <div className="relative inline-block">
                <h2 className="font-condensed font-extrabold text-2xl sm:text-3xl md:text-[32px] text-[#1D1C1A] tracking-wider uppercase leading-none">
                  05 // LET'S TALK &amp; COLLABORATE
                </h2>
                {/* Mustard-yellow hand-drawn underline */}
                <div
                  className="w-full h-2 sm:h-2.5 bg-[#E7BD58] opacity-90 mt-0.5 rounded-xs transform -rotate-0.5 pointer-events-none"
                  style={{
                    clipPath: 'polygon(0% 15%, 2% 0%, 98% 5%, 100% 85%, 97% 100%, 3% 90%)',
                    boxShadow: '0 1px 3px rgba(231, 189, 88, 0.4)',
                  }}
                />
              </div>

              {/* Subtitle */}
              <p className="font-body text-[11px] sm:text-xs text-[#403B32] mt-1 font-medium leading-relaxed max-w-md">
                Have an idea, need a custom web app, or just want to connect? Drop a message below!
              </p>
            </div>

            {/* Row with Git Commit Doodle on left + Contact Form Sheet on right */}
            <div className="flex items-start gap-1.5 sm:gap-2">
              {/* Git commit doodle on far left */}
              <div className="hidden sm:block shrink-0 pt-2">
                <GitCommitDoodle />
              </div>

              {/* Contact Form Sheet */}
              <div
                className={`flex-1 transition-all duration-500 ${
                  showForm ? 'opacity-100 translate-y-0 animate-paper-drop' : 'opacity-0 -translate-y-4'
                }`}
                style={{ '--target-rotate': '-0.5deg' }}
              >
                <ContactForm selectedVibes={selectedVibes} />
              </div>
            </div>

          </div>

          {/* ================= 2. MIDDLE AREA: FAQ / ASK ME ANYTHING + VIBE CHECK ================= */}
          <div
            className={`lg:col-span-3 flex flex-col items-center justify-start space-y-3 pt-2 sm:pt-4 lg:pt-6 transition-all duration-500 ${
              showFaqAndWorkflow ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="w-full flex justify-center">
              <FaqCard className="w-full max-w-[290px] sm:max-w-xs" />
            </div>

            {/* VIBE CHECK Card placed directly below FAQ card */}
            <div className="w-full flex justify-center">
              <VibeCheckCard
                className="w-full max-w-[290px] sm:max-w-xs"
                onSelectionChange={setSelectedVibes}
              />
            </div>
          </div>

          {/* ================= 3. RIGHT AREA: MY WORKFLOW (UPPER) + LOCATION STICKY NOTE (LOWER) ================= */}
          <div
            className={`lg:col-span-4 flex flex-col space-y-2.5 sm:space-y-3 pt-1 lg:pt-2 transition-all duration-500 ${
              showFaqAndWorkflow ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            {/* Upper Right: MY WORKFLOW ⚙️ (HOW WE BUILD) */}
            <div className="w-full flex justify-center lg:justify-end">
              <WorkflowCard className="w-full max-w-[280px] sm:max-w-xs" />
            </div>

            {/* Lower Right: Updated Yellow Location Sticky Note */}
            <div className="w-full flex justify-center lg:justify-end">
              <LocationStickyNote className="w-full max-w-[280px] sm:max-w-xs" />
            </div>
          </div>

        </div>

        {/* ================= LOWER ROW: SOCIAL MEDIA STRIP (LEFT) + COLLABORATION STRIP (RIGHT) ================= */}
        <div
          className={`mt-2.5 sm:mt-3 flex flex-col md:flex-row items-center md:items-end justify-between gap-3 sm:gap-4 transition-all duration-500 ${
            showBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {/* Left: Pencil Doodle + Social Media Strip */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="hidden sm:block shrink-0 pb-0.5">
              <PencilDoodle />
            </div>
            <SocialMediaStrip />
          </div>

          {/* Right: LET'S BUILD TOGETHER Collaboration Strip */}
          <div className="flex-1 w-full md:w-auto">
            <CollaborationStrip />
          </div>
        </div>

        {/* ================= BOTTOM PAGE NAVIGATION (Tucked directly below content) ================= */}
        <div
          className={`mt-3 sm:mt-4 transition-all duration-500 ${
            showBottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <BottomPageNav onNavigate={onNavigate} />
        </div>

      </div>
    </div>
  );
};