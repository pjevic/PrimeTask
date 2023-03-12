import React from "react";

import SignIn from "../../components/sign-in-form/SignIn";
import SignUp from "../../components/sign-up-form/SiginUp";

function Welcome() {
  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Welcome;
