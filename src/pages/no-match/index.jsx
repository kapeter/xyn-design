import React from 'react'
import Header from '../../component/header'
import './index.less'

class NoMatch extends React.Component {
    render() {
        return (
            <div className="no-match">
                <Header />
                <div className="error-box">
                    <h1>404</h1>
                    <p>PAGE NOT FOUND</p>
                </div>
            </div>
        )
    }
}

export default NoMatch