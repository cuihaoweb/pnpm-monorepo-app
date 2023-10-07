const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const {DLL_PATH, MODE, IS_PRODUCT} = require('./config');

/** @type{import('webpack').Configuration}*/
module.exports = {
    mode: MODE,
    entry: {
        /**
         * 支持按需加载的资源不需要dll，否则包的体积反而会变大
         */
        react: ['react', 'react-dom', 'react-router-dom'],
        vender: ['web-vitals', 'antd', 'lodash-es']
    },
    output: {
        path: DLL_PATH,
        filename: '[name].[hash].dll.js',
        library: '[name]_library'
    },
    optimization: {
        minimize: true,
        minimizer: [
            IS_PRODUCT && new TerserPlugin()
        ].filter(Boolean)
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_library',
            path: path.resolve(DLL_PATH, './[name].manifest.json')
        })
    ]
};
