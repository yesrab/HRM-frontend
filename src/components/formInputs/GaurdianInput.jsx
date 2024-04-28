import React from "react";

const GuardianInput = ({ GuardianNumber, onChange, index }) => {
  return (
    <>
      <label
        htmlFor={`GuardianName-${GuardianNumber.id}`}
        className='flex flex-col '>
        <p className='my-2'>{`Guardian ${GuardianNumber.id} Name`} :</p>
        <input
          type='text'
          value={GuardianNumber.guardianName}
          onChange={(e) => onChange(e, "guardianName", index)}
          id={`GuardianName-${GuardianNumber.id}`}
          className='border-2 rounded-md px-2 py-1 border-gray-300'
          placeholder={`Guardian ${GuardianNumber.id} Name`}
        />
        {/* <p className='text-red-500 text-sm'>Error</p> */}
      </label>
      <label
        htmlFor={`GuardianNumber-${GuardianNumber.id}`}
        className='flex flex-col '>
        <p className='my-2'>{`Guardian ${GuardianNumber.id} Number`} :</p>
        <input
          type='tel'
          value={GuardianNumber.guardianMobileNumber}
          onChange={(e) => onChange(e, "guardianMobileNumber", index)}
          id={`GuardianNumber-${GuardianNumber.id}`}
          className='border-2 rounded-md px-2 py-1 border-gray-300'
          placeholder={`Guardian ${GuardianNumber.id} Number`}
        />
        {/* <p className='text-red-500 text-sm'>Error</p> */}
      </label>
      <label
        htmlFor={`GuardianEmail-${GuardianNumber.id}`}
        className='flex flex-col '>
        <p className='my-2'>{`Guardian ${GuardianNumber.id} Email Id`} :</p>
        <input
          type='email'
          value={GuardianNumber.guardianEmailId}
          onChange={(e) => onChange(e, "guardianEmailId", index)}
          id={`GuardianEmail-${GuardianNumber.id}`}
          className='border-2 rounded-md px-2 py-1 border-gray-300'
          placeholder={`Guardian ${GuardianNumber.id} Email Id`}
        />
        {/* <p className='text-red-500 text-sm'>Error</p> */}
      </label>
      <label
        htmlFor={`GuardianAddress-${GuardianNumber.id}`}
        className='flex flex-col '>
        <p className='my-2'>{`Guardian ${GuardianNumber.id} Email Id`} :</p>
        <input
          type='text'
          value={GuardianNumber.guardianHomeAddress}
          onChange={(e) => onChange(e, "guardianHomeAddress", index)}
          id={`GuardianEmail-${GuardianNumber.id}`}
          className='border-2 rounded-md px-2 py-1 border-gray-300'
          placeholder={`Guardian ${GuardianNumber.id} Email Id`}
        />
        {/* <p className='text-red-500 text-sm'>Error</p> */}
      </label>
      <label htmlFor={`GuardianRelationship-${GuardianNumber.id}`}>
        {`Guardian ${GuardianNumber.id} Relationship`} :
      </label>

      <label htmlFor={`GuardianIsParent-${GuardianNumber.id}`}> Parent</label>
      <div className='flex gap-3'>
        <label
          htmlFor={`GuardianIsParentYes-${GuardianNumber.id}`}
          className='inline-flex items-center'>
          <input
            type='radio'
            id={`GuardianIsParentYes-${GuardianNumber.id}`}
            name={`GuardianIsParent-${GuardianNumber.id}`}
            checked={GuardianNumber.isParent === "on"}
            onChange={(e) => onChange(e, "isParent", index)}
          />
          Yes
        </label>
        <label
          htmlFor={`GuardianIsParentNo-${GuardianNumber.id}`}
          className='inline-flex items-center'>
          <input
            type='radio'
            id={`GuardianIsParentNo-${GuardianNumber.id}`}
            name={`GuardianIsParent-${GuardianNumber.id}`}
            value='no'
            checked={GuardianNumber.isParent === "no"}
            onChange={(e) => onChange(e, "isParent", index)}
          />
          No
        </label>
      </div>
    </>
  );
};

export default GuardianInput;
