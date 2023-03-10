import React from "react";
import { Outlet, Link } from "react-router-dom";

import logo from "../../assets/images/logo-PrimeTask.png";

const Navigation = () => {
  return (
    <>
      <div>
        <Link to={"/employees"}>Employees</Link>
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
        <Link to={"/tasks"}>Tasks</Link>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
