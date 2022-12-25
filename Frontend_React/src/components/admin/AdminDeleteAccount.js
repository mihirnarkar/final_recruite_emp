import React from 'react'
import Footer from '../Footer'
import AdminNavbar from './AdminNavbar'

function AdminDeleteAccount() {
  return (
    <>
    <AdminNavbar/>

    <div className="container-md w-100 mt-5 wow zoomIn">

    <center>
      <h4>Delete Account</h4>
    </center>
    <br />
    <h5>User, we are sorry to see you go.</h5>
    <br />
    <p>
      Please note that deleting account is irreversible and all the data
      associated with user@gmail.com account (including accces to trainings)
      will be permanently deleted
    </p>

    <div className="container-sm mt-3 p-5 border border-dark w-100 shadow p-3 mb-5 bg-white rounded">

      <p>
        Before you leave, please tell us why you'd like to delete your
        RecruitEmp account. This Information will help us improve.(optional)
      </p>

      <div className="form-floating">
        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2">

        </textarea>
        <label for="floatingTextarea2">Your feedback matters</label>
      </div>
      <br />
      <a className="btn btn-danger btn-lg btn-block"
         href="login.html map2">Delete
        account</a>
    </div>

  </div>

    <Footer/>
    </>
  )
}

export default AdminDeleteAccount