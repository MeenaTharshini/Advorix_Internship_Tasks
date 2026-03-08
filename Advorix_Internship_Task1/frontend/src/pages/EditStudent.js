import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // One import is enough
import "../styles/Form.css";
function EditStudent() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: "",
    email: "" 
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await fetch(`https://advorix-internship-task1-backend.onrender.com/api/students/${id}`);
        const data = await response.json();
        if (response.ok) {
          setStudent(data);
        } else {
          alert("Student not found");
        }
      } catch (error) {
        console.error("Error fetching student:", error);
      }
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://advorix-internship-task1-backend.onrender.com/api/students/${id}`,  {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        alert("Student Updated Successfully!");
        navigate("/"); 
      } else {
        alert("Failed to update");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
  <div className="form-container">
    <h2>Edit Student</h2>
    <form onSubmit={handleSubmit}>
      <input name="name" value={student.name} onChange={handleChange} required placeholder="Name" />
      <input type="number" name="age" value={student.age} onChange={handleChange} required placeholder="Age" />
      <input name="course" value={student.course} onChange={handleChange} required placeholder="Course" />
      <input name="email" value={student.email} onChange={handleChange} required placeholder="Email" />
      
      <div className="button-group">
        <button type="submit" className="btn-primary">Update Student</button>
        <button type="button" className="btn-secondary" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </form>
  </div>
);
}

export default EditStudent;