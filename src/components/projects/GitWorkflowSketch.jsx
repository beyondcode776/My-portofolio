import React from 'react';
import { SketchStar } from '../Doodles';

/**
 * GitWorkflowSketch Component
 * Hand-drawn ink Git branching diagram near the top-right:
 * - Commit nodes and curved dashed branches
 * - "git branch 'ui-tuning'", "git merge 'ui-tuning'", "deploying v3.0 stable", "test passed ☑"
 */
export const GitWorkflowSketch = ({ className = "" }) => {
  return (
    <div className={`relative flex items-center select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 240 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-44 sm:w-52 h-auto overflow-visible"
        aria-label="Git workflow hand-drawn branching diagram"
      >
        {/* Top annotation: git branch 'ui-tuning' */}
        <text
          x="150"
          y="14"
          fill="#1D1C1A"
          fontFamily="Kalam, Caveat, cursive"
          fontSize="11"
          fontWeight="bold"
        >
          git branch 'ui-tuning'
        </text>

        {/* Deploying label */}
        <text
          x="188"
          y="42"
          fill="#1D1C1A"
          fontFamily="Kalam, Caveat, cursive"
          fontSize="10"
          fontWeight="bold"
        >
          deploying
        </text>
        <text
          x="188"
          y="52"
          fill="#1D1C1A"
          fontFamily="Kalam, Caveat, cursive"
          fontSize="9"
          fontWeight="bold"
        >
          v3.0 stable
        </text>

        {/* Main branch line connecting nodes */}
        <line x1="20" y1="65" x2="160" y2="65" stroke="#1D1C1A" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="160" y1="65" x2="185" y2="65" stroke="#1D1C1A" strokeWidth="2" />

        {/* Upper branch: leaves node at x=35, curves up to x=110, y=26, then curves down to merge at x=160 */}
        <path
          d="M 35 65 C 40 30 75 26 110 26 C 140 26 155 45 160 65"
          stroke="#1D1C1A"
          strokeWidth="1.8"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />

        {/* Upper branch arrowhead at merge */}
        <path
          d="M 152 56 L 160 64 L 163 53"
          stroke="#1D1C1A"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Upward arrow to deploy */}
        <path
          d="M 185 60 L 185 30"
          stroke="#1D1C1A"
          strokeWidth="1.8"
          strokeDasharray="3 2"
          strokeLinecap="round"
        />
        <path
          d="M 181 35 L 185 28 L 189 35"
          stroke="#1D1C1A"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Node 1 */}
        <circle cx="35" cy="65" r="5" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
        <circle cx="35" cy="65" r="2" fill="#1D1C1A" />

        {/* Node on upper branch */}
        <circle cx="110" cy="26" r="5" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
        <circle cx="110" cy="26" r="2" fill="#1D1C1A" />

        {/* Node 2 on main branch */}
        <circle cx="95" cy="65" r="5" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2" />
        <circle cx="95" cy="65" r="2" fill="#1D1C1A" />

        {/* Node 3 (Merge node) */}
        <circle cx="160" cy="65" r="6" fill="#EDE4CE" stroke="#1D1C1A" strokeWidth="2.2" />
        <circle cx="160" cy="65" r="2.5" fill="#1D1C1A" />

        {/* Node 4 (Deploy node) */}
        <circle cx="185" cy="65" r="6" fill="#FAF5E8" stroke="#1D1C1A" strokeWidth="2.2" />
        <circle cx="185" cy="65" r="2.5" fill="#1D1C1A" />

        {/* Label: git merge 'ui-tuning' */}
        <text
          x="75"
          y="48"
          fill="#1D1C1A"
          fontFamily="Kalam, Caveat, cursive"
          fontSize="10"
          fontWeight="bold"
        >
          git merge
        </text>
        <text
          x="72"
          y="57"
          fill="#1D1C1A"
          fontFamily="Kalam, Caveat, cursive"
          fontSize="9"
          fontWeight="bold"
        >
          'ui-tuning'
        </text>

        {/* Label: ← test passed ☑ */}
        <text
          x="196"
          y="69"
          fill="#1D1C1A"
          fontFamily="Kalam, Caveat, cursive"
          fontSize="10"
          fontWeight="bold"
        >
          ← test passed
        </text>
        {/* Green checkmark box */}
        <rect x="256" y="60" width="10" height="10" rx="1.5" fill="#E8F5E9" stroke="#2E7D32" strokeWidth="1.2" />
        <path d="M 258 65 L 261 68 L 265 62" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Small doodle stars */}
      <div className="absolute right-0 top-12 text-[#1D1C1A] opacity-75">
        <SketchStar className="w-4 h-4 transform rotate-12" />
      </div>
    </div>
  );
};
