module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '335px',
          md: '745px',
          lg: '1084px',
          xl: '1240px',
        },
      },
      fontFamily: {
        serif: ['Inter', 'Arial', 'ui-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
