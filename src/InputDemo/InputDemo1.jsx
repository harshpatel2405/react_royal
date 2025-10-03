import React, { useState } from "react";

// Functional Component
const InputDemo1 = () => {
  // useState hooks for storing input values
  const [name, setname] = useState("");       // stores Name
  const [age, setage] = useState("");         // stores Age
  const [email, setemail] = useState("");     // stores Email
  const [isSubmitted, setisSubmitted] = useState(false); // flag to display output after submission

  // Handler function for Name input
  const nameHandler = (e) => {
    console.log(e.target.value); // log value in console
    setname(e.target.value);     // update state with new name
  };

  // Handler function for Age input
  const ageHandler = (e) => {
    console.log(e.target.value); // log value in console
    setage(e.target.value);      // update state with new age
  };

  return (
    <div style={{ textAlign: "center", fontSize: "25px" }}>
      <div>
        <h1>INPUT</h1>

        {/* Name Input */}
        <label>Name : </label>
        <input
          style={{ height: "25px" }}
          type="text"
          onChange={(event) => {
            nameHandler(event); // call nameHandler on every change
          }}
        />
        <br />
        <br />
        <br />

        {/* Age Input */}
        <label>Age : </label>
        <input
          style={{ height: "25px" }}
          type="text"
          onChange={(event) => {
            ageHandler(event); // call ageHandler on every change
          }}
        />
        <br />
        <br />
        <br />

        {/* Email Input */}
        <label>Email : </label>
        <input
          style={{ height: "25px" }}
          type="email"
          onChange={(e) => {
            setemail(e.target.value); // directly set email state
          }}
        />
      </div>

      <br />

      {/* Button to display entered data */}
      <button
        style={{ fontSize: "30px" }}
        onClick={() => {
          setisSubmitted(true); // set flag true on button click
        }}
      >
        Display Data
      </button>

      {/* Conditional Rendering: show output only when isSubmitted is true */}
      {isSubmitted === true && (
        <div>
          <br />
          <h1>OUTPUT</h1>
          <h2>Name = {name}</h2>
          <br />
          <h2>Age = {age}</h2>
          <br />
          <h2>Email = {email}</h2>
        </div>
      )}
    </div>
  );
};

export default InputDemo1;

/*
! info :Formatted Version ::  use when proper css is needed...
import React, { useState } from "react";

const InputDemo1 = () => {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [isSubmitted, setisSubmitted] = useState(false);

  const nameHandler = (e) => {
    setname(e.target.value);
  };

  const ageHandler = (e) => {
    setage(e.target.value);
  };

  return (
    <div>
      <style>
        {`
          .container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            text-align: center;
            border: 2px solid #ddd;
            border-radius: 10px;
            background-color: #f9f9f9;
          }

          .title {
            margin-bottom: 20px;
            color: #333;
          }

          .form-group {
            margin: 15px 0;
          }

          label {
            font-size: 18px;
            margin-right: 10px;
          }

          input {
            height: 28px;
            width: 70%;
            padding: 4px;
            font-size: 16px;
          }

          .btn {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 16px;
            background: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          .btn:hover {
            background: #45a049;
          }

          .result {
            margin-top: 30px;
            text-align: left;
            font-size: 18px;
          }
        `}
      </style>

      <div className="container">
        <h1 className="title">INPUT FORM</h1>

        <div className="form-group">
          <label>Name : </label>
          <input type="text" onChange={nameHandler} />
        </div>

        <div className="form-group">
          <label>Age : </label>
          <input type="text" onChange={ageHandler} />
        </div>

        <div className="form-group">
          <label>Email : </label>
          <input type="email" onChange={(e) => setemail(e.target.value)} />
        </div>

        <button className="btn" onClick={() => setisSubmitted(true)}>
          Display Data
        </button>

        {isSubmitted && (
          <div className="result">
            <h2>Name = {name}</h2>
            <h2>Age = {age}</h2>
            <h2>Email = {email}</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputDemo1;

*/
