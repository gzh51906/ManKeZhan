# 项目说明
	基于react框架的webApp项目 + 后台管理系统
	
## 项目类型
* 阅读
## 项目要求
* 项目名称 ：漫客栈
* 演示
	* 官网(https://m.mkzhan.com/)
	* 上线地址(http://47.100.118.206:1909)
	* 后台地址[](http://47.100.118.206:1908)
	* git仓库地址[](https://github.com/gzh51906/ManKeZhan)
* 团队分工
	* 组长：黄林芳   成员 ： 陈炜  王佳伟
	* 黄林芳：负责分类页、详情页
	* 王佳伟：负责登录、注册、个人、收藏
	* 陈炜：负责首页、后台管理系统
* 
	![1](1.jpg)
	![2](2.jgg)
	![3](3.jpg)
    ![4](4.jpg)

```
└─src
    │  App.js
    │  main.js
    │  template.html
    │  
    ├─api
    │      index.js
    │      
    ├─assets
    │  │  favicon.x_icon
    │  │  
    │  ├─images
    │  │      gx.png
    │  │      home.png
    │  │      jp.png
    │  │      laba.png
    │  │      logo.png
    │  │      miao.png
    │  │      n1.png
    │  │      n2.png
    │  │      n3.png
    │  │      ph.png
    │  │      search.png
    │  │      yes.png
    │  │      
    │  └─mine
    │          4.jpg!width-100
    │          bfmine.png
    │          ic_me_left_money.png
    │          ic_me_left_monthticket.png
    │          ic_me_orignalimg.png
    │          ic_ne_left_account.png
    │          ic_ne_left_feedback.png
    │          ic_ne_left_mybook.png
    │          ic_tab_book_no.png
    │          ic_tab_class_no.png
    │          ic_tab_home_no.png
    │          ic_tab_me_hl.png
    │          login_bg.png
    │          pic_login_null.png
    │          
    ├─pages
    │  ├─Bookshelf
    │  │      index.jsx
    │  │      
    │  │      
    │  │      style.scss
    │  │      
    │  ├─Classification
    │  │      classify.jsx
    │  │      classify.scss
    │  │      detail.jsx
    │  │      detail.scss
    │  │      index.css
    │  │      index.jsx
    │  │      index.min.css
    │  │      index.scss
    │  │      
    │  ├─Home
    │  │      index.jsx
    │  │      index.scss
    │  │      
    │  ├─Login
    │  │      index.jsx
    │  │      
    │  │      
    │  │      style.scss
    │  │      
    │  ├─Mine
    │  │      index.jsx
    │  │      
    │  │      
    │  │      style.scss
    │  │      
    │  ├─Reg
    │  │      index.jsx
    │  │      
    │  │      
    │  │      style.scss
    │  │      
    │  └─Search
    │          index.jsx
    │          
    │          
    │          style.scss
    │          
    ├─redux
    │  │  store.js
    │  │  
    │  └─reducer
    │          cart.js
    │          index.js
    │          
    └─static
            rem.js
```
## 技术栈

### 前端 
* react
* rudux
* react-router
* react-Cli
* axios/fetch
* antd/antd-mobile
* git

### 后端
* NodeJs
* Express
* MySQL