import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   screens: {
      'xs': '30rem', // Custom small screen
      'sm': '40rem', // 640px
      'md': '48rem', // 768px
      'lg': '64rem', // 1024px
      'xl': '80rem', // 1280px
      '2xl': '96rem', // 1536px
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
