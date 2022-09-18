import React from 'react'
import About from './About'
import Navbar from '../Navbar'
import Footer from '../Footer'
import AboutHeader from './AboutHeader'
import AboutApply from './AboutApply'
import AboutSevices from './AboutSevices'
import BacktoTop from '../BacktoTop'

function Aboutpage() {
  return (
    <>
    <Navbar/>
    <AboutHeader/>
    <About/>
    <AboutSevices/>
    <AboutApply/>
    <BacktoTop/>
    <Footer/>
    </>
  )
}

export default Aboutpage