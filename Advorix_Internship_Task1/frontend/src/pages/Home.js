import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-hero">
      <div className="hero-content">
        <h1>Student Management System</h1>
        <p>Effortlessly manage your academic records with our powerful CRUD-based platform.</p>
        <div className="hero-buttons">
          <Link to="/add" className="btn btn-primary">Add New Student</Link>
          <Link to="/students" className="btn btn-secondary">View Records</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
