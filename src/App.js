import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"


import { Header, Footer, } from "./Seaction/index.js";
import { Home , Memory } from "./Pages/index";
 
import './App.css';


function App() {
  return (
    <> 
      <Router>
        <Header/>
        <Routes>
         
          
          <Route path="/" element={<Home /> } /> 
          <Route path="/Memory" element={<Memory/> } /> 
     
        </Routes>
        <Footer/>
      </Router>
     
    </>
  );
}

export default App;
 