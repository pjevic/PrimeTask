import { createContext, useState } from "react";

export const EmployeesContext = createContext({
  currentEmployee: null,
  setCurrentEmployee: () => null,
});

export const EmployeesProvider = ({ children }) => {
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const value = { currentEmployee, setCurrentEmployee };

  return <EmployeesContext.Provider value={value}>{children}</EmployeesContext.Provider>;
};
