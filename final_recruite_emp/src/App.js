import './App.css';
import React, { useState, useEffect } from "react";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from './components/Home';
import Aboutpage from './components/about/Aboutpage';
import JobListPage from './components/joblist/JobListPage';
import JobDetailPage from './components/jobdetail/JobDetailPage';
import ScrollToTop from './components/ScrollToTop';
import GetJobPage from './components/services/GetJobPage';
import Login from './components/security/Login';
import SignUp from './components/security/SignUp';
import Homepage from './components/user/Homepage';
import Resume from './components/user/Resume';
import TrackApplication from './components/user/TrackApplication';
import ViewAccount from './components/security/ViewAccount';
import ChangePass from './components/security/ChangePass';
import ChangeEmail from './components/security/ChangeEmail';
import DeleteAccount from './components/security/DeleteAccount';
import Support from './components/products/Support&Assistance/Support&Assistance';
import AI_recommedention from './components/products/AI_Recommendention/AI_Recommendention';
import Candidate_Hiring from './components/products/CandidateHiring/candidatehiringpage';
import Post_Job from './components/products/PostJob/PostJobPage';
import Discussion from './components/Discussion/DiscussionPage'




function App() {
  const [data, setdata] = useState({
    name: "",
    age: 0,
    date: "",
    programming: "",
  });

  useEffect(() => {
    // Using fetch to fetch the api from 
    // flask server it will be redirected to proxy
    fetch("/data").then((res) =>
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
    <BrowserRouter>
    <ScrollToTop/>


{/* 
    <div className="App">
        <header>
          <h1>React and flask</h1>
          <p>{data.name}</p>
          <p>{data.age}</p>
          <p>{data.date}</p>
          <p>{data.programming}</p>

        </header>
      </div> */}



      {/* <form action="" method="post" >
                    <input type="text" id='startDate' name="startDate" />
                    <br></br>
                    <input type="text" id='endDate' name="endDate"  />
                    <br></br>
                    <input type='submit' value='submit' />
</form> */}




      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/joblist' element={<JobListPage/>}/>
        <Route path='/jobdetail' element={<JobDetailPage/>}/>
        <Route path='/services' element={<GetJobPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/userhomepage' element={<Homepage/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/trackapp' element={<TrackApplication/>}/>
        <Route path='/viewaccount' element={<ViewAccount/>}/>
        <Route path='/changepassword' element={<ChangePass/>}/>
        <Route path='/changeemail' element={<ChangeEmail/>}/>
        <Route path='/deleteaccount' element={<DeleteAccount/>}/>

        <Route path='/support' element={<Support/>}/>
        <Route path='/AI_recommedention' element={<AI_recommedention/>}/>
        {/* <Route path='/AI_recommedention' element={<AI_recommedention/>}/> */}
        <Route path='/candidatehiring' element={<Candidate_Hiring/>}/>
        <Route path='/postjob' element={<Post_Job/>}/>

        <Route path='/discussion' element={<Discussion/>}/>
        {/* <Route path='/signin' element={}/> */}



      </Routes>
    </BrowserRouter>
  );
}



export default App;