const merge = require('webpack-merge')
const common = require('./webpack.base')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const webpack = require('webpack')
const { port } = require('./common.js')
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        app2: ['../src/entry.js', 'webpack-hot-middleware/client?noInfo=true&reload=true']
    },
    plugins: [
        new OpenBrowserPlugin({ url: `http://localhost:${port}/#/menu` }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'px2rem-loader',
                        // options here
                        options: {
                            remUni: 75,
                            remPrecision: 8
                        }
                    },
                    {
                        loader: 'less-loader',

                    },
                ]
            },
            {
                test: /\.css$/,
                include: [/antd\/dist\/antd.css/],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'px2rem-loader',
                        // options here
                        options: {
                            remUni: 75,
                            remPrecision: 4
                        }
                    }
                ]
            },

        ]
    }
})