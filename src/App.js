import "./App.css";
import HomePage from "./components/HomePage";
import EmployeePage from "./components/EmployeePage";
import employeeList from "./module/employeeList";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <HomePage />
      <EmployeePage />
    </div>
  );
}

export default App;
