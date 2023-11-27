import React from "react";
import { useState, createContext } from "react";
import employeeList from "../module/employeeList";

export const StaffContext = createContext(employeeList);

// will wrap the app with StaffContextProvider to use all this variables
function StaffContextProvider(props) {
  const [worker, setWorker] = useState(employeeList[0]);
  const [staff, setStaff] = useState(employeeList);

  return (
    <StaffContext.Provider value={{ worker, setWorker, staff, setStaff }}>
      {props.children}
    </StaffContext.Provider>
  );
}

export default StaffContextProvider;
