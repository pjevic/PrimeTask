import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/00_navigation/Navigation";
import Welcome from "./routes/01_table/00_welcome/Welcome";
import Employees from "./routes/01_table/01_employees/Employees";
import Tasks from "./routes/01_table/02_tasks/Tasks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Welcome />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/tasks" element={<Tasks />} />
      </Route>
    </Routes>
  );
};

export default App;
