import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

function JobListContent() {

    const [jobs1, setJobs1] = useState({
        id: 0,
        jobname: "",
        companyemail: "",
        exp: "",
        jobcategory: "",
        jobdesc: ""
    });

    const [jobs2, setJobs2] = useState({
        id: 0,
        jobname: "",
        companyemail: "",
        exp: "",
        jobcategory: "",
        jobdesc: ""
    });

    const [jobs3, setJobs3] = useState({
        id: 0,
        jobname: "",
        companyemail: "",
        exp: "",
        jobcategory: "",
        jobdesc: ""
    });

    const [jobs4, setJobs4] = useState({
        id: 0,
        jobname: "",
        companyemail: "",
        exp: "",
        jobcategory: "",
        jobdesc: ""
    });

    const [jobs5, setJobs5] = useState({
        id: 0,
        jobname: "",
        companyemail: "",
        exp: "",
        jobcategory: "",
        jobdesc: ""
    });


    const [jobs6, setJobs6] = useState({
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
            res.json().then((jobs1) => {
                // Setting a data from api
                setJobs1({
                    jobname: jobs1.jobname,
                    companyemail: jobs1.companyemail,
                    exp: jobs1.exp,
                    jobcategory: jobs1.jobcategory,
                    jobdesc: jobs1.jobdesc,
                });
            })
        );
    }, []);

    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/fetchpostjob1").then((res) =>
            res.json().then((jobs2) => {
                // Setting a data from api
                setJobs2({
                    jobname: jobs2.jobname,
                    companyemail: jobs2.companyemail,
                    exp: jobs2.exp,
                    jobcategory: jobs2.jobcategory,
                    jobdesc: jobs2.jobdesc,
                });
            })
        );
    }, []);

    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/fetchpostjob2").then((res) =>
            res.json().then((jobs3) => {
                // Setting a data from api
                setJobs3({
                    jobname: jobs3.jobname,
                    companyemail: jobs3.companyemail,
                    exp: jobs3.exp,
                    jobcategory: jobs3.jobcategory,
                    jobdesc: jobs3.jobdesc,
                });
            })
        );
    }, []);


    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/fetchpostjob3").then((res) =>
            res.json().then((jobs4) => {
                // Setting a data from api
                setJobs4({
                    jobname: jobs4.jobname,
                    companyemail: jobs4.companyemail,
                    exp: jobs4.exp,
                    jobcategory: jobs4.jobcategory,
                    jobdesc: jobs4.jobdesc,
                });
            })
        );
    }, []);



    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/fetchpostjob4").then((res) =>
            res.json().then((jobs5) => {
                // Setting a data from api
                setJobs5({
                    jobname: jobs5.jobname,
                    companyemail: jobs5.companyemail,
                    exp: jobs5.exp,
                    jobcategory: jobs5.jobcategory,
                    jobdesc: jobs5.jobdesc,
                });
            })
        );
    }, []);


    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/fetchpostjob5").then((res) =>
            res.json().then((jobs6) => {
                // Setting a data from api
                setJobs6({
                    jobname: jobs6.jobname,
                    companyemail: jobs6.companyemail,
                    exp: jobs6.exp,
                    jobcategory: jobs6.jobcategory,
                    jobdesc: jobs6.jobdesc,
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
                                                <h5 className="mb-3">{jobs1.jobname}</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>{jobs1.companyemail}</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>{jobs1.jobcategory}</span>
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
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-1.jpg"
                                                alt="" />
                                            <div className="text-start ps-4">
                                                {/* <h5 className="mb-3">{data.job_name}</h5> */}
                                                <h5 className="mb-3">{jobs2.jobname}</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>{jobs2.companyemail}</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>{jobs2.jobcategory}</span>
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

                                {/* Job 3 */}
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-1.jpg"
                                                alt="" />
                                            <div className="text-start ps-4">
                                                {/* <h5 className="mb-3">{data.job_name}</h5> */}
                                                <h5 className="mb-3">{jobs3.jobname}</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>{jobs3.companyemail}</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>{jobs3.jobcategory}</span>
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

                                {/* Job 4 */}
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-1.jpg"
                                                alt="" />
                                            <div className="text-start ps-4">
                                                {/* <h5 className="mb-3">{data.job_name}</h5> */}
                                                <h5 className="mb-3">{jobs4.jobname}</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>{jobs4.companyemail}</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>{jobs4.jobcategory}</span>
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

                                {/* Job 5 */}
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-1.jpg"
                                                alt="" />
                                            <div className="text-start ps-4">
                                                {/* <h5 className="mb-3">{data.job_name}</h5> */}
                                                <h5 className="mb-3">{jobs5.jobname}</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>{jobs5.companyemail}</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>{jobs5.jobcategory}</span>
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


                                {/* Job 6 */}
                                <div className="job-item p-4 mb-4">
                                    <div className="row g-4">
                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid border rounded joblist" src="img/com-logo-1.jpg"
                                                alt="" />
                                            <div className="text-start ps-4">
                                                {/* <h5 className="mb-3">{data.job_name}</h5> */}
                                                <h5 className="mb-3">{jobs6.jobname}</h5>
                                                <span className="text-truncate me-3"><i
                                                    className="fa fa-map-marker-alt text-secondary me-2"></i>{jobs6.companyemail}</span>
                                                <span className="text-truncate me-3"><i
                                                    className="far fa-clock text-secondary me-2"></i>Full Time</span>
                                                <span className="text-truncate me-0"><i
                                                    className="far fa-money-bill-alt text-secondary me-2"></i>{jobs6.jobcategory}</span>
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