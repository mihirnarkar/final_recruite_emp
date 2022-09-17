import React from 'react'
import About from './About'
import Navbar from '../Navbar'
import Footer from '../Footer'
import AboutHeader from './AboutHeader'
import AboutApply from './AboutApply'
import AboutSevices from './AboutSevices'

function Aboutpage() {
  return (
    <>
    <Navbar/>
    <AboutHeader/>
    <About/>
    <AboutSevices/>
    <AboutApply/>
    <Footer/>
    </>
  )
}

export default Aboutpage