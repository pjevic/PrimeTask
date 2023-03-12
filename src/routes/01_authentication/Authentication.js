import SignIn from "../../components/form_signin/SignIn";
import SignUp from "../../components/form_signup/SiginUp";

import { Container, SubContainer } from "./Style";

const Authentication = () => {
  return (
    <Container>
      <SubContainer>
        <SignIn />
      </SubContainer>
      <SubContainer>
        <SignUp />
      </SubContainer>
    </Container>
  );
};

export default Authentication;
