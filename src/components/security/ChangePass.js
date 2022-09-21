import React from 'react'
import UserNavbar from '../user/UserNavbar'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

function ChangePass() {
  return (
    <>
      <UserNavbar />
      <div>
        {/* change pass starts */}
        <div className="container-md w-100 mt-5 wow zoomIn" data-wow-delay="0.1s">
          <center><h4>Change Password</h4></center>

          <div className="container-sm mt-5 p-5 border border-dark w-100 shadow p-3 mb-5 bg-white rounded">
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Old password</label>
              <input type="password" className="form-control input" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">New password</label>
              <input type="password" className="form-control input" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">ReType password</label>
              <input type="password" className="form-control input" id="exampleInputPassword1" />
            </div>

            <Link className="btn btn-danger btn-lg btn-block input2"
              to="/ChangePassword">Change password</Link>
          </div>

        </div>

      </div>
      {/* change pass ends */}
      <Footer />
    </>
  )
}

export default ChangePass