import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/00_navigation/Navigation";
import Authentication from "./routes/01_authentication/Authentication";
import Employees from "./routes/02_employees/Employees";
import Employee from "./routes/03_employee/Employee";
import Tasks from "./routes/04_tasks/Tasks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Authentication />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/tasks" element={<Tasks />} />
      </Route>
    </Routes>
  );
};

export default App;
