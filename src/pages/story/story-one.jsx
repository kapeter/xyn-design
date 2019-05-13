import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import Swiper from 'swiper'
import './index.less'

import footerGIF from '../../assets/img/footer-2.gif'
import arrow from '../../assets/img/black-gray-arrow.gif'

var mySwiper = null;

class StoryOne extends React.Component {
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
            <div className="story-content story-one">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Header />
                            <div className="para-content" style={{ textAlign: "center" }}>
                                <img src={require("./img/one/story1-1.png")} style={{ width: 920, marginTop: 80 }} />
                                <p style={{ width: 600, textAlign: "left", marginLeft: 210, marginTop: -50}}>I am Ela, I think I am quite popular and good at designing.</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/one/story1-2.gif")} style={{ width: "100%" }} />
                            <div className="para-content">
                                <p style={{ margin: "30px auto" , width: 950 }}>My current job is to review design concepts in the process.I look into every design in detail, ask some questions and have a litlle discussion with designers. Then I will give them feedback.</p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/one/story1-3.gif")} style={{ width: 830, margin: "30px auto", display: "block" }} />
                            <div className="para-content">
                                <p style={{ margin: "30px auto" , width: 830 }}>They are usually very happy to receive my critques. </p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="para-content" style={{ padding: "80px 0" }}>
                                <div style={{ float: "left" }}>
                                    <img src={require("./img/one/story1-4.gif")} style={{ width: 670 }} />
                                </div>
                                <div style={{ float: "right" }}>
                                    <p style={{ width: 432 }}>I like to study objects and read. </p>
                                    <p style={{ width: 432 }}>Because I need to prepare myself to ask good quesitons and say things that make sense to designers. </p>
                                    <img src={require("./img/one/story1-5.png")} style={{ width: 432, marginTop: 118 }} />
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/one/story1-6.gif")} style={{ width: 500, margin: "50px auto", display: "block" }} />
                            <div className="para-content">
                                <p style={{ margin: "30px auto" , width: 500 }}>I have some secrets for you if you are interested in being a creative person, like a designer. </p>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="para-content" style={{ padding: "80px 0" }}>
                                <div style={{ float: "left" }}>
                                    <img src={require("./img/one/story1-7.png")} style={{ width: 500 }} />
                                    <p style={{ width: 500, marginTop: 30 }}>If you listen and pay attention, every thing is talking about its stories. </p>
                                    <p style={{ width: 500 }}>If you pay some effort, you will understand a lot of fun facts of the objects. </p>
                                </div>
                                <div style={{ float: "right" }}>
                                    <img src={require("./img/one/story1-8.png")} style={{ width: 500 }} />
                                    <p style={{ width: 500, marginTop: 30 }}>Nothing is perfectly made, like nothing can be perfectly done. Learn to question things and look for the reasons. </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <img src={require("./img/one/story1-9.gif")} style={{ width: 850, margin: "80px auto", display: "block" }} />
                            <footer className="footer">
                                <img src={footerGIF} />
                                <Link className="footer-link" to="/activity/1">
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

export default StoryOne