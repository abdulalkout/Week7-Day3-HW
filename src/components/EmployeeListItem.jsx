import React from "react";
import { useContext } from "react";
import { StaffContext } from "../contexts/StaffContext";

function EmployeeListItem({ employee }) {
  let { setWorker } = useContext(StaffContext);
  return (
    <div
      onClick={() => {
        setWorker(employee);
      }}
      style={{
        display: "flex",
        border: "solid 2px black",
        borderRadius: "20px",
        marginBottom: "5px",
      }}
    >
      <img
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          margin: "5px 10px 5px 5px",
        }}
        src={employee.img}
      />
      <div>
        <h3>{employee.name}</h3>
        <h6>{employee.jobTitle}</h6>
      </div>
    </div>
  );
}

export default EmployeeListItem;
