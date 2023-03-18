import { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";

import { db } from "../../utils/firebase";

import { UserContext } from "../../context/user.context";
// import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/.firebase";
// import { detectAuthState } from "../../utils/firebase/firebase";

// import FormInput from "../form_input/FormInput";

// import { detectAuthhState, readSingleDocument } from "../../../firebase";

// const defaultFormFields = {
//   email: "",
//   password: "",
// };

const SignIn = () => {
  // const [formFilds, setFormFilds] = useState(defaultFormFields);
  // const { email, password } = formFilds;

  // const { setCurrentUser } = useContext(UserContext);

  // const resetFormFields = () => {
  //   setFormFilds(defaultFormFields);
  // };

  // const signInWithGoogle = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   await createUserDocumentFromAuth(user);
  //   setCurrentUser(user);
  // };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { user } = await signInAuthUserWithEmailAndPassword(email, password);
  //     console.log(user);
  //     setCurrentUser(user);
  //     resetFormFields();
  //   } catch (error) {
  //     switch (error.code) {
  //       case "auth/wrong-password":
  //         alert("incorrect password for the email");
  //         break;
  //       case "auth/user-not-found":
  //         alert("no user associeted with this email");
  //         break;
  //       default:
  //         console.log(error);
  //     }
  //   }
  // };

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormFilds({ ...formFilds, [name]: value });
  // };

  return (
    <div>
      <h2>Sign In </h2>
      {/* <form onSubmit={handleFormSubmit}>
        <FormInput required onChange={handleInputChange} type="email" label="email" name="email" value={email} />
        <FormInput required onChange={handleInputChange} type="password" label="password" name="password" value={password} />
        <button type="submit">sign in</button>
        <button type="button" onClick={signInWithGoogle}>
          Google Sign In
        </button>
      </form> */}
    </div>
  );
};

export default SignIn;
