import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Alert from './Alert'
import { useNavigate } from 'react-router-dom'
import UserNavbar from './user/UserNavbar'

function JobApplyPage2() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/trackapp')
  }

  return (
    <>
      {/* <Navbar title="RecruitEmp" /> */}
      <UserNavbar/>
      
      <br></br>

      <Alert alertType="info" alertMssg="Your response are recorded you can proceed with application"/>

      <div className="container-xxl p-5 m-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gy-5 gx-4">
            <div className="col-lg-10">
              <div className="">


                <form onSubmit={handleSubmit}>
                  <h4>Personal Details</h4>
                  <br />
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control" name='name' placeholder="Your Name" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="email" className="form-control" name='email' placeholder="Your Email" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control" name='website' placeholder="Portfolio Website" />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="tel" className="form-control" name='phone'  placeholder="Your phone no." />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input type="text" className="form-control" name='current_location'  placeholder="Current Location" />
                    </div>
                    <div className="input-group col-12 col-sm-6">
                      <span class="input-group-text">DOB</span>
                      <input type="date" className="form-control" name='dob'  placeholder="Current Location" />
                    </div>
                    {/* <div class="input-group mb-3">
                      <span class="input-group-text">DOB</span>
                      <div class="form-floating col-12 col-sm-6 ">
                        <input type="date" class="form-control" id="floatingInputGroup1" placeholder="Username"/>
                          <label for="floatingInputGroup1">Enter your date of birth</label>
                      </div>
                    </div> */}


                    <div className="container">
                      <select class="form-select col-12" aria-label=".form-select-lg example" name='gender'>
                        <option selected>Your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>

                    <br /><br /><br />

                    <div className="row g-3">
                      <h4>Academic details</h4>
                      <div className="col-12">
                        <input type="text" className="form-control" name='college_name' placeholder="College name" />
                      </div>
                      <div className="input-group col-12 col-sm-6">
                        <span class="input-group-text">Graduation passing year</span>
                        <input type="date" className="form-control" name='passing_year'/>
                      </div>
                      <div className="col-12 col-sm-6">
                        <input type="text" className="form-control" name='degree_name'  placeholder="Degree name" />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input type="text" className="form-control" name='degree_specialization'  placeholder="Degree specialization" />
                      </div>
                      {/* <div className="col-12 col-sm-6">
                        <input type="file" className="form-control" placeholder="Upload resume" />
                      </div> */}
                      <div className="input-group col-12 col-sm-6">
                        <span class="input-group-text"><b>Resume</b></span>
                        <input type="file" className="form-control"  placeholder="Current Location" />
                      </div>

                    </div>


                    <br /><br /><br />

                    <div className="row g-3">
                      <h4>Location details</h4>
                      <div className="container">
                      <select class="form-select col-12" aria-label=".form-select-lg example" name='preferred_location'> 
                        <option selected>Your preferred location to work</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Delhi">Delhi</option>
                      </select>
                    </div>

                    <div className="container-sm mt-4">
                      {/* <button className="btn btn-secondary w-100" type="submit">Apply Now</button> */}
                      {/* <Link className="btn btn-secondary trackAppButton" to="/trackapp">Submit</Link>*/}

                      <input className="btn btn-secondary" type='submit' name='submit'></input>
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