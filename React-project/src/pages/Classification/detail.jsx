import React, { Component } from "react";
import axios from "axios";

import { NavBar, Icon } from "antd-mobile";

import "./detail.scss";

class Detail extends Component {
  state = {
    data: {},
    author: ""
  };
  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`https://comic.mkzcdn.com/comic/info/?comic_id=${id}`)
      .then(res => {
        let data = res.data.data;
        this.setState({
          data: data
        });
      });
    axios
      .get(`http://localhost:9876/classifi/detail/${id}`)
      .then(res => {
        let author = res.data.data[0].author_title;
        this.setState({
            author:author
        })
      });
  }
  render() {
    let { data } = this.state;
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    let img = data.cover_lateral + "!banner-600";
    return (
      <div id="detail">
        <NavBar
          mode="light"
          icon={<Icon type="left" size="md" color="#ff7830" />}
          rightContent={
            <img
              className="img"
              src="../../assets/images/home.png"
              alt=""
              onClick={() => {
                this.props.history.push({
                  pathname: "/home"
                });
              }}
            />
          }
          onLeftClick={() => {
            this.props.history.goBack();
          }}
          style={{
            borderBottom: "1px solid #efefef",
            position: "fixed",
            width: "100%"
          }}
        >
          {data.title}
        </NavBar>
        <div className="main">
          <div className="banner">
            <img src={img} />
            <div className="fixed">
              <h1>{data.title}</h1>
              <p>作者：{this.state.author}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
