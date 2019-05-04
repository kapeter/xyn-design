import React from 'react'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-3.gif'
import banner from "./img/one/banner.jpg"

class ActivityOne extends React.Component {
    render() {
        return (
            <div className="activity-content activity-one">
                <Header />
                <div className="banner">
                    <img src={banner} />
                    <div className="banner-content">
                        <div class="nes-container is-dark with-title">
                            <p class="title">MISSION!</p>
                            <p>
                                Let’s start the DESIGN practice from observation!<br />
                                Have you noticed we have a lot of bottles here? Are you curious about what we are going to do with them?<br />
                                The first thing . . . You need to guess!
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ background: "#472D4F", padding: "70px 0" }}>
                    <div className="para-content">
                        <div className="nes-balloon from-right" style={{width: 1000, color: "#000"}}>
                            <h3 style={{fontSize: 17}}>
                                <i className="nes-icon is-small star"></i>MISSION1<i className="nes-icon is-small star"></i>
                            </h3>
                            <p style={{ marginBottom: 30 }}>Take one bottle each. Observe and determine what were these bottles used for!</p>
                            <p>Try to touch, feel and smell. What have you found? Write down or draw, in which situation you would use this bottle. </p>
                        </div>
                        <div className="nes-balloon from-left" style={{width: 610, color: "#000", margin: "70px 0 0 330px"}}>
                            <h3 style={{fontSize: 17}}>
                                <i className="nes-icon is-small star"></i>MISSION2<i className="nes-icon is-small star"></i>
                            </h3>
                            <p> In these bottles, there is one that is not so well designed, you need to find it out! Discuss together and tell me why you choose that one. </p>
                        </div>
                    </div> 
                </div>               
                <footer className="footer">
                    <img src={footerGIF} />
                </footer>
            </div>
        )
    }
}

export default ActivityOne