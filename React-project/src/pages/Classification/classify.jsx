import React, { Component } from "react";
import axios from "axios";

import { NavBar, Icon } from "antd-mobile";

import "./classify.scss";

class Classify extends Component {
  state = {
    title: "",
    num: 2,
    data: [],
    list: []
  };
  componentDidMount() {
    let idx = this.props.match.params.id;
    axios.get(`http://localhost:9876/classifi/classify/${idx}`).then(res => {
      let list = res.data.data.slice(0, 15);
      this.setState({
        data: res.data.data,
        list: list
      });
    });
    axios.get(`http://localhost:9876/classifi/${idx}`).then(res => {
      let title = res.data.data[0].classify;
      this.setState({
        title:title
      });
    });
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = e => {
    let clientHeight = document.documentElement.clientHeight; //可视区域高度
    let scrollTop = parseInt(document.documentElement.scrollTop); //滚动条滚动高度
    let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
    if (clientHeight + scrollTop == scrollHeight - 1 || clientHeight + scrollTop == scrollHeight) {
      let num = this.state.num;
      let list = this.state.data.slice(0, num * 15);
      this.setState({
        num: num + 1,
        list: list
      });
    }
  };
  goto = (id,author) =>{
    this.props.history.push({
      pathname:`/detail/${id}`,
      author:author
    })
  }
  render() {
    return (
      <div id="classify">
        <NavBar
          mode="light"
          icon={<Icon type="left" size="md" color="#ff7830" />}
          rightContent={<img className="img" src="../../assets/images/search.png" alt="" />}
          onLeftClick={() => {
            this.props.history.goBack();
          }}
          style={{
            borderBottom: "1px solid #efefef",
            position: "fixed",
            width: "100%"
          }}
        >
          {this.state.title}
        </NavBar>
        <div className="list">
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.comic_id} onClick={this.goto.bind(this,item.comic_id,item.author_title)}>
                  <img src={item.cover} />
                  <div>
                    <p className="comic-name">{item.title}</p>
                    <p className="comic-tip">{item.chapter_title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default Classify;
