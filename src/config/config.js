/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 16:26:23
 * @LastEditTime: 2019-08-15 14:33:33
 * @LastEditors: Please set LastEditors
 */
module.exports = {
    development: {
        portalApi: 'http://h5.api.chaoke.com:6062',
        taskApi: 'http://123.103.9.204:6058',
    },
    test: {
        portalApi: 'http://h5.api.chaoke.com:6062',
        taskApi: 'http://123.103.9.204:6058',
    },
    preview: {
        portalApi: 'https://h5-api.esn.ren',
        taskApi: 'https://ezone.esn.ren',
    },
    production: {
        portalApi: 'https://h5-api.yonyoucloud.com',
        taskApi: 'https://ezone.yonyoucloud.com',
    }
}