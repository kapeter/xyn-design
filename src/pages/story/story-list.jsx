import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-1.gif'
import cover1 from './img/story-cover-1.png'
import cover2 from './img/story-cover-2.png'
import cover3 from './img/story-cover-3.png'
import cover4 from './img/story-cover-4.png'

class StoryList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="story">
                <Header />
                <section className="content clearfix">
                    <Link className="story-link" to="/story/1">
                        <img src={cover1} alt=""/>
                    </Link>
                    <Link className="story-link" to="/story/2">
                        <img src={cover2} alt=""/>
                    </Link>
                    <Link className="story-link" to="/story/3">
                        <img src={cover3} alt=""/>
                    </Link>
                    <Link className="story-link" to="/story/4">
                        <img src={cover4} alt=""/>
                    </Link>
                </section>
                <div className="story-banner">
                    <section className="content">  
                        <p style={{width: 570}}>
                            The four stories are connected to the key points 
                            that help children to understand DESIGN and 
                            CRITIQUE, meanwhile lead to the workshop activities.
                        </p> 
                    </section>
                </div>
                <footer className="footer">
                    <img src={footerGIF} />
                </footer>
            </div>
        )
    }
}

export default StoryList