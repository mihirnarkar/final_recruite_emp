import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    
    {/* Navbar starts */}
    <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <Link to="/index.html" className="navbar-brand p-0">
                <h1 className="m-0"> <img src="/img/logo.gif" className='img' alt="Computer man"/> RecruitEmp</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                    <Link to="http://localhost:3000" className="nav-item nav-link active">Home</Link>
                    {/* <!-- <Link to="about.html" className="nav-item nav-link">About</Link> -->
                    <!-- <Link to="service.html" className="nav-item nav-link">Services</Link> --> */}
                    <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Category</Link>
                        <div className="dropdown-menu m-0">
                            <Link to="/architecture" className="dropdown-item">Architecture</Link>
                            <Link to="/business" className="dropdown-item">Business</Link>
                            <Link to="/datascience" className="dropdown-item">Data science</Link>
                            <Link to="/designing" className="dropdown-item">Design</Link>
                            <Link to="/programming" className="dropdown-item">Programming</Link>
                        </div>
                    </div>
                    {/* <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">login</Link>
                        <div className="dropdown-menu m-0">
                            <Link to="../security/login.html" className="dropdown-item">Logout</Link>                    
                        </div>
                    </div> */}
                </div>
                {/* <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal"
                    data-bs-target="#searchModal"><i className="fa fa-search"></i></butaton>
                <Link to="../security/signup.html" className="btn btn-primary py-2 px-4 ms-3">Sign Up</Link> */}
                <div className="container">
                    
                </div>
            </div>
        </nav>

        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/courseBg1.webp" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 headerCarousel">
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">recruite-EMP Courses</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Learn from best</h1>
                            <Link to="quote.html"
                                className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Enrolled</Link>
                            <Link to="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact
                                Us</Link>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3 carouselItem">
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Online certified trainings
                            </h5>
                            <h3 className="display-1 text-white mb-md-4 animated zoomIn">Enroll now</h3>
                            <Link to="quote.html"
                                className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Enrolled</Link>
                            <Link to="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact
                                Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    {/* Navbar ends */}
    </>
  )
}

