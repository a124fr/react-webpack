'use strict'

const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    host: true,
    historyApiFallback: true,
    stats: {colors: true}
}).listen(3000, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Listening on http://localhost:3000')
})