const { merge } = require('webpack-merge');
const common = require('./webpack.common.cjs');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        compress: true,
        port: 5050,
        open: true,
    },
});
