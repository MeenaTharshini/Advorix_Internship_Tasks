import "./App.css";

function App() {

  const openTask1 = () => {
    window.location.href = "https://advorix-internship-tasks-frontend.onrender.com";
  };

  const openTask2 = () => {
    window.location.href = "http://localhost:3002";
  };

  const openTask3 = () => {
    window.location.href = "http://localhost:3003";
  };

  return (
    <div className="container">
      <h1>Adcorix Internship Projects</h1>

      <button onClick={openTask1}>
        Task 1 - Student Management System
      </button>

      <button onClick={openTask2}>
        Task 2 - Authentication System
      </button>

      <button onClick={openTask3}>
        Task 3 - Project
      </button>

    </div>
  );
}

export default App;