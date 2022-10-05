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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CourseHome/>} />
        <Route path='/architecture' element={<ArchHome/>} />
        <Route path='/business' element={<BusinessHome/>} />
        <Route path='/datascience' element={<DatascienceHome/>} />
        <Route path='/programming' element={<ProgrammingHome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
