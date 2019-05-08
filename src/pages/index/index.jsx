import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import Swiper from 'swiper'
import './index.less'

import footerGIF from '../../assets/img/footer-1.gif'
import mainBg from '../../assets/img/landing.jpg'
import arrow from '../../assets/img/gray-arrow.gif'

var mySwiper = null;

class Index extends React.Component {

    componentDidMount() {
        mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            mousewheel: {
                releaseOnEdges: true
            },
            speed: 640
        });
    }

    render() {
        return (
            <div className="index">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <Header />
                            <div className="main-banner" style={{backgroundImage: `url(${mainBg})`}}></div>
                        </div>
                        <div className="swiper-slide" style={{background: "#80cab8" }}>
                            <img src={require("./img/index-1.png")} className="index-pic" />
                        </div>
                        <div className="swiper-slide" style={{background: "#d7bb98" }}>
                            <img src={require("./img/index-2.png")} className="index-pic" />
                        </div>
                        <div className="swiper-slide" style={{background: "#545454" }}>
                            <img src={require("./img/index-3.png")} className="index-pic" />
                        </div>
                        <div className="swiper-slide" style={{background: "#f18252" }}>
                            <img src={require("./img/index-4.png")} className="index-pic" />
                        </div>
                        <div className="swiper-slide">
                            <div className="index-content">
                                <div className="nes-balloon from-right" style={{marginRight: 100}}>
                                    <p>There are four stories that are linked to four design activities, which are focusing on different aspects related to critical feedbacks.Adults can use the Story page as the workshop intro and the activity page is the guide. These activities are four generic ways of working, you can always develop your own version!</p>
                                </div>
                                <div className="person">
                                    <img src={require('./img/index-person.png')} />
                                </div>
                                <div className="steps">
                                    <img src={require('./img/index-steps.gif')} />
                                </div>
                            </div>
                            <footer className="footer" style={{background: "#ffffff" }}>
                                <img src={footerGIF} />
                                <Link className="footer-link" to="/character">
                                    <img src={arrow} />
                                    <span>Go to <br />Character</span>
                                </Link>
                            </footer> 
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Index