import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>🎓 Student Portal</div>

      <div style={styles.links}>
        {!token ? (
          <>
            <Link to="/login" style={styles.link}>Login</Link>
            <Link to="/signup" style={styles.signupBtn}>Sign Up</Link>
          </>
        ) : (
          <button onClick={handleLogout} style={styles.logoutBtn}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 60px",
    background: "transparent",
    color: "white"
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "1px"
  },
  links: {
    display: "flex",
    gap: "20px"
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
    transition: "0.3s"
  },
  signupBtn: {
    textDecoration: "none",
    background: "white",
    color: "#667eea",
    padding: "8px 16px",
    borderRadius: "8px",
    fontWeight: "600"
  },
  logoutBtn: {
    background: "#ff4d4d",
    border: "none",
    color: "white",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600"
  }
};

export default Navbar;
