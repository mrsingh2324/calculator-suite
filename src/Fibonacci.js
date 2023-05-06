import React, { useState } from "react";

const Fibonacci = () => {
  const [value, setValue] = useState(0);
  const [fibonacciSeries, setFibonacciSeries] = useState([]);

  const handleValueChange = (event) => {
    setValue(Number(event.target.value));
  };

  const generateFibonacciSeries = (n) => {
    let fibonacciSeries = [0, 1];
    for (let i = 2; i < n; i++) {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }
    setFibonacciSeries(fibonacciSeries);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    generateFibonacciSeries(value);
  };

  return (
    <div className="bg-gray-800 gap-5 flex flex-col items-center justify-center w-screen h-screen">
      <div className="border bg-gray-900 flex flex-col rounded shadow-lg shadow-white p-10 gap-5">
        <h1 className="bg-gray-700 flex items-center justify-center p-3 text-xl text-white shadow-sm shadow-pink-500  font-bold">
          FIBONACCI SERIES CALCULATOR{" "}
        </h1>
        <p className=" flex justify-center bg-gray-700 p-2 rounded text-gray-200">
          Enter a number to generate the Fibonacci series
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="border-none outline-none pl-2 h-[40px]"
            type="number"
            placeholder="Enter a number"
            onChange={handleValueChange}
            value={null}
          />
          <button className="bg-blue-600 rounded shadow h-[50px]">
            Generate Fibonacci Series
          </button>
          <div className="border rounded p-4 bg-gray-900 shadow shadow-white ">
            <h1 className="text-white text-lg mb-3"> Fibonacci Series </h1>
            <p className="flex flex-wrap max-w-[350px] max-h-[115px] overflow-y-scroll scrollbar-none text-gray-300">
              {fibonacciSeries.map((number, index) => (
                 <p className="border flex px-2  m-1 bg-blue-700 rounded ">{` ${number} `}</p>
              ))}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Fibonacci;
