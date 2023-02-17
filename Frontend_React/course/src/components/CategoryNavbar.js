import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryNavbar(props) {
  return (
    <>
    <div class="container-fluid position-relative p-0">
        <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
            <Link to="/index.html" class="navbar-brand p-0"> 
                {/* <!-- <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>recruiteEMP</h1> --> */}
                <h1 class="m-0"> <img src="/img/logo.gif" alt="Computer man" style={{height:"60px",width:"60px"}}/> RecruitEmp</h1>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="fa fa-bars"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto py-0">
                    <Link to="/" class="nav-item nav-link active">Home</Link>
                    <div class="nav-item dropdown">
                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Category</Link>
                        <div class="dropdown-menu m-0">
                            <Link to="/architecture" class="dropdown-item">Architecture</Link>
                            <Link to="/business" class="dropdown-item">Business</Link>
                            <Link to="/datascience" class="dropdown-item">Data science</Link>
                            <Link to="/designing" class="dropdown-item">Design</Link>
                            <Link to="/programming" class="dropdown-item">Programming</Link>
                        </div>
                    </div>
                    {/* <div class="nav-item dropdown">
                        <Link to="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">login</Link>
                        <div class="dropdown-menu m-0">
                            <Link to="/security/login.html" class="dropdown-item">Logout</Link>                    
                        </div>
                    </div> */}
                </div>
                {/* <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal"
                    data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
                <Link to="../security/signup.html" class="btn btn-primary py-2 px-4 ms-3">Sign Up</Link> */}
                <div className="container">
                    
                </div>
            </div>
        </nav> 

        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    {/* <!-- <img class="w-100" src="../img/carousel-1.jpg" alt="Image"> --> */}
                    <img class="w-100" src={props.path} alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3 CategoryNavbar">
                            <h5 class="text-white text-uppercase mb-3 animated slideInDown">{props.courseName}</h5>
                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">{props.courseDesc}
                            </h1>
                            <Link to="quote.html"
                                class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Enrolled</Link>
                            <Link to="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact
                                Us</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    </>
  )
}
