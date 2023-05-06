import React, { useState } from "react";

const AgeCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [dob, setDob] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDob(inputValue);
    setInputValue("");
    setAge(calculateAge(inputValue));
  };

  const calculateAge = (dob) => {
    const diffInMs = Date.now() - new Date(dob);
    const ageDate = new Date(diffInMs);
    const year = ageDate.getUTCFullYear() - 1970;
    const month = ageDate.getUTCMonth();
    const day = ageDate.getUTCDate() - 1;
    return `${year} years, ${month} months, ${day} days`;
  };

  return (
    <div className="bg-gray-800 h-screen w-screen flex flex-col justify-center items-center">
      <div className="bg-gray-700 p-10 rounded shadow shadow-white flex flex-col gap-10">
        <h1 className="bg-gray-800 p-3 flex justify-center text-white font-bold shadow px-8 shadow-yellow-500 rounded text-2xl">
          Age Calculator
        </h1>
        <form
          onSubmit={handleSubmit}
          className=" shadow rounded shadow-yellow-300 pt-3 gap-2 bg-gray-900 flex flex-col justify-center items-center "
        >
          <p className=" font-bold text-white flex justify-center p-2 ">
            Enter your date of birth
          </p>
          <input
            type="date"
            name="name"
            value={inputValue}
            className="bg-gray-800 text-white rounded px-3 py-2"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <p className=" font-bold text-white flex justify-center p-2 ">
            {dob && `Your age is :- ${age}`}
          </p>
          <br />
          <button
            type="submit"
            className="bg-blue-700 p-3 mb-2 rounded hover:bg-blue-500 font-bold"
          >
            Calculate Age
          </button>
        </form>
      </div>
    </div>
  );
};

export default AgeCalculator;
