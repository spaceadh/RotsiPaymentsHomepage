/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F8F9FA',
        surface: '#F8F9FA',
        'surface-container-low': '#F3F4F5',
        'surface-container': '#EDEEEF',
        'surface-container-high': '#E7E8E9',
        'surface-container-highest': '#E1E3E4',
        'surface-variant': '#E1E3E4',
        primary: '#101828',
        'primary-container': '#141B2C',
        secondary: '#5C5F60',
        tertiary: '#D4AF37',
        outline: '#76777D',
        'outline-variant': '#C6C6CD',
        'cloud-grey': '#F8F9FA',
        'midnight-navy': '#101828',
        'gold-accent': '#D4AF37',
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

