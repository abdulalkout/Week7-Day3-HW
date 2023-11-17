import React from "react";

function Header(props) {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1>{props.txt}</h1>
    </div>
  );
}

export default Header;
