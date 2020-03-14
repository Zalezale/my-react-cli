/**
 * 深度比较+合并属性
 */
const merge = require('webpack-merge')
const common = require('./webpack.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
let plugins = ~process.argv.indexOf('--analyzer') ? [new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: 'css/[name].css',
    chunkFilename: 'css/[name].css'
}),
new BundleAnalyzerPlugin()] : [new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: 'css/[name].css',
    chunkFilename: 'css/[name].css'
})]
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        app1: '../src/entry.js'
    },
    plugins,
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
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
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it use publicPath in webpackOptions.output
                            publicPath: '../'
                        }
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
                    }
                ]
            },


        ]
    }
})
