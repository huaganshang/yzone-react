/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-11 16:56:07
 * @LastEditTime: 2019-08-14 13:26:17
 * @LastEditors: Please set LastEditors
 */
var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var config = require('./base.js')
var ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
// var ImageminPlugin = require('imagemin-webpack-plugin').default

// config.plugins.push(
//     new ImageminPlugin({
//         test: /\.(jpe?g|png|gif|svg)$/i,
//         optipng: {
//             optimizationLevel: 6,
//         },
//         pngquant: {
//             quality: '95-100'
//         }
//     }),
// )

module.exports = merge(config, {
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new ParallelUglifyPlugin({
                cacheDir: '.cache/',
                warnings: false,
                uglifyJS: {
                    output: {
                        comments: false,
                        beautify: false
                    },
                    compress: {
                        drop_console: true,
                        collapse_vars: true,
                        reduce_vars: true
                    }
                }
            }),
        ]
    },
})