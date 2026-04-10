/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        surface: '#FCFDFE',
        'surface-container-low': '#F1F5F9',
        'surface-container': '#EDF2F7',
        'surface-container-high': '#E7ECF2',
        'surface-container-highest': '#E0E7EF',
        'surface-variant': '#E2E8F0',
        primary: '#0F172A',
        'primary-container': '#111B2E',
        secondary: '#475569',
        tertiary: '#D6A540',
        outline: '#94A3B8',
        'outline-variant': '#D6DEE8',
        'cloud-grey': '#F8FAFC',
        'midnight-navy': '#0F172A',
        'gold-accent': '#D6A540',
      },
      fontFamily: {
        headline: ['var(--font-space-grotesk)', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
        label: ['var(--font-manrope)', 'sans-serif'],
      },
      maxWidth: {
        shell: '1440px',
      },
      borderRadius: {
        DEFAULT: '0px',
        lg: '0px',
        xl: '0px',
      },
    },
  },
  plugins: [],
};

