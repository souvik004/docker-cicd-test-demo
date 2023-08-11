import React from "react";
import { useState } from "react";
import FormInput from "./FormInput";
import './Form.css'

const Form = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
    fullname: "",
    mobile: ""
  })
  
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
    },
    {
      id: 6,
      name: "fullname",
      type: "text",
      placeholder: "FullName",
      errorMessage: "Passwords don't match!",
      label: "Name",
    },
    {
      id: 7,
      name: "mobile",
      type: "number",
      placeholder: "Mobile Number",
      max: 10,
      label: "Mobile Number",
    },
  ];

  const handleSubmit = (e) => { 
    e.preventDefault();
    if(values.username.trim() !== '' && values.password.trim() !== '' && values.email.trim() !== '') {
      // console.log("blank")
    }
    // console.log(values);
  };

  const onChangeHandler = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  }

  return (
    <div className="wrapper">
      <pre>{JSON.stringify(values)}</pre>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} onchange={onChangeHandler} value={values[input.name]} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
