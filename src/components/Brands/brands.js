import React from 'react'
import gsap from 'gsap'
import { LazyLoadImage } from 'react-lazy-load-image-component';
 
import './brands.css'

import icon1 from './img/icon1op.jpg'
import icon2 from './img/Optimized-icon2.jpg'
import icon3 from './img/Optimized-icon3.jpg'
import icon4 from './img/Optimized-icon4.jpg'
import icon5 from './img/Optimized-icon5.jpg'
import icon6 from './img/Optimized-icon6.jpg'
import icon7 from './img/download.jpg'
import icon8 from './img/Optimized-icon8.jpg'

const Brands = () => {
    // const heroRef = React.useRef(null)
    // const titleRef = React.useRef(null)
    // const redText = React.useRef(null)

    React.useEffect(()=>{ 
        // gsap.from(heroRef.current,{x:100,scale:0,duration:.3})

        gsap.from(".brand-imgs",{y:10,
            opacity:0,stagger:.2,duration:.1,scrollTrigger:".brand-img1"})
    },[])

    return (
        <div className="brand-container">
            <div className="brand-content">
                <div className="brand-img1">
                    <LazyLoadImage effect="blur" src={icon1} alt="" loading="lazy" className="brand-img"/>
                </div>
                <div className="brand-img2">
                    <LazyLoadImage effect="blur" effect="blur" src={icon2} loading="lazy" className="brand-imgs" alt=""/>
                </div>
                <div className="brand-img3">
                    <LazyLoadImage effect="blur" src={icon3} loading="lazy" className="brand-imgs" alt=""/>
                </div>
                <div className="brand-img4">
                    <LazyLoadImage effect="blur" src={icon4} loading="lazy" className="brand-imgs" alt=""/>
                </div>
                <div className="brand-img5">
                    <LazyLoadImage effect="blur" src={icon5} loading="lazy" className="brand-imgs" alt=""/>
                </div>
                <div className="brand-img6">
                    <LazyLoadImage effect="blur" src={icon6} loading="lazy" className="brand-imgs" alt=""/>
                </div>
                <div className="brand-img7">
                    <LazyLoadImage effect="blur" src={icon7} loading="lazy" className="brand-imgs" alt=""/>
                </div>
                <div className="brand-img8">
                    <LazyLoadImage effect="blur" src={icon8} loading="lazy" className="brand-imgs" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Brands
