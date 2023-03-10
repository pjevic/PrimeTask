import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/00_Navigation/Navigation";
import Employees from "./routes/01_Table/Employees";
import Tasks from "./routes/01_Table/Tasks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/employees" element={<Employees />} />
        <Route path="/tasks" element={<Tasks />} />
      </Route>
    </Routes>
  );
};

export default App;
