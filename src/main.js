/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 14:28:35
 * @LastEditTime: 2019-08-15 13:44:32
 * @LastEditors: Please set LastEditors
 */
import React, { Component} from 'react';
import ReactDom from 'react-dom';
import axios from './config/http';
import URLSearchParams from "url-search-params"

import './assets/styles/common.less';
import App from './pages/App'


if(!window.URLSearchParams){
	window.URLSearchParams = URLSearchParams
}
URLSearchParams.prototype.add = function(para){
    if(para instanceof Object){
        for(let k in para){
            this.delete(k)
            this.append(k, para[k])
        }
    }
}

Component.prototype.$http = axios;
ReactDom.render( <App/>, document.querySelector('#app'));
