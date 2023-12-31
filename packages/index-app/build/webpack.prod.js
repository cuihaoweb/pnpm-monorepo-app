const {merge} = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpackConfigCommon = require('./webpack.common');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

/** @type{import('webpack').Configuration}*/
module.exports = merge(webpackConfigCommon, {
    mode: 'production',
    devtool: 'nosources-source-map',
    performance: {
        hints: 'warning'
    },
    optimization: {
        runtimeChunk: true,
        minimizer: [
            new TerserPlugin({
                parallel: true
            }),
            new CssMinimizerPlugin({
                parallel: true
            })
        ],
        splitChunks: {
            chunks: 'all',
            minChunks: 1, // 分割前，被共享了多少次
            cacheGroups: {
                initialVender: {
                    priority: 20,
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    name: 'initialVender',
                    filename: 'js/[name].[hash:8].js'
                },
                vender: {
                    priority: 10,
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'vender',
                    filename: 'js/[name].[hash:8].js'
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[fullhash:8].css'
        }),
        new CompressionPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'),
                    to: path.resolve(__dirname, '../dist')
                }
            ]
        })
    ]
});
