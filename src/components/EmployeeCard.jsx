import React from "react";
import employeeList from "../module/employeeList";
import EmployeeListItem from "./EmployeeListItem";
import { useContext } from "react";
import { StaffContext } from "../contexts/StaffContext";

function EmployeeCard() {
  let { worker } = useContext(StaffContext);

  return (
    <div
      style={{
        width: "500px",
        border: "solid 1px black",
        padding: "10px",
      }}
    >
      <div>
        <EmployeeListItem employee={worker} />
      </div>
      <div
        style={{
          borderBottom: "solid 1px black",
          padding: "10px",
        }}
      >
        <h5>Call Office</h5>
        <h6>733 528 5255</h6>
      </div>
      <div
        style={{
          borderBottom: "solid 1px black",
          padding: "10px",
        }}
      >
        <h5>Call Mobile</h5>
        <h6>733 528 5255</h6>
      </div>
      <div
        style={{
          borderBottom: "solid 1px black",
          padding: "10px",
        }}
      >
        <h5>SMS</h5>
        <h6>733 528 5255</h6>
      </div>
      <div
        style={{
          padding: "10px",
        }}
      >
        <h5>Email</h5>
        <h6>king@gmail.com</h6>
      </div>
    </div>
  );
}

export default EmployeeCard;
