import { React, onSubmit } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import UserNavbar from '../user/UserNavbar'
import axios from 'axios'



function Resume_word_cloud() {



    const onSubmit = (e) => {
        e.preventDefault();
        console.log("refresh prevented");


        try {

            axios({
                method: 'post',
                url: '/Resume_word_cloud',
                data: {
                    firstName: 'Jatin',
                    job_desc: job_desc,
                    resume_name:resume_name
                }
            });

        } catch (err) {
            console.log(err);
        }

    };

    let job_desc;
    let resume_name="resume name";

    const handleMessageChange = event => { //this will update the textarea and give me in a variable
        job_desc = event.target.value
        console.log(job_desc)
    };



    return (
        <>
            <UserNavbar />
            <div className="container-xxl p-5 m-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row gy-5 gx-4">
                        <div className="col-lg-10">
                            <div className="">

                                <form onSubmit={onSubmit}>
                                    <h4>Upload your resume</h4>
                                    <br />
                                    <div className="row g-3">
                                        <div className="input-group col-12 col-sm-6">
                                            <span class="input-group-text"><b>Resume</b></span>
                                            <input type="file" className="form-control" name='resume_name' placeholder="Current Location" />
                                        </div>

                                        <div className="row g-3">
                                            <h4>Enter Job description </h4>
                                            <div className="container">
                                                <div class="mb-3">
                                                    <label for="exampleFormControlTextarea1" class="form-label">Enter job description here</label>

                                                    <textarea class="form-control" id="message" onChange={handleMessageChange} />
                                                    {/* <textarea ></textarea> */}
                                                </div>
                                            </div>

                                            <div className="container-sm mt-4">
                                                {/* <button className="btn btn-secondary w-100" type="submit">Apply Now</button> */}
                                                {/* <Link className="btn btn-secondary trackAppButton" type='submit'>Submit</Link> */}
                                                <input className="btn btn-secondary trackAppButton" type='submit' value='submit' />
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