import { useState } from "react";
import Header from "./Components/Header";
import StudentCard from "./Components/StudentCard";
import StudentForm from "./Components/StudentForm";
import Toolbar from "./Components/Toolbar";
import "./App.css";
import Button from "./Components/Button";

function App() {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
    setShowForm(false); // close after submit
  };

  const handleDelete = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
  };

  const displayList = students
    .filter((s) => s.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((s) => courseFilter === "all" || s.course === courseFilter)
    .filter((s) => statusFilter === "all" || s.status === statusFilter)
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "grade") return b.grade - a.grade;
      return a.status.localeCompare(b.status);
    });

  return (
    <div className="app-container">
      <Header />

      <Toolbar
        searchTerm={searchTerm}
        courseFilter={courseFilter}
        statusFilter={statusFilter}
        sortBy={sortBy}
        setSearchTerm={setSearchTerm}
        setCourseFilter={setCourseFilter}
        setStatusFilter={setStatusFilter}
        setSortBy={setSortBy}
      />

      <Button variant="primary" onClick={() => setShowForm(true)}>
        Add Student
      </Button>

      <div className="student-grid">
        {students.length === 0 && (
          <p className="empty-state">No students added yet.</p>
        )}

        {students.length > 0 && displayList.length === 0 && (
          <p className="empty-state">No results found.</p>
        )}

        {displayList.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {showForm && (
        <StudentForm
          onAddStudent={handleAddStudent}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default App;
