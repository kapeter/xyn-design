import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import Top from '../../component/top'
import './index.less'

import footerGIF from '../../assets/img/footer-3.gif'
import downloadBtn from '../../assets/img/download-btn.png'
import arrow from '../../assets/img/black-gray-arrow.gif'
import redArrow from '../../assets/img/black-red-arrow.gif'

class ActivityOne extends React.Component {
    render() {
        return (
            <div className="activity-content activity-one">
                <Header />
                <div style={{background: "#9b83a3" }}>
                    <div className="para-content">
                        <img src={require("./img/one/act1-banner.png")} alt=""/>
                    </div>
                </div>
                <div style={{background: "#472d4f" }}>
                    <div className="para-content">
                        <img src={require("./img/one/act1-1.png")} alt=""/>
                    </div>
                </div>
                <div style={{background: "#8e8e8e" }}>
                    <div className="para-content">
                        <img src={require("./img/one/act1-2.png")} alt=""/>
                    </div>
                </div>
                <div className="material-download">
                    <div className="para-content">
                        <div className="title">
                            <img src={require("./img/computer.png")} alt=""/>
                            <span>MATERIAL DOWNLOAD</span>
                        </div>
                        <div className="material-list clearfix">
                            <Link className="download-link" to="/download">
                                <img src={redArrow} />
                                <span>Find More <br/>workshop <br/>materials!</span>
                            </Link>
                            <div className="material-item-warpper">
                                <div className="material-item big-item">
                                    <img src={require("./img/one/act1-down-1.png")} className="download-pic" />
                                    <div className="info">
                                        <div className="name"></div>
                                        <div className="btn">
                                            <a href={require("./file/one/activity1-The-way-of-seeing-Critical-thinking-qestions.pdf")} download>
                                                <img src={downloadBtn} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="material-item-warpper">
                                <div className="material-item big-item">
                                    <img src={require("./img/one/act1-down-2.png")} className="download-pic" />
                                    <div className="info">
                                        <div className="name"></div>
                                        <div className="btn">
                                            <a href={require("./file/one/activity1-feedback-letter-from-ela.pdf")} download>
                                                <img src={downloadBtn} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="material-item-warpper">
                                <div className="material-item small-item">
                                    <img src={require("./img/one/act1-down-3.png")} className="download-pic" />
                                    <div className="info">
                                        <div className="name">Story</div>
                                        <div className="btn">
                                            <a href={require("./file/one/story1-download.jpg")} download>
                                                <img src={downloadBtn} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="material-item small-item">
                                    <img src={require("./img/one/act1-down-4.png")} className="download-pic" />
                                    <div className="info">
                                        <div className="name">Workshop <br/> Instruction </div>
                                        <div className="btn">
                                            <a href={require("./file/one/activity1-download.jpg")} download>
                                                <img src={downloadBtn} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="footer">
                    <div className="para-content">
                        <img src={footerGIF} />
                        <Link className="footer-link" to="/story/1">
                            <img src={arrow} />
                            <span>Back to <br />Story!</span>
                        </Link>
                    </div>
                </footer>
                <Top></Top>
            </div>
        )
    }
}

export default ActivityOne