import React, { useContext } from "react";
import EmployeeListItem from "./EmployeeListItem";
import { StaffContext } from "../contexts/StaffContext";

function EmployeeList() {
  let { staff } = useContext(StaffContext);

  return (
    <div>
      {staff.map((employee, index) => (
        <EmployeeListItem key={index} employee={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
