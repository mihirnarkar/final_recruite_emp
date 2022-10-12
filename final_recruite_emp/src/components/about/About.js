import React from 'react'
function About() {
    return (
        <>
       
            {/* About starts */}
            <div className="container-xxl py-5">
            <div class="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="row g-0 about-bg rounded overflow-hidden">
                            <div className="col-6 text-start wow zoomIn">
                                <img className="img-fluid" src="/img/about-1.jpg"/>
                            </div>
                            <div className="col-6 text-start wow zoomIn">
                                <img className="img-fluid w-100" src="/img/about-2.jpg"/>
                            </div>
                            <div className="col-6 text-end wow zoomIn">
                                <img className="img-fluid w-100" src="/img/about-3.jpg"/>
                            </div>
                            <div className="col-6 text-end wow zoomIn">
                                <img className="img-fluid w-100" src="/img/about-4.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="mb-4">
                            Transform the way we recruit.</h1>
                        <p className="mb-4">
                            AI Recruitment Software designed to source and hire candidates faster. Tailored for HR
                            teams, recruitment agencies, and headhunters.<br/>No steep learning curves or bloated
                            interfaces. RecruitEmp platform is simple yet powerful; accessible and relevant to all
                            recruiters.



                        </p>
                        <p><i className="fa fa-check text-primary me-3"></i>
                            <b>2,500+ job boards</b>: Global, local and specialized free and premium platforms
                            integrated natively.

                        </p>
                        <p><i className="fa fa-check text-primary me-3"></i><b>Candidates' profiles enrichment:</b> Enrich
                            candidates' profiles with LinkedIn and other social media data for better matching
                            recommendations.</p>
                        <p><i className="fa fa-check text-primary me-3"></i>
                            <b>No development required:</b> Our Career Page can be set up and customized with no
                            technical resources.
                        </p>
                        <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>

             {/* About ends */}

        </>
    )
}

export default About