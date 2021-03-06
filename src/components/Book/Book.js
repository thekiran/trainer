import React from 'react'
import gsap from 'gsap'

import './book.css'
import bookImg from './img/book-img-op.webp'
// import bookImg from './bookimg.svg'
import bookImg2 from './img/book2-img-op.webp'
import wrkImg from './img/wrk-op.webp'
import app from './img/app-op2.webp'

const Book = () => {
  const bookImgRef = React.useRef(null)
  const booktitleRef = React.useRef(null)
  const bookText = React.useRef(null)

  const buildImgRef = React.useRef(null)
  const buildtitleRef = React.useRef(null)
  const buildText = React.useRef(null)

  const quotitleRef = React.useRef(null)
  const quoText = React.useRef(null)

  const [img,setImg] = React.useState(false)
  React.useEffect(() => {
    const img = new Image();
    img.onload = () => {
      // when it finishes loading, update the component state
      setImg(true)
    }
    img.src = bookImg; // by setting an src, you trigger browser download
  
    gsap.from(booktitleRef.current, {
      x: -300,
      scale: 0,
      duration: 0.4,
      scrollTrigger: bookText.current,
    })

    gsap.from(bookText.current, {
      x: -400,
      scale: 0,
      duration: 0.4,
      scrollTrigger: bookText.current,
    })

    gsap.from(bookImgRef.current, {
      x: 0,
      opacity: 0,
      duration: 2,
      scrollTrigger: bookText.current,
    })

    gsap.from(buildtitleRef.current, {
      x: 300,
      scale: 0,
      duration: 0.4,
      scrollTrigger: buildtitleRef.current,
    })

    gsap.from(buildText.current, {
      x: 400,
      scale: 0,
      duration: 0.4,
      scrollTrigger: buildText.current,
    })

    gsap.from(buildImgRef.current, {
      x: 0,
      opacity: 0,
      duration: 2,
      scrollTrigger: buildImgRef.current,
    })

    gsap.from(quotitleRef.current, {
      x: -200,
      duration: 0.5,
      scrollTrigger: quotitleRef.current,
    })

    gsap.from(quoText.current, {
      x: 50,
      duration: 2,
      scrollTrigger: quotitleRef.current,
    })
  }, [])
  return (
    <div className='book'>
      <div className='container'>
        <div className='book-content'>
          <h2 ref={booktitleRef}>
            Get <br /> <span className='red-text'>booked</span>
            <br /> solid
          </h2>
          <p ref={bookText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            debitis beatae sint repudiandae assumenda
          </p>
        </div>
        <div className='book-img' ref={bookImgRef}>
          {img && <img src={bookImg} loading="lazy" height="575" width="600" alt=""/>} 
        </div>
      </div>

      <div className='container'>
        <div className='book-img' ref={buildImgRef}>
          <img src={bookImg2} loading="lazy" height="575" width="600" alt='' />
        </div>
        <div className='book-content'>
          <h2 ref={buildtitleRef}>
            Build <br /> <span className='red-text'>relationships</span>
            <br />{' '}
          </h2>
          <p ref={buildText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
            debitis beatae sint repudiandae assumenda
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='book-content wrk' ref={quotitleRef}>
          <h2>
            Absolutely wonderful! I am <br />
            completely blown away. The <br />
            very best. I was amazed at <br />
            the quality of Fitness app.
          </h2>
          <p>- Josephine Austin</p>
        </div>
        <div className='book-img wrk' ref={quoText}>
          <img src={wrkImg} loading="lazy" height="575" width="600" alt='' />
        </div>
      </div>
      <div className='ap'>
        <div className='app'>
          <img src={app} loading="lazy" alt='' />
        </div>
        <div className='app-content'>
          <h1>Download free app</h1>

          <div className='btn btn-light'>Get the app</div>
        </div>
      </div>
    </div>
  )
}

export default Book
