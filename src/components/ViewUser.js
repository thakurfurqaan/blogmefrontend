import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

const ViewUser = () => {
  const [username, setUsername] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("mytoken")) {
        localStorage.setItem('error', 'Please login first!');
      navigate("/");
    } else {
      setUsername(localStorage.getItem("username"));
    }
  });

  const logoutBtn = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="">
        <Nav />
      <div className="container p-3 col-sm-4">
        <div className="card p-3 pt-5">
          <h4 className="App">Hey {username}, how are you?</h4>

          <button className="btn btn-danger my-3" onClick={logoutBtn}>
            Logout  
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
