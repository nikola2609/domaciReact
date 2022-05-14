//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Prijava from "./components/Prijava";
//import Provera from "./components/Provera";
function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
      <Route exact path="/" element={<Prijava />}/>
 
    </Routes>
  </Router>  
  
  </div>
  );
}
//  <Route path="/provera" element={<Provera />}/>
export default App;
