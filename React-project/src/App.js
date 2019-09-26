
import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { Icon } from 'antd';
import { TabBar } from 'antd-mobile';
import Home from './pages/Home/index.jsx'
import Classification from './pages/Classification/index.jsx'
import Classify from "./pages/Classification/classify.jsx";
import Detail from "./pages/Classification/detail.jsx";
import Bookshelf from './pages/Bookshelf/index.jsx'
import Mine from './pages/Mine/index.jsx'
import Login from './pages/Login/index.jsx'
import Reg from './pages/Reg/index.jsx'
import "./static/rem.js"
class App extends Component {
  state = {
    selectedTab: "home",
    fullScreen: true,
    menu: [
      {
        path: "/home",
        title: "首页",
        icon: "home",
        key: "home"
      },
      {
        path: "/classification",
        title: "分类",
        icon: "heart",
        key: "classification"
      },
      {
        path: "/bookshelf",
        title: "书架",
        icon: "read",
        key: "bookshelf"
      },
      {
        path: "/mine",
        title: "我的",
        icon: "smile",
        key: "mine"
      }
    ]
  };

  componentDidMount() {
    let select = this.props.location.pathname.slice(1)
    if (select.substring(0,select.length-2) == "classify") {
      select = "classification";
    }
    this.setState({
      selectedTab: select
    })
  }
  render() {
    return (
      <div>
        <div
          style={
            this.state.fullScreen
              ? {
                position: "fixed",
                height: "1.3rem",
                width: "100%",
                bottom: 0,
                zIndex: 99
              }
              : { height: 400 }
          }
        >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
          >
            {this.state.menu.map(item => {
              return (
                <TabBar.Item
                  title={item.title}
                  key={item.key}
                  icon={
                    <Icon
                      type={item.icon}
                      style={{ fontSize: "19px", color: "#aaa" }}
                      theme="filled"
                    />
                  }
                  selectedIcon={
                    <Icon
                      type={item.icon}
                      style={{ fontSize: "19px", color: "orange" }}
                      theme="filled"
                    />
                  }
                  selected={this.state.selectedTab === item.key}
                  onPress={() => {
                    this.setState({
                      selectedTab: item.key
                    });
                    this.props.history.push(item.path);
                  }}
                ></TabBar.Item>
              );
            })}
          </TabBar>
        </div>
        <div>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/classification" component={Classification}></Route>
            <Route path="/classify/:id" component={Classify}></Route>
            <Route path="/detail/:id" component={Detail}></Route>
            <Route path="/bookshelf" component={Bookshelf}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/reg" component={Reg}></Route>
            <Route path="/mine" component={Mine}></Route>
            <Redirect from="/" to="/home" exact></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

App = withRouter(App);
export default App;
