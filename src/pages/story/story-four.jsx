import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import Swiper from 'swiper'
import './index.less'

import footerGIF from '../../assets/img/footer-2.gif'
import arrow from '../../assets/img/black-gray-arrow.gif'

var mySwiper = null;

class StoryFour extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            mousewheel: {
                releaseOnEdges: true
            },
            speed: 640
        });
    }

    changeSwiper() {
        mySwiper.slideNext();
    }

    render() {
        return (
            <div className="story-content story-four">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Header />
                            <div className="para-content" style={{ padding: "80px 0" }}>
                                <img src={require("./img/four/story4-1.gif")} style={{ width: 1200, marginTop: 80 }} />
                                <div style={{ float: "left" }}>
                                    <p style={{ width: 548, marginTop: 30 }}>Mike is late for school again.</p>
                                </div>
                                <div style={{ float: "right" }}>
                                    <p style={{ width: 445, marginTop: 30 }}>The course has began!Mike realised he forgot to take his focusing medicine!</p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="para-content" style={{ margin: "50px auto 0" }}>
                                <div className="clearfix">
                                    <div style={{ float: 'left', padding: 20, width: '33.33%', boxSizing: "border-box", height: 320, overflow: "hidden" }}>
                                        <img src={require("./img/four/story4-2.png")} style={{ width: "100%" }} />
                                    </div>
                                    <div style={{ float: 'left', padding: 20, width: '33.33%', boxSizing: "border-box", height: 320, overflow: "hidden"}}>
                                        <img src={require("./img/four/story4-3.gif")} style={{ width: "100%" }} />
                                    </div>
                                    <div style={{ float: 'left', padding: 20, width: '33.33%', boxSizing: "border-box", height: 320, overflow: "hidden" }}>
                                        <img src={require("./img/four/story4-4.png")} style={{ width: "100%" }} />
                                    </div>
                                    <div style={{ float: 'left', padding: 20, width: '33.33%', boxSizing: "border-box", height: 320, overflow: "hidden" }}>
                                        <img src={require("./img/four/story4-5.gif")} style={{ width: "100%" }} />
                                    </div>
                                    <div style={{ float: 'left', padding: 20, width: '33.33%', boxSizing: "border-box", height: 320, overflow: "hidden" }}>
                                        <img src={require("./img/four/story4-6.png")} style={{ width: "100%" }} />
                                    </div>
                                    <div style={{ float: 'left', padding: 20, width: '33.33%', boxSizing: "border-box", height: 320, overflow: "hidden" }}>
                                        <img src={require("./img/four/story4-7.gif")} style={{ width: "100%" }} />
                                    </div>                                
                                </div>
                                <p style={{ padding: 20 }}>Mike usually has a hard time to focus in class, without that pill it became a bit out of control. Mike jumps up and down and makes everyone laugh. He also cannot focus and finish his design task.</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/four/story4-8.png")} style={{ width: 1440, margin: "40px auto", display: "block" }} />
                            <p style={{ margin: "30px auto" , width: 1440 }}>Teachers tell him to stand by the door so he will not disturb others</p>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/four/story4-9.png")} style={{ width: 500, margin: "80px auto 0", display: "block" }} />
                            <p style={{ margin: "30px auto" , width: 500 }}>Mike feels shame and sad.</p>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/four/story4-10.gif")} style={{ width: 1200, margin: "80px auto 0", display: "block" }} />
                            <p style={{ margin: "30px auto" , width: 1200 }}>Mike feels a bit better after hearing some nice words.</p>
                        </div>
                        <div className="swiper-slide">
                            <div className="para-content" style={{ padding: "80px 0" }}>
                                <div style={{ float: "left" }}>
                                    <img src={require("./img/four/story4-11.png")} style={{ width: 450 }} />
                                    <p style={{ width: 450, marginTop: 30 }}>But on the way home, Mike becomes sad again. Mom did not know he forgot his pill, but she probably has heard from teacher. She must be really disappointed.</p>
                                    <p style={{ width: 450, marginTop: 30 }}> Mike is so tired of himslef but do not  know how to make everything better.Mike needs your help!</p>
                                </div>
                                <div style={{ float: "right" }}>
                                    <img src={require("./img/four/story4-12.png")} style={{ width: 650 }} />
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/four/story4-13.gif")} style={{ width: 850, margin: "80px auto", display: "block" }} />
                            <footer className="footer">
                                <img src={footerGIF} />
                                <Link className="footer-link" to="/activity">
                                    <img src={arrow} />
                                    <span>Start <br />Design!</span>
                                </Link>
                            </footer>
                        </div>
                    </div>
                </div>
                <div className="controlls" onClick={() => this.changeSwiper()}></div>
            </div>
        )
    }
}

export default StoryFour