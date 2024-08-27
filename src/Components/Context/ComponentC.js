import React from "react";
import { UserConsumer } from "./UserContext";

const ComponentC = () => {
  return (
    <>
      <UserConsumer>
        {(username) => {
          return `Hello, ${username}`;
        }}
      </UserConsumer>
    </>
  );
};

export default ComponentC;
