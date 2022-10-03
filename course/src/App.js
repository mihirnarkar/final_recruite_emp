import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import CourseHome from './components/CourseHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CourseHome/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
