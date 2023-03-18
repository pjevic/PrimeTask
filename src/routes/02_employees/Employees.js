import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

import Table from "../../components/ui/table/Table";

import { db } from "../../utils/firebase";

import {
  MainContainer,
  Header,
  Subheader,
  Heading,
  Buttons,
  Id,
  Body,
  Section,
  SectionData,
  SectionAction,
  DataHeading,
  ActionHeading,
  EmployeesData,
  Employee,
} from "./Style";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const employeesCollectionRef = collection(db, "employees");

  useEffect(() => {
    const getEmployees = async () => {
      const employeesData = await getDocs(employeesCollectionRef);
      console.log(employeesData.docs);
      setEmployees(employeesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getEmployees();
  }, []);
  return (
    <div>
      <MainContainer>
        <Header>
          <Buttons></Buttons>
          <Heading>Employees</Heading>
          <Id></Id>
        </Header>

        <Subheader></Subheader>

        <Body>
          <Section>
            <Subheader>
              <SectionData>
                <DataHeading>No.</DataHeading>
                <DataHeading>first name</DataHeading>
                <DataHeading>last name</DataHeading>
              </SectionData>

              <SectionAction>
                <ActionHeading>e</ActionHeading>
                <ActionHeading>c</ActionHeading>
                <ActionHeading>t</ActionHeading>
                <ActionHeading>+</ActionHeading>
                <ActionHeading>i</ActionHeading>
              </SectionAction>
            </Subheader>
            <EmployeesData>
              {employees.map((employee) => (
                <Employee key={employee.id}>
                  <div>num</div>
                  <div>{employee.firstName}</div>
                  <div>{employee.lastName}</div>
                </Employee>
              ))}
            </EmployeesData>
          </Section>
          <Section>info</Section>
        </Body>
      </MainContainer>
    </div>
  );
}

export default Employees;
