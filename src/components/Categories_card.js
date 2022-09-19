import React from "react";
import { Link } from 'react-router-dom'

function Categories_card() {
  return  (

<>

<h1>testing firebase ci/cd</h1>

{/* <!-- Category Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-mail-bulk text-secondary mb-4"></i>
                            <h6 className="mb-3">Marketing</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-headset text-secondary mb-4"></i>
                            <h6 className="mb-3">Customer Service</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-user-tie text-secondary mb-4"></i>
                            <h6 className="mb-3">Human Resource</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-tasks text-secondary mb-4"></i>
                            <h6 className="mb-3">Project Management</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-chart-line text-secondary mb-4"></i>
                            <h6 className="mb-3">Business Development</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-hands-helping text-secondary mb-4"></i>
                            <h6 className="mb-3">Sales & Communication</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-book-reader text-secondary mb-4"></i>
                            <h6 className="mb-3">Teaching & Education</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-drafting-compass text-secondary mb-4"></i>
                            <h6 className="mb-3">Design & Creative</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>


                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-tasks text-secondary mb-4"></i>
                            <h6 className="mb-3">Project Management</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-chart-line text-secondary mb-4"></i>
                            <h6 className="mb-3">Business Development</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-tasks text-secondary mb-4"></i>
                            <h6 className="mb-3">Project Management</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Link className="cat-item rounded p-4" to="services/job_category.html">
                            <i className="fa fa-3x fa-chart-line text-secondary mb-4"></i>
                            <h6 className="mb-3">Business Development</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>

                </div>
            </div>
        </div> 
        {/* <!-- Category End --> */}

</>

  )
  
  
 
}

export default Categories_card
