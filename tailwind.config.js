/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': "#377DFF",
        'secondary': "#08A0CD",
      },
      backgroundImage: {
        'hero-pattern': "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2024%2F02%2F29%2Fscience%2Fcats-animal-behavior-meow.html&psig=AOvVaw1db7KLX-j5Bjjw_EozvZpX&ust=1731856968543000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJjigo2U4YkDFQAAAAAdAAAAABAE')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}

