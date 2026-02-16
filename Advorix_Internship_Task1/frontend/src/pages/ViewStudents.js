import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Table.css";
function ViewStudents() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/students");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
      setError(error.message);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/students/${id}`, { method: "DELETE" });
      alert("Student Deleted Successfully");
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  if (error) return <p>Error: {error}</p>;

  return (
  <div className="view-container">
    <div className="view-header">
      <h2>Student Records</h2>
      <Link to="/add" className="btn-add">
        <span className="plus-icon">+</span> Add New Student
      </Link>
    </div>

    {students.length === 0 ? (
      <div className="no-data">
        <p>No students found. Start by adding one!</p>
      </div>
    ) : (
      <div className="table-wrapper">
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td className="font-bold">{student.name}</td>
                <td>{student.age}</td>
                <td><span className="course-badge">{student.course}</span></td>
                <td className="actions-cell">
                  <Link to={`/edit/${student._id}`} className="edit-link">
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteStudent(student._id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    <Link to="/" className="back-link">← Back to Home</Link>
  </div>
);
}

export default ViewStudents;