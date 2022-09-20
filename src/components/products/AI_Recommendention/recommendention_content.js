import React from 'react';
import { Link } from 'react-router-dom'


function Recommedention_content() {


return(

<>


<div className="container-sm w-100 mb-5 pt-5 pb-5 wow fadeInUp" data-wow-delay="0.1s">
            <center>
                <h1>AI Recommendation</h1>
            </center>
            <center>
                <p style="font-size: x-large;">When it comes to recruitment, its no secret that finding the perfect
                    match for the position or candidate at hand can take days if not weeks of work. recruiteEMP
                    simplifies this process with its AI-powered recommendation engine. This feature recommends the most
                    suitable jobs for your candidates and the most suitable candidates for your jobs within seconds.</p>
            </center>
        </div>

        <br/><br/><br/><br/>
        {/* <!-- 1st section --> */}
        <section className="p-5" style="margin-top: 56px;">
            <div className="container wow fadeInUp" data-wow-delay="0.1s">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md rounded wow zoomIn">
                        <img src="/img/AI_sli1.webp" className="img-fluid pb-4" alt="" />
                    </div>
                    <div className="col-md p-7 wow zoomIn">
                        <h1 style="color: black;"><b>Pinpoint the most suitable candidates</b></h1>
                        <br/>
                        <p style="font-size: larger;"> recruiteEMP scans job descriptions and extracts the core skills
                            and requirements needed for candidates. Results are cross-referenced with your talent pool
                            to identify candidates who fit the position best.</p>
                        <h3> <i className='far fa-calendar-check' style="color: green;"></i> Scanning and parsing of
                            candidates information </h3>
                        <p style="font-size: larger;">including skills, experiences, education, etc.</p>
                        <br/>
                        <h3> <i className='far fa-calendar-check' style="color: green;"></i> Relevancy ranking </h3>
                        <p style="font-size: larger;">based on candidate's profiles and job requirements.</p>
                        <br/>
                        <h5><a to="/index.html" style="color: black">Learn More <i className="bi bi-arrow-right"></i></a>
                        </h5>
                        <br/>
                        <h5><a to="/index.html" style="color: black">Try it for free <i
                                    className="bi bi-arrow-right"></i></a></h5>
                    </div>
                </div> 
            </div>
        </section>

        <br/><br/>


</>

)


}

export default Recommedention_content