import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "chatbot-avatar": "url('./assets/no-face-avatar.svg')",
        "night-sky": "url('./assets/spirited-away-night-sky.jpg')",
        ghosts: "url('./assets/spirited-away-town-ghosts.jpg')",
        town: "url('./assets/spirited-away-town.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
