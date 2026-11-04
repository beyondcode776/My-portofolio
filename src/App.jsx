import React, { useState, useEffect } from 'react';
import { portfolioConfig } from './config/portfolioConfig';
import { WelcomeScreen } from './components/WelcomeScreen';
import { SpiralBinding } from './components/SpiralBinding';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutPage } from './components/about/AboutPage';
import { ExperiencePage } from './components/experience/ExperiencePage';
import { ProjectsPage } from './components/projects/ProjectsPage';
import { ContactPage } from './components/contact/ContactPage';
import { MarqueeStrip } from './components/MarqueeStrip';
import { SketchStar } from './components/Doodles';

export function App() {
  // ALWAYS start with the cover closed — every refresh shows intro
  const [isNotebookOpen, setIsNotebookOpen] = useState(false);

  // Active page routing: 'home' | 'about' | 'experience' | 'projects' | 'contact'
  const [activePage, setActivePage] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'about') return 'about';
      if (hash === 'experience') return 'experience';
      if (hash === 'projects') return 'projects';
      if (hash === 'contact') return 'contact';
    }
    return 'home';
  });

  // Sync hash changes with browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'experience', 'projects', 'contact'].includes(hash)) {
        setActivePage(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 3D page-turn overlay state
  const [pageTurnState, setPageTurnState] = useState({
    isAnimating: false, // sheet is actively turning
    isFading: false,    // brief invisible gap between turn-out and turn-in
    fromPage: 'home',   // what page content shows on the leaf
    toPage: 'home',     // what we're navigating to
  });
  const [pageTurnComplete, setPageTurnComplete] = useState(true);

  // Lock body scroll when welcome cover is showing
  useEffect(() => {
    if (!isNotebookOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isNotebookOpen]);

  const handleOpenNotebook = () => {
    setIsNotebookOpen(true);
  };

  const handleNavigate = (page) => {
    const pageNormalized = page.toLowerCase();

    // Navigate back to the opening diary cover intro
    if (pageNormalized === 'start' || pageNormalized === 'cover') {
      setIsNotebookOpen(false);
      setActivePage('home');
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    // Full-page transitions for notebook pages: 'home', 'about', 'experience', 'projects', 'contact'
    const validPages = ['home', 'about', 'experience', 'projects', 'contact'];
    if (validPages.includes(pageNormalized)) {
      if (activePage === pageNormalized) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      window.scrollTo({ top: 0, behavior: 'instant' });

      if (prefersReducedMotion) {
        setActivePage(pageNormalized);
        window.location.hash = `#${pageNormalized}`;
        setPageTurnComplete(true);
        return;
      }

      // Kick off the 3D page-turn animation
      setPageTurnComplete(false);
      setPageTurnState({
        isAnimating: true,
        fromPage: activePage,
        toPage: pageNormalized,
      });

      // After leaf turns fully away (~850ms) reveal the new page
      setTimeout(() => {
        setActivePage(pageNormalized);
        window.location.hash = `#${pageNormalized}`;
        setPageTurnState(s => ({ ...s, isAnimating: false }));
        setPageTurnComplete(true);
      }, 850);

    } else {
      // Anchor scroll fallback
      const element = document.querySelector(`#${pageNormalized}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.hash = `#${pageNormalized}`;
      }
    }
  };

  const isPageTurning = pageTurnState.isAnimating;
  const turningFromPage = pageTurnState.fromPage;

  return (
    <div className="min-h-screen relative notebook-paper-bg text-[#1D1C1A] selection:bg-[#F2C66D] selection:text-[#1D1C1A]">

      {/* 1. Developer Diary Welcome Screen — shown on every visit until "Open Notebook" */}
      <WelcomeScreen
        isOpen={isNotebookOpen}
        onOpen={handleOpenNotebook}
      />

      {/* 2. Realistic Spiral Binding on Left Edge */}
      <SpiralBinding />

      {/* 3. Subtle Red Notebook Margin Line */}
      <div className="notebook-margin-line hidden sm:block" aria-hidden="true" />

      {/* 4. Notebook Main Content Area */}
      <div className="pl-11 sm:pl-14 md:pl-16 min-h-screen flex flex-col">
        <Header activePage={activePage} onNavigate={handleNavigate} />

        {/* Page Content + 3D Page-Turn overlay layer */}
        <main className="flex-1 relative notebook-page-viewport">

          {activePage === 'about' ? (
            <AboutPage onNavigate={handleNavigate} pageReady={pageTurnComplete} />
          ) : activePage === 'experience' ? (
            <ExperiencePage onNavigate={handleNavigate} pageReady={pageTurnComplete} />
          ) : activePage === 'projects' ? (
            <ProjectsPage onNavigate={handleNavigate} pageReady={pageTurnComplete} />
          ) : activePage === 'contact' ? (
            <ContactPage onNavigate={handleNavigate} pageReady={pageTurnComplete} />
          ) : (
            <Hero onNavigate={handleNavigate} />
          )}

          {/* 3D Paper Leaf — animates when turning between any two pages */}
          {isPageTurning && (
            <>
              {/* Sweeping shadow across the newly revealed page */}
              <div className="under-page-shadow-sweep" aria-hidden="true" />

              {/* The turning paper sheet carrying ghost content of the "from" page */}
              <div
                className="page-turning-leaf flex flex-col justify-between p-8 sm:p-12 pointer-events-none"
                aria-hidden="true"
              >
                {/* Ghost content of page we're leaving */}
                {turningFromPage === 'home' ? (
                  <div className="space-y-5 opacity-30 max-w-lg mt-8">
                    <div className="flex items-center gap-2">
                      <SketchStar className="w-6 h-6 text-[#1D1C1A]" />
                      <span className="font-hand font-extrabold text-2xl text-[#1D1C1A]">PAGE 01 · HERO</span>
                    </div>
                    <div className="w-64 h-10 bg-[#1D1C1A]/15 rounded-xs" />
                    <div className="w-80 h-4 bg-[#1D1C1A]/10 rounded-xs" />
                    <div className="w-52 h-4 bg-[#1D1C1A]/10 rounded-xs" />
                    <div className="w-36 h-8 bg-[#F2C66D]/40 rounded-xs border border-[#1D1C1A]/20" />
                  </div>
                ) : turningFromPage === 'about' ? (
                  <div className="space-y-5 opacity-30 max-w-lg mt-8">
                    <div className="flex items-center gap-2">
                      <SketchStar className="w-6 h-6 text-[#1D1C1A]" />
                      <span className="font-hand font-extrabold text-2xl text-[#1D1C1A]">PAGE 02 · ABOUT ME</span>
                    </div>
                    <div className="w-72 h-8 bg-[#1D1C1A]/15 rounded-xs" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 bg-[#1D1C1A]/08 rounded-xs border border-[#1D1C1A]/15" />
                      <div className="h-24 bg-[#1D1C1A]/08 rounded-xs border border-[#1D1C1A]/15" />
                    </div>
                  </div>
                ) : turningFromPage === 'experience' ? (
                  <div className="space-y-5 opacity-30 max-w-lg mt-8">
                    <div className="flex items-center gap-2">
                      <SketchStar className="w-6 h-6 text-[#1D1C1A]" />
                      <span className="font-hand font-extrabold text-2xl text-[#1D1C1A]">PAGE 03 · WORK & ACHIEVEMENTS</span>
                    </div>
                    <div className="w-72 h-8 bg-[#1D1C1A]/15 rounded-xs" />
                    <div className="space-y-2">
                      <div className="w-80 h-16 bg-[#1D1C1A]/08 rounded-xs border border-[#1D1C1A]/15" />
                      <div className="w-80 h-16 bg-[#1D1C1A]/08 rounded-xs border border-[#1D1C1A]/15" />
                    </div>
                  </div>
                ) : turningFromPage === 'projects' ? (
                  <div className="space-y-5 opacity-30 max-w-lg mt-8">
                    <div className="flex items-center gap-2">
                      <SketchStar className="w-6 h-6 text-[#1D1C1A]" />
                      <span className="font-hand font-extrabold text-2xl text-[#1D1C1A]">PAGE 04 · TECHNICAL SHOWCASE</span>
                    </div>
                    <div className="w-72 h-8 bg-[#1D1C1A]/15 rounded-xs" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-24 bg-[#1D1C1A]/08 rounded-xs border border-[#1D1C1A]/15" />
                      <div className="h-24 bg-[#1D1C1A]/08 rounded-xs border border-[#1D1C1A]/15" />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-5 opacity-30 max-w-lg mt-8">
                    <div className="flex items-center gap-2">
                      <SketchStar className="w-6 h-6 text-[#1D1C1A]" />
                      <span className="font-hand font-extrabold text-2xl text-[#1D1C1A]">PAGE 05 · LET'S TALK & COLLABORATE</span>
                    </div>
                    <div className="w-72 h-8 bg-[#1D1C1A]/15 rounded-xs" />
                    <div className="w-80 h-16 bg-[#1D1C1A]/08 rounded-xs border border-[#1D1C1A]/15" />
                  </div>
                )}

                <div className="opacity-20 font-mono text-[10px] text-[#5C5343] pb-2">
                  // TURNING TO {
                    pageTurnState.toPage === 'contact'
                      ? 'PAGE 05 · LET\'S TALK & COLLABORATE'
                      : pageTurnState.toPage === 'projects'
                      ? 'PAGE 04 · TECHNICAL SHOWCASE'
                      : pageTurnState.toPage === 'experience'
                      ? 'PAGE 03 · WORK & ACHIEVEMENTS'
                      : pageTurnState.toPage === 'about'
                      ? 'PAGE 02 · ABOUT ME'
                      : 'PAGE 01 · HERO'
                  }...
                </div>
              </div>
            </>
          )}
        </main>

        <MarqueeStrip />

        <footer className="w-full py-2.5 sm:py-3 px-4 sm:px-8 text-center text-xs font-hand text-[#786E5D] select-none flex flex-col sm:flex-row items-center justify-between border-t border-[#E8DEC7]/60 max-w-7xl mx-auto">
          <span>© {new Date().getFullYear()} {portfolioConfig.personal.name} · All ideas & sketches logged</span>
          <div className="flex items-center gap-3 mt-1 sm:mt-0">
            <span className="font-mono text-[11px] text-[#9E927E]">
              {activePage === 'contact'
                ? '// CONTACT & COLLABORATE'
                : activePage === 'projects'
                ? '// TECHNICAL SHOWCASE'
                : activePage === 'experience'
                ? '// WORK EXPERIENCE & ACHIEVEMENTS'
                : activePage === 'about'
                ? '// ABOUT ME'
                : '// HERO LOG'}
            </span>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;
