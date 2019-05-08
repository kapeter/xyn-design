import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-3.gif'
import avatar from "../../assets/img/avatar.png"
import arrow from '../../assets/img/gray-arrow.gif'

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <Header />
                <section className="content">
                    <div className="info">
                        <p>Hello! My name is Yunan Xing! I am a graphic designer. This website is the summary of my master thesis research.
Growing up in China, I had quite different experience in criticism during my childhood. Every kids grows up in an extremely critical environment. While in Sweden, people complained about the education “too soft” or “too gentle”, children need more challenges and critiques. The difference between cultures inspired me to start this reasearch: How to teach children to give and receive critiques.</p>
                        <p>In design discourse, critical thinking and critiques are common methods used to improve design progress and outcome.
So far there is no such a discussion in children’s pedagogical context about applying design methods to teach constructive criticism. Thus, I really wish my project would highlight an issue in the society and provide an alternative. </p>
                        <p>If you have any critical feedback, welcome to send me an email. I am always open for critiques.</p>
                        <p>
                            <a href="mailto:xingyunan.irene@gmail.com">xingyunan.irene@gmail.com</a>
                        </p>
                    </div>
                    <div className="avatar">
                        <img src={avatar} />
                    </div>
                </section>
                <footer className="footer">
                    <img src={footerGIF} />
                    <Link className="footer-link" to="/activity" style={{ top: -40 }}>
                        <img src={arrow} />
                        <span>Go to <br />Activity!</span>
                    </Link>
                    <Link className="footer-link" to="/story" style={{ top: 50, right: 168 }}>
                        <img src={arrow} />
                        <span>Go to <br />Story!</span>
                    </Link>
                </footer>
            </div>
        )
    }
}

export default Contact