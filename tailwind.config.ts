// tailwind.config.ts
import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,css}',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: { extend: {} },
  plugins: [],
};

export default config;
