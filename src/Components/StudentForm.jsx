import { useState } from "react";

const StudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState(0);
  const [present, isPresent] = useState(true);
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!course) {
      newErrors.course = "Course is required";
    }
    const gradeNum = parseFloat(grade);
    if (grade === "") {
      newErrors.grade = "Grade is required";
    } else if (gradeNum > 100 || gradeNum < 0) {
      newErrors.grade = "Grade must be between 0 and 100";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }
    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      course: course,
      grade: gradeNum,
      status: "Present",
    };
    onAddStudent(newStudent);
    setName("");
    setCourse("");
    setGrade("");
    setError({});
  };
  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3>Add Student to the Directory</h3>
      {error.name && (
        <span
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "0.75 rem",
          }}
        >
          {error.name}
        </span>
      )}{" "}
      <br />
      <label htmlFor="name">Name : </label>
      <input
        className={error.name ? "input-error" : ""}
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError({ ...error, name: false });
        }}
      />
      <br />
      {error.course && (
        <span
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "0.75 rem",
          }}
        >
          {error.course}
        </span>
      )}
      <br />
      <label htmlFor="course">Course : </label>
      <select
        className={error.course ? "input-error:" : ""}
        value={course}
        onChange={(e) => {
          setCourse(e.target.value);
          setError({ ...error, course: false });
        }}
      >
        <option value="" disabled hidden>
          Select the course
        </option>
        <option value="csit">Bsc.CSIT</option>
        <option value="bca">BCA</option>
        <option value="datascience">Data-Science</option>
        <option value="bbs">BBS</option>
        <option value="bba">BBA</option>
        <option value="bhm">BHM</option>
        <option value="bsw">BSW</option>
      </select>
      <br />
      {error.grade && (
        <span
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "0.75 rem",
          }}
        >
          {error.grade}
        </span>
      )}
      <br />
      <label htmlFor="grade">Grade : </label>
      <input
        className={error.grade ? "input-error" : ""}
        type="number"
        placeholder="Enter your grade"
        value={grade}
        onChange={(e) => {
          setGrade(e.target.value);
          setError({ ...error, grade: false });
        }}
      />
      <br /> <br />
      <button onClick={() => {}}>Add ~_~</button>
    </form>
  );
};
export default StudentForm;
