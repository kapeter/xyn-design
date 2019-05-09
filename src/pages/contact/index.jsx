import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-3.gif'
import avatar from "../../assets/img/avatar.gif"
import arrow from '../../assets/img/black-gray-arrow.gif'

class Contact extends React.Component {
    render() {
        return (
            <div className="contact">
                <Header />
                <section className="content">
                    <div className="info">
                        <p>Hello! My name is Yunan Xing, and I am a graphic designer. This website is the result of my master thesis research. 
                        Growing up in China, I had quite a different experience with criticism during my childhood, than what I've come to experience here in Sweden, working with and around kids. In China, as a kid, you grow up in an environment in which elders do not hesitate to criticise you, however in Sweden, the situation seems to be completely opposite. The cultural difference in how kids are given feedback sparked the interest in me to start researching this topic.</p>
                        <p>My work is done to highlight the value of critical feedback. It is not necessary something you should avoid, because of the way it might hurt to hear. Thus, what I want to teach to kids is the way of critiquing, and how to deal with emotions through various design practice on this website.  </p>
                        <p>If you have any critical feedback about my work, welcome to send me an email. I am always open for critiques.</p>
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