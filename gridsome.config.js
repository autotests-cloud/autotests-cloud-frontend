// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const purgeConfig = require('./purgecss.config');

const postcssPlugins = [
  tailwind(),
];

if (process.env.NODE_ENV === 'production') {
  postcssPlugins.push(purgecss(purgeConfig));
}

module.exports = {
  siteName: 'Autotests Cloud',
  siteDescription: 'Generate your tests with ease',
  plugins: [
    {
      use: 'gridsome-plugin-seo',
    },
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
};
