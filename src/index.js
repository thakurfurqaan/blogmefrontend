import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import ViewUser from "./components/ViewUser";

import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import FileUpload from "./components/FileUpload";
import ViewData from "./components/Data";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/user" element={<ViewUser />} />
        <Route exact path="/fileupload" element={<FileUpload />} />
        <Route exact path="/viewdata" element={<ViewData />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <div className="App mt-5 mb-0">
      <div class="btn-group" role="group" aria-label="Basic example">
        <a href="/" className="btn btn-light">
          Login
        </a>
        <a href="/fileupload" className="btn btn-light">
          File Upload
        </a>
        <a href="/viewdata" className="btn btn-light">
          View File
        </a>
      </div>
    </div>
    <Router />

    <p className="App text-light">
      Created with ❤️ by{" "}
      <a
        href="https://www.linkedin.com/in/furqaanthakur/"
        className="text-light"
      >
        Furqaan Thakur
      </a>
    </p>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
