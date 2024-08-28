import React, { useState } from "react";

const UseStateHook = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <br></br>
      FirstName is :- {name.firstName} <br></br>
      LastName is :- {name.lastName} <br></br>
    </>
  );
};

export default UseStateHook;
