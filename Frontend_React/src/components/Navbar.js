import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <>
            {/* Navbar starts */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link to="/" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <span>
                    <img src='/img/logo.gif' className='logo' />
                </span>
                    <h1 className="m-2 text-secondary "> {props.title}</h1>
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
                                <Link to="/categories1" className='dropdown-item'>Development</Link>
                                <Link to="/categories2" className='dropdown-item'>Marketing</Link>
                                <Link to="/categories3" className='dropdown-item'>Designing</Link>
                                <Link to="/categories4" className='dropdown-item'>Creativity</Link>
                                <Link to="/categories5" className='dropdown-item'>Content-Writer</Link>
                                
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/services" className="dropdown-item">Get a job</Link>
                                <a href='/Resume_word_cloud' className="dropdown-item">Word Cloud</a>

                            </div>
                        </div>

                        <a href=" http://localhost:3001" target="_blank" className="nav-item nav-link">Course</a>


                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/candidatehiring" className="dropdown-item">Candidate Sourcing</Link>
                                <Link to="/AI_recommedention" className="dropdown-item">AI Recommedention</Link>
                                <Link to="/postjob" className="dropdown-item">Post Job</Link>
                                <Link to="/support" className="dropdown-item">Support Assistance</Link>
                            </div> 
                        </div>
                        <a href="/security/signin.html" className="nav-item nav-link">Log In</a>

                    </div>
                    <a href="/security/signup1.html" className="btn btn-secondary rounded-0 py-4 px-lg-5 d-none d-lg-block">Gets
                        started<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </nav>
            {/* Navbar ends */}

        </>
    )
}

export default Navbar