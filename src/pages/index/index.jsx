import React from 'react'
import Header from '../../component/header'
import Swiper from 'swiper'
import './index.less'

import footerGIF from '../../assets/img/footer-1.gif'
import mainBg from '../../assets/img/landing.jpg'

var swiper = null;

class Index extends React.Component {

    componentDidMount() {
        swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            mousewheel: true,
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
                        <div className="swiper-slide">
                            <div>
                                <div className="content">
                                    <div className="nes-balloon from-left">
                                        <p>HI! I am Dr.Design!This website is made for teaching children DESIGN and CRITIQUE.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">Slide 3</div>
                        <div className="swiper-slide">Slide 4</div>
                    </div>
                </div>
                {/* <footer className="footer">
                    <img src={footerGIF} />
                </footer> */}
            </div>
        )
    }
}

export default Index