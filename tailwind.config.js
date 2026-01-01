/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sfm': {
          // Primary Colors
          'azure': '#05436e',
          'azure-light': '#0a5a94',
          'azure-dark': '#032a45',
          'white': '#FFFFFF',
          'gold': '#bc9833',
          'gold-light': '#d4b048',
          'gold-dark': '#9a7d2a',
          // Alternate Colors
          'navy': '#051c3b',
          'navy-light': '#0a2d5c',
          'navy-deep': '#020d1a',
          'black': '#070705',
          // Supporting Colors
          'cream': '#faf9f7',
          'cream-dark': '#f5f3ef',
          'text': '#070705',
          'text-muted': '#5a6672',
          'text-light': '#8896a4',
          // Dark Mode Colors
          'bg-primary': '#0a1628',
          'bg-secondary': '#0f1f35',
          'bg-tertiary': '#142440',
          'surface': '#162a4a',
          'surface-elevated': '#1a3055',
          'dark-text': '#f0f4f8',
          'dark-text-muted': '#a8b8c8',
          'dark-border': '#2a4060',
          'dark-border-light': '#1e3350',
        }
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'Georgia', 'serif'],
        'body': ['Cormorant Garamond', 'Georgia', 'serif'],
        'ui': ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
        'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-xl': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2xl': ['4rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 4px rgba(5, 28, 59, 0.04)',
        'medium': '0 4px 12px rgba(5, 28, 59, 0.06)',
        'large': '0 8px 24px rgba(5, 28, 59, 0.08)',
        'xl': '0 16px 48px rgba(5, 28, 59, 0.10)',
        '2xl': '0 24px 64px rgba(5, 28, 59, 0.12)',
        'gold': '0 8px 32px rgba(188, 152, 51, 0.20)',
        'gold-hover': '0 12px 40px rgba(188, 152, 51, 0.28)',
        'gold-lg': '0 16px 48px rgba(188, 152, 51, 0.30)',
        'inner-soft': 'inset 0 2px 4px rgba(5, 28, 59, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'morph': 'morph 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(188, 152, 51, 0.4)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(188, 152, 51, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #bc9833 0%, #d4b048 50%, #bc9833 100%)',
        'gradient-navy': 'linear-gradient(180deg, #051c3b 0%, #020d1a 100%)',
        'gradient-azure': 'linear-gradient(135deg, #05436e 0%, #0a5a94 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#5a6672',
            a: {
              color: '#05436e',
              '&:hover': {
                color: '#bc9833',
              },
            },
            h1: {
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              color: '#051c3b',
            },
            h2: {
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              color: '#051c3b',
            },
            h3: {
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              color: '#051c3b',
            },
            h4: {
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              color: '#051c3b',
            },
            strong: {
              color: '#051c3b',
            },
            blockquote: {
              borderLeftColor: '#bc9833',
              color: '#051c3b',
            },
          },
        },
      },
    },
  },
  plugins: [],
}
