import React from 'react'
import UserNavbar from './UserNavbar'
import Footer from '../Footer'
import Categories_card from '../Categories_card'
import JobListContent from '../JobListContent'

function Homepage() {
  return (
    <>
      <div class="container-xxl bg-white p-0">
        <UserNavbar/>
        <Categories_card/>
        <JobListContent jobName1="Software Developer" jobName2="Marketing Manager" jobName3="Product Designer" jobName4="Creative Director" jobName5="Wordpress Developer"/>
  


        <Footer/>
      </div>
    </>
  )
}

export default Homepage