import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import JobListHeader from './JobListHeader'
import JobListContent from './JobListContent'

function JobListPage() {
  return (
    <>
    <Navbar/>
    <JobListHeader/>
    <JobListContent/>
    <Footer/>
    </>
  )
}

export default JobListPage