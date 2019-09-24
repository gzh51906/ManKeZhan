import React, { Component } from "react";

import Api from "../../api";
import { Col, Row } from "antd";

import "./index.scss";

class Classification extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    let data = await Api.get({
      classifi: "classifi"
    });
    this.setState({
      data: data
    });
  }
  goto = (id,classify) => {
    this.props.history.push({
      pathname:`/classify/${id}`,
      id:id,
      classify:classify
    });
  };
  render() {
    return (
      <div id="classification">
        <div className="header">
          <div className="left">
            <p>题材</p>
            <span></span>
          </div>
          <div className="right">
            <img src="../../assets/images/search.png" alt="" />
          </div>
        </div>
        <div className="main" style={{ background: "#fff" }}>
          <Row>
            {this.state.data.map(item => {
              return (
                <Col span={12} key={item.id}>
                  <img
                    src={item.imgurl}
                    onClick={this.goto.bind(this, item.id,item.classify)}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    );
  }
}

export default Classification;
