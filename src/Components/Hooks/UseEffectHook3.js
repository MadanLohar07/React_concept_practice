import React, { useState } from "react";
import UseEffectHook2 from "./UseEffectHook2";

function UseEffectHook3() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <UseEffectHook2 />}
    </div>
  );
}

export default UseEffectHook3;
