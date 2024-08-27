import { useState } from "react";

const Message = () => {
  const [massage, setMessage] = useState("Welcome, user!");
  return (
    <>
      <h1>{massage}</h1>
      <button
        onClick={() => {
          setMessage("Thank you for Subscribing!");
        }}
      >
        Subscribe
      </button>
    </>
  );
};

export default Message;
