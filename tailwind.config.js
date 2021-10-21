module.exports = {
  mode:'jit',
  purge: [
    './src/**/*.svelte',
    './src/**/*.js',
    './src/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        theme:{
          DEFAULT:'#FF7D1A',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
