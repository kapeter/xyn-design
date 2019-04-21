import React from 'react'
import Header from '../../component/header'
import './index.less'

class Character extends React.Component {
    render() {
        return (
            <div className="character">
                <Header />
                <section className="content"></section>

                <footer className="footer">
                </footer>
            </div>
        )
    }
}

export default Character