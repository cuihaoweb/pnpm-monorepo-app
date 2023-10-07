const path = require('path');
const {globSync} = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const {MODE, ENTRY, OUTPUT, PUBLIC_PATH, DEVTOOL, IS_DEVELOPMENT, DLL_PATH, SRC_PATH, IS_PRODUCT} = require('./config.js');
const packageName = require('../package.json').name;

/** @type{import('webpack').Configuration}*/
module.exports = {
    mode: MODE,
    entry: [IS_DEVELOPMENT && 'react-hot-loader/patch', ENTRY].filter(Boolean),
    output: {
        path: OUTPUT,
        filename: '[name]-[hash].bundle.js',
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        chunkLoadingGlobal: `webpackJsonp_${packageName}`,
        publicPath: PUBLIC_PATH
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', 'css', 'less'],
        alias: {
            '@': SRC_PATH
        },
        modules: ['node_modules']
    },
    devtool: DEVTOOL,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: SRC_PATH,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader')
                    },
                    {
                        loader: require.resolve('esbuild-loader'),
                        options: {
                            loader: 'jsx',
                            target: 'es6'
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                include: SRC_PATH,
                exclude: /node_modules/,
                use: [
                    {
                        loader: require.resolve('babel-loader')
                    },
                    {
                        loader: require.resolve('esbuild-loader'),
                        options: {
                            loader: 'tsx',
                            target: 'es6'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    IS_PRODUCT ? MiniCssExtractPlugin.loader : require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            modules: {
                                mode: 'local',
                                auto: /\.module\.\w+$/i,
                                localIdentName: '[path]__[name]__[local]',
                                localIdentContext: SRC_PATH
                            }
                        }
                    },
                    require.resolve('postcss-loader')
                ]
            },
            {
                test: /\.less$/,
                use: [
                    IS_PRODUCT ? MiniCssExtractPlugin.loader : require.resolve('style-loader'),
                    {
                        loader: require.resolve('css-loader'),
                        options: {
                            modules: {
                                mode: 'local',
                                auto: /\.module\.\w+$/i,
                                localIdentName: '[path]__[name]__[local]',
                                localIdentContext: SRC_PATH
                            }
                        }
                    },
                    require.resolve('postcss-loader'),
                    require.resolve('less-loader')
                ]
            }
        ]
    },
    plugins: [
        // new CaseSensitivePathsPlugin(),
        // new DuplicatePackageCheckerPlugin(),
        // new webpack.DllReferencePlugin({
        //     manifest: require('../dll/vender.manifest.json')
        // }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        })
        // new AddAssetHtmlPlugin(
        //     globSync(['/*.*.dll.js'], {root: DLL_PATH})
        //         .map(filepath => ({filepath}))
        // ),
        // new WebpackManifestPlugin()
    ].filter(Boolean)
};
