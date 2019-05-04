import React from 'react'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-1.gif'
import cover1 from '../../assets/img/act-cover-1.png'
import cover2 from '../../assets/img/act-cover-2.png'
import cover3 from '../../assets/img/act-cover-3.png'
import cover4 from '../../assets/img/act-cover-4.png'


class Activity extends React.Component {
    render() {
        return (
            <div className="activity">
                <Header />
            
                <section className="content clearfix">
                    <a className="activity-link" href="/activity/1">
                        <img src={cover1} alt=""/>
                    </a>
                    <a className="activity-link" href="/activity/2">
                        <img src={cover2} alt=""/>
                    </a>
                    <a className="activity-link" href="/activity/3">
                        <img src={cover3} alt=""/>
                    </a>
                    <a className="activity-link" href="/activity/4">
                        <img src={cover4} alt=""/>
                    </a>
                </section>
                <a className="download-link" href="/download">
                    <section className="content">   
                        In this section, the screen is optional. As the workshop organizer, you can take the 
                        dialogue from characters as reference and show to the kids. You could also perform 
                        and improvise with your own understandings.  You will find physical materials in the 
                        link below or the bottom of every activity pages.
                    </section>
                </a>
                <footer className="footer">
                    <img src={footerGIF} />
                </footer>
            </div>
        )
    }
}

export default Activity