import { React, useState, useEffect } from 'react'
import Alert from '../Alert'
import Footer from '../Footer'
import UserNavbar from './UserNavbar'
import axios from 'axios'
// import xtype from 'xtypejs'

function TrackApplication() {


  const onSubmit = (e) => {
    e.preventDefault()
    console.log("came here")

    axios({
      method: 'get',
      url: '/trackapp',
      data: {
        id: 1,
      }
    }).then((response) => {
      console.log(response.data);

      // console.log(xtype([applydate]))
    });
  };

  const [data, setdata] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
  });


  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/trackapp").then((res) =>
      res.json().then((data) => {
        // Setting a data from api
        setdata({
          name: data.Name,
          age: data.Age,
          date: data.Date,
          programming: data.programming,
        });
      })
    );
  }, []);



  return (
    <>

      {/* <div className="App">
        <header>
          <h1>React and flask</h1>
          <p>{data.name}</p>
          <p>{data.age}</p>
          <p>{data.date}</p>
          <p>{data.programming}</p>

        </header>
      </div> */}

      <div class="container-xxl bg-white p-0">

        <UserNavbar />
        <br></br>


        {/* <Alert alertType="success" alertStatus="Success" alertMssg="Your application has been submitted sucessfully" /> */}
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
                <td>{data.date}</td>
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