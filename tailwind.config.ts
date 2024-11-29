import type { Config } from "tailwindcss";

export default {
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
        primary: '#52796F',
        secondary: '#CAD2C5',
        accent: '#84A98C',
        textDark: '#354F52',
        textLight: '#2F3E46',
      },
    },
  },
  plugins: [],
} satisfies Config;
