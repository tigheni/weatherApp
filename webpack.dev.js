const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'), // Serve from the 'src' directory
        },
        compress: true,
        port: 5050,
        open: true, // Automatically open the browser
    },
});
