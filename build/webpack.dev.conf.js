const webpack = require('webpack');
const merge = require('webpack-merge');
// const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
    // DEV config
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: baseWebpackConfig.externals.paths.dist,
        port: 8081,
        overlay: {
            warnings: true,
            errors: true
        }
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
        // new BundleAnalyzerPlugin()
    ]
});

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig);
});
