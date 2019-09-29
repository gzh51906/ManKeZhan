import React, { Component } from 'react';
import './index.scss'
import { PageHeader } from 'antd';
import { Button } from 'antd';
import { Pagination } from 'antd';
import axios from 'axios'


class List extends Component {
    state = {
        title: "",
        data: [],
        list: [],
        page: '0',
        ye: ''
    }
    componentDidMount() {
        //获取全部
        axios.get("http://localhost:9876/list").then(res => {


            this.setState({
                data: res.data.data.spe
            })
        });
        //每页
        axios.get("http://localhost:9876/list/page", {
            params: {
                page: this.state.page
            }
        }).then(res => {
            this.setState({
                list: res.data.data.li
            })
        })

    }
    render() {
        this.ye = Math.ceil(this.state.data.length / 5);
        console.log(this.state.page);




        return (
            <div id="List">
                <div className="list">
                    <div className="title">
                        <PageHeader title="漫画列表" subTitle="" />
                    </div>

                    <div className="body">
                        <table className="good">
                            <tr>
                                <td className="id">ID</td>
                                <td className="tit">名称</td>
                                <td className="img">封面</td>
                                <td className="num">更新至</td>
                                <td className="au">出版社</td>
                                <td className="op">操作</td>
                            </tr>

                            {this.state.list.map(item => {
                                return (
                                    <tr>
                                        <td className="id">{item.comic_id}</td>
                                        <td className="tit">{item.title}</td>
                                        <td className="img"><img src={item.cover} alt="" /></td>
                                        <td className="num">{item.chapter_num}话</td>
                                        <td className="au">{item.author_title}</td>
                                        <td className="op"><Button type="primary">修改</Button><Button type="danger">删除</Button></td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                    <div className="foot">
                        <Pagination
                            defaultCurrent={1}
                            defaultPageSize={5}
                            total={this.state.data.length}
                            onChange={(page) => {
                                console.log(page);
                                this.state.page = page * 5 - 5;
                                console.log(this.state.page);
                                axios.get("http://localhost:9876/list/page", {
                                    params: {
                                        page: this.state.page
                                    }
                                }).then(res => {
                                    this.setState({
                                        list: res.data.data.li
                                    })
                                })
                            }}
                            className="ye" />
                    </div>
                </div>
            </div>
        );

    }
}
export default List;