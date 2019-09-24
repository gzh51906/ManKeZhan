import React,
{
    Component
}

    from 'react';
import "./style.scss";
import axios from "axios"
import { Toast } from 'antd-mobile';
import { Input, Icon, Button } from "antd";
class Reg extends Component {
    state = {
        phone: false,
        yzm: false,
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
    onchangeyzm = (e) => {
        let yzm = e.target.value;
        if (!(/^hc2w$/.test(yzm))) {
            Toast.info('验证码输入不正确！');
            return false;
        } else {
            this.setState({
                yzm: true
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
    checkreg = (event) => {
        let { phone, password, yzm } = this.state;
        if (phone && password && yzm) {
            axios.get("http://localhost:9876/user/check", {
                params: {
                    phone: phone
                }
            }).then((res) => {
                let { data: { code } } = res
                if (code === 1) {
                    axios.post("http://localhost:9876/user/reg", { phone: phone, password: password }).then(() => {
                        this.props.history.replace("/login");
                    })
                } else {
                    Toast.info('手机号已被注册。');

                }
            })

        } else {
            Toast.info('请完善信息！');
        }
    }
    render() {
        return (<div id="reg_box">
            <header>
                <Icon type="left" onClick={(event) => { this.props.history.go(-1); }} />注册 </header>
            <main>
                <Input onBlur={this.onchangeuse} placeholder="请输入手机号" type="search" prefix={<span className="minput1">+86</span>} />

                <Input onBlur={this.onchangeyzm} placeholder="手机验证码" type="search" suffix={<span className="minput2" onClick={() => { Toast.info('验证码hc2w！'); }}>发送验证码</span>} />
                <span className="ant-input-affix-wrapper">
                    <Input type="search" placeholder="设置密码" onBlur={this.onchangepsw} />
                </span>
                <Button type="danger" onClick={this.checkreg}> 注册 </Button>
                <p>注册即视为同意<a href="">漫客栈App用户协议</a></p>
            </main>
        </div>)
    }
}

export default Reg;