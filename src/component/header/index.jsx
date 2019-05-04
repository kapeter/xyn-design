import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'

class Header extends React.Component {
    render() {
        return (
            <header className="header clearfix">
                <div className="logo">
                </div>
                <nav className="nav">
                    <NavLink to="/character" className="link">Character</NavLink>
                    <NavLink to="/story" className="link">Story</NavLink>
                    <NavLink to="/activity" className="link">Activity</NavLink>
                    <NavLink to="/contact" className="link">Contact</NavLink>
                </nav>
            </header>
        )
    }
}

export default Header