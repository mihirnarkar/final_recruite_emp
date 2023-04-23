import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import SingleJobs from './user/SingleJobs';

function JobListContent() {

    const [jobs, setJobs] = useState({
        id: 0,
        jobname: "",
        companyemail: "",
        exp: "",
        jobcategory: "",
        jobdesc: ""
      });
    
    
      useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/fetchpostjob").then((res) =>
          res.json().then((jobs) => {
            // Setting a data from api
            setJobs({
              jobname: jobs.jobname,
              companyemail: jobs.companyemail,
              exp: jobs.exp,
              jobcategory: jobs.jobcategory,
              jobdesc: jobs.jobdesc,
            });
          })
        );
      }, []);

  return (
    <>
    {/* Job start */}
    <div className="container-xxl py-5">
            <div className="container">
                <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <Link className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill"
                                to="#tab-1">
                                <h6 className="mt-n1 mb-0">Featured</h6>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill"
                                to="#tab-2">
                                <h6 className="mt-n1 mb-0">Full Time</h6>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill"
                                to="#tab-3">
                                <h6 className="mt-n1 mb-0">Part Time</h6>
                            </Link>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">



                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-1.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            {/* <h5 className="mb-3">{data.job_name}</h5> */}
                                            <h5 className="mb-3">{jobs.jobname}</h5>
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>{jobs.companyemail}</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail1">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div>

                            {/* Job 2 */}
                            {/* <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-2.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3">{props.jobName2}</h5>
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail2">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div> */}

                            {/* Job 3 */}
                            {/* <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-3.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3">{props.jobName3}</h5>
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail3">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div> */}

                            {/* Job 4 */}
                            {/* <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-4.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3">{props.jobName4}</h5>
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail4">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div> */}

                            {/* Job 5 */}
                            {/* <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-5.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            <h5 className="mb-3">{props.jobName5}</h5>
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail5">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div> */}

                
                            <Link className="btn btn-secondary py-3 px-5" to="">Browse More Jobs</Link>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-1.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            {/* <h5 className="mb-3">{props.jobName1}</h5> */}
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail1">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-2.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            {/* <h5 className="mb-3">{props.jobName2}</h5> */}
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail2">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-3.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            {/* <h5 className="mb-3">{props.jobName3}</h5> */}
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail3">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-4.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            {/* <h5 className="mb-3">{props.jobName4}</h5> */}
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail4">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-5.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            {/* <h5 className="mb-3">{props.jobName5}</h5> */}
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail5">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div>
                            <Link className="btn btn-secondary py-3 px-5" to="">Browse More Jobs</Link>
                        </div>
                        <div id="tab-3" className="tab-pane fade show p-0">
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-1.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            {/* <h5 className="mb-3">{props.jobName1}</h5> */}
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail1">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-2.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            {/* <h5 className="mb-3">{props.jobName2}</h5> */}
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail2">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-3.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            {/* <h5 className="mb-3">{props.jobName3}</h5> */}
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail3">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-4.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            {/* <h5 className="mb-3">{props.jobName4}</h5> */}
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail4">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div>
                            <div className="job-item p-4 mb-4">
                                <div className="row g-4">
                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-5.jpg"
                                            alt="" />
                                        <div className="text-start ps-4">
                                            {/* <h5 className="mb-3">{props.jobName5}</h5> */}
                                            <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>New York,
                                                USA</span>
                                            <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                            <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>$123 -
                                                $456</span>
                                        </div>
                                    </div>
                                    <div
                                        className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div className="d-flex mb-3">
                                            <Link className="btn btn-light btn-square me-3" to=""><i
                                                    className="far fa-heart text-secondary"></i></Link>
                                            <Link className="btn btn-secondary" to="/JobDetail5">View details</Link>
                                        </div>
                                        <small className="text-truncate"><i
                                                className="far fa-calendar-alt text-secondary me-2"></i>Date Line: 01 Jan,
                                            2045</small>
                                    </div>
                                </div>
                            </div>
                            <Link className="btn btn-secondary py-3 px-5" to="">Browse More Jobs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/* Job end */}
    </>
  )
}

export default JobListContent