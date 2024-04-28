import React, { useState } from "react";
import Header from "../../components/header/Header";
import ModelWrapper from "../../modal/ModalWrapper";
import AddStudent from "../../components/addStudent/AddStudent";
export const loader = async () => {
  console.log("student loader fired");
  return null;
};
export const action = async ({ request, params }) => {
  console.log("student action fired");
  const FormData = await request.formData();
  const formObj = {};
  for (const val of FormData.entries()) {
    formObj[val[0]] = val[1];
  }
  console.log(formObj);
  return null;
};
const Students = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className='flex-grow p-2 bg-slate-200'>
      <Header headerName={"students"} />
      <main className='mt-3'>
        <div>
          <button
            className='flex border-2 border-gray-600 px-3 gap-3 rounded-xl bg-white'
            onClick={toggleModal}>
            <span className='material-symbols-rounded'>add</span> Add student
          </button>
        </div>
        <ModelWrapper toggleModal={toggleModal} open={open}>
          <div className='min-w-[50vw] min-h-[50vh] rounded-lg p-3'>
            <h1 className='text-2xl'>Add student</h1>
            <AddStudent toggleModal={toggleModal} />
          </div>
        </ModelWrapper>
      </main>
    </div>
  );
};

export default Students;
