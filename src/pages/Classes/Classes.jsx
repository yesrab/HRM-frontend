import React, { useState, Suspense } from "react";
import {
  Await,
  defer,
  useActionData,
  useLoaderData,
  useRevalidator,
} from "react-router-dom";
import ModalWrapper from "../../modal/ModalWrapper"; // Assuming similar modal component as Teachers
import Header from "../../components/header/Header";
import AddClass from "../../components/addClass/AddClass"; // You need to create this component
import fetchUtils from "../../libs/fetchUtils";

// Loader function to fetch data
export const loader = async () => {
  const COUNT_URL = "/api/v1/class/count";
  const ALL_CLASSES = "/api/v1/class/allClass";
  const count = fetchUtils(COUNT_URL);
  const Classes = await fetchUtils(ALL_CLASSES);
  // const classes = await fetchUtils(ALL_CLASSES);

  return defer({ count, Classes });
};

export const action = async ({ request, params }) => {
  const data = await request.json();
  console.log(data);
  const ADD_CLASS_URI = "/api/v1/class/addClass";
  let classRequest;
  if (request.method == "POST") {
    classRequest = new Request(ADD_CLASS_URI, {
      method: request.method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  const response = await fetchUtils(classRequest);
  return response;
};

const Classes = () => {
  const { count, Classes } = useLoaderData();
  const response = useActionData();
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const toggleModal = () => setOpen(!open);

  const validator = useRevalidator();
  const assignTeacher = async (classId, teacherId, method) => {
    const assignTeacher_URL = "/api/v1/class/setTeacher";
    const teacherReq = new Request(assignTeacher_URL, {
      method: method,
      body: JSON.stringify({ classId, teacherId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await fetchUtils(teacherReq);
    validator.revalidate();
    // Close the dropdown for the specific class
    setDropdownOpen((prev) => ({ ...prev, [classId]: false }));
  };

  const toggleDropdown = (classId) => {
    setDropdownOpen((prev) => ({ ...prev, [classId]: !prev[classId] }));
  };

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
            <AddClass toggleModal={toggleModal} response={response} />
          </div>
        </ModalWrapper>
        <div className='p-2 mt-3'>
          <table className='min-w-full table-auto border-collapse shadow-lg'>
            <thead className='bg-gray-500'>
              <tr>
                <th className='border px-4 py-2'>Class Name</th>
                <th className='border px-4 py-2'>Duration</th>
                <th className='border px-4 py-2'>Capacity</th>
                <th className='border px-4 py-2'>Students</th>
                <th className='border px-4 py-2'>Teacher</th>
              </tr>
            </thead>
            <tbody>
              {Classes.classes.map((cls) => (
                <tr key={cls._id} className='bg-white hover:bg-gray-100'>
                  <td className='border px-4 py-2'>{cls.className}</td>
                  <td className='border px-4 py-2'>{cls.duration}</td>
                  <td className='border px-4 py-2'>{cls.classCapacity}</td>
                  <td className='border px-4 py-2'>{cls.students.length}</td>
                  <td className='border px-4 py-2 relative'>
                    <button
                      onClick={() => toggleDropdown(cls._id)}
                      className='bg-gray-200 rounded-md p-2'>
                      {cls.classTeacher.name || "Select Teacher"}
                    </button>
                    {dropdownOpen[cls._id] && (
                      <ul className='absolute z-10 bg-white border border-gray-300 rounded-md w-full'>
                        <li
                          className='p-2 hover:bg-gray-100 cursor-pointer'
                          onClick={() =>
                            assignTeacher(cls._id, null, "DELETE")
                          }>
                          None
                        </li>
                        {Classes.allTeachers.map((teacher) => (
                          <li
                            key={teacher._id}
                            className='p-2 hover:bg-gray-100 cursor-pointer'
                            onClick={() =>
                              assignTeacher(cls._id, teacher._id, "PATCH")
                            }>
                            {teacher.fullName}
                          </li>
                        ))}
                      </ul>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Classes;
