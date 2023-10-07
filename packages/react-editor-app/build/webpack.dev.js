const {merge} = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpackConfigCommon = require('./webpack.common');

/** @type{import('webpack').Configuration}*/
module.exports = merge(webpackConfigCommon, {
    cache: {
        type: 'filesystem'
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        runtimeChunk: true
    },
    devServer: {
        port: 8083,
        open: true,
        hot: true,
        client: {
            overlay: false
        },
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false,
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            }
        }
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
});
