import React from "react";
import "../../App.css";
import { useForm } from "react-hook-form";
// export default function Login() {
//   return (
//   <h1 className="login">Login To FOODIE</h1>


//   );
// }

function Login(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) { // getItem can return actual value or null
      if (userData.password === data.password) {
        console.log(userData.name + " You Are Successfully Logged In");
      } else {
        console.log("Email or Password is not matching with our record");
      }
    } else {
      console.log("Email or Password is not matching with our record");
    }
  };
  return (
    <>
    <h1 className="login">Login To FOODIE</h1>
      <p className="loginForm">Login Form</p>

      <form className="appForm" onSubmit={handleSubmit(onSubmit)}>
      <p>Email</p>
        <input type="email" {...register("email", { required: true })} />
       
        {errors.email && <span style={{ color: "red" }}>
         *Email* is mandatory </span>}
         <p>Password</p>
        <input type="password" {...register("password")} />
        <button onClick={handleSubmit} className="btnSubmit" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
export default Login;