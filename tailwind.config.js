/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.tsx', './{pages,components,context,data,hooks}/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#393185', 50: '#F1F0FA', 100: '#E3E1F4', 200: '#C6C2E8', 600: '#2F2870', 700: '#251F5A', 800: '#1B1745', 900: '#12102F' },
        accent: { DEFAULT: '#EF7F1A', 50: '#FEF3E8', 100: '#FDE3CA', 600: '#D66A0A' },
        ink: '#0F0E24',
        canvas: '#F5F5FA',
        'light-bg': '#F5F5FA',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans Variable"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans Variable"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Plus Jakarta Sans Variable"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: { '4xl': '2rem', '5xl': '2.5rem' },
      letterSpacing: { tightest: '-0.045em' },
      keyframes: {
        kenburns: { '0%': { transform: 'scale(1.0)' }, '100%': { transform: 'scale(1.12)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        progress: { '0%': { transform: 'scaleX(0)' }, '100%': { transform: 'scaleX(1)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        spinslow: { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } },
        fadeUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        kenburns: 'kenburns 14s ease-out forwards',
        marquee: 'marquee 40s linear infinite',
        progress: 'progress linear forwards',
        float: 'float 6s ease-in-out infinite',
        spinslow: 'spinslow 60s linear infinite',
        'fade-up': 'fadeUp 0.9s cubic-bezier(.2,.7,.2,1) both',
      },
    },
  },
  plugins: [],
};
