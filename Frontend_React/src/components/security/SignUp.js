import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>

    {/* Signup starts here */}
      <div className="container-xxl  p-0">

        <div className="container shadow p-3 mb-5 rounded wow zoomIn signup1">

          <div className="container">
            <div className="py-5 text-center">
              <img className="d-block mx-auto mb-4" src="../img/logo.gif" alt="" width="72" height="72" />
              <h2 className="text-primary">Join Us</h2>
            </div>
          </div>

          {/* Form starts here */}
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <form action='login.html'>

                  <div className="form-floating">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name"
                      required />
                    <label for="name">Name</label>
                  </div>

                  <br />

                  <div className="form-floating">
                    <input type="email" className="form-control" id="name" name="name" placeholder="Email"
                      required />
                    <label for="name">Email</label>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                      anyone else.</small>
                  </div>

                  <br />

                  <div className="form-floating">
                    <input type="password" className="form-control" id="name" name="name" placeholder="password"
                      required />
                    <label for="name">Password</label>
                  </div>

                  <br />

                  <div className="form-floating">
                    <input type="password" className="form-control" id="name" name="name"
                      placeholder="Confirm Password" required />
                    <label for="name">Confirm Password</label>
                  </div>

                  <br />

                  <div className="row">
                    <div className="col-md-5 mb-3">
                      <label for="country">Country</label>
                      <select className="custom-select d-block w-100" id="country" required>
                        <option value="">Choose...</option>
                        <option>United States</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label for="state">State</label>
                      <select className="custom-select d-block w-100" id="state" required>
                        <option value="">Choose...</option>
                        <option>California</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                  </div>

                  <hr className="mb-4" />
                  {/* <!-- <button type="submit" className="btn btn-secondary btn-lg btn-block">Submit</button> --> */}
                  <Link className="btn btn-primary btn-lg btn-block" to="/userhomepage">Submit</Link>

                  <br />

                  <center>Already Have an account ? <Link to="/login">LogIn</Link></center>
                </form>

              </div>
            </div>

          </div>
          {/* Form ends here */}

          <footer className="my-5 pt-5 text-muted text-center text-small">
            <p className="mb-1 signup2">&copy; 2020-2021 <Link to="../index.html">RecruiteEMP</Link></p>
            <ul className="list-inline">
              <li className="list-inline-item"><Link to="#">Privacy</Link></li>
              <li className="list-inline-item"><Link to="#">Terms</Link></li>
              <li className="list-inline-item"><Link to="#">Support</Link></li>
            </ul>
          </footer>


        </div>

        <br />


      </div>
      {/* Signup ends here */}

    </>
  )
}

export default SignUp