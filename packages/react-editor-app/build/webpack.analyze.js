const {merge} = require('webpack-merge');
const webpackConfigProd = require('./webpack.prod');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/** @type{import('webpack').Configuration}*/
module.exports = merge(webpackConfigProd, {
    devtool: 'eval',
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});
