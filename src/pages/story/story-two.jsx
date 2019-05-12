import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import Swiper from 'swiper'
import './index.less'

import footerGIF from '../../assets/img/footer-2.gif'
import arrow from '../../assets/img/black-gray-arrow.gif'

var mySwiper = null;

class StoryTwo extends React.Component {
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
            <div className="story-content story-two">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Header />
                            <div className="para-content" style={{ padding: "150px 0" }}>
                                <div style={{ float: "left" }}>
                                    <img src={require("./img/two/story2-1.png")} style={{ width: 400, marginTop: 80 }} />
                                    <p style={{ width: 400, marginTop: 30 }}>Hello, I am Chichi.Dr.Design and me are visiting our object collection. </p>
                                </div>
                                <div style={{ float: "right" }}>
                                    <img src={require("./img/two/story2-2.gif")} style={{ width: 700 }} />
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/two/story2-3.gif")} style={{ width: 1440, margin: "40px auto", display: "block" }} />
                            <p style={{ margin: "30px auto" , width: 1440 }}>It is hard to find a perfect one, since there are too many options. </p>
                        </div>
                        <div className="swiper-slide">
                            <div className="para-content">
                                <p style={{ margin: "80px auto" , width: 1060 }}>I have a lot requirements, because I want to give our guests the best experience . . . …
The shape, the height and the colors, all need to be considered. </p>
                            </div>
                            <img src={require("./img/two/story2-4.gif")} style={{ width: 1060, margin: "30px auto", display: "block"  }} />
                        </div>
                        <div className="swiper-slide">
                            <div className="para-content">
                                <p style={{ margin: "50px auto" , width: 1060 }}>Dr.Design seems to be a bit tired of searching. . . Ah, wait! What is Dr.Designe doing there? </p>
                            </div>
                            <img src={require("./img/two/story2-5.png")} style={{ width: "100%" }} />
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/two/story2-6.gif")} style={{ width: 663, margin: "50px auto", display: "block" }} />
                            <div className="para-content">
                                <p style={{ margin: "30px auto" , width: 663 }}>Dr. Design designed and built a new chair for me!I am really touched and happy, but hmmm. . . I still feel it is not as perfect as I want, becasue the chair seems a bit normal and boring. </p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/two/story2-7.png")} style={{ width: 1000, margin: "50px auto 0", display: "block" }} />
                            <div className="para-content">
                                <p style={{ margin: "30px auto" , width: 1000 }}>The guests has come! What should I do?!I might have 15 mins to come up a new design plan, if I send Dr. Design to welcome the guest. But to create an idea in such a short time sounds so difficult, I need your help!</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/two/story2-8.gif")} style={{ width: 850, margin: "80px auto", display: "block" }} />
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

export default StoryTwo