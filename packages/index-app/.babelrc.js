const { resolve } = require('path');
const { IS_DEVELOPMENT } = require('./build/config');

module.exports = {
    presets: [
        ['babel-preset-react-app', {
            runtime: 'automatic'
        }],
    ],
    plugins: [
        IS_DEVELOPMENT && "react-refresh/babel",
        ["module-resolver", {
            "alias": {
                "@": resolve(__dirname,'src')
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