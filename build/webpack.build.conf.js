const merge = require('webpack-merge');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const baseWebpackConfig = require('./webpack.base.conf');

const buildWebpackConfig = merge(baseWebpackConfig, {
    // BUILD config
    mode: 'production',
    plugins: [
        new ImageminPlugin({
            test: /img\/.*\.(png|gif|jpe?g|svg)$/,
            optipng: {
                optimizationLevel: 3
            },
            gifsicle: {
                interlaced: true
            },
            jpegtran: {
                progressive: true
            }
        })
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(buildWebpackConfig);
});
