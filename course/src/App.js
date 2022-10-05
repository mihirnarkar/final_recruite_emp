import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import CourseHome from './components/CourseHome';
import Home from './components/ArchHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CourseHome/>} />
        <Route path='/architecture' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
