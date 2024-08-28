import React, { useEffect, useState } from "react";

function UseEffectHook2() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", logMouseEvent);
    console.log("Add event listener");

    return () => {
      window.removeEventListener("mousemove", logMouseEvent);
      console.log("Removing event");
    };
  }, []);

  const logMouseEvent = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  return (
    <div>
      Hook X - {X} Hook Y - {Y}
    </div>
  );
}

export default UseEffectHook2;
