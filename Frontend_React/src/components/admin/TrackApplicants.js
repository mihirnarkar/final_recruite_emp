import Reactm,{useState,useEffect} from 'react'
import Footer from '../Footer'
import AdminNavbar from './AdminNavbar'
import TrackApplication from '../user/TrackApplication'
import axios from 'axios'

function TrackApplicants() {

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


      <div class="container-xxl bg-white p-0">
        <AdminNavbar />
        <br></br>


        {/* <Alert alertType="success" alertStatus="Success" alertMssg="Your application has been submitted sucessfully" /> */}
        {/* Container starts here */}
        <div className="container-md w-100 mt-5 wow zoomIn">
          <br />
          <table class="table">
            <thead>
              <tr>
                {/* <th scope="col"></th> */}
                <th scope="col">NAME</th>
                <th scope="col">COMPANY</th>
                <th scope="col">APPLIED ON</th>
                <th scope="col">NUMBER OF APPLICANTS</th>
                <th scope="col">APPLICATION STATUS</th>
                <th scope="col">REVIEW APPLICATION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <th scope="row">1</th> */}
                <td>Jatin Tiwari</td>
                <td> Association Incorporation
                  Web Development Internship</td>
                <td>{data.date}</td>
                <td>2665</td>
                <td>Not selected</td>
                <td>Null</td>
              </tr>
              <tr>
                {/* <th scope="row">2</th> */}
                <td>Purva Pawar</td>
                <td>Business Development (Sales) Internship</td>
                <td>24 Jun' 22</td>
                <td>2665</td>
                <td>Not selected</td>
                <td>Null</td>
              </tr>
              <tr>
                {/* <th scope="row">3</th> */}
                <td>Sahil Ambavale</td>
                <td>
                  Web Development Internship</td>
                <td>24 Jun' 22</td>
                <td>2665</td>
                <td>selected</td>
                <td>Null</td>
              </tr>

              <tr>
                {/* <th scope="row">3</th> */}
                <td>Mihir Narkar</td>
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

      <Footer />
    </>
  )
}

export default TrackApplicants