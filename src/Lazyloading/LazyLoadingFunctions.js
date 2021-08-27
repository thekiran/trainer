import React from 'react'


export const showBrands = () => {

    const Brands = React.lazy(() => import('../components/Brands/brands'))
  
    // console.log(Brands)
  
    return <React.Fragment>
      <React.Suspense fallback={<div/>}>
            <Brands />
      </React.Suspense>
    </React.Fragment>
}

