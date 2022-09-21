import React from 'react'
import { Link } from 'react-router-dom'

function UserNavbar() {
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <Link to="/index.html" className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                    <h1 className="m-0 text-secondary usernavbar1"> <span><img src="/img/logo.gif" alt="Computer man" className='logo' /></span>RecruitEmp</h1>
                </Link>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <Link to="/" className="nav-item nav-link">Home</Link>
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
                                <Link to="/services/resume.html" className="dropdown-item">Build your resume</Link>
                            </div>
                        </div>

                        <Link to="/course/course_homepage.html" className="nav-item nav-link">Course</Link>
                        <Link to="../discussion.html" className="nav-item nav-link">FAQ</Link>

                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/products/candidate_hiring.html" className="dropdown-item">Candidate Sourcing</Link>
                                <Link to="/products/ai_recommedention.html" className="dropdown-item">AI Recommedention</Link>
                                <Link to="/products/post_job.html" className="dropdown-item">Post Job</Link>
                                <Link to="/products/support.html" className="dropdown-item">Support & Assistance</Link>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <i className="fa fa-user-circle usernavbar2"></i> User
                            </Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/resume" className="dropdown-item">Your Resume</Link>
                                <Link to="/trackapp" className="dropdown-item">Track application</Link>

                                <div>
                                    <Link className="nav-link dropdown-toggle" to="account.html" id="navbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        More
                                    </Link>
                                </div>

                                <Link to="/" className="dropdown-item">Log Out</Link>


                                <div>
                                    <Link className="nav-link dropdown-toggle" to="account.html" id="navbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Manage account
                                    </Link>
                                </div>

                                <Link className="dropdown-item" to="/viewaccount">View account</Link>
                                <Link className="dropdown-item" to="/changePassword">Change password</Link>
                                <Link className="dropdown-item" to="/changeemail">Change email</Link>
                                <Link className="dropdown-item" to="/deleteaccount">Delete account</Link>
                            </div>
                        </div>
                    </div>

                    <Link to="../services/resume.html"
                        className="btn btn-secondary rounded-0 py-4 px-lg-3 d-none d-lg-block">Resume<i
                            className="fa fa-arrow-right ms-3"></i></Link>

                </div>
            </nav>

        </>
    )
}

export default UserNavbar