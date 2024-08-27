import React from "react";

function ClickHandler() {
  const clickHandler = (e, count = "1") => {
    console.log("Button clicked!", count, e);
  };
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
      <button onClick={(e) => clickHandler(e, 5)}>Click 5</button>
    </div>
  );
}

export default ClickHandler;
