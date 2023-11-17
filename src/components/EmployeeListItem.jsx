import React from "react";

function EmployeeListItem({ employee }) {
  return (
    <div
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
        <h9>{employee.jobTitle}</h9>
      </div>
    </div>
  );
}

export default EmployeeListItem;
