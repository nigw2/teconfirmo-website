// ============================================================
// Teconfirmo Capital — Tailwind theme extension
// Use this either:
//   (a) Inline via the CDN config script (see below), or
//   (b) Inside tailwind.config.js when using a build setup.
// ============================================================

// (a) For Tailwind via CDN — paste this <script> AFTER the cdn.tailwindcss.com tag:
/*
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          'tc-navy':      '#1B365F',
          'tc-navy-deep': '#212B46',
          'tc-red':       '#EF3346',
          'tc-red-deep':  '#A4343E',
          'tc-gold':      '#EAAB00',
          'tc-gold-deep': '#AF6E05',
          'tc-gray-500':  '#808080',
          'tc-gray-200':  '#CFCFCF',
        },
        fontFamily: {
          display: ['Acumin Pro', 'Inter', 'system-ui', 'sans-serif'],
          body:    ['Acumin Pro', 'Inter', 'system-ui', 'sans-serif'],
          accent:  ['Halyard Text', 'Manrope', 'system-ui', 'sans-serif'],
        },
        letterSpacing: {
          'tc-display': '-0.025em',
          'tc-heading': '-0.015em',
          'tc-caps':    '0.28em',
        },
        boxShadow: {
          'tc-sm': '0 1px 2px rgba(27, 54, 95, 0.06)',
          'tc-md': '0 1px 2px rgba(27, 54, 95, 0.06), 0 4px 12px rgba(27, 54, 95, 0.08)',
          'tc-lg': '0 2px 4px rgba(27, 54, 95, 0.06), 0 12px 32px rgba(27, 54, 95, 0.12)',
          'tc-xl': '0 4px 8px rgba(27, 54, 95, 0.08), 0 24px 48px rgba(27, 54, 95, 0.16)',
        },
        transitionTimingFunction: {
          'tc-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          'tc-out':    'cubic-bezier(0.22, 1, 0.36, 1)',
        },
      }
    }
  }
</script>
*/

// (b) For tailwind.config.js (Tailwind v3 with build step):
module.exports = {
  content: ['./**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'tc-navy':      '#1B365F',
        'tc-navy-deep': '#212B46',
        'tc-red':       '#EF3346',
        'tc-red-deep':  '#A4343E',
        'tc-gold':      '#EAAB00',
        'tc-gold-deep': '#AF6E05',
        'tc-gray-500':  '#808080',
        'tc-gray-200':  '#CFCFCF',
      },
      fontFamily: {
        display: ['Acumin Pro', 'Inter', 'system-ui', 'sans-serif'],
        body:    ['Acumin Pro', 'Inter', 'system-ui', 'sans-serif'],
        accent:  ['Halyard Text', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tc-display': '-0.025em',
        'tc-heading': '-0.015em',
        'tc-caps':    '0.28em',
      },
      boxShadow: {
        'tc-sm': '0 1px 2px rgba(27, 54, 95, 0.06)',
        'tc-md': '0 1px 2px rgba(27, 54, 95, 0.06), 0 4px 12px rgba(27, 54, 95, 0.08)',
        'tc-lg': '0 2px 4px rgba(27, 54, 95, 0.06), 0 12px 32px rgba(27, 54, 95, 0.12)',
        'tc-xl': '0 4px 8px rgba(27, 54, 95, 0.08), 0 24px 48px rgba(27, 54, 95, 0.16)',
      },
      transitionTimingFunction: {
        'tc-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'tc-out':    'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

// Quick reference of common usage:
//   <h1 class="font-display tracking-tc-display text-tc-navy">Heading</h1>
//   <p  class="font-body text-tc-navy/80 leading-relaxed">Body copy</p>
//   <button class="bg-tc-red hover:bg-tc-red-deep text-white shadow-tc-md
//                  transition duration-200 ease-tc-out">CTA</button>
//   <span class="font-accent uppercase tracking-tc-caps text-tc-red">Capital</span>
