import './App.css';
import React from 'react';
import{
  HashRouter,
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
  return (
    <HashRouter>
    <ScrollToTop/>
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
        <Route path='/AI_recommedention' element={<AI_recommedention/>}/>
        <Route path='/candidatehiring' element={<Candidate_Hiring/>}/>
        <Route path='/postjob' element={<Post_Job/>}/>

        <Route path='/discussion' element={<Discussion/>}/>



      </Routes>
    </HashRouter>
  );
}



export default App;