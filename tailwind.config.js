const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "sm": "480px",
        "ssm": "325px",
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        void: {
          DEFAULT: '#050508',
          light: '#0a0a10',
          card: '#0f0f18',
          border: 'rgba(255,255,255,0.06)',
        },
        cyan: {
          glow: '#00f0ff',
          dim: 'rgba(0,240,255,0.1)',
        },
        violet: {
          glow: '#a78bfa',
          dim: 'rgba(167,139,250,0.1)',
        },
        surface: {
          DEFAULT: '#0f0f16',
          hover: '#161622',
          elevated: '#1a1a2e',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mesh': 'radial-gradient(at 0% 0%, rgba(0,240,255,0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(167,139,250,0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(0,240,255,0.08) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(167,139,250,0.08) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 40px -10px rgba(0,240,255,0.4)',
        'glow-violet': '0 0 40px -10px rgba(167,139,250,0.4)',
        'glow-sm': '0 0 20px -5px rgba(0,240,255,0.3)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "spin-slow": "spin-slow 20s linear infinite",
      },
    },
  },
  plugins: [animate],
}
