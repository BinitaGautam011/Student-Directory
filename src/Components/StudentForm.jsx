import { useState } from "react";
import Button from "./Button";

const StudentForm = ({ onAddStudent, onClose }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");
  const [isPresent, setIsPresent] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name,
      course,
      grade: Number(grade),
      status: isPresent ? "Present" : "Absent",
    };

    onAddStudent(newStudent);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <Button
          variant="danger"
          onClick={onClose}
          style={{ position: "absolute", top: 10, right: 12 }}
        >
          ✕
        </Button>

        <h2>Add Student</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select Course</option>
            <option value="csit">BSc.CSIT</option>
            <option value="bca">BCA</option>
            <option value="bba">BBA</option>
          </select>

          <input
            type="number"
            placeholder="Grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />

          <div className="form-buttons">
            <Button
              type="button"
              variant={isPresent ? "success" : "neutral"}
              onClick={() => setIsPresent(!isPresent)}
            >
              Status: {isPresent ? "Present" : "Absent"}
            </Button>

            <Button type="submit" variant="primary">
              Save Student
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
