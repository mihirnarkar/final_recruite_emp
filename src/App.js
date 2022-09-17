import './App.css';
import React from 'react';
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from './components/Home';
import Aboutpage from './components/Aboutpage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
