import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = (props) => {

  const setLoginUser = props.setLoginUser;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const handleOnChange = (e) => {

    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    // console.log(value);

  }

  const handleLogin = () => {
    axios.post("http://localhost:5000/login", user)
      .then(res => {
        alert(res.data.message)
        console.log(res.data.user);
        setLoginUser(res.data.user);
        window.location.replace("/");
    })
  }

  return (
    <div className="w-50 mx-auto mt-5 text-white">
      <div className=" form-control bg-dark text-white py-3 px-5">
        <h1 className="text-center mb-5">Login</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={user.email}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-3">
          <label htmlhtmlFor="email" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="email"
            value={user.password}
            onChange={handleOnChange}
          />
        </div>

        <button className="btn btn-outline-light my-4" onClick={handleLogin}>
          Login
        </button>
        <br />
        <span className="me-2">If you are not register ?</span>
        <Link to={"/signup"}>Create an account</Link>
      </div>
    </div>
  );
};

export default Login;
