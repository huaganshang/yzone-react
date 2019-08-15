<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 14:52:17
 * @LastEditTime: 2019-08-15 16:14:09
 * @LastEditors: Please set LastEditors
 -->

### 技术栈说明
* 主要使用 webpack + react + react-router-dom + redux + antd-mobile 进行快速开发的一个DEMO
* 对axios进行了底层request、response拦截配置
* 引入调用友空间原生能力SDK
* 支持开发环境代码热更新

### 开发环境
1. npm install
2. npm run dev
3. 浏览器访问：http://localhost:8080

### 测试环境打包
* npm run test-build

### 预发布环境打包
* npm run prev-build

### 生产环境打包
* npm run prod-build

### 目录说明
```
├── package.json
├── postcss.config.js
├── readMe.md
├── src
│   ├── assets                              静态资源目录(参与业务，参与打包)
│   │   ├── font
│   │   ├── images
│   │   │   └── ico.ico
│   │   └── styles
│   │       ├── common.less                 公共样式
│   │       └── global.less                 全局样式变量
│   ├── components                          组件库目录
│   │   └── common                          公共组件
│   │   └── business                        业务组件
│   ├── config
│   │   ├── config.js
│   │   └── http.js
│   ├── main.js                             主入口文件
│   ├── pages                               业务页面
│   │   ├── App.js                          主组件
│   │   ├── detail
│   │   │   ├── detail.less
│   │   │   └── index.js
│   │   └── home
│   │       ├── home.less
│   │       └── index.js
│   ├── routes
│   │   └── index.js                        路由文件
│   ├── static                              静态资源（不参与打包）
│   │   ├── SDK                             第三方SDK
│   │   │   └── esn.min.js                  友空间SDK
│   │   └── styles                          公共样式
│   │       └── normalize.css               重置样式
│   ├── store                               状态管理
│   │   ├── actions
│   │   │   ├── index.js
│   │   │   └── user.js
│   │   └── reducers
│   │       ├── index.js
│   │       └── user.js
│   ├── template                            模板文件
│   │   └── index.html
│   └── utils                               工具目录
└── webpack                                 webpack配置目录
    ├── base.js                             基础配置
    ├── dev.js                              开发环境配置
    ├── preview.js                          预发布环境配置
    ├── production.js                       生产环境配置
    └── test.js                             测试环境配置
```
### 发送异步请求
* axios 说明文档: https://github.com/axios/axios

### antd-mobile UI框架
* 官网文档: https://mobile.ant.design/index-cn

### 接入友空间原生能力
* 项目中已经引入SDK，无需引入；
* 接口文档: https://open.diwork.com/#/docs/md2docs/open-api-doc?id=xietong&section=89