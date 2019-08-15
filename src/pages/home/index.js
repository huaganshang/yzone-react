/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-07 14:51:19
 * @LastEditTime: 2019-08-15 13:19:34
 * @LastEditors: Please set LastEditors
 */

import React, { Component, cloneElement } from 'react';
import { List } from 'antd-mobile';
import { Link } from "react-router-dom";

import './home.less';

const Item = List.Item;
class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //
        };
    }

    render() {
        return (
            <div id="page-index">
                <div>
                    <List renderHeader={() => '日期'} className="my-list">
                        <Item extra={'...'}>2019-05-23 13:34:45</Item>
                    </List>
                    <List renderHeader={() => '描述信息'} className="my-list">
                        <Item extra={'...'}>React是一个用于构建用户界面的javascript库</Item>
                    </List>
                </div>
                <div className="goToDetail">
                    <Link to="/detail">查看详情</Link>
                </div>
            </div>
        );
    }
}

export default Index;