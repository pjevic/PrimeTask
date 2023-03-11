import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  height: 30vh;
  /* background-color: #000; */

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavLink = styled(Link)`
  font-family: "Caveat", cursive;
  font-weight: 600;
  font-size: 3.69rem;

  text-align: center;
  color: #ff9f1c;
  /* background-color: #fd12; */

  border-bottom: 3px solid #ff9f1c;

  width: 20%;
`;
