/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F7F3E8',
          cream: '#FAF6EE',
          card: '#FFFDF9',
          kraft: '#DFD5BE',
          border: '#D8CEB9',
        },
        ink: {
          DEFAULT: '#1D1C1A',
          muted: '#5C564C',
          light: '#888073',
          faint: '#BAAF9E',
        },
        mustard: {
          DEFAULT: '#F2C66D',
          hover: '#E5B856',
          pale: '#FBF0CF',
          marker: '#F4CA64',
        },
        tape: {
          DEFAULT: 'rgba(238, 228, 204, 0.85)',
          edge: 'rgba(215, 200, 170, 0.95)',
        }
      },
      fontFamily: {
        hand: ['"Kalam"', '"Caveat"', 'cursive'],
        display: ['"Caveat"', 'cursive'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'sketch': '3px 4px 0px #1D1C1A',
        'sketch-lg': '5px 6px 0px #1D1C1A',
        'sketch-sm': '2px 2px 0px #1D1C1A',
        'paper': '2px 8px 24px rgba(60, 50, 40, 0.12), 0 2px 6px rgba(60, 50, 40, 0.08)',
        'polaroid': '4px 12px 30px rgba(45, 35, 25, 0.18), 0 2px 8px rgba(45, 35, 25, 0.08)',
        'tape': '0 1px 3px rgba(50, 40, 20, 0.15)',
      }
    },
  },
  plugins: [],
}
