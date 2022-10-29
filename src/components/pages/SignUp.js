import React from "react";
import "../../App.css";
import { useState, useEffect } from "react";

// source: https://www.geeksforgeeks.org/how-to-develop-user-registration-form-in-reactjs/

export default function SignUp() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

 
 
  return (
    <>
    <h1 className="sign-up">Sign Up With Foodie Today</h1>
    
    <div className="formSignUp">
      <div>
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="labelName">Name</label>
        <input onChange={handleName} className="inputText"
          value={name} type="text" />
 
        <label className="labelEmail">Email</label>
        <input onChange={handleEmail} className="inputText"
          value={email} type="email" />
 
        <label className="labelPassword">Password</label>
        <input onChange={handlePassword} className="inputText"
          value={password} type="password" />
 
        <button onClick={handleSubmit} className="btnSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
