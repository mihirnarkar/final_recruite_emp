import React from 'react'
import Footer from '../Footer'
import UserNavbar from './UserNavbar'
import { Link } from 'react-router-dom'

function Resume() {
  return (
    <>
      <UserNavbar />
      <div className="container-xxl py-5">
        <h3>Upload your resume or create one</h3>
        <br />
        <center><a className="btn btn-primary" href="/Test/index.html">Create your resume</a></center>
        <br />
        <hr />
        <br />
        <center><Link className="btn btn-primary" to="/jobApplypage2">Upload</Link></center>
      </div>
      <Footer />
    </>
  )
}

export default Resume