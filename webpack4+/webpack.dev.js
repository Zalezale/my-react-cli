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
        new OpenBrowserPlugin({ url: `http://localhost:${port}` }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        'presets': [
                            [
                                '@babel/preset-env',
                                {
                                    'targets': {
                                        'edge': '17',
                                        'firefox': '60',
                                        'chrome': '67',
                                        'safari': '11.1'
                                    },
                                    'useBuiltIns': 'usage',//只装载需要的api
                                    'corejs': 2 //明确版本

                                },
                            ], '@babel/preset-react'//用于解析jsx

                        ],
                        'plugins': [
                            [
                                '@babel/plugin-transform-runtime',//设定局部变量，防止多模块不兼容的问题
                                { 'corejs': 2 }//设定版本
                            ],
                            '@babel/plugin-proposal-class-properties'//解决箭头函数在class中无效的问题
                        ]
                    }
                },

            },
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
                ]
            },

        ]
    }
})