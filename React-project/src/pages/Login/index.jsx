import React, { Component } from 'react';
import "./style.scss";
import axios from 'axios';
import { Input, Icon, Button } from 'antd';
import { Toast } from 'antd-mobile';

class Login extends Component {
    state = {
        phone: false,
        password: false
    }
    onchangeuse = (e) => {
        let phone = e.target.value;
        if (!(/^1[3456789]\d{9}$/.test(phone))) {
            Toast.info('手机号码格式不正确！');
            return false;
        } else {
            this.setState({
                phone: phone
            })
        }
    }
    onchangepsw = (e) => {
        let password = e.target.value;
        if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z\d]{6,16}$/.test(password))) {
            Toast.info('请您输入6~16位密码，必须包含字母及数字。');
            return false;
        } else {
            this.setState({
                password: password
            })
        }

    }
    loginbtn = (event) => {
        let { phone, password } = this.state;
        if (phone && password) {
            axios.post("http://localhost:9876/user/login", {
                phone: phone,
                password: password
            }).then(res => {
                let { data: { code, data } } = res;
                if (code == 1) {
                    let authorization = data.authorization;
                    localStorage.setItem("authorization", authorization)
                    this.props.history.go(-1);
                } else {
                    Toast.info('用户名或密码错误！');
                }
            })
        } else {
            Toast.info('请完善登录信息。');
        }
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
                        onBlur={this.onchangeuse}
                        placeholder="用户名/手机号"
                        type="search"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                    <Input
                        onBlur={this.onchangepsw}
                        placeholder="登录密码"
                        prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />} />
                    <Button type="danger" onClick={this.loginbtn}>
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