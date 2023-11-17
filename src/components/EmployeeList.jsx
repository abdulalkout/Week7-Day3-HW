import React from "react";
import employeeList from "../module/employeeList";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
  return (
    <div>
      {employeeList.map((employee, index) => (
        <EmployeeListItem key={index} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
