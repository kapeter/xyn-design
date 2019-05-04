import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './index.less'

class Header extends React.Component {
    render() {
        return (
            <header className="header clearfix">
                <div className="logo">
                    <Link to="/" className="logo-link"></Link>
                </div>
                <nav className="nav">
                    <NavLink to="/character" className="link character-link"></NavLink>
                    <NavLink to="/story" className="link story-link"></NavLink>
                    <NavLink to="/activity" className="link activity-link"></NavLink>
                    <NavLink to="/contact" className="link contact-link"></NavLink>
                </nav>
            </header>
        )
    }
}

export default Header