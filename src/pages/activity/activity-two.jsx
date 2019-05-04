import React from 'react'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-2.gif'

class ActivityTwo extends React.Component {
    render() {
        return (
            <div className="activity-content activity-two">
                <Header />
                one
                <footer className="footer">
                    <img src={footerGIF} />
                </footer>
            </div>
        )
    }
}

export default ActivityTwo