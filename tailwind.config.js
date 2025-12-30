/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'cream': '#F9FAFB', // Using a cool gray-50 as "cream/off-white" for professional look
        'dark-gray': '#18181B', // Zinc-900 (Deep Black)
        'primary': '#FB923C', // Orange-400 (Vibrant, accessible orange)
        'primary-dark': '#EA580C', // Orange-600 (Darker for hover)
        'secondary': '#27272A', // Zinc-800 (Softer black for contrast)
        // Removing specific tertiary colors to enforce the 3-color rule
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      keyframes: {
        'creative-reveal': {
          '0%': { transform: 'translateY(120%) skewY(10deg) scale(0.5)', opacity: '0' },
          '100%': { transform: 'translateY(0) skewY(0) scale(1)', opacity: '1' },
        },
        'reveal-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'creative-reveal': 'creative-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'reveal-up': 'reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};