import React from 'react'
import BacktoTop from './BacktoTop'
import Footer from './Footer'
import Navbar from './Navbar'
import JobDetailContent from './JobDetailContent'
import JobDetailHeader from './JobDetailHeader'

function JobDetailPageCat4() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    <Navbar title="RecruiteEmp"/>
    <JobDetailHeader/>
    <JobDetailContent jobName="Creative Director"/>
    <BacktoTop/>
    <Footer/>
    </div>
    </>
  )
}

export default JobDetailPageCat4