//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Prijava from "./components/Prijava";
import Provera from "./components/Provera";
import Naslovna from './components/Naslovna';
function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
    <Route exact path="/" element={<Naslovna />}/>
      <Route  path="/prijava" element={<Prijava />}/>
      <Route path="/provera" element={<Provera />}/>
 
    </Routes>
  </Router>  
  
  </div>
  );
}

export default App;
