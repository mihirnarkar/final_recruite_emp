import React from "react";
import { Link } from 'react-router-dom'

function Categories_card() {
  return  (

    <>

    {/* <!-- Category Start --> */}
        <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
                <div className="row g-4">
                    
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <Link className="cat-item rounded p-4" to="/marketing">
                            <i className="fa fa-3x fa-headset text-secondary mb-4"></i>
                            <h6 className="mb-3">Marketing</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p> 
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <Link className="cat-item rounded p-4" to="/hr_jobs">
                            <i className="fa fa-3x fa-user-tie text-secondary mb-4"></i>
                            <h6 className="mb-3">HR Jobs</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <Link className="cat-item rounded p-4" to="/computer_science_jobs">
                            <i className="fa fa-3x fa-tasks text-secondary mb-4"></i>
                            <h6 className="mb-3">Computer Science Jobs</h6>
                            <p className="mb-0 text-secondary">123 Vacancy</p>
                        </Link>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <Link className="cat-item rounded p-4" to="/data_science">
                            <i className="fa fa-3x fa-chart-line text-secondary mb-4"></i>
                            <h6 className="mb-3">Data Science Jobs</h6>
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
