const path = require('path');
const webpackCommonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');
const {PORT} = require('./config');

module.exports = merge(webpackCommonConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, '../public')
        },
        compress: true,
        port: PORT,
        hot: true,
        open: true,
        client: {
            overlay: false
        }
    }
});
