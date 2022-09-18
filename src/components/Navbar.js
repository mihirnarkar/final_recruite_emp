import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            {/* Navbar starts */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <span>
                    <img src='/img/logo.gif' className='logo' />
                </span>
                    <h1 className="m-2 text-secondary "> RecruiteEmp</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">

                        <Link className="nav-item nav-link" to="/" >Home</Link> 
                        <Link to="/about" className="nav-item nav-link">About</Link>

                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/joblist" className="dropdown-item">Job List</Link>
                                <Link to="/jobdetail" className="dropdown-item">Job Detail</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/services" className="dropdown-item">Get a job</Link>
                            </div>
                        </div>

                        <Link to="course/course_homepage.html" className="nav-item nav-link">Course</Link>


                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/products/candidate_hiring.html" className="dropdown-item">Candidate Sourcing</Link>
                                <Link to="/products/ai_recommedention.html" className="dropdown-item">AI Recommedention</Link>
                                <Link to="/products/post_job.html" className="dropdown-item">Post Job</Link>
                                <Link to="/products/support.html" className="dropdown-item">Support Assistance</Link>
                            </div>
                        </div>
                        <Link to="/security/login.html" className="nav-item nav-link">Log In</Link>

                    </div>
                    <Link to="/security/signup.html" className="btn btn-secondary rounded-0 py-4 px-lg-5 d-none d-lg-block">Gets
                        started<i className="fa fa-arrow-right ms-3"></i></Link>
                </div>
            </nav>
            {/* Navbar ends */}

        </>
    )
}

export default Navbar