import React from "react";

const FormInput = ({ labelName, placeholder, type, value, onChange }) => {
  return (
    <label htmlFor={labelName} className='flex flex-col '>
      <p className='my-2'>{labelName} :</p>
      <input
        type={type}
        id={labelName}
        className='border-2 rounded-md px-2 py-1 border-gray-300'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
      {/* <p className='text-red-500 text-sm'>Error</p> */}
    </label>
  );
};

export default FormInput;
