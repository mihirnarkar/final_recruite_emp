import React from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import Search from './Search'
import Categories_card from './Categories_card'
import About from './about/About'
import Footer from './Footer'
import JobListContent from './JobListContent'
import BacktoTop from './BacktoTop'

function Home() {
  return (
    <> 
    <div class="container-xxl bg-white p-0">
    <Navbar title="RecruitEmp"/>
    <Carousel/>
    <Search/>
    <Categories_card/>
    <About/>
    <JobListContent jobName1="Software Developer" jobName2="Marketing Manager" jobName3="Product Designer" jobName4="Creative Director" jobName5="Wordpress Developer"/>
    <BacktoTop/>
    <Footer/>
    </div>
    </>
  )
}

export default Home