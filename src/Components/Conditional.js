import React from "react";

function Conditional() {
  const isLoggedIn = false;
  return (
    <div>
      {/* <h1>Welcome, {isLoggedIn ? "Madan" : "Guest"}</h1> */}
      <h1>Welcome, {isLoggedIn && "Madan"}</h1>
    </div>
  );
}

export default Conditional;
