import React, { useState } from "react";

function PercentageCalculator() {
  const [inputValue, setInputValue] = useState("");
  const [percentValue, setPercentValue] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePercentChange = (event) => {
    setPercentValue(event.target.value);
  };

  const calculateResult = () => {
    const inputNumber = parseFloat(inputValue);
    const percentNumber = parseFloat(percentValue) / 100;
    const resultNumber = inputNumber * percentNumber;
    setResult(resultNumber.toFixed(2));
  };

  return (
    
    <div className="flex justify-center bg-gray-600 h-screen w-screen items-center ">
      <div className=" bg-gray-700 w-[400px] w-[400px] rounded-xl flex flex-col gap-5 items-center justify-center  p-10 shadow-lg shadow-white ">
        <h1 className="text-2xl font-bold bg-gray-800 p-3 px-5 rounded shadow shadow-red-500">Percentage Calculator</h1>

        <div className="flex items-center ">
          <input
            type="number"
            id="percent"
            value={percentValue}
            onChange={handlePercentChange}
            className="border flex justify-center border-gray-300 px-2 py-1 rounded-sm"
          />
        </div>
        <div className="flex items-center justify-center text-white ">Percent of </div>
        <div className="flex items-center ">
          <input
            type="number"
            id="input"
            value={inputValue}
            onChange={handleInputChange}
            className="border border-gray-300 px-2 py-1 rounded-sm"
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-sm"
          onClick={calculateResult}
        >
          Calculate
        </button>
        <div className="rounded bg-gray-900 px-3 flex items-center ">

        {result && (
          <div className="text-[32px] text-white ">{`${percentValue}% of ${inputValue} is ${result}`}</div>
        )}
        </div>
      </div>
    </div>
  );
}

export default PercentageCalculator;
