import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${username}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
