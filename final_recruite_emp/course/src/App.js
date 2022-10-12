import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import CourseHome from './components/CourseHome';
import ArchHome from './components/ArchHome';
import BusinessHome from './components/BusinessHome';
import DatascienceHome from './components/DatascienceHome';
import ProgrammingHome from './components/ProgrammingHome';
import DesignHome from './components/DesignHome';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CourseHome/>} />
        <Route path='/architecture' element={<ArchHome/>} />
        <Route path='/business' element={<BusinessHome/>} />
        <Route path='/datascience' element={<DatascienceHome/>} />
        <Route path='/programming' element={<ProgrammingHome/>} />
        <Route path='/designing' element={<DesignHome/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
