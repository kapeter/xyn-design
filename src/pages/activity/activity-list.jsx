import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-1.gif'
import cover1 from './img/act-cover-1.png'
import cover2 from './img/act-cover-2.png'
import cover3 from './img/act-cover-3.png'
import cover4 from './img/act-cover-4.png'


class ActivityList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="activity">
                <Header />
            
                <section className="content clearfix">
                    <Link className="activity-link" to="/activity/1">
                        <img src={cover1} alt=""/>
                    </Link>
                    <Link className="activity-link" to="/activity/2">
                        <img src={cover2} alt=""/>
                    </Link>
                    <Link className="activity-link" to="/activity/3">
                        <img src={cover3} alt=""/>
                    </Link>
                    <Link className="activity-link" to="/activity/4">
                        <img src={cover4} alt=""/>
                    </Link>
                </section>
                <Link className="download-link" to="/download">
                    <section className="content">   
                        In this section, the screen is optional. As the workshop organizer, you can take the 
                        dialogue from characters as reference and show to the kids. You could also perform 
                        and improvise with your own understandings.  You will find physical materials in the 
                        link below or the bottom of every activity pages.
                    </section>
                </Link>
                <footer className="footer">
                    <img src={footerGIF} />
                </footer>
            </div>
        )
    }
}

export default ActivityList