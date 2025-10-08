import React from 'react'

const EmployeeList = (props) => {
  return (
    <div>
        <h5>This is inside Employee List and data has been accessed through props..</h5>
        <table class="table table-striped table-bordered table-hover">
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Designation</th>
                <th>Salary</th>
            </thead>
            <tbody>
      {
        props.emp.map((empl)=>{
            return <tr>
                <td>{empl.id}</td>
                <td>{empl.name}</td>
                <td>{empl.designation}</td>
                <td>{empl.salary}</td>
            </tr>
        })
      }
      </tbody>
        </table>
    </div>
  )
}

export default EmployeeList
