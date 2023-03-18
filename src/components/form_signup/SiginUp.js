import { useState } from "react";

// import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

// import FormInput from "../form_input/FormInput";

// const defaultFormFields = {
//   displayName: "",
//   email: "",
//   password: "",
//   confirmedPassword: "",
// };

const SignUp = () => {
  // const [formFilds, setFormFilds] = useState(defaultFormFields);
  // const { displayName, email, password, confirmedPassword } = formFilds;

  // // console.log(formFilds);

  // const resetFormFields = () => {
  //   setFormFilds(defaultFormFields);
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   if (password !== confirmedPassword) {
  //     alert("Paswords do not match. Please, try again.");
  //     return;
  //   }

  //   try {
  //     const { user } = await createAuthUserWithEmailAndPassword(email, password);
  //     await createUserDocumentFromAuth(user, { displayName });
  //     resetFormFields();
  //     // console.log(user);
  //   } catch (error) {
  //     if (error.code === "auth/email-already-in-use") {
  //       alert("Cannot create user, email already in use.");
  //     } else {
  //       console.log("User creation encountered an error", error.message);
  //     }
  //   }
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormFilds({ ...formFilds, [name]: value });
  // };

  return (
    <div>
      <h2>Sign Up</h2>
      {/* <form onSubmit={handleSubmit}>
        <FormInput required onChange={handleInputChange} type="text" label="full name" name="displayName" value={displayName} />
        <FormInput required onChange={handleInputChange} type="email" label="email" name="email" value={email} />
        <FormInput required onChange={handleInputChange} type="password" label="password" name="password" value={password} />
        <FormInput
          required
          onChange={handleInputChange}
          type="password"
          label="confirm password"
          name="confirmedPassword"
          value={confirmedPassword}
        />
        <button type="submit">sign up</button>
      </form> */}
    </div>
  );
};

export default SignUp;
