import React from 'react'
import { Link } from 'react-router-dom'

function JobDetailContent(props) {
    // const applyClick = () =>{

    // }
    return (
        <>
            {/* Job detail start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gy-5 gx-4">
                        <div className="col-lg-8">
                            <div className="d-flex align-items-center mb-5">
                                <img className="flex-shrink-0 img-fluid border rounded jobdetail" src="img/com-logo-2.jpg" alt="" />
                                <div className="text-start ps-4">
                                    <h3 className="mb-3">{props.jobName}</h3>
                                    <span className="text-truncate me-3"><i className="fa fa-map-marker-alt text-secondary me-2"></i>{props.jobLocation}</span>
                                    <span className="text-truncate me-3"><i className="far fa-clock text-secondary me-2"></i>{props.jobWorkTime}</span>
                                    <span className="text-truncate me-0"><i className="far fa-money-bill-alt text-secondary me-2"></i>{props.CTC}</span>
                                </div>
                            </div>

                            <div className="mb-5">
                                <h4 className="mb-3">Responsibility</h4>
                                <p>1. {props.jobResponsibility1}</p>
                                <p>2. {props.jobResponsibility2}</p>
                                <p>3. {props.jobResponsibility3}</p>
                                <p>4. {props.jobResponsibility4}</p>
                                <p>5. {props.jobResponsibility5}</p>
                                <h4 className="mb-3">Qualifications</h4>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-angle-right text-secondary me-2"></i>{props.jobQualification1}</li>
                                    <li><i className="fa fa-angle-right text-secondary me-2"></i>{props.jobQualification2}</li>
                                    <li><i className="fa fa-angle-right text-secondary me-2"></i>{props.jobQualification3}</li>
                                    <li><i className="fa fa-angle-right text-secondary me-2"></i>{props.jobQualification4}</li>
                                </ul>
                            </div>

                            <div className="mb-5">
                                <h4 className="mb-3">Skills</h4>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-angle-right text-secondary me-2"></i>{props.skill1}</li>
                                    <li><i className="fa fa-angle-right text-secondary me-2"></i>{props.skill2}</li>
                                    <li><i className="fa fa-angle-right text-secondary me-2"></i>{props.skill3}</li>
                                    <li><i className="fa fa-angle-right text-secondary me-2"></i>{props.skill4}</li>
                                </ul>
                            </div>

                            <div className="">
                                {/* <h4 className="mb-4">Apply For The Job</h4> */}
                                <form>
                                    <div className="row g-3">
                                        {/* <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control" placeholder="Your Name"/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="email" className="form-control" placeholder="Your Email"/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control" placeholder="Portfolio Website"/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="file" className="form-control bg-white"/>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control" rows="5" placeholder="Coverletter"></textarea>
                                    </div> */}
                                        <div className="col-5">
                                            {/* <button className="btn btn-secondary w-100" type="submit">Apply Now</button> */}
                                            <Link className="btn btn-secondary w-100" to="/jobApplypage1">Apply Now</Link>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s">
                                <h4 className="mb-4">Job Summery</h4>
                                <p><i className="fa fa-angle-right text-secondary me-2"></i>Apply by: {props.jobApplyBy}</p>
                                <p><i className="fa fa-angle-right text-secondary me-2"></i>Number of openings: {props.jobVacancy}</p>
                                <p><i className="fa fa-angle-right text-secondary me-2"></i>Job Nature: {props.jobNature}</p>
                                <p><i className="fa fa-angle-right text-secondary me-2"></i>CTC: {props.CTC}</p>
                                <p><i className="fa fa-angle-right text-secondary me-2"></i>Location: {props.jobLocation}</p>
                            </div>
                            <div className="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                                <h4 className="mb-4">Company Detail</h4>
                                <p className="m-0">{props.companydetail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Job detail end */}
        </>
    )
}

export default JobDetailContent