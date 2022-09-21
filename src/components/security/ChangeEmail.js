import React from 'react'
import Footer from '../Footer'
import UserNavbar from '../user/UserNavbar'

function ChangeEmail() {
  return (
    <>
    <UserNavbar/>
      {/* HTML code starts here*/}

      <div className="container-md w-100 mt-5 wow zoomIn">
        <center>
          <h4>Change email address</h4>
        </center>
        <br />
        <br />

        <p>
          Note: Please note that all the data associated with your account
          (user@gmail.com) will be linked to your new email address after this
          change. Also, ensure that you have access to both the email accounts
          for making the change.
        </p>

        <div className="container-sm mt-5 p-5 border bg-white border-dark w-100">
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">New email address</label>
            <input type="email" className="form-control email" id="exampleInputPassword1"  />
          </div>

          <a className="btn btn-danger btn-lg btn-block email2" href="login.html">Change email</a>

        </div>


      </div>

      {/* HTML code ends here*/}

      <Footer/>

    </>
  )
}

export default ChangeEmail
