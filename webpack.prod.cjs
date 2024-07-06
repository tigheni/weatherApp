const { merge } = require('webpack-merge');
const common = require('./webpack.common.cjs');
const path = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[contenthash].js',
    },
});
