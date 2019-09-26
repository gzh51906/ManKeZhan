import React, { Component } from 'react';
import "./style.scss";
import axios from 'axios';
import { Input, Icon, Button } from 'antd';
import { Toast } from 'antd-mobile';

class Search extends Component {
    state = {
        stext: "斗破苍穹",
        slist: [],
        randlist: []
    }
    changevalue = (e) => {
        this.setState({
            stext: e.target.value
        })
    }
    searchclick = (e) => {
        axios.get("http://localhost:9876/classifi/search", { params: { keyword: this.state.stext } }).then(res => {
            this.setState({ slist: res.data.data })
        })
    }
    gotodetails = (id) => {
        this.props.history.push({
            pathname: `/detail/${id}`,
        })
    }
    componentDidMount() {
        axios.get("http://localhost:9876/classifi/rand").then(res => {
            this.setState({
                randlist: res.data.data
            })
        })
    }
    render() {
        return (
            <div id="search_box">
                <header>
                    <div className="hbox"><Icon type="left" onClick={(event) => {
                        this.props.history.go(-1);
                    }} />
                        <Input
                            placeholder="斗破苍穹"
                            onChange={this.changevalue}
                            prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        />
                        <Button onClick={this.searchclick} type="link" style={{ color: "#f00" }}>搜索</Button></div>
                </header>
                <main>
                    {
                        this.state.slist[0] ? <ul className="maintop">
                            {this.state.slist.map(item => {
                                return <li key={item.comic_id}>
                                    <div className="divforimg" onClick={this.gotodetails.bind(this, item.comic_id)}>
                                        <img src={item.cover} alt="" />
                                    </div>
                                    <div><p className="liname">{item.title}</p>
                                        <p className="litext">1/{item.chapter_num}</p></div>
                                </li>
                            })}
                        </ul> : <ul className="mainbot">{
                            this.state.randlist[0] ? <>{
                                this.state.randlist.map(item => {
                                    return <li key={item.comic_id} onClick={this.gotodetails.bind(this, item.comic_id)}>{item.title}</li>
                                })}</> : <></>

                        }</ul>
                    }
                </main>
            </div>
        )
    }
}

export default Search;