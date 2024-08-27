import React from "react";

function MemoComp(props) {
  console.log("Child Comp");
  return <div>{props.name}</div>;
}

export default React.memo(MemoComp);
