import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import "./index.scss";
class Home extends Component {
    state = {
        data: [1,2,3,4,5],
        imgHeight: 176,
    
    }
    // constructor(props){
    //     super(props);
    //     this.state = {show:false};
    //     this.handleScroll = this.handleScroll.bind(this)
    // }
    componentDidMount() {
        // window.addEventListener('scroll',this.handleScroll,true);
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data:  ['5d4e81d9a29d6',
                        '5d4e81ff5fe57',
                        '5d4e822b7ddd0',
                        '5d4e826b4a0d4',
                        '5d4e829b389ae'],
            });
        }, 100);
    }
    // handleScroll(){
    //     let scrollTop = document.documentElement.scrollTop || document.body/scrollTop;
    //     if(scrollTop > 100){
    //         this.setState({
    //             show : true
    //         })
    //     }else{
    //         this.setState({
    //             show : false
    //         })
    //     }
    // }
    // backTop(){
    //     document.documentElement.scrollTop = 0;
    // }
    
    render() {
        return (
            <div id="home">
                {/* <div className="gotop" onClick = {this.backTop}></div> */}
                <div className="header">
                    <div className="left">
                        <img src="../../assets/images/logo.png" alt="" />
                    </div>
                    <div className="right"   >
                        <img src="../../assets/images/search.png" alt="" onClick={()=>{this.porps.history.push("/search")}} />
                    </div>
                </div>
                <div className="banner">

                    <WingBlank>
                        <Carousel
                            autoplay={false}
                            infinite

                        >
                            {this.state.data.map(val => (
                                <a
                                    key={val}
                                    href=""
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={`https://oss.mkzcdn.com/image/20190810/${val}-750x500.jpg!banner-1400-x`}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: 'auto' });
                                        }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>
                <div className="no">
                    {/* <div className="gx">
                        <img src="../../assets/images/ph.png" alt="" />
                    </div>
                    <div className="ph">
                        <img src="../../assets/images/gx.png" alt="" />
                    </div> */}
                </div>
                <div className="jp">
                    <h2 className="jp-header">
                        <a href="">
                            <i><img src="../../assets/images/jp.png" alt="" /></i>
                            <span>客栈精品</span><span className="more">更多></span>
                        </a>
                    </h2>
                    <div className="jp-body">
                        <ul className="jp-ul">
                            <li className="jp-li">
                                <a href="/#/detail/213115">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20180816/5b74e8a75443e-711x400.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/213427">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20190411/5caf1091a1a66-711x400.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">今天要和哪个我恋爱呢？</p>
                                        <p className="pic">狼王子与腐女恋爱故事</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/213076">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20180929/5baf25f76da33-799x450.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">渣男总裁别想逃</p>
                                        <p className="pic">猎人与猎物的爱情游戏</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/213471">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20190520/5ce216db76bb6-1000x562.png!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">真实游戏</p>
                                        <p className="pic">游戏通关才能复活</p>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="dj">
                    <h2 className="jp-header">
                        <a href="">
                            <i><img src="../../assets/images/jp.png" alt="" /></i>
                            <span>独家作品</span><span className="more">更多></span>
                        </a>
                    </h2>
                    <div className="jp-body">
                        <div className="hot">
                            <a href="/#/detail/211992">
                                <img src="https://oss.mkzcdn.com/image/20190428/5cc59493ad489-750x422.jpg!banner-600-x" alt="" />
                                <p className="title">地狱告白诗</p>
                                <p className="pic">到底谁是真正的守护人</p>
                            </a>
                        </div>
                        <ul className="jp-ul">
                            <li className="jp-li">
                                <a href="/#/detail/211692">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20180817/5b76248a0e889-600x800.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">斗罗大陆2绝世唐门</p>
                                        <p className="pic">万年之后，唐门重振辉煌</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/210237">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20180824/5b7f71452cb89-600x800.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">完美世界</p>
                                        <p className="pic">完美世界</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/208645">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20181120/5bf39dc1478c0-600x800.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">寻找前世之旅</p>
                                        <p className="pic">承接各类前世的委托</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/208646">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20181106/5be15681edc19-600x800.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">血族禁域</p>
                                        <p className="pic">与命运抗争的三姐妹</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/209945">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20181206/5c0918761c878-750x999.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">恶魔总裁的祭品新娘</p>
                                        <p className="pic">契约情人的生活</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/208642">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20181213/5c11f2784fb90-750x999.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">妃夕妍雪</p>
                                        <p className="pic">三个女人和皇帝的纠葛</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="dj-b">
                            <img src="https://oss.mkzcdn.com/image/20190810/5d4e85a6063be-750x280.jpg!banner-600-x" alt="" />
                        </div>
                    </div>
                </div>
                <div className="ss">
                    <h2 className="jp-header">
                        <a href="">
                            <i><img src="../../assets/images/jp.png" alt="" /></i>
                            <span>上升最快</span><span className="more">更多></span>
                        </a>
                    </h2>
                    <ul className="ss-l">
                        <li className="li-t">
                            <a href="/#/detail/213511">
                            <img src="https://oss.mkzcdn.com/comic/cover/20181018/5bc843e546038-600x800.jpg!cover-400-x" alt="" />
                            <h2 className="title">逆转杀魂</h2>
                            <p>热血·玄幻</p>
                            <p>周点击：<span>6.25万</span></p>
                            <p>少年车祸醒来身怀异能</p>
                            </a>
                        </li>
                        <li className="li-t">
                            <a href="/#/detail/211459">
                            <img src="https://oss.mkzcdn.com/comic/cover/20181107/5be2b2841ed40-600x800.jpg!cover-400-x" alt="" />
                            <h2 className="title">心有独钟</h2>
                            <p>恋爱·校园·搞笑</p>
                            <p>周点击：<span>14.09万</span></p>
                            <p>搞笑校园爱情罗曼史</p>
                            </a>
                        </li>
                    </ul>
                    <ul className="ss-b">
                        <li className="jp-li">
                            <a href="/#/detail/209930">
                                <img src="https://oss.mkzcdn.com/comic/cover/20180621/5b2b9f269e143-1482x1976.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">我只爱你的钱</p>
                                    <p className="pic">腹黑老公深似海，豪宅副卡不易来~</p>
                                </div>
                            </a>
                        </li>
                        <li className="jp-li">
                            <a href="/#/detail/209591">
                                <img src="https://oss.mkzcdn.com/comic/cover/20170804/598418bed9182-600x800.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">兽耳Band</p>
                                    <p className="pic">嘿！来一场激情四射的演出吧~</p>
                                </div>
                            </a>
                        </li>
                        <li className="jp-li">
                            <a href="/#/detail/213739">
                                <img src="https://oss.mkzcdn.com/comic/cover/20190704/5d1dce0540850-735x980.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">我不是陈圆圆</p>
                                    <p className="pic">现代少女变祸水红颜</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="xz">
                    <h2 className="jp-header">
                        <a href="">
                            <i><img src="../../assets/images/jp.png" alt="" /></i>
                            <span>上升最快</span><span className="more">更多></span>
                        </a>
                    </h2>
                    <div className="hot">
                        <a href="/#/detail/214318">
                            <img src="https://oss.mkzcdn.com/image/20190428/5cc594b58ac9d-750x422.jpg!banner-600-x" alt="" />
                            <p className="title">绝品邪少</p>
                            <p className="pic">血雨腥风不忘撩美女！</p>
                        </a>
                    </div>
                    <ul className="ss-b">
                        <li className="jp-li">
                            <a href="/#/detail/214715">
                                <img src="https://oss.mkzcdn.com/comic/cover/20190730/5d3fa02d74526-750x999.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">武灵剑尊</p>
                                    <p className="pic">战神重生，再起纷争</p>
                                </div>
                            </a>
                        </li>
                        <li className="jp-li">
                            <a href="/#/detail/214665">
                                <img src="https://oss.mkzcdn.com/comic/cover/20190719/5d318fe491132-750x999.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">重生弃少归来</p>
                                    <p className="pic">今生定要世界臣服脚下</p>
                                </div>
                            </a>
                        </li>
                        <li className="jp-li">
                            <a href="/#/detail/213664">
                                <img src="https://oss.mkzcdn.com/comic/cover/20190704/5d1d949025186-750x999.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">总裁爹地超给力</p>
                                    <p className="pic">女人，你偷了我的种？</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="dj-b">
                        <a href="/#/detail/214648">
                        <img src="https://oss.mkzcdn.com/image/20190810/5d4e85beb5549-750x280.jpg!banner-600-x" alt="" />
                        </a>
                    </div>
                </div>
                <div className="dj">
                    <h2 className="jp-header">
                        <a href="">
                            <i><img src="../../assets/images/jp.png" alt="" /></i>
                            <span>合作作品</span><span className="more">更多></span>
                        </a>
                    </h2>
                    <div className="jp-body">
                        <div className="hot">
                            <a href="/#/detail/211516">
                                <img src="https://oss.mkzcdn.com/image/20190428/5cc594d23c930-750x422.jpg!banner-600-x" alt="" />
                                <p className="title">斗破苍穹之大主宰</p>
                                <p className="pic">一气化三清</p>
                            </a>
                        </div>
                        <ul className="jp-ul">
                            <li className="jp-li">
                                <a href="/#/detail/214160">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20190821/5d5d34d1e2964-744x992.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强枭雄系统</p>
                                        <p className="pic">闪亮之路从穿越开始！</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/209306">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20190617/5d0735895b74c-747x996.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">女子学院的男生</p>
                                        <p className="pic">被迫成为了女校唯一校草！</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/207622">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20190923/5d888451be034-746x994.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">妖神记</p>
                                        <p className="pic">一起修炼妖灵之书</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/211189">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20181218/5c18b62d4a78a-750x999.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">姻缘宝典</p>
                                        <p className="pic">手握宝典走天下</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/212234">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20171128/5a1d1363e3186-597x796.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">元尊</p>
                                        <p className="pic">天生我才必有用</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="/#/detail/213878">
                                    <img src="https://oss.mkzcdn.com/comic/cover/20181227/5c24969ee5c62-750x999.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">嚣张狂妃</p>
                                        <p className="pic">废材？丑女？不存在的</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="dj-b">
                            <a href="/#/detail/212726">
                            <img src="https://oss.mkzcdn.com/image/20190810/5d4e85d98db5c-702x262.jpg!banner-600-x" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="zt">
                    <h2 className="jp-header">
                        <a href="">
                            <i><img src="../../assets/images/jp.png" alt="" /></i>
                            <span>专题</span><span className="more">更多></span>
                        </a>
                    </h2>
                    <ul className="jp-ul">
                            <li className="jp-li">
                                <a href="">
                                    <img src="https://oss.mkzcdn.com/image/20190903/5d6e3134379fe-750x500.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">开学季</p>      
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="https://oss.mkzcdn.com/image/20181203/5c0518475461c-750x500.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">你愿意为梦想付费吗？</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="https://oss.mkzcdn.com/image/20180921/5ba4585e60024-750x500.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">国庆放假七天乐，漫画爆肝看不停</p>
                                        
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="https://oss.mkzcdn.com/image/20180803/5b63b0962a807-750x500.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">总裁重生变软妹后， 调教傻白甜的“自己”？</p>
                                        
                                    </div>
                                </a>
                            </li>

                        </ul>
                </div>
                <div className="foot">
                    <ul>
                        <li>电脑版</li>
                        <li>意见反馈</li>
                        <i className='f-b'><img src="../../assets/images/miao.png" alt=""/></i>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Home;