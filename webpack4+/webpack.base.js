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
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    optimization: {
        /**
         * 代码抽离的前提条件
         * 1、同步引用处不少于2
         * 2、文件大小本身大于30kb
         * 3、不影响页面初始化时的请求
         */
        splitChunks: {
            /**
             * 由于js加载机制，只有当vendor.js与app.js都加载完成页面才能呈现，所以将代码抽离到入口文件和vendor没差别
             */
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
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
                            ], "@babel/preset-react"//用于解析jsx

                        ],
                        "plugins": [
                            [
                                "@babel/plugin-transform-runtime",//设定局部变量，防止多模块不兼容的问题
                                { "corejs": 2 }//设定版本
                            ],
                            '@babel/plugin-proposal-class-properties'//解决箭头函数在class中无效的问题
                        ]
                    }
                },

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 20000,
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    },
                ]
            }
        ]
    }
};