import React from 'react';
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";


const Nav = () => { 
return ( 
<div className="App mt-5 mb-0">
      <div className="btn-group" role="group" aria-label="Basic example">
        <Link to="/user" className="btn btn-light">My Profile</Link>
        <Link to="/fileupload" className="btn btn-light">Upload File</Link>
        <Link to="/viewdata" className="btn btn-light">View File</Link>
      </div>
</div> 
)
}

export default Nav;     