import React, { Component } from "react";
import axios from "axios";
import { NavBar, Icon, Tabs, WhiteSpace, Badge } from "antd-mobile";

import "./detail.scss";

class Detail extends Component {
  state = {
    data: {},
    author: "",
    current: "mail",
    flag: true,
    title: "作者大大还没有填写本作品的公告！",
    page: "",
    boxs: [],
    three: [],
    sss:'5'
  };
  async componentDidMount() {
    let id = this.props.match.params.id;
    await axios
      .get(`https://comic.mkzcdn.com/comic/info/?comic_id=${id}`)
      .then(res => {
        let data = res.data.data;
        let page = res.data.data.chapter_title.replace(/[^0-9]/gi, "");
        this.setState({
          data: data,
          page: page
        });
      });
    await axios.get(`http://localhost:9876/classifi/detail/${id}`).then(res => {
      let author = res.data.data[0].author_title;
      this.setState({
        author: author
      });
    });
    await axios.get(`http://localhost:9876/classifi/data`).then(res => {
      let three = res.data.data;
      this.setState({
        three: three
      });
    });
    let boxs = [];
    for (let i = 0; i <= this.state.page; i++) {
      boxs.push(
        <span
          key={i}
          style={{
            display: "inline-block",
            border: "1px solid #ddd",
            width: "2rem",
            height: ".9rem",
            margin: ".15rem 0",
            color: "#000",
            textAlign: "center",
            lineHeight: ".9rem"
          }}
        >
          {i}
        </span>
      );
    }
    this.setState({
      boxs: boxs
    });
  }
  render() {
    let { data } = this.state;
    let img = data.cover_lateral + "!banner-600";
    const tabs = [
      { title: <Badge>详情</Badge> },
      {
        title: (
          <div
            onClick={() => {
              let flag = !this.state.flag;
              let boxs = this.state.boxs.reverse();
              this.setState({
                flag: flag,
                boxs: boxs
              });
            }}
          >
            目录
            <span className={this.state.flag ? "color" : "no"}>1</span>
            <span
              className={!this.state.flag ? "color" : "no"}
              style={{ transform: "rotate(180deg)", display: "inline-block" }}
            >
              1
            </span>
          </div>
        )
      },
      { title: <Badge>评论</Badge> }
    ];
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
            width: "100%",
            zIndex: "999"
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
          <div className="nav">
            <Tabs
              tabs={tabs}
              initialPage={1}
              tabBarUnderlineStyle={{
                borderColor: "#ff7830",
                borderWidth: ".5px"
              }}
              tabBarActiveTextColor="#000"
            >
              <div
                style={{
                  fontSize: "14px",
                  padding: ".3rem",
                  color: "#000",
                  lineHeight: ".6rem",
                  borderBottom: "1px solid #eee"
                }}
              >
                {data.content}
                <p
                  style={{
                    backgroundColor: "#f6f6f6",
                    fontSize: "12px",
                    height: ".8rem",
                    lineHeight: ".8rem",
                    color: "#666",
                    marginTop: ".3rem"
                  }}
                >
                  <img
                    src="../../assets/images/laba.png"
                    style={{
                      width: ".51rem",
                      height: ".31rem",
                      marginRight: ".3rem",
                      marginLeft: ".25rem"
                    }}
                  />
                  {this.state.title}
                </p>
              </div>
              <div
                style={{
                  padding: ".32rem .32rem 0px",
                  fontSize: "12px",
                  color: "#999"
                }}
              >
                <p>更新至{data.chapter_title}</p>

                <div
                  className="box"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    height: "5rem",
                    overflow: "auto",
                    marginTop: ".2rem"
                  }}
                >
                  {this.state.boxs}
                </div>
              </div>
              <div
                style={{
                  height: "150px",
                  backgroundColor: "#fff"
                }}
              >
                Content of third tab
              </div>
            </Tabs>
            <WhiteSpace />
          </div>
        </div>
        <div className="floot">
          <div className="ccc"></div>
          <div className="box">
            <p>相关推荐</p>
            <ul>
              {this.state.three.map(item => {
                return (
                  <li
                    key={item.comic_id}
                    onClick={()=>{
                      this.props.history.push({
                        pathname:`/detail/${item.comic_id}`,
                        author:item.author_title
                      })
                      location.reload()
                    }}
                  >
                    <img src={item.cover} />
                    <div>
                      <span className="span">{item.title}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="fixed">
          <div className="left">
              <ul>
                <li>
                  <img src="../../assets/images/n1.png" alt=""/>
                  <p>收藏</p>
                </li>
                <li>
                  <img src="../../assets/images/n2.png" alt=""/>
                  <p>月票</p>
                </li>
                <li>
                  <img src="../../assets/images/n3.png" alt=""/>
                  <p>打赏</p>
                </li>
              </ul>
          </div>
          <div className="right">
            <p>开始阅读</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
