import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import GetJobContent from './GetJobContent'
import GetJobHeader from './GetJobHeader'

function GetJobPage() {
  return (
    <>
    <Navbar/>
    <GetJobHeader/>
    <GetJobContent/>
    <Footer/>
    </>
  )
}

export default GetJobPage