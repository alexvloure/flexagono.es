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
      addUtilities({});
    }),
      require("tailwindcss-animate")
],
};
export default config;
