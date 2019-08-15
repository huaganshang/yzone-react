/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 15:29:10
 * @LastEditTime: 2019-08-15 15:11:32
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { Link } from "react-router-dom";
import { bindActionCreators, Store } from 'redux';
import { connect } from 'react-redux';
import { actionSetUserName } from '@/store/actions/user';
import './detail.less';

const CGI = {
    getMemberInfoUrl: "[portalApi]/member/getMemberBaseInfo",
}

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            age: '16.9.0'
        };
        this.setUserName = this.setUserName.bind(this);
    }

    componentDidMount(){
        this.$http.get(CGI.getMemberInfoUrl, { 
            params: {
                hash: "",
                job_number: 1,
                hash_switch: "on",
            }
        }).then((res) => {
            console.log(res);
        });
    }

    /**
     * @description: 设置用户名
     * @param {type} 
     * @return: 
     */    
    setUserName(){
        this.props.setUserName('Vue');
    }

    /**
     * @description: 上传照片
     * @param {type} 
     * @return: 
     */
    uploadPhoto(){
        if(window.YYEsnBridge){
            YYEsnBridge.ready(function (){
                YYEsnBridge.do('chooseImages', {
                    sourceType: ['album', 'camera'],
                    returnThumbnail: true,
                    success: function(res){
                        document.querySelector('js-test').innerHTML = res;
                    },
                    fail: function(err){
                        alert('调用失败');
                    },
                    complete: function(res){
                        alert('调用完成后执行');
                    }
                });
            });
        }
    }
    
    render(){
        return (
            <div className="box">
                <ul className="subItem">
                    <li>我的名字是：<span className="userInfo">{this.props.userStore.name}</span></li>
                    <li>我的年龄是：<span className="userInfo">{this.state.age}</span></li>
                </ul>
                <div className="subItem">
                    <button onClick={this.setUserName}>设置用户名</button>
                    <button onClick={this.uploadPhoto}>上传照片</button>
                    <Link to="/" className="link">返回首页</Link>
                </div>
                <div className="subItem" id="js-test"></div>
            </div>
        );
    }
}

/**
 * @description: 定义函数，建立组件跟store的state的映射关系
 * @param {Object} state state
 * @param {Object} props 组件本身的props
 * @return: {Object}
 */
function mapStateToProps(state, props){
    return {
        userStore: state.user,
    }
}

/**
 * @description: 建立组件跟store.dispatch的映射关系，将action作为 props 绑定到组件上， 通过 bindActionCreators 直接将action包装成可以被调用的函数
 * @param {Function} dispatch
 * @params {Object} props
 * @return: 
 */
const mapDispatchToProps = {} = (dispatch, props) => {
    return bindActionCreators({
        setUserName: actionSetUserName,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);