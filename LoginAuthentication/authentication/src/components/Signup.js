import React, { useState } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";
const Signup = () => {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleOnChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;

    setUsers({ ...users, [name]: value });
    // console.log(value)
  };

  const handleSignup = () => {
    const { name, email, password, confirmPassword } = users;
    if (name && email && password && password === confirmPassword) {
      axios.post("http://localhost:5000/signup", users).then((res) => {
        alert(res.data.message);
       window.location.replace("/login");
      });
    } else {
      alert("Invalid Parameters");
    }
  };

  return (
    <div className="w-50 mx-auto mt-5 text-white">
      <div
        action="/signup"
        method="POST"
        className=" form-control bg-dark text-white py-3 px-5"
      >
        <h1 className="text-center mb-5">Signup</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={users.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={users.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={users.password}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ConfirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="ConfirmPassword"
            name="confirmPassword"
            value={users.confirmPassword}
            onChange={handleOnChange}
          />
        </div>

        <button className="btn btn-outline-light my-4" onClick={handleSignup}>
          Signup
        </button>
        <br />
        <span className="me-2">Already have an account ?</span>

        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Signup;
