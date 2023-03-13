import { createContext, useState, useEffect } from "react";

// import { EMPLOYEES } from "../data-employees";
// import { TASKS } from "../data-tasks";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // useEffect(() => {
  //   addCollectionAndDocuments("tasks", TASKS);
  // }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
