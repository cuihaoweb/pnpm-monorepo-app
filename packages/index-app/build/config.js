const path = require('path');

/* ========================= 环境 ========================= */
const IS_PRODUCT = process.env.NODE_ENV === 'production';
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
const MODE = IS_PRODUCT
    ? 'production'
    : IS_DEVELOPMENT ? 'development' : '';

/* ========================= 路径 ========================= */
const SRC_PATH = path.resolve(__dirname, '../src');
const ENTRY = path.resolve(SRC_PATH, './main.tsx');
const OUTPUT = path.resolve(__dirname, '../dist');
const DLL_PATH = path.resolve(__dirname, '../dll');
const PUBLIC_PATH = IS_PRODUCT ? './' : '/';

/* ========================= 编译 ========================= */
const DEVTOOL = IS_DEVELOPMENT ? 'source-map' : 'hidden-source-map';

module.exports = {
    IS_PRODUCT,
    IS_DEVELOPMENT,
    MODE,
    SRC_PATH,
    ENTRY,
    OUTPUT,
    DLL_PATH,
    PUBLIC_PATH,
    DEVTOOL
};
