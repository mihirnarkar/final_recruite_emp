import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import UserNavbar from './user/UserNavbar'

function JobApplyPage1() {
  return (
    <>
    {/* <Navbar title="RecruitEmp"/> */}
    <UserNavbar/>
    
    {/* <h1>This is Job apply page 1</h1>
    <br/>
    <Link className="btn btn-primary" to="/jobAttemptTest">Attempt Test</Link>
    <br/>
    <hr/>
    <br/>
    <Link className="btn btn-primary" to="/jobApplypage2">Skip Test and continue</Link> */}


    <div className=".container-md m-5">
      <h3>Before you proceed we have added some basic test question related to your job</h3>
      <p className='text-primary'>Note: Attempting this test and gaining good marks will give you high probability to get selected</p>
    <br/>
    <center><a className="btn btn-primary" href="/Test/index.html">Attempt Test</a></center>
    <br/>
    <hr/>
    <br/>
    <center><Link className="btn btn-primary" to="/jobApplypage2">Skip Test and continue</Link></center>
    </div>

    <Footer/>
    </>
  )
}

export default JobApplyPage1