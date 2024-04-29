import React from "react";
import { Form } from "react-router-dom";
import FormInput from "../formInputs/FormInput";

const AddClass = ({ toggleModal }) => {
  let handleSubmit;
  const classArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const sectionsArr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <Form
      method='POST'
      className='flex flex-col max-h-[90vh] overflow-y-auto p-2'
      onSubmit={handleSubmit}>
      <div className='flex mt-5 border-2 p-2 rounded-md justify-between px-5'>
        <div>
          <label className='mb-2'>Class Standerd :</label>
          <select
            className='form-select block w-full mt-1 border-2 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 rounded-md shadow-sm'
            required>
            <option disabled value=''>
              Select Class Standerd
            </option>
            {classArr.map((data, key) => (
              <option key={key} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className='mb-2'>Class Section :</label>
          <select
            className='form-select block w-full mt-1 border-2 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 rounded-md shadow-sm'
            required>
            <option disabled value=''>
              Select Class Section
            </option>
            {sectionsArr.map((data, key) => (
              <option key={key} value={data}>
                {data}
              </option>
            ))}
          </select>
        </div>
      </div>
      <FormInput
        type='number'
        labelName={"Class Fee in US dollers"}
        placeholder={"Ex: 100"}
      />
      <FormInput
        type='number'
        labelName={"Class Max Capacity"}
        placeholder={"Ex: 40"}
      />
      <FormInput
        type='text'
        labelName={"Class Duration"}
        placeholder={"Ex: 1hr | 2hrs | 90min"}
      />
      <div className=' mt-5 border-2 p-2 rounded-md justify-between px-5'>
        <label className='mb-2'>Class Frequency :</label>
        <select
          className='form-select block w-full mt-1 border-2 border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 rounded-md shadow-sm'
          required>
          <option disabled value=''>
            Select Class Frequency
          </option>
          <option value='daily'>daily</option>
          <option value='weekly'>weekly</option>
          <option value='bi-weekly'>bi-weekly</option>
        </select>
      </div>
      <div className='flex mt-5 border-2 p-2 rounded-md justify-between px-5'>
        <FormInput type='date' labelName={"Class Start date"} />
        <FormInput type='date' labelName={"Class End date"} />
      </div>
      <div className='mt-10 flex gap-10 justify-end'>
        <button
          type='button'
          className='bg-red-500 text-white px-3 rounded-md'
          onClick={toggleModal}>
          Cancel
        </button>
        <button
          type='submit'
          className='bg-cyan-500 text-white px-3 rounded-md'>
          Submit
        </button>
      </div>
    </Form>
  );
};

export default AddClass;
