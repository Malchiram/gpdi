import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/Gallery/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        merriweather : ["Merriweather", 'sans-serif'],
        bebas_neue : ["Bebas Neue", 'sans-serif'],
        pacifico : ["Pacifico", 'sans-serif'],
        luckiest_guy : ["Luckiest Guy", 'sans-serif'],
        Playfair_Display : ['Playfair Display', 'sans-serif']
      },
      container:{
        center:true,
        padding: "15px"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary : {
          DEFAULT : "#100e0e"
        }
      },
      backgroundImage : {
        hero_overlay : "url('/assets/hero/hero-overlay.png')"
      },
      screens: {
        xs: "300px",
        sm: "480px",  // Small screens
        md: "768px",  // Medium screens
        lg: "1024px", // Large screens
        xl: "1280px", // Extra large screens
        "2xl": "1536px", // 2x Extra large screens
      },
    },
  },
  plugins: [],
} satisfies Config;
