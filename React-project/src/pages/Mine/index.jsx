import React, { Component } from 'react';
import "./style.scss";
import { Icon } from "antd";
import axios from 'axios';
class Mine extends Component {
    state = {
        islogin: false,
        usern: "user"
    }
    gotologin = () => {
        this.props.history.push({
            pathname: "/login"
        })
    }
    componentDidMount() {
        let authorization = localStorage.getItem("authorization");
        if (authorization) {
            axios.get("http://localhost:9876/verify", {
                headers: {
                    Authorization: authorization
                }
            }).then((res) => {
                if (res.data.code == 1) {
                    this.setState({
                        islogin: true,
                        usern: `user_${authorization.slice(0, 5)}`
                    })
                }
            })
        }
    }
    loginout = () => {
        localStorage.removeItem("authorization");
        this.setState({
            islogin: false
        })
    }
    render() {
        return (
            <div id="mine_box">
                <div style={{ "background": "url(../../assets/mine/bfmine.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }} className="head_portrait">
                    {
                        this.state.islogin
                            ? <>
                                <p className="headpng" style={{ zIndex: "9", background: "url(../../assets/mine/4.jpg!width-100) no-repeat", backgroundSize: "cover" }} onClick={this.gotologin}>
                                    <img src="" alt="" />
                                </p>
                                <p className="tip1">{this.state.usern}</p>
                                <p className="tip2">办理会员享受更多权益~</p></>
                            : <>
                                <p className="headpng" style={{ zIndex: "9", background: "url(../../assets/mine/ic_me_orignalimg.png) no-repeat", backgroundSize: "contain" }} onClick={this.gotologin}>
                                    <img src="" alt="" />
                                </p>
                                <p className="tip1">点击头像登录呦</p>
                                <p className="tip2">登录后可尽情享受更多的功能~</p></>
                    }

                </div>
                <div className="account_bar">
                    <p>
                        <img src="../../assets/mine/ic_ne_left_account.png" alt="" />
                        <span>我的账户</span>
                        <span className="tip">充值有优惠，惊喜多多 <Icon type="right" size="xs" /></span> </p>
                </div>
                <div className="bottom_box">
                    <div className="money_ticket">
                        <div className="money">
                            <img src="../../assets/mine/ic_me_left_money.png" alt="" /><span>- -</span></div>
                        <i></i>
                        <div className="ticket">
                            <img src="../../assets/mine/ic_me_left_monthticket.png" alt="" /><span>- -</span></div>
                    </div>
                    <div className="purchase">
                        <p>
                            <img src="../../assets/mine/ic_ne_left_mybook.png" alt="" />
                            <span>我的购买</span>
                            <span className="tip"> <Icon type="right" size="xs" /></span> </p>
                    </div>
                    <div className="feedback">
                        <p>
                            <img src="../../assets/mine/ic_ne_left_feedback.png" alt="" />
                            <span>意见反馈</span>
                            <span className="tip"> <Icon type="right" size="xs" /></span> </p>
                    </div>
                    {
                        this.state.islogin ? <div className="loginout" onClick={this.loginout}>退出登录</div> : null
                    }
                </div>
            </div>)
    }
}

export default Mine;