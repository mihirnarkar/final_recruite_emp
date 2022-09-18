import React from 'react'
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
    <Footer/>
    </>
  )
}

export default JobDetailPage