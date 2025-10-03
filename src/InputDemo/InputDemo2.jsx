import React, { useState } from "react";

const InputDemo2 = () => {
  // useState hooks
  const [colore, setcolor] = useState("");   // stores selected color
  const [name, setname] = useState("");      // stores entered name
  const [isSubmiited, setisSubmiited] = useState(false); // flag for displaying output

  return (
    <div style={{ textAlign: "center", fontSize: "25px" }}>
      {/* Input for Name */}
      <label>Name : </label>
      <input
        type="text"
        onChange={(e) => {
          setname(e.target.value); // update name state on input change
        }}
      />

      <br />
      <br />

      {/* Input for Color (Color Picker) */}
      <label>Color : </label>
      <input
        type="color"
        onChange={(e) => {
          setcolor(e.target.value); // update color state on color selection
        }}
      />

      {/* Button to submit and show data */}
      <button
        onClick={() => {
          setisSubmiited(true); // set flag to true when clicked
        }}
      >
        Display Data
      </button>

      {/* Conditional Rendering: Display only if submitted */}
      {isSubmiited && (
        <div>
          {/* The name will be displayed in the selected color */}
          <h1 style={{ color: colore }}>Name = {name}</h1>
        </div>
      )}
    </div>
  );
};

export default InputDemo2;

/*
!Formatted Code :: only use when css is needed....

import React, { useState } from "react";

const InputDemo2 = () => {
  const [colore, setcolor] = useState("");
  const [name, setname] = useState("");
  const [isSubmiited, setisSubmiited] = useState(false);

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

          label {
            font-size: 18px;
            margin-right: 10px;
          }

          input[type="text"] {
            padding: 6px;
            font-size: 16px;
            margin-bottom: 15px;
          }

          input[type="color"] {
            margin-left: 10px;
            cursor: pointer;
            width: 50px;
            height: 30px;
            border: none;
            background: none;
          }

          button {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            font-size: 16px;
            background: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }

          button:hover {
            background: #45a049;
          }

          .result {
            margin-top: 30px;
          }
        `}
      </style>

      <div className="container">
        <label>Name : </label>
        <input
          type="text"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />

        <br />
        <br />

        <label>Color : </label>
        <input
          type="color"
          onChange={(e) => {
            setcolor(e.target.value);
          }}
        />

        <button
          onClick={() => {
            setisSubmiited(true);
          }}
        >
          Display Data
        </button>

        {isSubmiited && (
          <div className="result">
            <h1 style={{ color: colore }}>Name = {name}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default InputDemo2;

*/
