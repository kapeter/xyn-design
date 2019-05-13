import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import Swiper from 'swiper'
import './index.less'

import footerGIF from '../../assets/img/footer-2.gif'
import arrow from '../../assets/img/black-gray-arrow.gif'

var mySwiper = null;

class StoryThree extends React.Component {
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
            <div className="story-content story-three">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Header />
                            <div className="para-content" style={{ padding: "150px 0" }}>
                                <div style={{ float: "left" }}>
                                    <img src={require("./img/three/story3-1.png")} style={{ width: 460 }} />
                                    <p style={{ width: 460, marginTop: 30 }}>Hello, I am Chichi.Dr.Design and me are visiting our object collection. </p>
                                </div>
                                <div style={{ float: "right" }}>
                                    <img src={require("./img/three/story3-2.gif")} style={{ width: 600 }} />
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/three/story3-3.png")} style={{ width: 1200, margin: "40px auto", display: "block" }} />
                            <div className="para-content">
                                <p style={{ margin: "0 auto" , width: 1200 }}>Dr. Design has left a task for them:  </p>
                                <p style={{ margin: "0 auto" , width: 1200 }}>Giving some comments to my design work to help me improve. </p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/three/story3-4.png")} style={{ width: 1260, margin: "50px auto", display: "block" }} />
                        </div>
                        <div className="swiper-slide">
                            <div className="para-content" style={{ padding: "50px 0" }}>
                                <div style={{ float: "left" }}>
                                    <img src={require("./img/three/story3-5.png")} style={{ width: 420 }} />
                                </div>
                                <div style={{ float: "right" }}>
                                    <img src={require("./img/three/story3-6.png")} style={{ width: 720 }} />
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/three/story3-7.gif")} style={{ width: 1440, margin: "40px auto", display: "block" }} />
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/three/story3-8.gif")} style={{ width: 1200, margin: "40px auto", display: "block" }} />
                            <p style={{ margin: "30px auto" , width: 1200 }}>What would you say to me if you are writting this feedback report?  </p>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/three/story3-9.gif")} style={{ width: 850, margin: "80px auto", display: "block" }} />
                            <footer className="footer">
                                <img src={footerGIF} />
                                <Link className="footer-link" to="/activity/3">
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

export default StoryThree