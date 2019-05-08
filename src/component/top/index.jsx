import React from 'react'
import './index.less'

let timer = null;

class Top extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false
        }
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

            timer = setTimeout(() => {
                this.setState({
                    isActive: scrollPos > 500
                })
            }, 200);
        });
    }
    
    componentWillUnmount(){
        clearTimeout(timer);
    }
    
    render() {
        const {isActive} = this.state;

        return (
            <div className="go-to-top">
                <button type="button" className={`nes-btn is-error scroll-btn  ${isActive ? 'active' : ''}`} onClick={() => window.scrollTo({ top:0, behavior: 'smooth' })}>
                    <span>&lt;</span>
                </button>
            </div>
        )
    }
}

export default Top