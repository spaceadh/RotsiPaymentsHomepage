/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        surface: '#f7f4ef',
        'surface-2': '#fbfaf8',
        text: '#111111',
        muted: '#666666',
        line: '#e8e2da',
        accent: '#c7a27c',
        black: '#000000',

        // Compatibility aliases for existing routes/components while the full app moves to the new system.
        primary: '#111111',
        'primary-container': '#242424',
        secondary: '#666666',
        tertiary: '#c7a27c',
        outline: '#a8a19a',
        'outline-variant': '#e8e2da',
        'surface-container-low': '#f7f4ef',
        'surface-container': '#f4eee7',
        'surface-container-high': '#eee6dd',
        'surface-container-highest': '#e8e2da',
        'surface-variant': '#e8e2da',
        'cloud-grey': '#fbfaf8',
        'midnight-navy': '#111111',
        'gold-accent': '#c7a27c',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.08)',
        cta: '0 10px 30px rgba(0,0,0,0.14)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        headline: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        label: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1180px',
      },
      borderRadius: {
        card: '18px',
        panel: '28px',
      },
    },
  },
  plugins: [],
};
