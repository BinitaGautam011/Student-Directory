import Button from "./Button";
import Badge from "./Badge";

const StudentCard = ({ student, onDelete }) => {
  return (
    <div className="student-card">
      <div className="card-top">
        <h3>{student.name}</h3>

        <Button variant="danger" onClick={() => onDelete(student.id)}>
          ✕
        </Button>
      </div>

      {/* Status Badge */}
      <Badge type={student.status === "Present" ? "success" : "neutral"}>
        {student.status}
      </Badge>

      {/* Top Performer */}
      {student.grade >= 90 && <Badge type="warning">Top Performer ⭐</Badge>}

      <p>Course: {student.course.toUpperCase()}</p>
      <p>Grade: {student.grade}%</p>
    </div>
  );
};

export default StudentCard;
