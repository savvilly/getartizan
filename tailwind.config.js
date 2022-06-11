module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#8C2F88",
        purple: "#906EC2",
        light: "#CAB3DF",
        // gray:"#E6E6E6",
        blue: "#6545E4",
        red: "#Ad4663"

      },
    },
    screens: {
      'sm': { 'max': '700px' },
      'md': '700px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}