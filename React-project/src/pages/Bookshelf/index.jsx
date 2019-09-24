import React, { Component } from 'react';
import "./style.scss";
import { Icon, Checkbox, Button } from "antd";
import axios from 'axios';

class Bookshelf extends Component {
    state = {
        islogin: false,
        isarrange: true
    }
    changearrange = () => {
        this.setState({
            isarrange: !this.state.isarrange
        })
    }
    check = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }
    allcheck = (e) => {
        console.log(`allchecked = ${e.target.checked}`);
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
    render() {

        return (
            <div id="bookshelf_box">
                <header>
                    <div className="left">
                        <p>收藏</p>
                        <span></span>
                    </div>
                    {
                        this.state.islogin ?
                            <div className="right" onClick={this.changearrange}>
                                <Icon type="switcher" />{this.state.isarrange ? <span>整理</span> : <span>取消</span>}</div>
                            : <div className="right"><Icon type="switcher" /><span>整理</span></div>
                    }

                </header>
                <main>
                    {
                        this.state.islogin ? null : <div className="mainbox">
                            <div style={{
                                "background": "url(../../assets/mine/pic_login_null.png)", backgroundSize: "contain", backgroundRepeat: "no-repeat"
                            }}></div>
                            <p>主人请先登录</p>
                            <Button onClick={() => {
                                this.props.history.push("/login")
                            }}>登录</Button>
                        </div>
                    }
                    {
                        this.state.islogin ? <>
                            <ul className="maintop">
                                <li>
                                    <a href="">
                                        <img src="" alt="" />
                                    </a>
                                    <div><p className="liname">九阳神王</p>
                                        <p className="litext">1/136</p></div>
                                    {
                                        this.state.isarrange ? null : <div className="hidebtn">
                                            <Checkbox className="hhidebutton" onChange={this.check}></Checkbox>
                                        </div>
                                    }

                                </li>
                            </ul>
                            {
                                this.state.isarrange ? null : <div className="mainbot">
                                    <span className="botspan botspan1">
                                        <Checkbox onChange={this.allcheck}>全选</Checkbox>
                                    </span>
                                    <span className="botspan"><Icon type="delete" />删除</span>
                                </div>
                            }
                        </> : null}


                </main>
            </div>
        )
    }
}

export default Bookshelf;