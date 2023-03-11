import React from "react";
import { Outlet, Link } from "react-router-dom";

import Logo from "../../components/ui/logo/Logo";
import { Container, NavLink } from "./Style";

const Navigation = () => {
  return (
    <>
      <Container>
        <NavLink to={"/employees"}>Employees</NavLink>

        <NavLink to={"/"} style={{ borderBottom: "none" }}>
          <Logo />
        </NavLink>

        <NavLink to={"/tasks"}>Tasks</NavLink>
      </Container>
      <Outlet />
    </>
  );
};

export default Navigation;
