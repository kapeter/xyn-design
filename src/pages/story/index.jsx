import React from 'react'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-1.gif'
import cover1 from '../../assets/img/story-cover-1.png'
import cover2 from '../../assets/img/story-cover-2.png'
import cover3 from '../../assets/img/story-cover-3.png'
import cover4 from '../../assets/img/story-cover-4.png'

class Story extends React.Component {
    render() {
        return (
            <div className="story">
                <Header />
                <section className="content clearfix">
                    <a className="story-link" href="/story/1">
                        <img src={cover1} alt=""/>
                    </a>
                    <a className="story-link" href="/story/2">
                        <img src={cover2} alt=""/>
                    </a>
                    <a className="story-link" href="/story/3">
                        <img src={cover3} alt=""/>
                    </a>
                    <a className="story-link" href="/story/4">
                        <img src={cover4} alt=""/>
                    </a>
                </section>
                <a className="download-link" href="/download">
                    <section className="content">   
                        The four stories are connected to the key points 
                        that help children to understand DESIGN and 
                        CRITIQUE, meanwhile lead to the workshop activities.
                    </section>
                </a>
                <footer className="footer">
                    <img src={footerGIF} />
                </footer>
            </div>
        )
    }
}

export default Story