module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    fontFamily: {
      jump: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "banner-bg": "url('/public/bg-whaletech.jpg')",
        "banner-bg-hero": "url('/public/hero.jpg')",
        "banner-bg-about": "url('/public/about.jpg')",
        "banner-bg-howto": "url('/public/howto.jpg')",
        "banner-bg-hero2": "url('/public/hero2.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
