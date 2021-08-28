import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Discover from '../../components/Discover/Discover'
// import Book from '../../components/Book/Book'
// import Brands from '../../components/Brands/brands'
// import Footer from '../../components/Footer/Footer'
 

// import { showBrands } from '../../Lazyloading/LazyLoadingFunctions'
import { LazyBrand } from '../../Lazyloading/Triggers/LazyBrand'
import { LazyBook } from '../../Lazyloading/Triggers/LazyBook'
import  LazyFooter  from '../../Lazyloading/Triggers/LazyFooter'
// const Brands = lazy(() => import('../../components/Brands/brands'))
// const Book = lazy(() => import('../../components/Book/Book'))
// const Footer = lazy(() => import('../../components/Footer/Footer'))



const Home = () => {


  // const [target, setTarget] = React.useState(false)


  // const observer = React.useRef(
	// 	new IntersectionObserver(
	// 		(entries) => {
	// 			if (entries[0].isIntersecting) {
          
  //         setTimeout(() => {
  //           setTarget(true)
  //           console.log(entries[0])
  //           // entries[0].target.style.background = "red"
  //           entries[0].target.style.height = 0
            
  //         }, 0)

	// 			// } else {
          
	// 			}
	// 		},
	// 		{
  //     // root: document.querySelector('.footer-space'),
	// 			rootMargin: '250px',
	// 			// threshold: 1
	// 		}
	// 	)
	// )
  
  // React.useEffect(() => {
  //   const node = document.querySelector('.targetforbrands')
  //   if(observer.current && node !== null)  observer.current.observe(node)
  // })

	// eslint-disable-next-line
	// const rev = React.useCallback((node) => {
		
	// 	if(observer.current && node !== null)  observer.current.observe(node)
	// }) 




  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Discover />



      <LazyBrand />
      <LazyBook />
      <LazyFooter />

      {/* <Brands /> */}
      {/* <Book /> */}
      {/* <Footer /> */}
     


     {/* <div //ref={rev} 
     className="targetforbrands" style={{height:"230px",background:"rgba(0,0,0,.25)"}} /> */}
     
          {/* { target && <div className="target-cover" style={{height:"230px",background:"rgba(255,0,0,.25)"}}> { showBrands() } </div>} */}
   
      {/* <LazyLoadComponent>
              <Suspense fallback={<div>Loading...</div>}>
                      <Fragment>
                              <Brands />
                              <Book />
                              <Footer />
                      </Fragment>
              </Suspense>
      </LazyLoadComponent> */}
      <div className='space'></div>
    </React.Fragment>
  )
}

export default Home
