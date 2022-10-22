import React from 'react'
import BacktoTop from './BacktoTop'
import Footer from './Footer'
import Navbar from './Navbar'
import JobDetailContent from './JobDetailContent'
import JobDetailHeader from './JobDetailHeader'

function JobDetailPageCat1() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    <Navbar title="RecruiteEmp"/>
    <JobDetailHeader/>
    <JobDetailContent jobName="Software Developer"/>
    <BacktoTop/>
    <Footer/>
    </div>
    </>
  )
}

export default JobDetailPageCat1