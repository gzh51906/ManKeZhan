import React,
    {
    Component
}

from 'react';
import "./style.scss";

import {
    Input,
    Icon,
    Button
}

from 'antd';

class Reg extends Component {
    render() {
        return (<div id="reg_box"> <header> <Icon type="left"onClick= {
                (event)=> {
                    this.props.history.go(-1);
                }
            }

            />注册 </header> <main> <Input onPressEnter= {
                this.onchangeuse
            }

            placeholder="请输入手机号"
            type="search"

            prefix= {
                <span className="minput1">+86</span>
            }

            /> <Input onPressEnter= {
                this.onchangeuse
            }

            placeholder="手机验证码"
            type="search"

            suffix= {
                <span className="minput2">发送验证码</span>
            }

            /> <span className="ant-input-affix-wrapper"> <Input type="search"placeholder="设置密码"/> </span> <Button type="danger"onClick= {
                (event)=> {
                    console.log("点击了注册按钮")
                }
            }

            > 注册 </Button> </main> </div>)
    }
}

export default Reg;