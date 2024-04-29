import React, { useState, Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import ModalWrapper from "../../modal/ModalWrapper"; // Assuming similar modal component as Teachers
import Header from "../../components/header/Header";
import AddClass from "../../components/addClass/AddClass"; // You need to create this component
import fetchUtils from "../../libs/fetchUtils";

// Loader function to fetch data
export const loader = async () => {
  const COUNT_URL = "/api/v1/classes/count";
  const ALL_CLASSES = "/api/v1/classes/allClasses";
  const count = fetchUtils(COUNT_URL);
  const classes = await fetchUtils(ALL_CLASSES);
  return defer({ count, classes });
};

const Classes = () => {
  const { count, classes } = useLoaderData();
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);

  return (
    <div className='flex-grow p-2 bg-slate-200'>
      <Header headerName={"Classes"} />
      <main className='mt-3'>
        <div className='flex justify-between px-3'>
          <button
            className='flex border-2 border-gray-600 px-3 gap-3 items-center rounded-xl bg-white'
            onClick={toggleModal}>
            <span className='material-symbols-rounded'>add</span> Add Class
          </button>
          <span className='flex border-2 border-gray-600 px-3 gap-3 items-center rounded-xl bg-white'>
            Number of Classes :
            <Suspense fallback={<p>Loading..</p>}>
              <Await resolve={count}>{(data) => <p>{data.count}</p>}</Await>
            </Suspense>
          </span>
        </div>
        <ModalWrapper toggleModal={toggleModal} open={open}>
          <div className='min-w-[50vw] min-h-[50vh] rounded-lg p-3'>
            <h1 className='text-2xl'>Add Class :</h1>
            <AddClass toggleModal={toggleModal} />{" "}
            {/* Implement this component */}
          </div>
        </ModalWrapper>
        {/* Table or other UI components to display classes */}
      </main>
    </div>
  );
};

export default Classes;
