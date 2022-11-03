import React from 'react'
import UserNavbar from './UserNavbar'
import Footer from '../Footer'
import Categories_card from '../Categories_card'
import JobListContent from '../JobListContent'
import Search from '../Search'
import ApplicationSummaryCard from './ApplicationSummaryCard'
import RecruitersMssg from './RecruitersMssg'

function Homepage() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
        <UserNavbar/>
        <h3 className="mb-4 me-5 ms-3 my-5 wow fadeInUp" data-wow-delay="0.1s">Search Jobs</h3>
        <Search/>
        <Categories_card/>
        <JobListContent jobName1="Software Developer" jobName2="Marketing Manager" jobName3="Product Designer" jobName4="Creative Director" jobName5="Wordpress Developer"/>
        <ApplicationSummaryCard/>
        <RecruitersMssg/>
        <Footer/>
      </div>
    </>
  )
}

export default Homepage