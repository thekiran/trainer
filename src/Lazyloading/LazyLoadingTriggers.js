import React from 'react';

import { showBrands } from './LazyLoadingFunctions'


export const LazyBrand = () => {


  const [target, setTarget] = React.useState(false)

  const observer = React.useRef(
    		new IntersectionObserver(
    			(entries) => {
    				if (entries[0].isIntersecting) {
              
              setTimeout(() => {
                setTarget(true)
                console.log(entries[0])
                // entries[0].target.style.background = "red"
                entries[0].target.style.height = 0
                
              }, 0)
    
    				// } else {
              
    				}
    			},
    			{
          // root: document.querySelector('.footer-space'),
    				rootMargin: '250px',
    				// threshold: 1
    			}
    		)
    	)
      React.useEffect(() => {
        const node = document.querySelector('.targetforbrands')
        if(observer.current && node !== null)  observer.current.observe(node)
      })


        return (
          <React.Fragment>

              <div //ref={rev} 
              className="targetforbrands" style={{height:"230px",background:"rgba(0,0,0,.25)"}} />
              
              { target && <div className="target-cover" style={{height:"230px",background:"rgba(255,0,0,.25)"}}> { showBrands() } </div>}  
        
          </React.Fragment>
        )

    }
  
    


// export let tar;

// export const brandTrigger = () => {
  
//   const [target, setTarget] = React.useState(false)
  
//   tar = target


//   const observer = React.useRef(
// 		new IntersectionObserver(
// 			(entries) => {
// 				if (entries[0].isIntersecting) {
          
//           setTimeout(() => {
//             setTarget(true)
//             console.log(entries[0])
//             // entries[0].target.style.background = "red"
//             entries[0].target.style.height = 0
            
//           }, 0)

// 				// } else {
          
// 				}
// 			},
// 			{
//       // root: document.querySelector('.footer-space'),
// 				rootMargin: '250px',
// 				// threshold: 1
// 			}
// 		)
// 	)
//   React.useEffect(() => {
//     const node = document.querySelector('.targetforbrands')
//     if(observer.current && node !== null)  observer.current.observe(node)
//   })

//   return <div />
// }

