import React from "react";

const UserContext = React.createContext();
// const UserContext = React.createContext("Madan");  for default values.

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext; // for using type context in class component.
