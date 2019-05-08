import React from 'react'
import Header from '../../component/header'
import './index.less'

import footerGIF from '../../assets/img/footer-2.gif'

class StoryThree extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="story-content story-three">
                <Header />
                one
                <footer className="footer">
                    <img src={footerGIF} />
                </footer>
            </div>
        )
    }
}

export default StoryThree