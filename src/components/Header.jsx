import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolioConfig';
import { SketchStar, UnderlineScribble } from './Doodles';
import { ResumeModal } from './ResumeModal';

/**
 * Header Component
 * Recreates the horizontal notebook header:
 * - Signature logo "Kishlay Kumar" with doodle star and underline
 * - Active "HOME" shows taped paper label
 * - Active "ABOUT" shows roughly sketched oval with mustard-yellow marker effect (matching reference image)
 * - Right: Sketch-style "RESUME 📄" button that opens emergent printable PDF modal
 * - Mobile responsive drawer menu
 */
export const Header = ({ activePage = 'home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const pageId = item.id || item.label.toLowerCase();
    if (onNavigate) {
      onNavigate(pageId);
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="relative w-full z-20 pt-4 pb-3 px-4 sm:px-8 md:px-12 select-none border-b border-[#E8DFCA]/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Signature-style Logo */}
          <div className="relative group flex flex-col items-start cursor-pointer">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate && onNavigate('home');
              }}
              className="flex items-center gap-1.5 focus:outline-hidden"
              aria-label="Kishlay Kumar Portfolio Home"
            >
              <span className="font-hand font-bold text-2xl sm:text-3xl text-[#1D1C1A] tracking-tight hover:text-[#000000] transition-colors">
                {portfolioConfig.personal.name}
              </span>
              <SketchStar className="w-5 h-5 sm:w-6 sm:h-6 text-[#1D1C1A] transform -rotate-12 transition-transform group-hover:rotate-45" />
            </a>
            <div className="-mt-1.5 ml-0.5">
              <UnderlineScribble className="w-36 sm:w-44 h-2.5 text-[#1D1C1A]" />
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-4 xl:space-x-6"
            aria-label="Main Navigation"
          >
            {/* Top status indicator when on contact page (from contact reference image) */}
            {activePage === 'contact' && (
              <div className="hidden xl:flex items-center gap-1.5 absolute -top-0.5 right-32 sm:right-40 text-[10px] font-mono text-[#5C5240] pointer-events-none select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse" />
                
              </div>
            )}

            {portfolioConfig.navigation.map((item) => {
              const itemKey = (item.id || item.label).toLowerCase();
              const isActive = activePage === itemKey;

              // CONTACT active highlight: Hand-drawn mustard-yellow rough oval with doodle stars (matching reference image)
              if (isActive && itemKey === 'contact') {
                return (
                  <div
                    key={item.label}
                    className="relative px-4 py-1 -my-1 transform -rotate-0.5 cursor-default inline-flex items-center justify-center select-none"
                  >
                    {/* Small hand-drawn decorative stars around the oval */}
                    <span className="absolute -top-1.5 -right-2 text-[#1D1C1A] text-[11px] select-none pointer-events-none transform rotate-12">☆</span>
                    <span className="absolute -bottom-2 -right-1 text-[#1D1C1A] text-[9px] select-none pointer-events-none transform -rotate-12">☆</span>

                    {/* Mustard-yellow marker highlight wash */}
                    <span
                      className="absolute inset-0 bg-[#E7BD58] opacity-95 pointer-events-none rounded-full transform scale-x-105"
                      style={{
                        borderRadius: '52% 48% 54% 46% / 46% 54% 46% 54%',
                        boxShadow: '0 2px 4px rgba(231, 189, 88, 0.45)',
                      }}
                      aria-hidden="true"
                    />
                    {/* Sketched outer black ink oval border */}
                    <span
                      className="absolute inset-0 border-2 border-[#1D1C1A] pointer-events-none transform -rotate-1"
                      style={{
                        borderRadius: '50% 50% 48% 52% / 52% 48% 52% 48%',
                      }}
                      aria-hidden="true"
                    />
                    {/* Second subtle sketchy echo line */}
                    <span
                      className="absolute inset-0 border border-[#1D1C1A] opacity-40 pointer-events-none transform rotate-0.5 scale-95"
                      style={{
                        borderRadius: '48% 52% 50% 50% / 50% 50% 48% 52%',
                      }}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 font-body font-extrabold text-xs uppercase tracking-wider text-[#1D1C1A]">
                      {item.label}
                    </span>
                  </div>
                );
              }

              // PROJECTS active highlight: Hand-drawn mustard-yellow rough oval with doodle stars (matching reference image)
              if (isActive && itemKey === 'projects') {
                return (
                  <div
                    key={item.label}
                    className="relative px-4 py-1 -my-1 transform -rotate-0.5 cursor-default inline-flex items-center justify-center select-none"
                  >
                    {/* Small hand-drawn decorative stars around the oval */}
                    <span className="absolute -top-2 -right-2 text-[#1D1C1A] text-[11px] select-none pointer-events-none transform rotate-12">☆</span>
                    <span className="absolute -bottom-1.5 -right-1 text-[#1D1C1A] text-[9px] select-none pointer-events-none transform -rotate-12">☆</span>
                    <span className="absolute -bottom-1.5 -left-1.5 text-[#1D1C1A] text-[9px] select-none pointer-events-none transform rotate-12">☆</span>

                    {/* Mustard-yellow marker highlight wash */}
                    <span
                      className="absolute inset-0 bg-[#E7BD58] opacity-95 pointer-events-none rounded-full transform scale-x-105"
                      style={{
                        borderRadius: '52% 48% 54% 46% / 46% 54% 46% 54%',
                        boxShadow: '0 2px 4px rgba(231, 189, 88, 0.45)',
                      }}
                      aria-hidden="true"
                    />
                    {/* Sketched outer black ink oval border */}
                    <span
                      className="absolute inset-0 border-2 border-[#1D1C1A] pointer-events-none transform -rotate-1"
                      style={{
                        borderRadius: '50% 50% 48% 52% / 52% 48% 52% 48%',
                      }}
                      aria-hidden="true"
                    />
                    {/* Second subtle sketchy echo line */}
                    <span
                      className="absolute inset-0 border border-[#1D1C1A] opacity-40 pointer-events-none transform rotate-0.5 scale-95"
                      style={{
                        borderRadius: '48% 52% 50% 50% / 50% 50% 48% 52%',
                      }}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 font-body font-extrabold text-xs uppercase tracking-wider text-[#1D1C1A]">
                      {item.label}
                    </span>
                  </div>
                );
              }

              // EXPERIENCE active highlight: Hand-drawn mustard-yellow oval with doodle stars (matching reference image)
              if (isActive && itemKey === 'experience') {
                return (
                  <div
                    key={item.label}
                    className="relative px-4 py-1 -my-1 transform -rotate-0.5 cursor-default inline-flex items-center justify-center select-none"
                  >
                    {/* Small hand-drawn decorative stars around the oval */}
                    <span className="absolute -top-1.5 -left-1 text-[#1D1C1A] text-[10px] select-none pointer-events-none transform -rotate-12">☆</span>
                    <span className="absolute -bottom-1.5 -left-1.5 text-[#1D1C1A] text-[9px] select-none pointer-events-none transform rotate-12">☆</span>
                    <span className="absolute -top-1.5 -right-1 text-[#1D1C1A] text-[11px] select-none pointer-events-none transform rotate-20">☆</span>

                    {/* Mustard-yellow marker highlight wash */}
                    <span
                      className="absolute inset-0 bg-[#E7BD58] opacity-95 pointer-events-none rounded-full transform scale-x-105"
                      style={{
                        borderRadius: '52% 48% 54% 46% / 46% 54% 46% 54%',
                        boxShadow: '0 2px 4px rgba(231, 189, 88, 0.45)',
                      }}
                      aria-hidden="true"
                    />
                    {/* Sketched outer black ink oval border */}
                    <span
                      className="absolute inset-0 border-2 border-[#1D1C1A] pointer-events-none transform -rotate-1"
                      style={{
                        borderRadius: '50% 50% 48% 52% / 52% 48% 52% 48%',
                      }}
                      aria-hidden="true"
                    />
                    {/* Second subtle sketchy echo line */}
                    <span
                      className="absolute inset-0 border border-[#1D1C1A] opacity-40 pointer-events-none transform rotate-0.5 scale-95"
                      style={{
                        borderRadius: '48% 52% 50% 50% / 50% 50% 48% 52%',
                      }}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 font-body font-extrabold text-xs uppercase tracking-wider text-[#1D1C1A]">
                      {item.label}
                    </span>
                  </div>
                );
              }

              // ABOUT active highlight: Roughly sketched oval with mustard-yellow marker effect
              if (isActive && itemKey === 'about') {
                return (
                  <div
                    key={item.label}
                    className="relative px-3.5 py-1 -my-1 transform -rotate-1 cursor-default inline-flex items-center justify-center select-none"
                  >
                    {/* Mustard-yellow marker highlight wash */}
                    <span
                      className="absolute inset-0 bg-[#F2C66D] opacity-90 -rotate-1 pointer-events-none rounded-full transform scale-x-105"
                      style={{
                        borderRadius: '50% 45% 55% 48% / 48% 55% 45% 52%',
                        boxShadow: '0 1px 3px rgba(242, 198, 109, 0.45)',
                      }}
                      aria-hidden="true"
                    />
                    {/* Roughly sketched black ink oval border */}
                    <span
                      className="absolute inset-0 border-2 border-[#1D1C1A] pointer-events-none transform -rotate-0.5"
                      style={{
                        borderRadius: '48% 52% 47% 53% / 52% 46% 54% 48%',
                      }}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 font-body font-bold text-xs uppercase tracking-wider text-[#1D1C1A]">
                      {item.label}
                    </span>
                  </div>
                );
              }

              // HOME active highlight: Taped paper label
              if (isActive && itemKey === 'home') {
                return (
                  <div
                    key={item.label}
                    className="relative px-3 py-1 bg-[#F5E6B8] border-2 border-[#1D1C1A] rounded-xs shadow-sketch-sm transform -rotate-1 cursor-default"
                    style={{
                      backgroundColor: '#F5E6B8',
                      borderRadius: '3px 6px 4px 5px',
                    }}
                  >
                    {/* Subtle tape corner snippets */}
                    <div className="absolute -top-1.5 -left-2 w-5 h-2.5 bg-[#EFE5CD] opacity-90 -rotate-12 pointer-events-none" />
                    <div className="absolute -bottom-1 -right-2 w-5 h-2.5 bg-[#EFE5CD] opacity-90 rotate-12 pointer-events-none" />
                    
                    <span className="font-body font-bold text-xs uppercase tracking-wider text-[#1D1C1A]">
                      {item.label}
                    </span>
                  </div>
                );
              }

              // Default inactive link
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="font-body font-medium text-xs sm:text-sm uppercase tracking-wider text-[#403B32] hover:text-[#1D1C1A] hover:underline underline-offset-4 transition-colors py-1 px-1 focus:outline-hidden focus:text-[#1D1C1A]"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: Resume Button with Paper Styling */}
          <div className="flex items-center gap-3">
            
            {/* Resume Button — opens Kishlay's actual uploaded resume PDF in a new tab */}
            <a
              href={portfolioConfig.personal.resumePdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 bg-[#FAF3DE] hover:bg-[#F2C66D] text-[#1D1C1A] font-hand font-bold text-sm sm:text-base rounded-xs border-2 border-[#1D1C1A] shadow-sketch-sm hover:shadow-sketch transform hover:-translate-y-0.5 active:translate-y-0.5 transition-all cursor-pointer focus:outline-hidden"
              style={{
                borderRadius: '4px 7px 5px 6px',
              }}
              title="Open Kishlay's resume PDF in new tab"
              aria-label="View and download Resume"
            >
              <span className="text-base">📄</span>
              <span className="tracking-wide">RESUME</span>
              <span className="text-xs group-hover:translate-y-0.5 transition-transform">⬇</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md border-2 border-[#1D1C1A] bg-[#FFFDF9] shadow-sketch-sm hover:bg-[#F7F3E8] transition-colors focus:outline-hidden cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5 text-[#1D1C1A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden mt-3 p-4 bg-[#FFFDF9] border-2 border-[#1D1C1A] rounded-md shadow-sketch transform -rotate-0.5 animate-fadeIn"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, rgba(200, 180, 150, 0.15) 0px, rgba(200, 180, 150, 0.15) 1px, transparent 1px, transparent 24px)
              `,
            }}
          >
            <div className="flex justify-between items-center mb-3 pb-2 border-b border-[#E8DFCA]">
              <span className="font-hand font-bold text-lg text-[#1D1C1A]">Table of Contents</span>
              <a
                href={portfolioConfig.personal.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-hand font-bold text-[#1D1C1A] bg-[#F2C66D] px-2 py-0.5 rounded-xs border border-[#1D1C1A]"
              >
                📄 Resume PDF
              </a>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              {portfolioConfig.navigation.map((item) => {
                const itemKey = (item.id || item.label).toLowerCase();
                const isActive = activePage === itemKey;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`py-2 px-3 text-sm font-body font-semibold rounded-xs transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#F2C66D] text-[#1D1C1A] border-2 border-[#1D1C1A] shadow-sketch-sm -rotate-1'
                        : 'text-[#484236] hover:bg-[#FAF4E5] hover:text-[#1D1C1A]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="font-hand text-xs">★</span>}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Emergent Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
};
