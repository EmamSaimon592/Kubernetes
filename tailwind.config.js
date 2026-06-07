/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        k8s: {
          50: '#e8eaf6',
          100: '#c5cae9',
          200: '#9fa8da',
          300: '#7986cb',
          400: '#5c6bc0',
          500: '#326ce5',
          600: '#2962cc',
          700: '#1e4fb3',
          800: '#153d99',
          900: '#0a1a40',
          950: '#060e24',
        },
        cyan: {
          400: '#00e5ff',
          500: '#00bcd4',
        },
      },
    },
  },
  plugins: [],
};
