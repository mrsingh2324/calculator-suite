import React, { useState } from 'react'

const BMI = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [BMI, setBMI] = useState(0);

  const handleHeightChange = (event) => {
    setHeight(Number(event.target.value));
  };

  const handleWeightChange = (event) => {
    setWeight(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const bmi = (weight / (height * height / 10000)).toFixed(2);
    setBMI(bmi);

  };

  return (
    <div className='bg-gray-800 h-screen w-screen text-white flex flex-col items-center justify-center '>
      <div className='border flex flex-col gap-5 items-center shadow-lg rounded p-5 shadow-white '>

      <h1 className='bg-gray-700 rounded p-3 w-[50%] flex items-center justify-center shadow shadow-blue-500'>BMI CALCULATOR</h1>
      <p className='bg-gray-700 p-2'>Enter your height and weight to calculate your BMI</p>
      <form onSubmit={handleSubmit} className='w-full flex flex-col items-center '>
        <label className='bg-gray-700 w-full rounded  p-2 flex flex-row items-center justify-between'>
          Height (in cm):
          <input type="number" className='bg-transparent border mx-3  rounded outline-none pl-1 w-[50%]' value={null} onChange={handleHeightChange} />
        </label>
        <br />
        <label className='bg-gray-700 w-full rounded  p-2  flex flex-row items-center justify-between'>
          Weight (in kg):
          <input type="number" className='bg-transparent border mx-3 rounded outline-none pl-1 w-[50%]'  value={null} onChange={handleWeightChange} />
        </label>
        <br />
        <button type="submit" className='bg-blue-600 rounded-lg p-4  '>Calculate BMI</button>
      </form> 

      <div>
      <h1>Your BMI is {BMI}</h1>
      </div>

      </div>
      
    </div>
  );
};

export default BMI;
