import { useContext } from "react";

import { UserContext } from "../../context/user.context";

import Button from "../../components/button/Button";
import FormInput from "../../components/form_input/FormInput";

import { Container, Heading, Title, Body, InputRow, PhotoContainer, SubmitButton } from "./Style";

function Employees() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      <Heading>
        <div>
          <Button>new</Button>
          <Button>reset</Button>
          <Button>del</Button>
        </div>
        <Title>Employees</Title>
        <div>ID: vzghndkksd</div>
      </Heading>

      {currentUser ? (
        <>
          <Body>
            <div>
              <InputRow onSubmit={handleFormSubmit}>
                <FormInput label="first name" type="text" />
                <FormInput label="last name" type="text" />
                <FormInput label="monthly salary" type="number" />
              </InputRow>

              <InputRow>
                <FormInput label="date of birth" type="date" />
                <FormInput label="email" type="email" />
                <Button type="button">email</Button>
              </InputRow>

              <InputRow>
                <FormInput label="country of residence" type="text" />
                <FormInput label="country code" type="text" />
                <FormInput label="phone number" type="number" />
                <Button>call</Button>
              </InputRow>
            </div>

            <PhotoContainer>photo</PhotoContainer>
          </Body>

          <SubmitButton type="submit">save</SubmitButton>
        </>
      ) : null}
    </Container>
  );
}

export default Employees;
