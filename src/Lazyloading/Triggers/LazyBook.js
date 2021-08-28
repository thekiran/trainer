import React from 'react';


export const showBooks = () => {

    const Books = React.lazy(() => import('../../components/Book/Book'))
  
    return <React.Fragment>
      <React.Suspense fallback={<div/>}>
            <Books />
      </React.Suspense>
    </React.Fragment>
}



export const LazyBook = () => {


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
        const node = document.querySelector('.targetforBooks')
        if(observer.current && node !== null)  observer.current.observe(node)
      })


        return (
          <React.Fragment>

              <div className="targetforBooks" style={{minHeight:"2510px",background:"rgba(0,0,0,.25)"}} />
              
              { target && <div className="brand-cover" style={{minHeight:"2510px",background:"rgba(255,0,0,.25)"}}> { showBooks() } </div>}  
        
          </React.Fragment>
        )

    }
  
    
 