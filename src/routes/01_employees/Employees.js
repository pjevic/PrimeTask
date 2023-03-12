import Button from "../../components/button/Button";
import FormInput from "../../components/form_input/FormInput";

import { Container, Table, Title, Body, DataRow, InputRow } from "./Style";

function Employees() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Table>
        <Title>Employees</Title>
        <Body>
          <InputRow onSubmit={handleFormSubmit}>
            <FormInput label="full name" type="text" />
            <FormInput label="email" type="email" />
            <FormInput label="phone number" type="tel" />
            <FormInput label="date of birth" type="date" />
            <FormInput label="monthly salary" type="number" />
            <Button type="submit">add</Button>
          </InputRow>
          <DataRow></DataRow>
        </Body>
      </Table>
    </Container>
  );
}

export default Employees;
