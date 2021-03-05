import { Fragment, lazy, Suspense } from 'react'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Discover from '../../components/Discover/Discover'

const Brands = lazy(() => import('../../components/Brands/brands'))
const Book = lazy(() => import('../../components/Book/Book'))
const Footer = lazy(() => import('../../components/Footer/Footer'))

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <Discover />
      <LazyLoadComponent>
              <Suspense fallback={<div>Loading...</div>}>
                      <Fragment>
                              <Brands />
                              <Book />
                              <Footer />
                      </Fragment>
              </Suspense>
      </LazyLoadComponent>
      <div className='space'></div>
    </Fragment>
  )
}

export default Home
