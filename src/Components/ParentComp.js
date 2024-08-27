import React from "react";
import ChildComp from "./ChildComp";

function ParentComp() {
  const parentComponent = (childName) => {
    alert(`Hello, Parent Component ${childName} `);
  };
  return <ChildComp greet={parentComponent} />;
}

export default ParentComp;
