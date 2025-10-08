import StudentList from "./StudentList";

const Student = () => {
  const stu = [
    {
      id: 101,
      name: "Kush",
      marks: 95,
      std: 9,
      div: "A",
    },
    {
      id: 102,
      name: "Sujal",
      marks: 99,
      std: 10,
      div: "B",
    },

    {
      id: 103,
      name: "Vaibhav",
      marks: 65,
      std: 12,
      div: "C",
    },
  ];

  const test = (id, name, marks, std, div) => {
    alert(
      "ID : " +
        id +
        "\nName : " +
        name +
        "\nMarks : " +
        marks +
        "\nStandard : " +
        std +
        "\nDivision : " +
        div
    );
  };
  return (
    <div>
      <h4 style={{ color: "red" }}>
        This is inside Student and data has been passed using props(Array)
      </h4>
      <StudentList stu={stu} test={test} />
    </div>
  );
};

export default Student;
