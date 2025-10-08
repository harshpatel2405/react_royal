const StudentList = (props) => {
  return (
    <div>
      <h5>
        This is inside Student List and data has been accessed through props..
      </h5>
      <table class="table  table-striped table-dark table-bordered table-hover">
        <thead thead-dark>
          <th>ID</th>
          <th>Name</th>
          <th>Marks</th>
          <th>Standard</th>
          <th>Division</th>
          <th>Action</th>
        </thead>
        <tbody>
          {props.stu.map((stud) => {
            return (
              <tr>
                <td>{stud.id}</td>
                <td>{stud.name}</td>
                <td>{stud.marks}</td>
                <td>{stud.std}</td>
                <td>{stud.div}</td>
                <td>
                  <button
                    class="btn btn-primary"
                    onClick={() => {
                      props.test(
                        stud.id,
                        stud.name,
                        stud.marks,
                        stud.std,
                        stud.div
                      );
                    }}
                  >
                    Info
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
