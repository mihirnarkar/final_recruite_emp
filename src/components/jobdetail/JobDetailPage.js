import React from 'react'
import BacktoTop from '../BacktoTop'
import Footer from '../Footer'
import Navbar from '../Navbar'
import JobDetailContent from './JobDetailContent'
import JobDetailHeader from './JobDetailHeader'

function JobDetailPage() {
  return (
    <>
    <Navbar/>
    <JobDetailHeader/>
    <JobDetailContent/>
    <BacktoTop/>
    <Footer/>
    </>
  )
}

export default JobDetailPage