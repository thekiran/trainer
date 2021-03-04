import React from 'react'

import gsap from 'gsap'
import './hero.css'
import heroImg from './img/ph-dash-op(1).webp'

const Hero = () => {

    const heroRef = React.useRef(null)
    const titleRef = React.useRef(null)
    const redText = React.useRef(null)
    const [img, setImg] = React.useState(true)

    React.useEffect(()=>{ 
      
        if(window.innerWidth < 576){
            setImg(false)
            // console.log(img)
        } else {
            gsap.from(".main-img",{x:100,scale:0,duration:.3})
            gsap.from(".title",{y:30,opacity:0,stagger:.1,duration:.75})

        }
        // if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
        //     // some code..
        //     setImg(false)
        // }
    },[img])
    const showImg = () => {
        if(img){
            return( 
                <div className="main-img active" ref={heroRef}>
                 <img src={heroImg} loading="lazy" alt=""/>
                </div> )
             } else{
                return( 
                    <div ref={heroRef}>
                     {/* <img src={heroImg} loading="lazy" alt=""/> */}
                    </div> )
             }
    }
    return (
        <div className="main">
            <div className="main-content">
                <div className="main-text">
                <h1 className="main-title">
                    <span className="red-text title" ref={redText}>T</span>
                    <span className="red-text title">r</span>
                    <span className="red-text title">a</span>
                    <span className="red-text title">i</span>
                    <span className="red-text  title last">n</span>
                    <span className="title" ref={titleRef}>  with</span>
                    <br/> 
                     <span className="title sub" ref={titleRef}>the</span>
                    <span className="title sub" ref={titleRef}>best</span> 
                </h1>
                <a href="/training-site" className="btn btn-light title">
                    Get the app
                </a>
                </div> 
                {
                    showImg()
                   
                }  
                {/* <div className="main-img active" ref={heroRef}>
                    <img src={heroImg} loading="eager" alt=""/>
                </div> */}
            </div>
        </div>
    )
}

export default Hero
