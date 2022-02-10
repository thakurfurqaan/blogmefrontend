import React, { useState, useEffect } from "react";
import APIService from "../APIService";
import { useNavigate } from "react-router-dom";

const FileUpload = () => {
  let navigate = useNavigate();
  const [loading, isLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [fileProps, setFileProps] = useState(null);
  const [fileValid, setFileValid] = useState(false);
  const [alert, setAlert] = useState("");

  const fileUpload = () => {
    if (fileValid && file) {
        isLoading(true);
      const formData = new FormData();
      console.log("file", file);
      APIService.FileUpload(file)
        .then((res) => {
            isLoading(false);
            setAlert("File uploaded successfully!");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setAlert("Please select a valid JSON file!");
    }

  };

  const selectFile = (event) => {
      setFile(null);
    // setFileValid(false);
    setAlert("");
    setFileProps(event.target.files[0]);
    if (event.target.files[0].type !== "application/json") {
      setAlert("Please select a valid JSON file!");
      setFileValid(false);
    } else {
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8");
        fileReader.onload = (e) => {
          console.log("e.target.result", JSON.parse(e.target.result));
          setFileValid(true);
          setFile(JSON.parse(e.target.result));
          console.log("setting file: ", file);
          setAlert("File is valid!");
        };    
    }
  };

  return (
    <div className="">
      <div className="container p-3 col-sm-8 col-lg-6">
        <div className="card p-4 pt-5">
          <h4 className="App mb-5">File Upload</h4>
          <p>
            Please select a JSON file:{" "}
            <input type="file" onChange={selectFile} />
          </p>

          {fileProps ? (
            <div className="mt-4">
              <p>
                <strong>FILE DETAILS</strong>
              </p>
              <p>
                <strong>File name: </strong>
                {fileProps.name}
              </p>
              <p>
                <strong>File type: </strong>
                {fileProps.type}
              </p>
              <p>
                <strong>File size: </strong>
                {fileProps.size}
              </p>
            </div>
          ) : (
            ""
          )}
          {alert ? (
            <div className="alert alert-danger my-3" role="alert">
              {alert}
            </div>
          ) : (
            ""
          )}
          <button className="btn btn-primary mt-3 mb-3" onClick={fileUpload}>
            {loading ? (
              <div
                className="spinner-border spinner-border-sm text-light"
                role="status">
                <span className="sr-only sm"></span>
              </div>
            ) : (
              "Upload File"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
