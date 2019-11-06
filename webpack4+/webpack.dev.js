const merge = require('webpack-merge');
const common = require('./webpack4+/webpack.base.js/index.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
});