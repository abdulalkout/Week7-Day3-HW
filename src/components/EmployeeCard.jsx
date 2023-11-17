import React from "react";
import employeeList from "../module/employeeList";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeCard() {
  return (
    <div
      style={{
        width: "500px",
        border: "solid 1px black",
        padding: "10px",
      }}
    >
      <div>
        <EmployeeListItem employee={employeeList[0]} />
      </div>
      <div
        style={{
          borderBottom: "solid 1px black",
          padding: "10px",
        }}
      >
        <h5>Call Office</h5>
        <h9>733 528 5255</h9>
      </div>
      <div
        style={{
          borderBottom: "solid 1px black",
          padding: "10px",
        }}
      >
        <h5>Call Mobile</h5>
        <h9>733 528 5255</h9>
      </div>
      <div
        style={{
          borderBottom: "solid 1px black",
          padding: "10px",
        }}
      >
        <h5>SMS</h5>
        <h9>733 528 5255</h9>
      </div>
      <div
        style={{
          padding: "10px",
        }}
      >
        <h5>Email</h5>
        <h9>king@gmail.com</h9>
      </div>
    </div>
  );
}

export default EmployeeCard;
