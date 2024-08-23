/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        background_color: "#82B5DD",
        primary_txt_color: "#1D1D20",
        secondary_txt_color: "#42424A",
        tertiary_txt_color: "#55555C",
        btn_colors: "#343436",
        card_list_bg: "#F8F8F9",
      },
      boxShadow: {
        "custom-blue": "0 8px 20px 4px rgba(130, 181, 221, 0.7)",
      },

      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 8px 20px 4px rgba(130, 181, 221, 0.7)" },
          "50%": {
            boxShadow: "0 8px 30px 8px rgba(130, 181, 221, 1), 0 0 20px rgba(130, 181, 221, 1)",
          },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: 0, transform: "translateX(-50%) scale(0.8)" },
          "100%": { opacity: 1, transform: "translateX(0) scale(1)" },
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
      animation: {
        "glow-slow": "glow 2s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
        'fade-in-delay': 'fadeIn 2s ease-out forwards 0.5s',
        "slide-in-left": "slideInLeft 1s ease-out forwards",
        "zoom-in": "zoomIn 0.8s ease-out forwards",
      },

      backgroundImage: {
        "hero-pattern": "url('/assets/images/dots.png')",
        clbg: "url('/assets/images/clbg.png')",
      },
    },
  },
  plugins: [],
};
