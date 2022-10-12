import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import GetJobContent from './GetJobContent'
import GetJobHeader from './GetJobHeader'

function GetJobPage() {
  return (
    <>
    <div class="container-xxl bg-white p-0">
    <Navbar/>
    <GetJobHeader/>
    <GetJobContent/>
    <Footer/>
    </div>
    </>
  )
}

export default GetJobPage