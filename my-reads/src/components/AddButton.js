import React from 'react';
import { BsPlus } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const AddButton = ({ children }) => (
  <div>
    <button type="button" className="btn addbtn">
      <BsPlus />
      {children}
    </button>
  </div>
);

export default AddButton;
