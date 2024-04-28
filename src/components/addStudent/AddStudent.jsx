import React, { useState } from "react";
import { Form, useSearchParams } from "react-router-dom";
import FormInput from "../formInputs/FormInput";
import GaurdianInput from "../formInputs/GaurdianInput";

const AddStudent = ({ toggleModal }) => {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    streetAddress: "",
    dateOfBirth: "",
  });
  const [guardianList, setGuardianList] = useState([
    {
      id: 1,
      guardianName: "",
      guardianMobileNumber: "",
      guardianEmailId: "",
      guardianHomeAddress: "",
      isParent: "no",
    },
  ]);
  const handleChange = (e, field, index = null) => {
    if (index !== null) {
      const newGuardians = [...guardianList];
      newGuardians[index][field] = e.target.value;
      setGuardianList(newGuardians);
    } else {
      setStudent({ ...student, [field]: e.target.value });
    }
  };

  const addGuardian = () => {
    const newId = guardianList.length + 1;
    setGuardianList([
      ...guardianList,
      {
        id: newId,
        guardianName: "",
        guardianMobileNumber: "",
        guardianEmailId: "",
        guardianHomeAddress: "",
        isParent: "no",
      },
    ]);
  };

  return (
    <Form
      method='POST'
      className='flex flex-col max-h-[90vh] overflow-y-auto p-2'>
      <FormInput
        type='text'
        lableName={"Name"}
        placeholder={"Student Name"}
        value={student.name}
        onChange={(e) => handleChange(e, "name")}
      />
      <FormInput
        type='email'
        lableName={"Email"}
        placeholder={"Student Email"}
      />
      <FormInput
        type='tel'
        lableName={"Mobile number"}
        placeholder={"Student number"}
      />
      <FormInput
        type='text'
        lableName={"Street address"}
        placeholder={"Student address"}
      />
      <FormInput
        type='date'
        lableName={"Date of birth"}
        placeholder={"Student Name"}
      />
      <div className='mt-5 border-2 p-2 rounded-md'>
        <button
          className='px-3 bg-gray-600 text-white rounded-lg'
          onClick={addGuardian}
          type='button'>
          Add Gaurdian
        </button>
        {guardianList?.map((data, key) => {
          return (
            <GaurdianInput
              GuardianNumber={data}
              key={key}
              guardian={data}
              onChange={handleChange}
              index={key}
            />
          );
        })}
      </div>
      <div className='mt-10 flex gap-10 justify-end'>
        <button
          type='button'
          className='bg-red-500 text-white px-3 rounded-md'
          onClick={toggleModal}>
          Cancle
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

export default AddStudent;
