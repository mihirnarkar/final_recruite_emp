import React from 'react'
import Footer from '../Footer'
import GetJobContent from './GetJobContent'
import GetJobHeader from './GetJobHeader'
import UserNavbar from '../user/UserNavbar'

function GetJobPage() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    <UserNavbar/>
    <GetJobHeader/>
    <GetJobContent/>
    <Footer/>
    </div>
    </>
  )
}

export default GetJobPage