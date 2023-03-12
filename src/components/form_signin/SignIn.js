import { useState } from "react";

import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase";

import FormInput from "../form_input/FormInput";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFilds, setFormFilds] = useState(defaultFormFields);
  const { email, password } = formFilds;

  const resetFormFields = () => {
    setFormFilds(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      // console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for the email");
          break;
        case "auth/user-not-found":
          alert("no user associeted with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFilds({ ...formFilds, [name]: value });
  };

  return (
    <div>
      <h2>Sign In </h2>
      <form onSubmit={handleFormSubmit}>
        <FormInput required onChange={handleInputChange} type="email" label="email" name="email" value={email} />
        <FormInput required onChange={handleInputChange} type="password" label="password" name="password" value={password} />
        <button type="submit">sign in</button>
        {/* <button type="button" onClick={signInWithGoogle}>
          Google Sign In
        </button> */}
      </form>
    </div>
  );
};

export default SignIn;
