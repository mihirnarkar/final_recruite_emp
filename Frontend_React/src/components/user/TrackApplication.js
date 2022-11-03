import { React, onSubmit } from 'react'
import Alert from '../Alert'
import Footer from '../Footer'
import UserNavbar from './UserNavbar'
import axios from 'axios'

function TrackApplication() {

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("came here")
    
    
  axios({
    method: 'post',
    url: '/trackapp',
    data: {
      id: 1,
    }
  }).then((response) => {
    console.log(response.data); });

  };





  return (
    <>
      <div class="container-xxl bg-white p-0">

        <UserNavbar />
        <br></br>

        <form onSubmit={onSubmit}>

          <input type="submit" value="submit"></input>

        </form>


        <Alert alertType="success" alertStatus="Success" alertMssg="Your application has been submitted sucessfully" />
        {/* Container starts here */}
        <div className="container-md w-100 mt-5 wow zoomIn">
          <br />
          <table class="table">
            <thead>
              <tr>
                {/* <th scope="col"></th> */}
                <th scope="col">COMPANY</th>
                <th scope="col">PROFILE</th>
                <th scope="col">APPLIED ON</th>
                <th scope="col">NUMBER OF APPLICANTS</th>
                <th scope="col">APPLICATION STATUS</th>
                <th scope="col">REVIEW APPLICATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <th scope="row">1</th> */}
                <td>Buddha Education Association Incorporation</td>
                <td> Association Incorporation
                  Web Development Internship</td>
                <td>24 Jun' 22</td>
                <td>2665</td>
                <td>Not selected</td>
                <td>Null</td>
              </tr>
              <tr>
                {/* <th scope="row">2</th> */}
                <td>PUMA Sports India Private Limited</td>
                <td>Business Development (Sales) Internship</td>
                <td>24 Jun' 22</td>
                <td>2665</td>
                <td>Not selected</td>
                <td>Null</td>
              </tr>
              <tr>
                {/* <th scope="row">3</th> */}
                <td>DarkCode</td>
                <td>
                  Web Development Internship</td>
                <td>24 Jun' 22</td>
                <td>2665</td>
                <td>selected</td>
                <td>Null</td>
              </tr>
            </tbody>
          </table>
          <br />
        </div>
        {/* Container ends here */}
        <Footer />
      </div>
    </>
  )
}

export default TrackApplication