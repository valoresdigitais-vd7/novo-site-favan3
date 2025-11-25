/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C75', // azul institucional - identifica confiança e modernidade
          light: '#3282B8',   // variação clara para CTAs
          dark: '#1B262C',    // variação escura para contraste premium
        },
        secondary: {
          DEFAULT: '#F9A826', // dourado-acobreado - representa valor e resultado
          light: '#FFD166',   // variação clara para realces
          dark: '#C77B14',    // variação escura para foco e profundidade
        },
        neutral: {
          100: '#F9FAFB', // branco de fundo geral
          200: '#F3F4F6', // fundo de seções alternadas
          300: '#E5E7EB', // bordas suaves
          400: '#D1D5DB', // bordas discretas
          500: '#9CA3AF', // textos desabilitados
          600: '#6B7280', // textos secundários
          700: '#374151', // textos principais
          800: '#1F2937', // fundo de rodapé
          900: '#111827', // texto/fundo muito escuro
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}