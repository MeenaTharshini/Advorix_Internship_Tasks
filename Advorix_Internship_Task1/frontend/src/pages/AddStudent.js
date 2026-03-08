import React, { useState } from "react";
import "../styles/Form.css";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://advorix-internship-task1-backend.onrender.com/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
      });

      const data = await response.json();
      alert("Student Added Successfully!");

      // Reset form
      setStudent({
        name: "",
        age: "",
        course: "",
        email:""
      });

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to add student");
    }
  };

  return (
    <div className="form-container">
      <h2>Add Student</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={student.age}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Enter Course"
          value={student.course}
          onChange={handleChange}
          required
        />

        <input
  type="email"
  name="email"
  placeholder="Enter Email"
  value={student.email}
  onChange={handleChange}
  required
/>

        
       <div className="button-group">
  <button type="submit" className="btn-primary">Add Student</button>
  <button type="button" className="btn-secondary" onClick={() => navigate("/")}>
    Back
  </button>
</div>
      </form>
    </div>
  );
}

export default AddStudent;
