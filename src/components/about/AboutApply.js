import React from 'react'

function AboutApply() {
    return (
        <>

            <div className="container-xxl py-2">
                <div className="container py-1">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className='aboutapplyh1'>How To Apply</h1>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-3">
                <div className="container py-2">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">


                    </div>
                    {/* <!-- Row start --> */}
                    <div className="row g-4">
                        {/* <!-- Element start --> */}
                        <div className="col-lg-3 col-md-6 wow fadeInUp aboutElementdiv" data-wow-delay="0.3s"
                            onclick="location.href='apply.php'">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/O.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Via Online</h5>
                                <p>Easy and Recommended</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp h-100 aboutElementdiv" data-wow-delay="0.5s"
                            onclick="location.href='apply.php'">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/Call.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Via Calling</h5>
                                <p>Give a Call on <br />+91 8692994366</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp aboutElementdiv" data-wow-delay="0.7s"
                            onclick="location.href='apply.php'">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/E.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">Via E mail</h5>
                                <p>Send an Email to info@skyhaamburg.com</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 wow fadeInUp aboutElementdiv" data-wow-delay="0.9s"
                            onclick="location.href='apply.php'">
                            <div className="team-item p-4">
                                <div className="overflow-hidden mb-4">
                                    <img className="img-fluid" src="img/A.jpg" alt="" />
                                </div>
                                <h5 className="mb-0">By Filling Application</h5>
                                <p>Visit our office then apply</p>
                                <div className="btn-slide mt-1">
                                    <i className="fa fa-share"></i>
                                    <span>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Element end --> */}
                    </div>
                    {/* <!-- Row end --> */}
                </div>
            </div>

        </>
    )
}

export default AboutApply