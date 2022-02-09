import React, { useState, useEffect } from "react";
import APIService from "../APIService";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";

const Login = () => {
  //   const [token, setToken] = useCookies(["mytoken"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [login, isLogin] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/user");
    }
  });

  const loginBtn = () => {
    APIService.LoginUser({ username, password })
      .then((res) => {
        localStorage.setItem("mytoken", res.token);
        localStorage.setItem("username", username);
        setToken(res.token);
      })
      .catch((err) => console.log(err));
  };

  const registerBtn = () => {
    APIService.RegisterUser({ username, password })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err));
  };

  const changeLogin = () => {
      login ? isLogin(false) : isLogin(true);
  }

  return (
    <div className="">
      <div className="container mt-5 p-3 col-sm-4">
        <div className="card p-3 pt-5">
          <h1 className="App">{login ? "Please Login" : "Please Register"}</h1>

          <div className="my-2">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Please enter username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="my-2">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Please enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            className="btn btn-primary my-2 mb-3"
            onClick={login ? loginBtn : registerBtn}
          >
            {login ? "Login" : "Register"}
          </button>
          <p>
            {login
              ? "If you don't have an account, please "
              : "If you already have an account, please "}
            <a className="link-primary" onClick={ changeLogin }>{login ? "Register" : "Login"}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
