
import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { Icon } from 'antd';
import New from './pages/New/index.jsx'
import Home from './pages/Home/index.jsx'
import List from './pages/List/index.jsx'
import { Menu} from 'antd';
import './app.scss'
const { SubMenu } = Menu;
class App extends Component {
  state = {
    selectedTab: "home",
    fullScreen: true,
    menu: [
      {
        path:"/home",
        title:"首页",
        key:"home"
      },{
        path:"/list",
        title:"列表",
        key:"list"
      },{
        path:"/new",
        title:"新",
        key:"new"
      }
    ]
  };

  handleClick = e => {
    console.log('click ', e);
  };

  componentDidMount() {
    
  }
  render() {
    return (
      <div>
         <Menu
        onClick={this.handleClick}
        id="me"
        
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        

          
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>商品管理</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="">
            <Menu.Item key="list" onClick={() => {
              this.props.history.push("/list")
            }}>漫画管理</Menu.Item>
            <Menu.Item key="new" onClick={() => {
              this.props.history.push("/new")
            }}>漫画上架</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        
      
      </Menu>
        <div>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/list" component={List}></Route>
            <Route path="/new" component={New}></Route>
            <Redirect from="/" to="/home" exact></Redirect>
          </Switch>
        </div>
      </div>
    );
  }
}

App = withRouter(App);
export default App;
