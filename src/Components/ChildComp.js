import React from "react";

function ChildComp(props) {
  return (
    <div>
      <button onClick={() => props.greet("Admin")}>Call Parent</button>
    </div>
  );
}

export default ChildComp;
