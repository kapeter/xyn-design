import React from 'react'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-1.gif'

class Activity extends React.Component {
    render() {
        return (
            <div className="activity">
                <Header />
            
                <section className="content"></section>
                <footer className="footer">
                    <img src={footerGIF} />
                </footer>
            </div>
        )
    }
}

export default Activity