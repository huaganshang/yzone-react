/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 15:54:58
 * @LastEditTime: 2019-08-14 18:18:23
 * @LastEditors: Please set LastEditors
 */
module.exports = {
    plugins: [
        require('autoprefixer'),
        require('postcss-px2rem-exclude')({
            remUnit: 100,
            exclude: /node_modules/i,
        }),
    ]
};