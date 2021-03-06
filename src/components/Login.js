import React, { useState, useEffect } from "react";
import APIService from "../APIService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //   const [token, setToken] = useCookies(["mytoken"]);
  const [username, setUsername] = useState("");
  const [usernameAlert, setUsernameAlert] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAlert, setPasswordAlert] = useState("");
  const [nonFieldAlert, setNonFieldAlert] = useState("");
  const [alert, setAlert] = useState("");
  const [token, setToken] = useState("");
  const [login, isLogin] = useState(true);
  const [loading, isLoading] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("mytoken")) {
      navigate("/user");
    }
  });

  const loginBtn = () => {
    localStorage.clear();
    setUsernameAlert("");
    setPasswordAlert("");
    setNonFieldAlert("");
    if (username == "") {
      setUsernameAlert("Username cannot be empty");
    } else if (password == "") {
      setPasswordAlert("Password cannot be empty");
    } else {
      isLoading(true);
      APIService.LoginUser({ username, password })
        .then((res) => {
          isLoading(false);
          if (!res.non_field_errors) {
            localStorage.setItem("mytoken", res.token);
            localStorage.setItem("username", username);
            console.log(res);
            setToken(res.token);
          } else {
            setNonFieldAlert(res.non_field_errors[0]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const registerBtn = () => {
    localStorage.clear();
    setUsernameAlert("");
    setPasswordAlert("");
    setNonFieldAlert("");
    if (username == "") {
      setUsernameAlert("Username cannot be empty");
    } else if (password == "") {
      setPasswordAlert("Password cannot be empty");
    } else {
      isLoading(true);
      APIService.RegisterUser({ username, password })
        .then((res) => {
          isLoading(false);
          if (!res.ok) {
            if (res.username[0].length != 1) {
              setUsernameAlert(res.username[0]);
            } else {
              setNonFieldAlert("Account created successfully!");
              isLogin(true);
            }
          }
          console.log(res);
        })
        .catch((err) => {
          setAlert(err);
          console.log(err);
        });
    }
  };

  const changeLogin = () => {
    login ? isLogin(false) : isLogin(true);
    setUsernameAlert("");
    setPasswordAlert("");
    setNonFieldAlert("");
  };

  return (
    <div className="mt-5">
      <div className="container p-3 col-sm-8 col-md-6 col-lg-6 col-xl-4">
        <div className="card p-4 pt-5">
          <img src="/finance_peer_logo.png" className="img-fluid m-2" />
          <h4 className="App mt-5">{login ? "Login" : "Register"}</h4>
          {nonFieldAlert ? (
            <div className="alert alert-danger mt-1 mb-3" role="alert">
              {nonFieldAlert}
            </div>
          ) : (
            ""
          )}
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
            {usernameAlert ? (
              <div className="alert alert-danger mt-1 mb-3" role="alert">
                {usernameAlert}
              </div>
            ) : (
              ""
            )}
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
            {passwordAlert ? (
              <div className="alert alert-danger mt-1 mb-3" role="alert">
                {passwordAlert}
              </div>
            ) : (
              ""
            )}
          </div>
          {alert ? (
            <div className="alert alert-danger my-3" role="alert">
              {alert}
            </div>
          ) : (
            ""
          )}
          <button
            className="btn btn-primary mt-2 mb-3"
            onClick={login ? loginBtn : registerBtn}
          >
            {" "}
            {loading ? (
              <div
                className="spinner-border spinner-border-sm text-light"
                role="status"
              >
                <span className="sr-only sm"></span>
              </div>
            ) : login ? (
              "Login"
            ) : (
              "Register"
            )}
          </button>
          <p className="App">
            {login
              ? "If you don't have an account, please "
              : "If you already have an account, please "}
            <a className="link-primary" onClick={changeLogin}>
              {login ? "Register" : "Login"}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
