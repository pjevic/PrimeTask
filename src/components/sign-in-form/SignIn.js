import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Card</h1>
      <button onClick={logGoogleUser}>Signin with Google Popup</button>
    </div>
  );
};

export default SignIn;