import React, { Component } from 'react';
import "./style.scss";
import { Input, Tooltip, Icon, Button } from 'antd';
class Login extends Component {
    onchangeuse = (e) => {
        console.log(e.target.value);
    }
    onchangepsw = (e) => {
        console.log(e.target.value);

    }
    render() {
        return (
            <div id="login_box">
                <header style={{ "background": "url(../../assets/mine/login_bg.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
                    <div className="headertop" >
                        <Icon type="left" onClick={(event) => {
                            this.props.history.go(-1);
                        }} />
                        <span onClick={(event) => {
                            console.log("点击了忘记密码")
                        }}>忘记密码？</span>
                    </div>
                </header>
                <main>
                    <Input
                        onPressEnter={this.onchangeuse}
                        placeholder="用户名/手机号"
                        type="search"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    <Input
                        onPressEnter={this.onchangepsw}
                        placeholder="登录密码"
                        prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                    <Button type="danger" onClick={(event) => {
                        console.log("点击了登录按钮")
                    }}>
                        登录
                    </Button>
                </main>
                <div className="div2reg">
                    <span onClick={(event) => {
                        this.props.history.push("/reg");
                    }}><Icon type="usergroup-add" />闪电注册</span>
                </div>
                <footer>
                    <p>使用以下方式登录</p>
                    <Button type="danger" ghost onClick={(event) => {
                        console.log("点击了qq按钮")
                    }} shape="circle" icon="qq" />
                    <Button type="danger" ghost onClick={(event) => {
                        console.log("点击了wechat按钮")
                    }} shape="circle" icon="wechat" />
                </footer>

            </div>
        )
    }
}

export default Login;