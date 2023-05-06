import React, { useState } from "react";

const Factorial = () => {
  const [value, setValue] = useState(0);
  const handleValueChange = (event) => {
    setValue(Number(event.target.value));
  };
  const calculateFactorial = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    return result;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const factorial = calculateFactorial(value);
    console.log(factorial); // print the result in the console
  };
  return (
    <div className="bg-gray-800 gap-5 flex flex-col items-center justify-center w-screen h-screen">
      <div className="border bg-gray-900 flex flex-col rounded shadow-lg shadow-white p-10 gap-5">
        <h1 className="bg-gray-700 flex items-center justify-center p-3 text-xl text-white shadow-sm shadow-green-500  font-bold">
          FACTORIAL{" "}
        </h1>
        <p className="bg-gray-700 p-2 rounded text-gray-200">
          Enter a number to calculate its factorial
        </p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="border-none outline-none pl-2 h-[40px]"
            type="number"
            onChange={handleValueChange}
            placeholder="0"
          />
          {/* <button className="bg-blue-600 hover:bg-blue-400 rounded shadow h-[50px]">
Calculate Factorial
</button> */}
          <div className="border rounded p-4 flex flex-col gap-5 bg-gray-600 text-white shadow shadow-white ">
            <h1 className="font-bold flex justify-center"> Here is your factorial </h1>
            <div className="border flex bg-blue-700 justify-center">
              {value ? calculateFactorial(value) : "Zero"}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Factorial;
