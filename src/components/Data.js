import React, { useState, useEffect } from "react";
import APIService from "../APIService";

const ViewData = () => {
  const [data, setData] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    APIService.GetData()
    .then((res) => {
        setData(res);
        setUsers([...new Set( res.map(obj => obj.userId)) ]);
    })
  .catch((err) => setData(err));
  });

  return (
    <div className="">
      <div className="container p-3 col-sm-10">
        <div className="card p-3 pt-5">
          <h4 className="App mb-5">File Data</h4>
            { data ?
            users.map((uid) => {
                return(
                    <div className="alert alert-primary" role="alert">
                        <p><strong>UserID: </strong>{uid}</p>
                {data.map((obj) => {
                    if (obj.userId == uid)
                    return (
                        <div className="alert alert-light" role="alert">
                        <p><strong>PostID: </strong>{obj.id}</p>
                        <p><strong>Title: </strong>{obj.title}</p>
                        <p><strong>Body: </strong>{obj.body}</p>
                        </div>
                        
                    )
                })
            }</div>
                )
            }) 
             : 
             <div className="App mb-5">
             <div class="spinner-border text-primary" role="status">
             <span class="sr-only"></span>
           </div>
           </div>
        }
        </div>
      </div>
    </div>
  );
};

export default ViewData;
