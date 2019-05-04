import React from 'react'
import './index.less'

class Dialog extends React.Component {
    render() {
        const {visible, children, onClose} = this.props

        if (!visible) {
            document.body.style.overflow = 'auto'
            return null;
        } else {
            document.body.style.overflow = 'hidden'
        }

        return (
            <div className="dialog-warpper">
                <div className="nes-dialog is-dark is-rounded">
                    {children}
                    <div className="dialog-footer">
                        <button className="nes-btn is-error" onClick={onClose}>Close</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dialog