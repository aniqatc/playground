module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      // v2 design tokens — the actual values live as CSS variables in main.css
      // so they can switch between light and dark (and be tinted per widget card)
      colors: {
        bg: 'var(--bg)',
        card: 'var(--card)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        soft: 'var(--soft)',
        soft2: 'var(--soft2)',
        accent: 'var(--accent)',
        'on-accent': 'var(--on-accent)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'Geist', 'system-ui', 'sans-serif'],
        sans: ['Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        page: '1320px',
      },
      animation: {
        'text-fill': 'textFill 1.3s cubic-bezier(.2,.8,.2,1) both 150ms',
        rise: 'rise .7s cubic-bezier(.2,.8,.2,1) both',
      },
      keyframes: {
        textFill: {
          '100%': { backgroundPositionX: '-100%' },
        },
        rise: {
          from: { opacity: '0', translate: '0 16px' },
          to: { opacity: '1', translate: '0 0' },
        },
      },
    },
  },
  plugins: [],
};
