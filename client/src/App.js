import './App.css';
import Home from './apps/Home';
import Notfound  from './apps/Notfound';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Princess from './components/Princess';

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notfound' element={<Notfound />} />
        <Route path='/princess' element={<Princess />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
