/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--color-bg) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        'panel-soft': 'rgb(var(--color-panel-soft) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        'text-main': 'rgb(var(--color-text-main) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'text-soft': 'rgb(var(--color-text-soft) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        'accent-soft': 'rgb(var(--color-accent-soft) / <alpha-value>)',
        'accent-hover': 'rgb(var(--color-accent-hover) / <alpha-value>)',
        'accent-contrast': 'rgb(var(--color-accent-contrast) / <alpha-value>)',
        terminal: 'rgb(var(--color-terminal) / <alpha-value>)',
        'terminal-panel': 'rgb(var(--color-terminal-panel) / <alpha-value>)',
      },
      boxShadow: {
        glow: '0 20px 80px rgb(var(--color-accent) / 0.16)',
        card: '0 18px 45px rgb(var(--color-shadow) / 0.22)',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '15%': { opacity: '0.8' },
          '100%': { transform: 'translateY(620%)', opacity: '0' },
        },
        floatLine: {
          '0%, 100%': { transform: 'translateX(0)', opacity: '0.45' },
          '50%': { transform: 'translateX(18px)', opacity: '0.9' },
        },
      },
      animation: {
        scan: 'scan 5s ease-in-out infinite',
        floatLine: 'floatLine 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
