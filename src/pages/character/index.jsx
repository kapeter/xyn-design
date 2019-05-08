import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../component/header'
import Dialog from '../../component/dialog'
import './index.less'

import allBg from './img/bg.png'
import arrow from '../../assets/img/gray-arrow.gif'


const characterDesc = [
    "Mike is 7 years old. The other kids call him Mr.Mistake, because he often makes mistakes. Mike  he was born with a genetic disease which made him forgetful, a bit slow and unable to focus.",
    "Little Right and Little Wrong are good friends. Even they love each other, sometimes they also fight and argue, just like a lot of you. They Believe they will be best friends forever. ",
    "Ela is a design consultant who has a lot of knowledge. People bring their concept to Ela and ask for opinions. No matter what kind of people came with whatever kind of work, Ela could always give them really nice and helpful suggestions.",
    "Little Right and Little Wrong are good friends. Even they love each other, sometimes they also fight and argue, just like a lot of you. They Believe they will be best friends forever. ",
    "ChiChi is a teaching assistant of Dr.Design. ChiChi will always be there whenever you need help. PS. She is really critical and likes to ask you a lot of questions. ",
    "Dakota is a positive and outgoing kid, who is kind to everyone and tries to make everyone happy. ",
    "Dr.Design is a designer and also a teacher. Dr.Desgin is really good at teaching kids how to come up ideas and create beautiful things.",
    "Blossom is a hard-working design student, who has a lot crazy ideas. Blossom enjoys building things  and listening other’s view about the design work. "
];

const characterPic = [
    require("./img/content-1.png"),
    require("./img/content-2.png"),
    require("./img/content-3.png"),
    require("./img/content-4.png"),
    require("./img/content-5.png"),
    require("./img/content-6.png"),
    require("./img/content-7.png"),
    require("./img/content-8.png")
]

class Character extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: {},
            visible: false
        }
    }

    handleClick(id) {
        this.setState({
            visible: true,
            current: {
                image: characterPic[id - 1],
                desc: characterDesc[id - 1]
            }
        })
    }

    render() {
        const { current, visible } = this.state;

        return (
            <div className="character">
                <Header />
                <section className="content">
                    <img src={allBg} className="all-bg"/>
                    <p className="tip">Click on us to know more!</p>
                    <img 
                        onClick={() => this.handleClick(1)}
                        src={require("./img/hover-1.png")}  
                        className="hover-img"
                        style={{
                            width: 108,
                            height: 142,
                            left: 381,
                            top: 539
                        }}
                    />
                    <img 
                        onClick={() => this.handleClick(2)}
                        src={require("./img/hover-2.png")}  
                        className="hover-img"
                        style={{
                            width: 140,
                            height: 147,
                            left: 608,
                            top: 328
                        }}
                    />
                    <img 
                        onClick={() => this.handleClick(3)}
                        src={require("./img/hover-3.png")}  
                        className="hover-img"
                        style={{
                            width: 111,
                            height: 163,
                            left: 867,
                            top: 324
                        }}
                    />

                    <img 
                        onClick={() => this.handleClick(4)}
                        src={require("./img/hover-4.png")}  
                        className="hover-img"
                        style={{
                            width: 164,
                            height: 153,
                            left: 453,
                            top: 440
                        }}
                    />

                    <img 
                        onClick={() => this.handleClick(5)}
                        src={require("./img/hover-5.png")}  
                        className="hover-img"
                        style={{
                            width: 156,
                            height: 209,
                            left: 700,
                            top: 386
                        }}
                    />

                    <img 
                        onClick={() => this.handleClick(6)}
                        src={require("./img/hover-6.png")}  
                        className="hover-img"
                        style={{
                            width: 134,
                            height: 160,
                            left: 870,
                            top: 525
                        }}
                    />

                    <img 
                        onClick={() => this.handleClick(7)}
                        src={require("./img/hover-7.png")}  
                        className="hover-img"
                        style={{
                            width: 207,
                            height: 218,
                            left: 230,
                            top: 303
                        }}
                    />

                    <img 
                        onClick={() => this.handleClick(8)}
                        src={require("./img/hover-8.png")}  
                        className="hover-img"
                        style={{
                            width: 148,
                            height: 171,
                            left: 169,
                            top: 492
                        }}
                    />
                </section>
                <footer className="footer">
                    <Link className="footer-link" to="/story">
                        <img src={arrow} />
                        <span>Go to <br />Story</span>
                    </Link>
                </footer>

                {
                    current.image &&
                    <Dialog visible={visible} onClose={() => this.setState({ visible: false }) }>
                        <div className="character-box">
                            <div className="pic">
                                <img src={current.image} />
                            </div>
                            <div className="desc">
                                <p>{current.desc}</p>
                            </div>
                        </div>
                    </Dialog>                
                }
            </div>
        )
    }
}

export default Character