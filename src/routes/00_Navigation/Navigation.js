import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>Nevigation</div>
      <Outlet />
    </div>
  );
};

export default Navigation;
