import React from "react";

import { Container, Input, Label } from "./Style";

function FormInput({ label, ...otherProps }) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input {...otherProps} />
    </Container>
  );
}

export default FormInput;
