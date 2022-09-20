import './App.css';
import React from 'react';
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
import Support from './components/products/Support&Assistance/Support&Assistance';
import AI_recommedention from './components/products/AI_Recommendention/AI_Recommendention';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/joblist' element={<JobListPage/>}/>
        <Route path='/jobdetail' element={<JobDetailPage/>}/>
        <Route path='/services' element={<GetJobPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/AI_recommedention' element={<AI_recommedention/>}/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;

