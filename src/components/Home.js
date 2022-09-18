import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Search from './Search'
import Categories_card from './Categories_card'
import About from './about/About'
import Footer from './Footer'
import JobListContent from './joblist/JobListContent'
import BacktoTop from './BacktoTop'

function Home() {
  return (
    <> 
    <Navbar/>
    <Carousel/>
    <Search/>
    <Categories_card/>
    <About/>
    <JobListContent/>
    <BacktoTop/>
    <Footer/>
    </>
  )
}

export default Home