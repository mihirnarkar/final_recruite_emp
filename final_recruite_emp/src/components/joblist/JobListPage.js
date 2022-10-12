import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import JobListHeader from './JobListHeader'
import JobListContent from './JobListContent'
import BacktoTop from '../BacktoTop'

function JobListPage() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    <Navbar/>
    <JobListHeader/>
    <JobListContent/>
    <BacktoTop/>
    <Footer/>
    </div>
    </>
  )
}

export default JobListPage