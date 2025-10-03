import React from "react";
import "./MapDemo1.css"; // import the css

const MapDemo1 = () => {
  var students = [
    { Name: "Harsh Patel", Age: 21, Course: "MERN Stack", Batch: "OCTOBER", ID: 1 },
    { Name: "John Doe", Age: 22, Course: "MERN Stack", Batch: "OCTOBER", ID: 2 },
    { Name: "Dhaval Prajapati", Age: 11, Course: "Android", Batch: "November", ID: 3 },
  ];

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.ID}>
              <td>{student.ID}</td>
              <td>{student.Name}</td>
              <td style={{ color: student.Age > 12 ? "red" : "green" }}>
                {student.Age}
              </td>
              <td
                style={{
                  backgroundColor:
                    student.Course === "MERN Stack" ? "blueviolet" : "green",
                  color: "white",
                }}
              >
                {student.Course}
              </td>
              <td
                style={{
                  fontFamily: student.Batch === "OCTOBER" ? "Arial" : "Calibri",
                }}
              >
                {student.Batch}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MapDemo1;
