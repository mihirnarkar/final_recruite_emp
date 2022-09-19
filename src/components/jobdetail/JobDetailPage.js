import React from 'react'
import BacktoTop from '../BacktoTop'
import Footer from '../Footer'
import Navbar from '../Navbar'
import JobDetailContent from './JobDetailContent'
import JobDetailHeader from './JobDetailHeader'

function JobDetailPage() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    <Navbar/>
    <JobDetailHeader/>
    <JobDetailContent/>
    <BacktoTop/>
    <Footer/>
    </div>
    </>
  )
}

export default JobDetailPage