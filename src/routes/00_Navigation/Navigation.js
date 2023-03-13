import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { UserContext } from "../../context/user.context";

import Logo from "../../components/ui/logo/Logo";
import { Container, Subcontainer, NavLink, Button } from "./Style";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signoutHandler = () => {
    setCurrentUser();
  };

  return (
    <>
      <Container>
        <NavLink to={"/employees"}>Employees</NavLink>

        <Subcontainer>
          {currentUser ? <Button onClick={signoutHandler}>sign out</Button> : null}
          <NavLink to={"/"}>
            <Subcontainer>
              <Logo />
            </Subcontainer>
          </NavLink>
        </Subcontainer>

        <NavLink to={"/tasks"}>Tasks</NavLink>
      </Container>
      <Outlet />
    </>
  );
};

export default Navigation;
