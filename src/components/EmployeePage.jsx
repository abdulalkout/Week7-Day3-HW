import React from "react";
import Header from "./Header";
import EmployeeCard from "./EmployeeCard";

function EmployeePage() {
  return (
    <div>
      <Header txt={"Employee"} />
      <EmployeeCard />
    </div>
  );
}

export default EmployeePage;
