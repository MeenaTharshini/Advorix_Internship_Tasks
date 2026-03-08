import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Form.css";

function Signup() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://advorix-internship-task2-backend.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration Successful! Please Login.");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <div className="button-group">
          <button type="submit" className="btn-primary">Sign Up</button>
        </div>
      </form>
      <p style={{marginTop: "15px"}}>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Signup;