import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import JobListHeader from './JobListHeader'
import JobListContent from './JobListContent'
import BacktoTop from '../BacktoTop'

function JobListPage() {
  return (
    <>
    <Navbar/>
    <JobListHeader/>
    <JobListContent/>
    <BacktoTop/>
    <Footer/>
    </>
  )
}

export default JobListPage