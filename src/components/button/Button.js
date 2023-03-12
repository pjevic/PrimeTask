import { ButtonStyled } from "./Style";

const Button = ({ children }) => {
  return (
    <>
      <ButtonStyled>{children}</ButtonStyled>
    </>
  );
};

export default Button;
