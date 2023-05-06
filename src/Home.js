import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-700 pb-5 h-full  flex flex-col gap-5">
      <h1 className="bg-gray-800 flex justify-center text-white p-5 mt-2 ">Maths</h1>
      <p className=" flex justify-center p-3 text-lg text-white">Here are some of the basic maths calculators like BMI and factorial</p>
      <div className=" grid grid-cols-5 gap-5 items-center p-2">
        <Link to="/bmi" className="border p-2 bg-blue-700 w-[200px] flex justify-center font-bold rounded hover:bg-blue-500 ">
          <button>BMI Calculator</button>
        </Link>
        <Link to="/factorial" className="border p-2 bg-blue-700 w-[200px] flex justify-center font-bold rounded hover:bg-blue-500">
          <button>Factorial Calculator</button>
        </Link>
        <Link to="/fibonacci" className="border p-2 bg-blue-700 w-[200px] flex justify-center font-bold rounded hover:bg-blue-500 ">
          <button>Fibonacci Calculator</button>
        </Link>
        <Link to="/age" className="border p-2 bg-blue-700 w-[200px] flex justify-center font-bold rounded hover:bg-blue-500 ">
          <button>Age Calculator</button>
        </Link>
        <Link to="/percentage" className="border p-2 bg-blue-700 w-[200px] flex justify-center font-bold rounded hover:bg-blue-500 ">
          <button>Percentage Calculator</button>
        </Link>


      </div>

      <div>
      
        <button className=" mb-10 ml-3 border bg-blue-700 p-3"> others are on the way</button>
        <br />
        <div className="container mx-auto px-4 py-8 bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">List of Calculators / Convertors</h1>
      <ul className="list-disc ml-8">
        <li>Mortgage Calculator</li>
        <li>Loan Calculator</li>
        <li>Currency Converter</li>
        <li>Time Zone Converter</li>
        <li>GPA Calculator</li>
        <li>Grade Calculator</li>
        <li>Triangle Area Calculator</li>
        <li>Tip Calculator</li>
        <li>Interest Calculator</li>
        <li>Savings Calculator</li>
        <li>Retirement Calculator</li>
        <li>Distance Calculator</li>
        <li>Speed Calculator</li>
        <li>Area Calculator</li>
        <li>Volume Calculator</li>
        <li>Weight Converter</li>
        <li>Temperature Converter</li>
        <li>Blood Alcohol Calculator</li>
        <li>Calorie Calculator</li>
      </ul>
    </div>

      </div>
    </div>
  );
};

export default Home;
