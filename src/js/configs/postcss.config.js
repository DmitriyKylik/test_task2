// npm install postcss-loader autoprefixer css-mqpacker cssnano --save-dev
const mqpacker = require('css-mqpacker');
const sortCSSmq = require('sort-css-media-queries');

module.exports = {
  plugins: [
    require('autoprefixer'),
    mqpacker({
        sort: sortCSSmq
    }),
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            removeAll: true,
          }
        }
      ]
    })
  ]
}
