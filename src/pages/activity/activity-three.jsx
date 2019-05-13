import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import Top from '../../component/top'
import './index.less'

import footerGIF from '../../assets/img/footer-3.gif'
import downloadBtn from '../../assets/img/download-btn.png'
import arrow from '../../assets/img/black-gray-arrow.gif'
import redArrow from '../../assets/img/black-red-arrow.gif'

class ActivityThree extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="activity-content activity-three">
                <Header />
                <div style={{background: "#f5d3ca" }}>
                    <div className="para-content">
                        <img src={require("./img/three/act3-banner.png")} alt=""/>
                    </div>
                </div>
                <div style={{background: "#000000" }}>
                    <div className="para-content">
                        <img src={require("./img/three/act3-1.png")} alt=""/>
                    </div>
                </div>
                <div style={{background: "#e89d89" }}>
                    <div className="para-content">
                        <img src={require("./img/three/act3-2.png")} alt=""/>
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
                                    <img src={require("./img/three/act3-down-1.png")} className="download-pic" />
                                    <div className="info">
                                        <div className="name"></div>
                                        <div className="btn">
                                            <a href={require("./file/three/activity3-detailed-information.pdf")} download>
                                                <img src={downloadBtn} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="material-item-warpper">
                                <div className="material-item big-item">
                                    <img src={require("./img/three/act3-down-2.png")} className="download-pic" />
                                    <div className="info">
                                        <div className="name"></div>
                                        <div className="btn">
                                            <a href={require("./file/three/activity3-feedback-report.pdf")} download>
                                                <img src={downloadBtn} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="material-item-warpper">
                                <div className="material-item small-item">
                                    <img src={require("./img/three/act3-down-3.png")} className="download-pic" />
                                    <div className="info">
                                        <div className="name">Story</div>
                                        <div className="btn">
                                            <a href={require("./file/three/story3-download.jpg")} download>
                                                <img src={downloadBtn} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="material-item small-item">
                                    <img src={require("./img/three/act3-down-4.png")} className="download-pic" />
                                    <div className="info">
                                        <div className="name">Workshop <br/> Instruction </div>
                                        <div className="btn">
                                            <a href={require("./file/three/activity3-download.jpg")} download>
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
                        <Link className="footer-link" to="/story/3">
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

export default ActivityThree