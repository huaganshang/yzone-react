/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 18:58:13
 * @LastEditTime: 2019-08-15 14:32:58
 * @LastEditors: Please set LastEditors
 */
import { ACTION_GET_USER_NAME } from './index';

export function actionSetUserName(name = ''){
    return {
        type: ACTION_GET_USER_NAME,
        name: name,
    };
}