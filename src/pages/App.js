/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 12:47:12
 * @LastEditTime: 2019-08-15 14:57:54
 * @LastEditors: Please set LastEditors
 */

import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import store from '@/store/reducers';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';

// let store = createStore(Reducers);

const App = () => (
    <Provider store={ store }>
        <HashRouter>
            {renderRoutes(routes)} 
        </HashRouter>
    </Provider>
);
export default App;