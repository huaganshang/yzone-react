/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 18:53:48
 * @LastEditTime: 2019-08-15 14:51:24
 * @LastEditors: Please set LastEditors
 */
import { ACTION_GET_USER_NAME } from '../actions';

const USER_INFO = {
    name: 'React',
    sex: '男',
};

export default (state = USER_INFO, action) => {
    switch(action.type) {
        case ACTION_GET_USER_NAME:
            return { ...state, name: action.name };
        default:
            return state;
    }
}