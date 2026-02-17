import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>Secure Student Portal</h1>
        <p>
          Authentication system with secure login and registration.
          Access your account safely and manage your profile with ease.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
      </Routes>
    </Router>
  );
}

const styles = {
  container: {
    height: "85vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(20px)",
    padding: "60px",
    borderRadius: "20px",
    textAlign: "center",
    color: "white",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    width: "550px"
  }
};

export default App;
