import type { Config } from 'tailwindcss';

import plugin from 'tailwindcss/plugin';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
    darkMode: ['class'],
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		animation: {
  			'spin-slow': 'spin 15s linear infinite',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite'
  		},
  		keyframes: {
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [
    plugin(function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.level-up::after': {
          content: '""',
          display: 'inline-block',
          position: 'absolute',
          top: '10%', /* Adjust position relative to text */
          right: '-2rem', /* Adjust distance from text */
          width: '24px',
          height: '24px',
          transform: 'translateY(-50%)',
          backgroundImage: 'url(/level-up.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          color: 'black',
        },
        '.level-up-sm::after': {
          content: '""',
          display: 'inline-block',
          position: 'absolute',
          top: '10%', /* Adjust position relative to text */
          right: '-3rem', /* Adjust distance from text */
          width: '32px',
          height: '32px',
          transform: 'translateY(-50%)',
          backgroundImage: 'url(/level-up.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          color: 'black',
        },
        '.level-up-md::after': {
          content: '""',
          display: 'inline-block',
          position: 'absolute',
          top: '10%', /* Adjust position relative to text */
          right: '-3.5rem', /* Adjust distance from text */
          width: '36px',
          height: '36px',
          transform: 'translateY(-50%)',
          backgroundImage: 'url(/level-up.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          color: 'black',
        },
      });
    }),
      require("tailwindcss-animate")
],
};
export default config;
