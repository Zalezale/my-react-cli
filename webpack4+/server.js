const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const express = require('express')
const app = express()
const config = require('./webpack.dev.js')
const compiler = webpack(config)
const { port } = require('./common.js')
// 告诉 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置
app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: config.output.publicPath
}))
app.use(require('webpack-hot-middleware')(compiler))
// 将文件 serve 到 port 3000。
app.listen(port, function () {
    console.log('Example app listening on port 3000!\n')
})