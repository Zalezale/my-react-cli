const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: {
        app: '../src/entry.js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './template.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env",
                                {
                                    "targets": {
                                        "edge": "17",
                                        "firefox": "60",
                                        "chrome": "67",
                                        "safari": "11.1"
                                    },
                                    "useBuiltIns": "usage",//只装载需要的api
                                    "corejs": 2 //明确版本

                                },
                            ], "@babel/preset-react" //用于解析jsx

                        ],
                        "plugins": [
                            [
                                "@babel/plugin-transform-runtime",//设定局部变量，防止多模块不兼容的问题
                                { "corejs": 2 }//设定版本
                            ]
                        ]
                    }
                },

            }
        ]
    }
};