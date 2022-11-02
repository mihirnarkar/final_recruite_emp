import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import UserNavbar from '../user/UserNavbar'

function Resume_word_cloud() {


    return (
        <>
            <UserNavbar />
            
            {/* <h1>kjdbsf</h1>
            <form action="" method="post" >
                <input type="text" id='word' name="wordcloud" />
                <br></br>
                <input type="text" id='desc' name="desc" />
                <br></br>
                <input type='submit' value='submit' />
            </form> */}

            <div className="container-xxl p-5 m-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gy-5 gx-4">
                        <div className="col-lg-10">
                            <div className="">
                                <form>
                                    <h4>Upload your resume</h4>
                                    <br />
                                    <div className="row g-3">
                                        <div className="input-group col-12 col-sm-6">
                                            <span class="input-group-text"><b>Resume</b></span>
                                            <input type="file" className="form-control" placeholder="Current Location" />
                                        </div>

                                        <div className="row g-3">
                                            <h4>Enter Job description </h4>
                                            <div className="container">
                                                <div class="mb-3">
                                                    <label for="exampleFormControlTextarea1" class="form-label">Enter job description here</label>
                                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                </div>
                                            </div>

                                            <div className="container-sm mt-4">
                                                {/* <button className="btn btn-secondary w-100" type="submit">Apply Now</button> */}
                                                <Link className="btn btn-secondary trackAppButton" to="/trackapp">Submit</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Resume_word_cloud