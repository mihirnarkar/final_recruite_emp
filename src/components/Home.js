import React from 'react'
import Carousel from './Carousel'
import About from './About'
import Navbar from './Navbar'
import Search from './Search'
import Footer from './Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Search/>
    <About/>
    <Footer/>
    </>
  )
}

export default Home