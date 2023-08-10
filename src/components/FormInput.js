import React from "react";
import { useState } from "react";
import "./FormInput.css";

const FormInput = ({ onchange, errorMessage, label, ...inputProps }) => {
  const [focusLeave, setFocusLeave] = useState(false);

  const handleFocusLeave = (e) => {
    console.log("blur activated");
    setFocusLeave(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onchange}
        onBlur={handleFocusLeave}
        onFocus={() => inputProps.name === 'confirmPassword' && setFocusLeave(true)}
      />
      {focusLeave && <span>{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
