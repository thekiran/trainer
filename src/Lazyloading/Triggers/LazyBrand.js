import React from 'react';

// import { showBrands } from './LazyLoadingFunctions'

export const showBrands = () => {

    const Brands = React.lazy(() => import('../../components/Brands/brands'))
  
    return <React.Fragment>
      <React.Suspense fallback={<div/>}>
            <Brands />
      </React.Suspense>
    </React.Fragment>
}



export const LazyBrand = () => {


  const [target, setTarget] = React.useState(false)

  const observer = React.useRef(
    		new IntersectionObserver(
    			(entries) => {
    				if (entries[0].isIntersecting) {
              
              setTimeout(() => {
                setTarget(true)
                console.log(entries[0])
                entries[0].target.style.minHeight = 0
                
              }, 0)
    				}
    			},
    			{
    				rootMargin: '250px',
    			}
    		)
    	)
      React.useEffect(() => {
        const node = document.querySelector('.targetforbrands')
        if(observer.current && node !== null)  observer.current.observe(node)
      })


        return (
          <React.Fragment>

              <div className="targetforbrands" style={{minHeight:"230px",background:"rgba(0,0,0,.25)"}} />
              
              { target && <div className="brand-cover" style={{minHeight:"230px",background:"rgba(255,0,0,.25)"}}> { showBrands() } </div>}  
        
          </React.Fragment>
        )

    }
  
    
 