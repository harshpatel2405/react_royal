import React from "react";

const MapDemo1 = () => {
  const students = [
    { Name: "Harsh Patel", Age: 21, Course: "MERN Stack", Batch: "OCTOBER", ID: 1 },
    { Name: "John Doe", Age: 22, Course: "MERN Stack", Batch: "OCTOBER", ID: 2 },
    { Name: "Dhaval Prajapati", Age: 11, Course: "Android", Batch: "November", ID: 3 },
  ];

  return (
    <>
      <style>{`
        /* Table container */
        .table-container {
          display: flex;
          justify-content: center;
          margin-top: 50px;
          width: 100%;
        }

        /* Table styles */
        .custom-table {
          border-collapse: collapse;
          width: 80%;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #fff;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        /* Header styles */
        .custom-table th {
          background-color: #4caf50;
          color: white;
          padding: 12px;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Cell styles */
        .custom-table td {
          padding: 10px;
          border: 1px solid #ddd;
          font-size: 15px;
        }

        /* Row hover effect */
        .custom-table tr:hover {
          background-color: #f5f5f5;
          transition: 0.3s;
        }

        /* Alternate row color */
        .custom-table tr:nth-child(even) {
          background-color: #fafafa;
        }

        /* Highlight ID column */
        .custom-table td:first-child {
          font-weight: bold;
          color: #333;
        }
      `}</style>

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
                    borderRadius: "5px",
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
    </>
  );
};

export default MapDemo1;
