import React, { Component } from 'react';
import "./style.scss";
import { Icon, Checkbox, Button } from "antd";
import axios from 'axios';

class Bookshelf extends Component {
    state = {
        islogin: false,
        isarrange: true,
        bookshelflist: [],
        checkAll: false
    }
    changearrange = () => {
        this.setState({
            isarrange: !this.state.isarrange
        })
    }
    check = (id, e) => {
        let arrt = this.state.bookshelflist.map(item => {
            if (item.comic_id == id) {
                item.ischeck = e.target.checked
            }
            return item
        })
        this.setState({
            bookshelflist: arrt
        })
        let aaa = this.state.bookshelflist.every(item => {
            return item.ischeck
        })
        this.setState({
            checkAll: aaa
        })
    }
    allcheck = (e) => {
        this.setState({
            checkAll: e.target.checked,
        })
        this.state.bookshelflist.map(item => {
            item.ischeck = e.target.checked
        })

    }
    clearlistitem = () => {
        this.state.bookshelflist.forEach(item => {
            if (item.ischeck == true) {
                axios.delete("http://localhost:9876/bookshelf", {
                    data: {
                        phone: localStorage.getItem("phone"),
                        comic_id: item.comic_id
                    }
                })
            }
        })
        let delarrt = this.state.bookshelflist.filter(item => {
            return item.ischeck == false
        })
        this.setState({
            bookshelflist: delarrt
        })
    }
    gotodetails = (id) => {
        this.props.history.push({
            pathname: `/detail/${id}`,
            // author: localStorage.getItem("phone")
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
                console.log(res);
                if (res.data.code == 1) {
                    this.setState({
                        islogin: true,
                        usern: `user_${authorization.slice(0, 5)}`
                    });
                    axios.get(`http://localhost:9876/bookshelf/${localStorage.getItem("phone")}`).then(data => {
                        let suju = data.data.data.map(item => {
                            item.ischeck = false
                            return item
                        })
                        this.setState({
                            bookshelflist: suju
                        })
                    });
                } else {
                    localStorage.removeItem("phone")
                }
            })
        } else {
            localStorage.removeItem("phone")
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
                                {
                                    this.state.bookshelflist.map(item => {
                                        return <li key={item.comic_id}>
                                            <div className="divforimg" onClick={this.gotodetails.bind(this, item.comic_id)}>
                                                <img src={item.cover} alt="" />
                                            </div>
                                            <div><p className="liname">{item.title}</p>
                                                <p className="litext">1/{item.chapter_num}</p></div>
                                            {
                                                this.state.isarrange ? null : <div className="hidebtn">
                                                    <Checkbox className="hhidebutton" checked={item.ischeck} onChange={this.check.bind(this, item.comic_id)}></Checkbox>
                                                </div>
                                            }
                                        </li>
                                    })
                                }
                            </ul>
                            {
                                this.state.isarrange ? null : <div className="mainbot">
                                    <span className="botspan botspan1">
                                        <Checkbox onChange={this.allcheck} checked={this.state.checkAll} >全选</Checkbox>
                                    </span>
                                    <span onClick={this.clearlistitem} className="botspan"><Icon type="delete" />删除</span>
                                </div>
                            }
                        </> : null}


                </main>
            </div>
        )
    }
}

export default Bookshelf;