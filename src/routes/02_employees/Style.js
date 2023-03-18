import styled from "styled-components";
import Employees from "./Employees";

export const MainContainer = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  border: 3px solid #ff9f1c;
  border-radius: 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: rgba(255, 159, 28, 0.25);
  border-bottom: 2px solid #ff9f1c;
`;

export const Subheader = styled.div`
  display: flex;
`;

export const Buttons = styled.div``;

export const Heading = styled.div`
  color: #0098d4;
  font-family: "Caveat", cursive;
  font-weight: 600;
  font-size: 3.69rem;
  padding: 1rem 0;
`;

export const DataHeading = styled.div`
  font-weight: 600;
  font-size: 1.8rem;
  text-transform: capitalize;
  padding: 1rem 2rem;
  color: #0098d4;
`;

export const ActionHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;
  text-align: center;

  font-weight: 800;
  font-size: 2rem;

  background-color: rgba(0, 152, 212, 0.25);
  border: 2px solid #0098d4;
  border-radius: 15%;

  &:not(:last-child) {
    margin-right: 0.5rem;
  }

  transition: 0.2s;
  &:hover {
    background-color: #0098d4;
    color: #fff;
  }
`;

export const Id = styled.div``;

export const Body = styled.div`
  display: flex;
`;

export const Section = styled.div``;

export const SectionData = styled.div`
  display: flex;
`;
export const SectionAction = styled.div`
  display: flex;
`;

export const EmployeesData = styled.div``;

export const Employee = styled.div`
  display: flex;
`;
