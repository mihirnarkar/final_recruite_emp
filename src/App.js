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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
