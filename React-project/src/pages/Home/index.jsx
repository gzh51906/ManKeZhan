import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import "./index.scss";
class Home extends Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    }
    render() {
        return (
            <div id="home">
                <div className="header">
                    <div className="left">
                        <img src="../../assets/images/logo.png" alt="" />
                    </div>
                    <div className="right">
                        <img src="../../assets/images/search.png" alt="" />
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
                                    href="#"
                                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                    <img
                                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
                    <div className="gx">
                        <img src="../../assets/images/ph.png" alt="" />
                    </div>
                    <div className="ph">
                        <img src="../../assets/images/gx.png" alt="" />
                    </div>
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
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
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
                            <a href="">
                                <img src="http://oss.mkzcdn.com/comic/cover/20190731/5d413e046824c-750x999.jpg!cover-400-x" alt="" />
                                <p className="title">地狱告白诗</p>
                                <p className="pic">到底谁是真正的守护人</p>
                            </a>
                        </div>
                        <ul className="jp-ul">
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
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
                            <img src="https://oss.mkzcdn.com/comic/cover/20180925/5ba9d6dfb0994-600x800.jpg!cover-400-x" alt="" />
                            <h2 className="title">面具娇妻</h2>
                            <p>恋爱·生活</p>
                            <p>周点击：<span>14.12万</span></p>
                            <p>黑道银面女的双重生活</p>
                        </li>
                        <li className="li-t">
                            <img src="https://oss.mkzcdn.com/comic/cover/20180925/5ba9d6dfb0994-600x800.jpg!cover-400-x" alt="" />
                            <h2 className="title">面具娇妻</h2>
                            <p>恋爱·生活</p>
                            <p>周点击：<span>14.12万</span></p>
                            <p>黑道银面女的双重生活</p>
                        </li>
                    </ul>
                    <ul className="ss-b">
                        <li className="jp-li">
                            <a href="">
                                <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">最强妖孽</p>
                                    <p className="pic">异世大仙附身笨蛋学生</p>
                                </div>
                            </a>
                        </li>
                        <li className="jp-li">
                            <a href="">
                                <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">最强妖孽</p>
                                    <p className="pic">异世大仙附身笨蛋学生</p>
                                </div>
                            </a>
                        </li>
                        <li className="jp-li">
                            <a href="">
                                <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">最强妖孽</p>
                                    <p className="pic">异世大仙附身笨蛋学生</p>
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
                        <a href="">
                            <img src="http://oss.mkzcdn.com/comic/cover/20190731/5d413e046824c-750x999.jpg!cover-400-x" alt="" />
                            <p className="title">地狱告白诗</p>
                            <p className="pic">到底谁是真正的守护人</p>
                        </a>
                    </div>
                    <ul className="ss-b">
                        <li className="jp-li">
                            <a href="">
                                <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">最强妖孽</p>
                                    <p className="pic">异世大仙附身笨蛋学生</p>
                                </div>
                            </a>
                        </li>
                        <li className="jp-li">
                            <a href="">
                                <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">最强妖孽</p>
                                    <p className="pic">异世大仙附身笨蛋学生</p>
                                </div>
                            </a>
                        </li>
                        <li className="jp-li">
                            <a href="">
                                <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                <div>
                                    <p className="title">最强妖孽</p>
                                    <p className="pic">异世大仙附身笨蛋学生</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="dj-b">
                        <img src="https://oss.mkzcdn.com/image/20190810/5d4e85a6063be-750x280.jpg!banner-600-x" alt="" />
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
                            <a href="">
                                <img src="http://oss.mkzcdn.com/comic/cover/20190731/5d413e046824c-750x999.jpg!cover-400-x" alt="" />
                                <p className="title">地狱告白诗</p>
                                <p className="pic">到底谁是真正的守护人</p>
                            </a>
                        </div>
                        <ul className="jp-ul">
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        <p className="pic">异世大仙附身笨蛋学生</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div className="dj-b">
                            <img src="https://oss.mkzcdn.com/image/20190810/5d4e85a6063be-750x280.jpg!banner-600-x" alt="" />
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
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        
                                    </div>
                                </a>
                            </li>
                            <li className="jp-li">
                                <a href="">
                                    <img src="http://oss.mkzcdn.com/comic/cover/20180914/5b9b6cd9877d8-600x799.jpg!cover-400-x" alt="" />
                                    <div>
                                        <p className="title">最强妖孽</p>
                                        
                                    </div>
                                </a>
                            </li>

                        </ul>
                </div>
                <div className="foot">
                    <ul>
                        <li>电脑版</li>
                        <li>意见反馈</li>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Home;