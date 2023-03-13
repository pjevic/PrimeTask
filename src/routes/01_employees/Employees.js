import { useContext } from "react";

import { UserContext } from "../../context/user.context";

import Button from "../../components/button/Button";
import FormInput from "../../components/form_input/FormInput";

import {
  Container,
  Table,
  Title,
  Body,
  DataRow,
  InputRow,
  EmpID,
  EmpFirstName,
  EmpLastName,
  EmpEmail,
  EmpCountryCode,
  EmpPhoneNumber,
} from "./Style";

function Employees() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      <Table>
        <Title>Employees</Title>

        {!currentUser ? (
          <Body>
            <InputRow onSubmit={handleFormSubmit}>
              <FormInput label="full name" type="text" />
              <FormInput label="email" type="email" />
              <FormInput label="phone number" type="number" />
              <FormInput label="date of birth" type="date" />
              <FormInput label="monthly salary" type="number" />
              <Button type="submit">add</Button>
              <Button type="button">edit</Button>
              <Button type="button">del</Button>
            </InputRow>
            <DataRow>
              <EmpID>NeekiID</EmpID>
              <div>
                <EmpFirstName>Milan</EmpFirstName>
                <EmpLastName>Pjevic</EmpLastName>
              </div>
              <EmpEmail>milan@prime.intern.com</EmpEmail>
              <div>
                <EmpCountryCode>+381</EmpCountryCode>
                <EmpPhoneNumber>613107611</EmpPhoneNumber>
              </div>
            </DataRow>
          </Body>
        ) : null}
      </Table>
    </Container>
  );
}

export default Employees;
