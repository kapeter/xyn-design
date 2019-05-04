import React from 'react'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-3.gif'
import banner from '../../assets/img/download-banner.jpg'
import download1 from '../../assets/img/download-1.png'
import download2 from '../../assets/img/download-2.png'
import download3 from '../../assets/img/download-3.png'
import download4 from '../../assets/img/download-4.png'
import download5 from '../../assets/img/download-5.png'
import download6 from '../../assets/img/download-6.png'
import downloadBtn from '../../assets/img/download-btn.png'


class Download extends React.Component {
    render() {
        return (
            <div className="download">
                <Header />
                <div className="banner">
                    <img src={banner} alt="download" />
                </div>
                <section className="content clearfix">
                    <div className="download-item">
                        <img src={download1} alt=""/>
                        <div className="info">
                            <a href="javascript:;" className="btn">
                                <img src={downloadBtn} alt=""/>
                            </a>
                            <div className="title">SKETCH BOOK</div>
                        </div>
                    </div>
                    <div className="download-item">
                        <img src={download2} alt=""/>
                        <div className="info">
                            <a href="javascript:;" className="btn">
                                <img src={downloadBtn} alt=""/>
                            </a>
                            <div className="title">FEEDBACK CARDS</div>
                        </div>
                    </div>
                    <div className="download-item">
                        <img src={download3} alt=""/>
                        <div className="info">
                            <a href="javascript:;" className="btn">
                                <img src={downloadBtn} alt=""/>
                            </a>
                            <div className="title">DESIGN LAB SIGN</div>
                        </div>
                    </div>
                    <div className="download-item">
                        <img src={download4} alt=""/>
                        <div className="info">
                            <a href="javascript:;" className="btn">
                                <img src={downloadBtn} alt=""/>
                            </a>
                            <div className="title">CHARACTER CARDS</div>
                        </div>
                    </div>
                    <div className="download-item">
                        <img src={download5} alt=""/>
                        <div className="info">
                            <a href="javascript:;" className="btn">
                                <img src={downloadBtn} alt=""/>
                            </a>
                            <div className="title">WORKSHOP<br />INSTRUCTION</div>
                        </div>
                    </div>
                    <div className="download-item">
                        <img src={download6} alt=""/>
                        <div className="info">
                            <a href="javascript:;" className="btn">
                                <img src={downloadBtn} alt=""/>
                            </a>
                            <div className="title">SPACE SETTING<br />INSTRUCTION </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <img src={footerGIF} />
                </footer>
            </div>
        )
    }
}

export default Download