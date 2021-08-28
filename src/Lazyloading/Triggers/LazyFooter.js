import React from 'react';


const showFooter = () => {

    const Footer = React.lazy(() => import('../../components/Footer/Footer'))
  
    return <React.Fragment>
      <React.Suspense fallback={<div/>}>
            <Footer />
      </React.Suspense>
    </React.Fragment>
}



const LazyFooter = () => {


  const [target, setTarget] = React.useState(false)

  const observer = React.useRef(
    		new IntersectionObserver(
    			(entries) => {
    				if (entries[0].isIntersecting) {
              
              setTimeout(() => {
                setTarget(true)
                // console.log(entries[0])
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
        const node = document.querySelector('.targetforFooter')
        if(observer.current && node !== null)  observer.current.observe(node)
      })


        return (
          <React.Fragment>

              <div className="targetforFooter" style={{minHeight:"250px",background:"rgba(0,0,0,.25)"}} />
              
              { target && <div className="footer-cover" style={{minHeight:"250px",background:"rgba(255,0,0,.25)"}}> { showFooter() } </div>}  
        
          </React.Fragment>
        )

    }
  
    
 
export default LazyFooter