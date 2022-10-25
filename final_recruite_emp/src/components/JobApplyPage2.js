import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

function JobApplyPage2() {
  return (
    <>
      <Navbar title="recruitEmp" />

      <div className="container-xxl p-5 m-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gy-5 gx-4">
            <div className="col-lg-10">
              <div className="">
                <form>
                  <h4>Personal Details</h4>
                  <br />
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control" placeholder="Your Name" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="email" className="form-control" placeholder="Your Email" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control" placeholder="Portfolio Website" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="tel" className="form-control" placeholder="Your phone no." />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control" placeholder="Current Location" />
                    </div>
                    <div className="input-group col-12 col-sm-6">
                      <span class="input-group-text">DOB</span>
                      <input type="date" className="form-control" placeholder="Current Location" />
                    </div>
                    {/* <div class="input-group mb-3">
                      <span class="input-group-text">DOB</span>
                      <div class="form-floating col-12 col-sm-6 ">
                        <input type="date" class="form-control" id="floatingInputGroup1" placeholder="Username"/>
                          <label for="floatingInputGroup1">Enter your date of birth</label>
                      </div>
                    </div> */}


                    <div className="container">
                      <select class="form-select col-12" aria-label=".form-select-lg example">
                        <option selected>Your gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                    </div>

                    <br /><br /><br />

                    <div className="row g-3">
                      <h4>Academic details</h4>
                      <div className="col-12">
                        <input type="text" className="form-control" placeholder="College name" />
                      </div>
                      <div className="input-group col-12 col-sm-6">
                        <span class="input-group-text">Graduation passing year</span>
                        <input type="date" className="form-control" placeholder="Current Location" />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input type="text" className="form-control" placeholder="Degree name" />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input type="text" className="form-control" placeholder="Degree specialization" />
                      </div>
                      {/* <div className="col-12 col-sm-6">
                        <input type="file" className="form-control" placeholder="Upload resume" />
                      </div> */}
                      <div className="input-group col-12 col-sm-6">
                        <span class="input-group-text"><b>Resume</b></span>
                        <input type="file" className="form-control" placeholder="Current Location" />
                      </div>

                    </div>


                    <br /><br /><br />

                    <div className="row g-3">
                      <h4>Location details</h4>
                      <div className="container">
                      <select class="form-select col-12" aria-label=".form-select-lg example">
                        <option selected>Your preferred location to work</option>
                        <option value="1">Mumbai</option>
                        <option value="2">Pune</option>
                        <option value="3">Delhi</option>
                      </select>
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

export default JobApplyPage2