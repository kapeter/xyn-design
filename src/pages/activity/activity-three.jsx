import React from 'react'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-2.gif'

class ActivityThree extends React.Component {
    render() {
        return (
            <div className="activity-content activity-three">
                <Header />
                one
                <footer className="footer">
                    <img src={footerGIF} />
                </footer>
            </div>
        )
    }
}

export default ActivityThree