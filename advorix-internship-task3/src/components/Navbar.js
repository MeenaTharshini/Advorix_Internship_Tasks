import { NavLink } from "react-router-dom";
import "../styles/App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Multipage React App</h2>

      <div>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
