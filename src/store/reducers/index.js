/*
 * @Description: In User Settings Edit
 

 * @Author: your name
 * @LastEditTime: 2019-08-15 14:54:45
 * @LastEditors: Please set LastEditors14 18:40:43
 * @LastEditors: Please set LastEditors
 */
import { combineReducers, createStore } from 'redux';

import user from './user';

const rootReducer = combineReducers({
    user,
});

const store = createStore(rootReducer)

export default store;