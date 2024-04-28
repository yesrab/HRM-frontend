import React from "react";

const FormInput = ({ lableName, placeholder, type, value, onChange }) => {
  return (
    <label htmlFor={lableName} className='flex flex-col '>
      <p className='my-2'>{lableName} :</p>
      <input
        type={type}
        id={lableName}
        className='border-2 rounded-md px-2 py-1 border-gray-300'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* <p className='text-red-500 text-sm'>Error</p> */}
    </label>
  );
};

export default FormInput;
