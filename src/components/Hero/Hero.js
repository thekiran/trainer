import React from 'react'

import gsap from 'gsap'
import './hero.css'
import heroImg from './img/ph-dash-1.png'
const Hero = () => {

    const heroRef = React.useRef(null)
    const titleRef = React.useRef(null)
    const redText = React.useRef(null)

    React.useEffect(()=>{ 
        gsap.from(heroRef.current,{x:100,scale:0,duration:.3})

        gsap.from(".title",{y:10,opacity:0,stagger:.1,duration:.4,opacity:0})
    },[])
    return (
        <div className="main">
            <div className="main-content">
                <div className="main-text">
                <h1 className="main-title">
                    <span className="red-text title" ref={redText}>Train</span>
                    <span className="title" ref={titleRef}>  with</span>
                    <br/>  <span className="title" ref={titleRef}>the</span>
                    <span className="title" ref={titleRef}>best</span> 
                </h1>
                <a href="/training-site" className="btn btn-light title">
                    Get the app
                </a>
                </div>   
                <div className="main-img active" ref={heroRef}>
                    <img src={heroImg} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Hero
