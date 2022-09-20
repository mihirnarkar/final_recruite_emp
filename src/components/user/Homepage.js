import React from 'react'
import UserNavbar from './UserNavbar'
import Footer from '../Footer'

function Homepage() {
  return (
    <>
      <div class="container-xxl bg-white p-0">
        <UserNavbar/>
        <div>Homepage</div>
        <Footer/>
      </div>
    </>
  )
}

export default Homepage