import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import BMI from "./BMI";
import Factorial from "./Factorial";
import Fibonacci from './Fibonacci'
import AgeCalculator from "./AgeCalculator";
import Percentage from "./Percentage";

function App() {
  return (
    <>
      <Router>
      
      <button className='fixed left-10 bg-blue-700 py-2  px-5  rounded top-5'> <a href="/">Home</a> </button>

        <Routes>
          <Route path="/" exact element=<Home /> />
          <Route path="/bmi"  element=<BMI /> />
          <Route path="/factorial"  element=< Factorial /> /> 
          <Route path="/fibonacci"  element=< Fibonacci /> /> 
          <Route path="/age"  element=< AgeCalculator /> /> 
          <Route path="/percentage"  element=< Percentage /> /> 
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
