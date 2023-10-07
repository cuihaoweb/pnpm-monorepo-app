const { resolve } = require('path');
const { IS_DEVELOPMENT } = require('./build/config');

module.exports = {
    presets: [
        ['babel-preset-react-app', {
            runtime: 'automatic'
        }],
    ],
    plugins: [
        IS_DEVELOPMENT && "react-hot-loader/babel",
        ["module-resolver", {
            "alias": {
                "@": resolve(__dirname,'src')
            }
        }],
        ["react-css-modules", {
            context: resolve(__dirname, './src'),
            exclude: 'node_modules',
            generateScopedName: '[path]__[name]__[local]',
            webpackHotModuleReloading: true,
            filetypes: {
                '.less': {
                    "syntax": "postcss-less"
                },
            }
        }],
        ['import', {
            libraryName: 'antd',
            style: false,
            libraryDirectory: 'es'
        }, 'antd'],
        ['import', {
            libraryName: 'react-components',
            style: name => `${name}/index.css`,
            libraryDirectory: 'dist'
        }, 'react-components']
    ].filter(Boolean)
};