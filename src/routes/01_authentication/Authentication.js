import { useContext } from "react";

import { UserContext } from "../../context/user.context";

import SignIn from "../../components/form_signin/SignIn";
import SignUp from "../../components/form_signup/SiginUp";

import { Container, SubContainer } from "./Style";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Container>
      <SubContainer>{!currentUser && <SignIn />}</SubContainer>
      {/* <SubContainer>
        <SignUp />
      </SubContainer> */}
    </Container>
  );
};

export default Authentication;
