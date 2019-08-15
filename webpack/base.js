/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-01 10:19:02
 * @LastEditTime: 2019-08-14 16:01:34
 * @LastEditors: Please set LastEditors
 */
const os = require('os');
const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});

const APP_PATH = path.resolve(__dirname, '../');
const APP_SRC = path.join(APP_PATH, '/src');
const APP_DIST = path.join(APP_PATH, '/dist');

const createHappyPlugin = (id, loaders) => new HappyPack({
    id: id,
    loaders: loaders,
    threadPool: happyThreadPool,
});

//loader
const STYLE_RESOURCES_LOADER = {
    loader: 'style-resources-loader',
    options: {
        patterns: path.join(APP_SRC, '/assets/styles/*.less'),
    }
};
const POSTCSS_LOADER = {
    loader: 'postcss-loader',
    options: {
        config: {
            path: path.join(APP_SRC, 'postcss.config.js'),
        },
    },
};

const WEBPACK_CONFIG = {
    mode: 'none',
    entry: {
        app: [path.join(APP_SRC, '/main.js')],
    },
    output: {
        path: APP_DIST,
        filename: 'js/[name].[contenthash].js',
        chunkFilename: 'js/[name].[contenthash].js',
        publicPath: './',
    },
    resolve: {
        alias: {
            '@': APP_SRC,
        },
        extensions: ['.js', '.json', '.vue', '.css', 'jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'happypack/loader?id=happy-babel',
                include: APP_SRC,
                exclude: /^node_modules$/,
            },
            {
                test: /\.(le|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                    POSTCSS_LOADER,
                    'less-loader',
                    STYLE_RESOURCES_LOADER,
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 500,
                    name: 'img/[name].[hash].[ext]',
                },
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 500,
                    name: 'fonts/[name].[hash].[ext]',
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 500,
                    name: 'media/[name].[hash].[ext]',
                },
            },
        ]
    },
    plugins: [
        new OptimizeCssAssetsPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DefinePlugin({
            __ENV__: JSON.stringify(process.env.NODE_ENV)
        }),
        createHappyPlugin('happy-babel', [{
            loader: 'babel-loader',
            options: {
                babelrc: true,
                cacheDirectory: true,
            }
        }]),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkhash].css',
            chunkFilename: 'css/[id].[chunkhash].css',
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(APP_SRC, '/static'),
                to: path.join(APP_DIST, '/static'),
            },
        ]),
        new htmlWebpackPlugin({
            timestamp: + new Date(),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                minifyJS: true,
                minifyCSS: true,
            },
            favicon: path.join(APP_SRC, '/assets/images/ico.ico'),
            template: path.join(APP_SRC, '/template/index.html'),
        }),
    ]
}

module.exports = WEBPACK_CONFIG
