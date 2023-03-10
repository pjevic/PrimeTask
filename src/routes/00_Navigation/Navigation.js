import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>Navigation</div>
      <Outlet />
    </div>
  );
};

export default Navigation;
