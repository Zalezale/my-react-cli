const merge = require('webpack-merge');
const common = require('./webpack.base');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
});