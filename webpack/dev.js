/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-11 16:56:07
 * @LastEditTime: 2019-08-13 19:56:37
 * @LastEditors: Please set LastEditors
 */
const webpack = require('webpack')
const config = require('./base.js')
const WebpackDevServer = require('webpack-dev-server')

const host = 'http://localhost';
const port = 8080;

config.entry.app.unshift('webpack-dev-server/client?' + host + ':' + port)

const compiler = webpack(config)
compiler.devtool = 'cheap-eval-source-map';

const server = new WebpackDevServer(compiler, {
	quiet: false,
	stats: {
		colors: true
	},
	disableHostCheck: true,
	compress: true,
	publicPath: host + ':' + port,
	contentBase: '../dist/', //默认情况下，webpack-dev-server会从项目的根目录提供文件，可以通过此选项设置文件的目录名
	historyApiFallback: true //当设置为true时，访问所有服务器上不存在的文件，都会被重定向到/，也就是index.html文件
}).listen(port);