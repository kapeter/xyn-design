import React from 'react'
import { Link } from 'react-router-dom'
import './index.less'

class Header extends React.Component {
    render() {
        return (
            <header className="header clearfix">
                <div className="logo">
                </div>
                <nav className="nav">
                    <Link to="/character" className="link">Character</Link>
                    <Link to="/story" className="link">Story</Link>
                    <Link to="/activity" className="link">Activity</Link>
                    <Link to="/contact" className="link">Contact</Link>
                </nav>
            </header>
        )
    }
}

export default Header