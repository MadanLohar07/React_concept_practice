import React, { useState } from "react";
import MemoComp from "./Memo";

function ParentMemo() {
  const [name, setName] = useState("Clark");
  setInterval(() => {
    setName("Clark");
  }, 2000);

  console.log("Parent Comp");

  return (
    <>
      <MemoComp name={name} />
    </>
  );
}

export default ParentMemo;
