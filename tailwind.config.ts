import type { Config } from 'tailwindcss';

import plugin from 'tailwindcss/plugin';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.grainy-background': {
          content: '""',
          backgroundColor: 'transparent',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: '0.3',
          top: '0',
          left: '0',
          position: 'absolute',
          width: '100%',
          height: '100%',
        },
        '.circle-container': {
          aspectRatio: '1/1',
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          opacity: '0.6',
        },
        '.fixed-header': {
          position: 'fixed',
          zIndex: '9999',
          width: '100%',
          top: '0',
          height: '4rem',
          // padding: '1rem 2rem',
          padding: '1rem 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '@media (max-width: 780px)': {
          '.fixed-header': {
            // padding: '1rem'
          },
        },
        '.line-height-small': {
          lineHeight: '1.15',
        },
        '.mix-blend-transition': {
          transition: 'mix-blend-mode 0.5s',
        },
        '.photo-bg-container': {
          position: 'absolute',
          top: '0',
          overflow: 'hidden',
          marginTop: '64px',
        },
        '.blend-image': {
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 95%)',
        }
      });
    }),
  ],
};
export default config;
