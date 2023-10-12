// import path, {resolve} from 'path';
// import {default as esbuildPlugin} from 'rollup-plugin-esbuild';
// import alias from '@rollup/plugin-alias';
// import babel from '@rollup/plugin-babel';
// import commonjs from '@rollup/plugin-commonjs';
// import json from '@rollup/plugin-json';
// import resolver from '@rollup/plugin-node-resolve';
const path = require('path');
const {resolve} = require('path');
const esbuildPlugin = require('rollup-plugin-esbuild');
const alias = require('@rollup/plugin-alias');
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const resolver = require('@rollup/plugin-node-resolve');
const {default: esbuild} = esbuildPlugin;

/** @type{import('rollup').InputOptions} */
module.exports = {
    input: './src/index.ts',
    output: {
        file: path.resolve(__dirname, '../dist/index.js'),
        format: 'es'
    },
    external: ['qiankun'],
    plugins: [
        alias({
            entries: [
                {find: '@', replacement: resolve(__dirname, '../src')}
            ]
        }),
        json(),
        commonjs(),
        resolver({
            extensions: ['.mjs', 'cjs', '.js', '.ts', '.json', '.node']
        }),
        esbuild(),
        babel({
            exclude: ['node_modules'],
            babelHelpers: 'bundled'
        })
    ]
};
// export default {
//     input: './src/index.ts',
//     output: {
//         file: path.resolve(__dirname, '../dist/index.js'),
//         format: 'cjs'
//     },
//     external: ['koa-body'],
//     plugins: [
//         alias({
//             entries: [
//                 {find: '@', replacement: resolve(__dirname, '../src')}
//             ]
//         }),
//         json(),
//         commonjs({
//         }),
//         resolver({
//             extensions: ['.mjs', 'cjs', '.js', '.ts', '.json', '.node']
//         }),
//         esbuild(),
//         babel({
//             exclude: ['node_modules'],
//             babelHelpers: 'bundled'
//         })
//     ]
// };
