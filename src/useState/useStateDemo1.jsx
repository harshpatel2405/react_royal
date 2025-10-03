import React, { useState } from "react";

const useStateDemo1 = () => {
  const [count, setCount] = useState(0); // info : numeric
  const [name, setName] = useState(""); // info : string
  const [loader, setLoader] = useState(true); // info : boolean
  const [student, setStudent] = useState({ id: 1, name: "Harsh" }); // info : object

  const increasecount = () => {
    setCount(count + 1);
  };

  const changeName = () => {
    setName("Harsh Patel");
  };


  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => increasecount()}
        style={{ width: "50px", height: "50px", fontSize: "30px" }}
      >
        +
      </button>

      <h2>Name : {name}</h2>
      <button onClick={() => changeName()}>Change Now </button>

    </div>
  );
};

export default useStateDemo1;
