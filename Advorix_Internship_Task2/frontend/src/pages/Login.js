import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Form.css";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://advorix-internship-task2-backend.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token); // Store token for protected routes
        alert("Login Successful!");
        navigate("/dashboard");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h2>Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <div className="button-group">
          <button type="submit" className="btn-primary">Login</button>
        </div>
      </form>
      <p style={{marginTop: "15px"}}>New here? <Link to="/signup">Create Account</Link></p>
    </div>
  );
}

export default Login;