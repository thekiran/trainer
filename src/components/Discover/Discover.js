import React from 'react'

import gsap from 'gsap'

import './discover.css'
// import bic from './img/train.webp'
import bic from './train.svg'
// import dark from './img/dark-bd.jpg'
const Discover = () => {
    const disTitle = React.useRef(null)
    const disPara = React.useRef(null)
    const disImg = React.useRef(null)

    React.useEffect(()=>{
        gsap.from(disTitle.current,{x:100,scale:0,duration:.3,scrollTrigger:{target:".dis-para"},})

        gsap.from(disPara.current,{x:100,scrollTrigger:'.dis-para', opacity:0,stagger:.1,duration:.4})
  
        gsap.from(disImg.current,{x:-100,scrollTrigger:'.bic',duration:.4,opacity:0})
  
    },[])
    return (
        <div className="discover">
            <div className="discover-content">
                <div className="dis-imgs">
                    <img src={bic} ref={disImg} loading="lazy" className="bic" alt=""/>
                    {/* <img src={dark} className="dark" alt=""/> */}  
                </div>
                <div className="dis-content">
                    <div className="dis-title">
                          <h2 ref={disTitle}>
                        <span className="red-text">Discover</span> <br/>
                          classes & <br/> Trainer 
                          </h2>
                    </div>
                    <div className="dis-para"> 
                        <p ref={disPara}> 
                             Lorem, ipsum dolor sit amet consectetur 
                             adipisicing elit. Non architecto nam perspiciatis laudantium dicta veritatis 
    </p>
                  </div>  </div>
            </div>
        </div>
    )
}

export default Discover
