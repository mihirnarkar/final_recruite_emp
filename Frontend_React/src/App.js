import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from './components/Home';
import Aboutpage from './components/about/Aboutpage';
import JobListPage from './components/JobListPage';

// Job detail pages navigation starts
import JobDetailPage1 from './components/JobDetailPageCat1';
import JobDetailPage2 from './components/JobDetailPageCat2';
import JobDetailPage3 from './components/JobDetailPageCat3';
import JobDetailPage4 from './components/JobDetailPageCat4';
import JobDetailPage5 from './components/JobDetailPageCat5';
// Job detail page navigation ends


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
import JobAttemptTest from './components/JobAttemptTest';
import JobApplyPage2 from './components/JobApplyPage2';
import JobApplyPage1 from './components/JobApplyPage1';
import Resume_word_cloud from './components/features/Resume_word_cloud';
import Categories1 from './components/categories/Categories1';
import Categories2 from './components/categories/Categories2';
import Categories3 from './components/categories/Categories3';
import Categories4 from './components/categories/Categories4';
import Categories5 from './components/categories/Categories5';




// import Categories1 from '../categories/Categories1';
// import Categories2 from './components/categories/categories2';


// path='/categories1' element={<Categories1 />} />
//         <Route path='/categories2' element={<Categories2 />} />
//         <Route path='/categories3' element={<Categories3 />} />
//         <Route path='/categories4' element={<Categories4 />} />
//         <Route path='/categories5' element={<Categories5 />} />       


function App() {

  // const [data, setdata] = useState({
  //   name: "",
  //   age: 0,
  //   date: "",
  //   programming: "",
  // });

  // useEffect(() => {
  //   // Using fetch to fetch the api from 
  //   // flask server it will be redirected to proxy
  //   fetch("/data").then((res) =>
  //     res.json().then((data) => {
  //       // Setting a data from api
  //       setdata({
  //         name: data.Name,
  //         age: data.Age,
  //         date: data.Date,
  //         programming: data.programming,
  //       });
  //     })
  //   );
  // }, []);


  return (
    <BrowserRouter>
      <ScrollToTop />



      {/* <div className="App">
        <header>
          <h1>React and flask</h1>
          <p>{data.name}</p>
          <p>{data.age}</p>
          <p>{data.date}</p>
          <p>{data.programming}</p>

        </header>
      </div> */}



      {/* <form action="#" method="post" >
                    <input type="text" id='startDate' name="startDate" />
                    <br></br>
                    <input type="text" id='endDate' name="endDate"  />
                    <br></br>
                    <input type='submit' value='submit' />
</form> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/joblist' element={<JobListPage />} />

        {/* Job detail page */}
        <Route path='/jobdetail1' element={<JobDetailPage1 />} />
        <Route path='/jobdetail2' element={<JobDetailPage2 />} />
        <Route path='/jobdetail3' element={<JobDetailPage3 />} />
        <Route path='/jobdetail4' element={<JobDetailPage4 />} />
        <Route path='/jobdetail5' element={<JobDetailPage5 />} />

        <Route path='/services' element={<GetJobPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/userhomepage' element={<Homepage />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/trackapp' element={<TrackApplication />} />
        <Route path='/trackapp' element={<TrackApplication />} />
        <Route path='/viewaccount' element={<ViewAccount />} />
        <Route path='/changepassword' element={<ChangePass />} />
        <Route path='/changeemail' element={<ChangeEmail />} />
        <Route path='/deleteaccount' element={<DeleteAccount />} />

        <Route path='/support' element={<Support />} />
        <Route path='/AI_recommedention' element={<AI_recommedention />} />
        {/* <Route path='/AI_recommedention' element={<AI_recommedention/>}/> */}
        <Route path='/candidatehiring' element={<Candidate_Hiring />} />
        <Route path='/postjob' element={<Post_Job />} />

        <Route path='/discussion' element={<Discussion />} />


        {/* Attempt test job navigation */}
        <Route path='/jobAttemptTest' element={<JobAttemptTest />} />

        {/* Apply Job Navigation page 1 */}
        <Route path='/jobApplypage1' element={<JobApplyPage1 />} />

        {/* Apply Job Navigation page 2 */}
        <Route path='/jobApplypage2' element={<JobApplyPage2 />} />



        {/* Features pages adding here */}
        <Route path='/Resume_word_cloud' element={<Resume_word_cloud />} />

        {/* Job_categories */}

        <Route path='/categories1' element={<Categories1 />} />
        <Route path='/categories2' element={<Categories2 />} />
        <Route path='/categories3' element={<Categories3 />} />
        <Route path='/categories4' element={<Categories4 />} />
        <Route path='/categories5' element={<Categories5 />} />




      </Routes>
    </BrowserRouter>
  );
}



export default App;