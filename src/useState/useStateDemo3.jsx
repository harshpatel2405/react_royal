import React,{useState} from "react";

const useStateDemo3 = () => {
  const [student, setStudent] = useState({ id: 1, name: "Harsh" }); // info : object

  const studentFunction = () => {
    setStudent({
      ...student,
      id: student.id + 52,
      name: student.name.toUpperCase(),
    });
  };
  return (
    <div>
      <h4>{student.id}</h4>
      <h4>{student.name}</h4>

      <button onClick={() => studentFunction()}>Change Student</button>
    </div>
  );
};

export default useStateDemo3;
