import "./App.css";

function App() {

  const openTask1 = () => {
    window.location.href = "https://advorix-internship-tasks-frontend.onrender.com";
  };

  const openTask2 = () => {
    window.location.href = "https://advorix-internship-task2-frontend.onrender.com";
  };

  const openTask3 = () => {
    window.location.href = "https://advorix-internship-task3-orig.onrender.com";
  };

  return (
    <div className="landing-container">
      <h1>Adcorix Internship Projects</h1>
      <p>Select any project to explore its features and functionality</p>

      <div className="button-group">
        <button className="btn-primary" onClick={openTask1}>
          Task 1 - Student Management System
        </button>

        <button className="btn-primary" onClick={openTask2}>
          Task 2 - Authentication System
        </button>

        <button className="btn-primary" onClick={openTask3}>
          Task 3 - Project
        </button>
      </div>

      <footer className="footer">
        © 2026 Meena Tharshini | Advorix Internship
      </footer>
    </div>
  );
}

export default App;