import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import JobListHeader from './JobListHeader'
import JobListContent from './JobListContent'
import BacktoTop from './BacktoTop'

function JobListPage() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    <Navbar title="RecruitEmp"/>
    <JobListHeader/>
    <JobListContent jobName1="Software Developer" jobName2="Marketing Manager" jobName3="Product Designer" jobName4="Creative Director" jobName5="Wordpress Developer"/>
    <BacktoTop/>
    <Footer/>
    </div>
    </>
  )
}

export default JobListPage