import React from "react";
import EmployeeList from "./EmployeeList";

const Employee = () => {
  const emp = [
    {
      id: 1001,
      name: "Harsh",
      designation: "IT Head",
      salary: 156000,
    },
    {
      id: 1002,
      name: "Vasu",
      designation: "Business Executive",
      salary: 123000,
    },
    {
      id: 1003,
      name: "Kushal",
      designation: "HR",
      salary: 111200,
    },
  ];

  return (
    <div>
        <h4 style={{color:"red"}}>This is inside Employee and data has been passed using props(Array)</h4>
      <EmployeeList emp={emp} />
    </div>
  );
};

export default Employee;
