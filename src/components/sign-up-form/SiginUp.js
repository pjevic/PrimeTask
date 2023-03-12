import { useState } from "react";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmedPassword: "",
};

const SignUp = () => {
  const [formFilds, setFormFilds] = useState(defaultFormFields);
  const { displayName, email, password, confirmedPassword } = formFilds;

  // console.log(formFilds);

  const resetFormFields = () => {
    setFormFilds(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmedPassword) {
      alert("Paswords do not match. Please, try again.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      // console.log(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use.");
      } else {
        console.log("User creation encountered an error", error.message);
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormFilds({ ...formFilds, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>full name</label>
        <input required type="text" onChange={handleInputChange} name="displayName" value={displayName}></input>

        <label>email</label>
        <input required type="email" onChange={handleInputChange} name="email" value={email}></input>

        <label>password</label>
        <input required type="password" onChange={handleInputChange} name="password" value={password}></input>

        <label>confirm password</label>
        <input required type="password" onChange={handleInputChange} name="confirmedPassword" value={confirmedPassword}></input>

        <button type="submit">sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
