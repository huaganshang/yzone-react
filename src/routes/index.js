/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 16:51:44
 * @LastEditTime: 2019-08-14 17:30:38
 * @LastEditors: Please set LastEditors
 */
import Home from '../pages/home';
import Detail from '../pages/detail'

const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        name:"home",
    },
    {
       path: '/detail',
        component: Detail,
        name: 'detail',
    },
];

export default  routes;